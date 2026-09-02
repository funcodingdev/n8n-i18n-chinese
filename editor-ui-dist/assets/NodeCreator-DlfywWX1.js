import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, O as createSlots, Pt as reactive, S as computed, St as withMemo, T as createCommentVNode, U as mergeProps, X as onMounted, Z as onUnmounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, c as useCssModule, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, k as createStaticVNode, n as Transition, ot as resolveDirective, p as vShow, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { i as i18n, s as useI18n } from "./src-95uC3wI4.js";
import { t as useI18n$1 } from "./useI18n-B6I8WRBF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { r as onClickOutside } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as ElTag } from "./tag-BtOB2CGC.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as ActionPill_default } from "./ActionPill-2pTxKMMA.js";
import { t as N8nNotice_default } from "./N8nNotice-7yTs7YRW.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as N8nInfoTip_default } from "./N8nInfoTip-BB_z6D-l.js";
import { t as N8nTag_default } from "./N8nTag-BOt_Vn3b.js";
import { t as PreviewTag_default } from "./PreviewTag-CNFXQpdk.js";
import { t as N8nNodeIcon_default } from "./N8nNodeIcon-85L9TdKh.js";
import { D as injectWorkflowDocumentStore, G as filterAndSearchNodes, Gr as getNewNodePosition, Pr as DEFAULT_NODE_SIZE, U as useActionsGenerator, V as useNodeTypesStore, X as getRootSearchCallouts, Y as getHumanInTheLoopActions, et as isNodePreviewKey, it as removePreviewToken, ot as shouldShowCommunityNodeDetails, q as flattenCreateElements, rt as prepareCommunityNodeDetailsViewStack, ut as transformNodeType, wt as useCredentialsStore, xt as useAiGatewayStore, yt as useInlineAgentsExperiment } from "./workflows.store-QD0eo9S6.js";
import { bi as isCommunityPackageName } from "./src-DAIlllTg.js";
import { t as useSettingsStore } from "./settings.store-BikmCGla.js";
import { t as useBannersStore } from "./banners.store-Cgx9EQ4c.js";
import { t as useUsersStore } from "./users.store-C9pohnYN.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { F as CUSTOM_API_CALL_KEY, L as DRAG_EVENT_DATA_KEY, Nt as CHAT_TRIGGER_NODE_TYPE, St as TRIGGER_NODE_CREATOR_VIEW, Tn as OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE, hn as MESSAGE_AN_AGENT_NODE_TYPE, it as AI_OTHERS_NODE_CREATOR_VIEW, ot as AI_UNCATEGORIZED_CATEGORY, pt as HUMAN_IN_THE_LOOP_CATEGORY, rn as HTTP_REQUEST_NODE_TYPE, rt as AI_EVALUATION, vt as REGULAR_NODE_CREATOR_VIEW, yt as REQUEST_NODE_FORM_URL } from "./constants-DxozP3cY.js";
import { t as DEBOUNCE_TIME } from "./durations-xVQWCRRO.js";
import { n as useDebounce, t as getDebounceTime } from "./useDebounce-BffpVo23.js";
import { E as COMMUNITY_NODES_INSTALLATION_DOCS_URL, n as useUIStore } from "./ui.store-Bnte4owf.js";
import { t as useExternalHooks } from "./useExternalHooks-BlrUXQBD.js";
import { t as useChatPanelStore } from "./chatPanel.store-zx0X58z4.js";
import { n as captureException } from "./exports-kkeZrzev.js";
import { n as useNodeType } from "./usePinnedData--QX718Zl.js";
import { n as getNodeIconSource, t as getNodeIconSize } from "./nodeIcon-BBqyEJm7.js";
import { a as useKeyboardNavigation, c as HitlToolView, d as require_camelCase, l as RegularView, n as useNodeCreatorStore, o as AINodesView, r as useViewStacks, s as AIView, u as TriggerView } from "./canvas.eventBus-BRuynQ7a.js";
import { t as useInstallNode } from "./useInstallNode-D406pSw-.js";
import { i as useQuickConnect, n as useAgentProjectNameResolver, r as useAgentResourcesLocator, t as useAgentScopeProjectId } from "./useAgentScopeProjectId-BaZEX1tq.js";
import { t as useAiGateway } from "./useAiGateway-D2lKBWoG.js";
import { t as NodeIcon_default } from "./NodeIcon-D58U7cBX.js";
import { t as useCalloutHelpers } from "./useCalloutHelpers-K1d8fpHe.js";
import { i as QuickConnectBanner_default, n as CommunityNodeFooter_default, r as useInstalledCommunityPackage, t as CommunityNodeUpdateInfo_default } from "./CommunityNodeUpdateInfo-BG0Me299.js";
import { t as AgentPersonalisationIcon_default } from "./AgentPersonalisationIcon-pIEGqxl1.js";
import { t as useActions } from "./useActions-DyZts4cb.js";
import { t as ContactAdministratorToInstall_default } from "./ContactAdministratorToInstall-RaapBXsb.js";
import { t as verified_default } from "./verified-CBWU3bm0.js";
import { t as shield_alt_default } from "./shield-alt-DK8armLv.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-BvLKOmrY.js";
//#region ../@n8n/design-system/src/components/N8nNodeCreatorNode/NodeCreatorNode.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$9 = ["textContent"];
var _hoisted_2$4 = ["textContent"];
var NodeCreatorNode_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCreatorNode",
	props: {
		active: { type: Boolean },
		isAi: { type: Boolean },
		isTrigger: { type: Boolean },
		description: {},
		tag: {},
		title: {},
		showActionArrow: { type: Boolean },
		isOfficial: { type: Boolean },
		hideNodeIcon: { type: Boolean },
		isNew: { type: Boolean }
	},
	emits: ["tooltipClick"],
	setup(__props) {
		const { t } = useI18n$1();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ class: {
				[_ctx.$style.creatorNode]: true,
				[_ctx.$style.hasAction]: !__props.showActionArrow
			} }, _ctx.$attrs), [
				!__props.hideNodeIcon ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.nodeIcon)
				}, [renderSlot(_ctx.$slots, "icon", {}, void 0, true)], 2)) : createCommentVNode("", true),
				createBaseVNode("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.details) }, [
					createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.name),
						"data-test-id": "node-creator-item-name",
						textContent: toDisplayString(__props.title)
					}, null, 10, _hoisted_1$9),
					__props.tag?.preview ? (openBlock(), createBlock(PreviewTag_default, {
						key: 0,
						size: "small",
						class: normalizeClass(_ctx.$style.previewTag),
						text: __props.tag.text
					}, null, 8, ["class", "text"])) : __props.tag?.pill ? (openBlock(), createBlock(ActionPill_default, {
						key: 1,
						size: "small",
						text: __props.tag.text,
						type: __props.tag.type === "info" || __props.tag.type === "danger" ? __props.tag.type : "default"
					}, null, 8, ["text", "type"])) : __props.tag ? (openBlock(), createBlock(unref(ElTag), {
						key: 2,
						class: normalizeClass(_ctx.$style.tag),
						"disable-transitions": "",
						size: "small",
						round: "",
						type: __props.tag.type ?? "success"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.tag.text), 1)]),
						_: 1
					}, 8, ["class", "type"])) : createCommentVNode("", true),
					__props.isNew ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 3,
						theme: "success"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("nodeCreatorNode.new")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					__props.isTrigger ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 4,
						icon: "bolt-filled",
						size: "xsmall",
						title: unref(t)("nodeCreator.nodeItem.triggerIconTitle"),
						class: normalizeClass(_ctx.$style.triggerIcon)
					}, null, 8, ["title", "class"])) : createCommentVNode("", true),
					renderSlot(_ctx.$slots, "extraDetails", {}, void 0, true)
				], 2), __props.description ? (openBlock(), createElementBlock("p", {
					key: 0,
					"data-test-id": "node-creator-item-description",
					class: normalizeClass(_ctx.$style.description),
					textContent: toDisplayString(__props.description)
				}, null, 10, _hoisted_2$4)) : createCommentVNode("", true)]),
				renderSlot(_ctx.$slots, "dragContent", {}, void 0, true),
				__props.showActionArrow ? (openBlock(), createElementBlock("button", {
					key: 1,
					class: normalizeClass(_ctx.$style.panelIcon)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "arrow-right",
					size: "large"
				})], 2)) : createCommentVNode("", true)
			], 16);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nNodeCreatorNode/NodeCreatorNode.vue?vue&type=style&index=0&lang.module.scss
var creatorNode = "_creatorNode_1guyw_388";
var hasAction = "_hasAction_1guyw_395";
var panelIcon = "_panelIcon_1guyw_399";
var previewTag = "_previewTag_1guyw_403";
var tag = "_tag_1guyw_407";
var tooltipIcon$1 = "_tooltipIcon_1guyw_430";
var details = "_details_1guyw_436";
var nodeIcon$5 = "_nodeIcon_1guyw_442";
var name$1 = "_name_1guyw_447";
var description$1 = "_description_1guyw_453";
var aiIcon = "_aiIcon_1guyw_461";
var triggerIcon$1 = "_triggerIcon_1guyw_465";
var shimmer$24 = "_shimmer_1guyw_1";
var spin$24 = "_spin_1guyw_1";
var opacityPulse$24 = "_opacityPulse_1guyw_1";
var popoverIn$24 = "_popoverIn_1guyw_1";
var fadeIn$24 = "_fadeIn_1guyw_1";
var collapsibleSlideDown$24 = "_collapsibleSlideDown_1guyw_1";
var collapsibleSlideUp$24 = "_collapsibleSlideUp_1guyw_1";
var collapsibleSlideDownBlurred$24 = "_collapsibleSlideDownBlurred_1guyw_1";
var collapsibleSlideUpBlurred$24 = "_collapsibleSlideUpBlurred_1guyw_1";
var blurSwapIn$24 = "_blurSwapIn_1guyw_1";
var blurSwapOut$24 = "_blurSwapOut_1guyw_1";
var pulseGlow$24 = "_pulseGlow_1guyw_1";
var pulseGlowDelayed$24 = "_pulseGlowDelayed_1guyw_1";
var fade$24 = "_fade_1guyw_1";
var fadeInUp$24 = "_fadeInUp_1guyw_1";
var fadeInDown$24 = "_fadeInDown_1guyw_1";
var fadeInLeft$24 = "_fadeInLeft_1guyw_1";
var fadeInRight$24 = "_fadeInRight_1guyw_1";
var fadeOut$24 = "_fadeOut_1guyw_1";
var fadeOutDown$24 = "_fadeOutDown_1guyw_1";
var fadeOutUp$24 = "_fadeOutUp_1guyw_1";
var fadeOutLeft$24 = "_fadeOutLeft_1guyw_1";
var fadeOutRight$24 = "_fadeOutRight_1guyw_1";
var ping$24 = "_ping_1guyw_1";
var blinkBackground$24 = "_blinkBackground_1guyw_1";
var typingBlink$24 = "_typingBlink_1guyw_1";
var NodeCreatorNode_vue_vue_type_style_index_0_lang_module_default = {
	creatorNode,
	hasAction,
	panelIcon,
	previewTag,
	tag,
	tooltipIcon: tooltipIcon$1,
	details,
	nodeIcon: nodeIcon$5,
	name: name$1,
	description: description$1,
	aiIcon,
	triggerIcon: triggerIcon$1,
	shimmer: shimmer$24,
	spin: spin$24,
	"skeleton-pulse": "_skeleton-pulse_1guyw_1",
	opacityPulse: opacityPulse$24,
	popoverIn: popoverIn$24,
	fadeIn: fadeIn$24,
	collapsibleSlideDown: collapsibleSlideDown$24,
	collapsibleSlideUp: collapsibleSlideUp$24,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$24,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$24,
	blurSwapIn: blurSwapIn$24,
	blurSwapOut: blurSwapOut$24,
	pulseGlow: pulseGlow$24,
	pulseGlowDelayed: pulseGlowDelayed$24,
	fade: fade$24,
	fadeInUp: fadeInUp$24,
	fadeInDown: fadeInDown$24,
	fadeInLeft: fadeInLeft$24,
	fadeInRight: fadeInRight$24,
	fadeOut: fadeOut$24,
	fadeOutDown: fadeOutDown$24,
	fadeOutUp: fadeOutUp$24,
	fadeOutLeft: fadeOutLeft$24,
	fadeOutRight: fadeOutRight$24,
	ping: ping$24,
	blinkBackground: blinkBackground$24,
	typingBlink: typingBlink$24
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nNodeCreatorNode/index.ts
var N8nNodeCreatorNode_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeCreatorNode_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreatorNode_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-5f71f117"]]);
//#endregion
//#region src/app/components/transitions/SlideTransition.vue
var _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
	return openBlock(), createBlock(Transition, { name: "slide" }, {
		default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
		_: 3
	});
}
var SlideTransition_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-ffd9b1ff"]]);
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/NodeItem.vue?vue&type=script&setup=true&lang.ts
var NodeItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeItem",
	props: {
		nodeType: {},
		subcategory: { default: void 0 },
		active: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const { actions } = useNodeCreatorStore();
		const { getAddedNodesAndConnections } = useActions();
		const { activeViewStack } = useViewStacks();
		const { isSubNodeType } = useNodeType({ nodeType: props.nodeType });
		const nodeTypesStore = useNodeTypesStore();
		const dragging = ref(false);
		const draggablePosition = ref({
			x: -100,
			y: -100
		});
		const draggableDataTransfer = ref(null);
		const description = computed(() => {
			if (isCommunityNodePreview.value || isCommunityNode.value) return props.nodeType.description;
			if (isSendAndWaitCategory.value) return "";
			if (props.subcategory === "*" && !props.nodeType.name.startsWith("n8n-creds-base") && !activeViewStack.search) return "";
			return i18n.headerText({
				key: `headers.${shortNodeType.value}.description`,
				fallback: props.nodeType.description
			});
		});
		const showActionArrow = computed(() => {
			if (shouldShowCommunityNodeDetails(isCommunityNode.value, activeViewStack)) return true;
			if (opensAgentSubPanel.value) return true;
			return hasActions.value && !isSendAndWaitCategory.value;
		});
		const opensAgentSubPanel = computed(() => props.nodeType.name === MESSAGE_AN_AGENT_NODE_TYPE);
		const isSendAndWaitCategory = computed(() => activeViewStack.subcategory === "Human in the Loop" || activeViewStack.rootView === "HITL");
		const dataTestId = computed(() => hasActions.value ? "node-creator-action-item" : "node-creator-node-item");
		const hasActions = computed(() => {
			return nodeActions.value.length > 1 && !activeViewStack.hideActions;
		});
		const nodeActions = computed(() => {
			return actions[props.nodeType.name] || [];
		});
		const nodeListIconSize = computed(() => {
			const icon = props.nodeType.icon;
			return getNodeIconSize("nodeList", typeof icon === "string" ? icon : void 0);
		});
		const shortNodeType = computed(() => i18n.shortNodeType(props.nodeType.name) || "");
		const draggableStyle = computed(() => ({
			top: `${draggablePosition.value.y}px`,
			left: `${draggablePosition.value.x}px`
		}));
		const isCommunityNode = computed(() => isCommunityPackageName(props.nodeType.name));
		const isCommunityNodePreview = computed(() => isNodePreviewKey(props.nodeType.name));
		const displayName = computed(() => {
			const trimmedDisplayName = props.nodeType.displayName.trimEnd();
			return i18n.headerText({
				key: `headers.${shortNodeType.value}.displayName`,
				fallback: hasActions.value ? trimmedDisplayName.replace("Trigger", "") : trimmedDisplayName
			});
		});
		const isTrigger = computed(() => {
			return props.nodeType.group.includes("trigger") && !hasActions.value;
		});
		const communityNodeType = computed(() => {
			return nodeTypesStore.communityNodeType(removePreviewToken(props.nodeType.name));
		});
		const isOfficial = computed(() => {
			return communityNodeType.value?.isOfficialNode ?? false;
		});
		const author = computed(() => {
			return communityNodeType.value?.displayName ?? displayName.value;
		});
		const tag = computed(() => {
			if (props.nodeType.tag) return props.nodeType.tag;
			if (description.value.toLowerCase().includes("deprecated")) return {
				text: i18n.baseText("nodeCreator.nodeItem.deprecated"),
				type: "info"
			};
		});
		const showNewBadge = computed(() => Boolean(props.nodeType.isNew && activeViewStack.search));
		function onDragStart(event) {
			if (event.dataTransfer) {
				event.dataTransfer.effectAllowed = "copy";
				event.dataTransfer.dropEffect = "copy";
				event.dataTransfer.setDragImage(draggableDataTransfer.value, 0, 0);
				event.dataTransfer.setData(DRAG_EVENT_DATA_KEY, JSON.stringify(getAddedNodesAndConnections([{ type: props.nodeType.name }])));
			}
			dragging.value = true;
		}
		function onDragEnd() {
			dragging.value = false;
			setTimeout(() => {
				draggablePosition.value = {
					x: -100,
					y: -100
				};
			}, 300);
		}
		function onCommunityNodeTooltipClick(event) {
			if (event.target.localName === "a") telemetry.track("user clicked cnr docs link", { source: "nodes panel node" });
		}
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				draggable: !showActionArrow.value,
				class: normalizeClass(_ctx.$style.nodeItem),
				description: description.value,
				title: displayName.value,
				"show-action-arrow": showActionArrow.value,
				"is-trigger": isTrigger.value,
				"is-official": isOfficial.value,
				"data-test-id": dataTestId.value,
				tag: tag.value,
				"is-new": showNewBadge.value,
				onDragstart: onDragStart,
				onDragend: onDragEnd
			}, createSlots({
				icon: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconWrapper) }, [unref(isSubNodeType) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.subNodeBackground)
				}, null, 2)) : createCommentVNode("", true), createVNode(NodeIcon_default, {
					class: normalizeClass(_ctx.$style.nodeIcon),
					"node-type": __props.nodeType,
					size: nodeListIconSize.value,
					"color-default": "var(--color--foreground--shade-2)"
				}, null, 8, [
					"class",
					"node-type",
					"size"
				])], 2)]),
				dragContent: withCtx(() => [withDirectives(createBaseVNode("div", {
					ref_key: "draggableDataTransfer",
					ref: draggableDataTransfer,
					class: normalizeClass(_ctx.$style.draggable),
					style: normalizeStyle(draggableStyle.value)
				}, [createVNode(NodeIcon_default, {
					"node-type": __props.nodeType,
					size: 40,
					shrink: false,
					"color-default": "var(--color--foreground--shade-2)",
					onClickCapture: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, null, 8, ["node-type"])], 6), [[vShow, dragging.value]])]),
				_: 2
			}, [isOfficial.value ? {
				name: "extraDetails",
				fn: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					placement: "top",
					"show-after": 500
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.officialNode.tooltip", { interpolate: { author: author.value } })), 1)]),
					default: withCtx(() => [createVNode(unref(verified_default), { class: normalizeClass([_ctx.$style.icon, _ctx.$style.official]) }, null, 8, ["class"])]),
					_: 1
				})]),
				key: "0"
			} : isCommunityNode.value && !isCommunityNodePreview.value && !unref(activeViewStack)?.communityNodeDetails ? {
				name: "extraDetails",
				fn: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					placement: "top",
					"show-after": 500
				}, {
					content: withCtx(() => [withDirectives(createBaseVNode("p", {
						class: normalizeClass(_ctx.$style.communityNodeIcon),
						onClick: onCommunityNodeTooltipClick
					}, null, 2), [[_directive_n8n_html, unref(i18n).baseText("generic.communityNode.tooltip", { interpolate: {
						packageName: __props.nodeType.name.split(".")[0],
						docURL: unref(COMMUNITY_NODES_INSTALLATION_DOCS_URL)
					} })]])]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						size: "small",
						class: normalizeClass(_ctx.$style.icon),
						icon: "box"
					}, null, 8, ["class"])]),
					_: 1
				})]),
				key: "1"
			} : void 0]), 1032, [
				"draggable",
				"class",
				"description",
				"title",
				"show-action-arrow",
				"is-trigger",
				"is-official",
				"data-test-id",
				"tag",
				"is-new"
			]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/NodeItem.vue?vue&type=style&index=0&lang.module.scss
var nodeItem = "_nodeItem_pe4c9_388";
var iconWrapper = "_iconWrapper_pe4c9_396";
var nodeIcon$4 = "_nodeIcon_pe4c9_403";
var subNodeBackground = "_subNodeBackground_pe4c9_407";
var communityNodeIcon = "_communityNodeIcon_pe4c9_419";
var draggable$1 = "_draggable_pe4c9_423";
var draggableDataTransfer$1 = "_draggableDataTransfer_pe4c9_437";
var icon$1 = "_icon_pe4c9_396";
var official = "_official_pe4c9_447";
var shimmer$23 = "_shimmer_pe4c9_1";
var spin$23 = "_spin_pe4c9_1";
var opacityPulse$23 = "_opacityPulse_pe4c9_1";
var popoverIn$23 = "_popoverIn_pe4c9_1";
var fadeIn$23 = "_fadeIn_pe4c9_1";
var collapsibleSlideDown$23 = "_collapsibleSlideDown_pe4c9_1";
var collapsibleSlideUp$23 = "_collapsibleSlideUp_pe4c9_1";
var collapsibleSlideDownBlurred$23 = "_collapsibleSlideDownBlurred_pe4c9_1";
var collapsibleSlideUpBlurred$23 = "_collapsibleSlideUpBlurred_pe4c9_1";
var blurSwapIn$23 = "_blurSwapIn_pe4c9_1";
var blurSwapOut$23 = "_blurSwapOut_pe4c9_1";
var pulseGlow$23 = "_pulseGlow_pe4c9_1";
var pulseGlowDelayed$23 = "_pulseGlowDelayed_pe4c9_1";
var fade$23 = "_fade_pe4c9_1";
var fadeInUp$23 = "_fadeInUp_pe4c9_1";
var fadeInDown$23 = "_fadeInDown_pe4c9_1";
var fadeInLeft$23 = "_fadeInLeft_pe4c9_1";
var fadeInRight$23 = "_fadeInRight_pe4c9_1";
var fadeOut$23 = "_fadeOut_pe4c9_1";
var fadeOutDown$23 = "_fadeOutDown_pe4c9_1";
var fadeOutUp$23 = "_fadeOutUp_pe4c9_1";
var fadeOutLeft$23 = "_fadeOutLeft_pe4c9_1";
var fadeOutRight$23 = "_fadeOutRight_pe4c9_1";
var ping$23 = "_ping_pe4c9_1";
var blinkBackground$23 = "_blinkBackground_pe4c9_1";
var typingBlink$23 = "_typingBlink_pe4c9_1";
var NodeItem_vue_vue_type_style_index_0_lang_module_default = {
	nodeItem,
	iconWrapper,
	nodeIcon: nodeIcon$4,
	subNodeBackground,
	communityNodeIcon,
	draggable: draggable$1,
	draggableDataTransfer: draggableDataTransfer$1,
	icon: icon$1,
	official,
	shimmer: shimmer$23,
	spin: spin$23,
	"skeleton-pulse": "_skeleton-pulse_pe4c9_1",
	opacityPulse: opacityPulse$23,
	popoverIn: popoverIn$23,
	fadeIn: fadeIn$23,
	collapsibleSlideDown: collapsibleSlideDown$23,
	collapsibleSlideUp: collapsibleSlideUp$23,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$23,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$23,
	blurSwapIn: blurSwapIn$23,
	blurSwapOut: blurSwapOut$23,
	pulseGlow: pulseGlow$23,
	pulseGlowDelayed: pulseGlowDelayed$23,
	fade: fade$23,
	fadeInUp: fadeInUp$23,
	fadeInDown: fadeInDown$23,
	fadeInLeft: fadeInLeft$23,
	fadeInRight: fadeInRight$23,
	fadeOut: fadeOut$23,
	fadeOutDown: fadeOutDown$23,
	fadeOutUp: fadeOutUp$23,
	fadeOutLeft: fadeOutLeft$23,
	fadeOutRight: fadeOutRight$23,
	ping: ping$23,
	blinkBackground: blinkBackground$23,
	typingBlink: typingBlink$23
};
var NodeItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/SubcategoryItem.vue?vue&type=script&setup=true&lang.ts
var import_camelCase = /* @__PURE__ */ __toESM(require_camelCase(), 1);
var SubcategoryItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SubcategoryItem",
	props: { item: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const subcategoryName = computed(() => (0, import_camelCase.default)(props.item.subcategory || props.item.title));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				class: normalizeClass(_ctx.$style.subCategory),
				title: unref(i18n).baseText(`nodeCreator.subcategoryNames.${subcategoryName.value}`),
				"is-trigger": false,
				description: unref(i18n).baseText(`nodeCreator.subcategoryDescriptions.${subcategoryName.value}`),
				"show-action-arrow": true,
				"is-new": __props.item.new
			}, {
				icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), mergeProps({
					type: "icon",
					name: __props.item.icon,
					circle: false,
					"show-tooltip": false
				}, __props.item.iconProps), null, 16, ["name"])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"description",
				"is-new"
			]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/SubcategoryItem.vue?vue&type=style&index=0&lang.module.scss
var subCategory = "_subCategory_17c6i_388";
var shimmer$22 = "_shimmer_17c6i_1";
var spin$22 = "_spin_17c6i_1";
var opacityPulse$22 = "_opacityPulse_17c6i_1";
var popoverIn$22 = "_popoverIn_17c6i_1";
var fadeIn$22 = "_fadeIn_17c6i_1";
var collapsibleSlideDown$22 = "_collapsibleSlideDown_17c6i_1";
var collapsibleSlideUp$22 = "_collapsibleSlideUp_17c6i_1";
var collapsibleSlideDownBlurred$22 = "_collapsibleSlideDownBlurred_17c6i_1";
var collapsibleSlideUpBlurred$22 = "_collapsibleSlideUpBlurred_17c6i_1";
var blurSwapIn$22 = "_blurSwapIn_17c6i_1";
var blurSwapOut$22 = "_blurSwapOut_17c6i_1";
var pulseGlow$22 = "_pulseGlow_17c6i_1";
var pulseGlowDelayed$22 = "_pulseGlowDelayed_17c6i_1";
var fade$22 = "_fade_17c6i_1";
var fadeInUp$22 = "_fadeInUp_17c6i_1";
var fadeInDown$22 = "_fadeInDown_17c6i_1";
var fadeInLeft$22 = "_fadeInLeft_17c6i_1";
var fadeInRight$22 = "_fadeInRight_17c6i_1";
var fadeOut$22 = "_fadeOut_17c6i_1";
var fadeOutDown$22 = "_fadeOutDown_17c6i_1";
var fadeOutUp$22 = "_fadeOutUp_17c6i_1";
var fadeOutLeft$22 = "_fadeOutLeft_17c6i_1";
var fadeOutRight$22 = "_fadeOutRight_17c6i_1";
var ping$22 = "_ping_17c6i_1";
var blinkBackground$22 = "_blinkBackground_17c6i_1";
var typingBlink$22 = "_typingBlink_17c6i_1";
var SubcategoryItem_vue_vue_type_style_index_0_lang_module_default = {
	subCategory,
	shimmer: shimmer$22,
	spin: spin$22,
	"skeleton-pulse": "_skeleton-pulse_17c6i_1",
	opacityPulse: opacityPulse$22,
	popoverIn: popoverIn$22,
	fadeIn: fadeIn$22,
	collapsibleSlideDown: collapsibleSlideDown$22,
	collapsibleSlideUp: collapsibleSlideUp$22,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$22,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$22,
	blurSwapIn: blurSwapIn$22,
	blurSwapOut: blurSwapOut$22,
	pulseGlow: pulseGlow$22,
	pulseGlowDelayed: pulseGlowDelayed$22,
	fade: fade$22,
	fadeInUp: fadeInUp$22,
	fadeInDown: fadeInDown$22,
	fadeInLeft: fadeInLeft$22,
	fadeInRight: fadeInRight$22,
	fadeOut: fadeOut$22,
	fadeOutDown: fadeOutDown$22,
	fadeOutUp: fadeOutUp$22,
	fadeOutLeft: fadeOutLeft$22,
	fadeOutRight: fadeOutRight$22,
	ping: ping$22,
	blinkBackground: blinkBackground$22,
	typingBlink: typingBlink$22
};
var SubcategoryItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SubcategoryItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SubcategoryItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/LabelItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$8 = ["textContent"];
var LabelItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LabelItem",
	props: { item: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.label) }, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.name),
				textContent: toDisplayString(__props.item.key)
			}, null, 10, _hoisted_1$8)], 2);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/LabelItem.vue?vue&type=style&index=0&lang.module.scss
var label$1 = "_label_1o6vi_388";
var shimmer$21 = "_shimmer_1o6vi_1";
var spin$21 = "_spin_1o6vi_1";
var opacityPulse$21 = "_opacityPulse_1o6vi_1";
var popoverIn$21 = "_popoverIn_1o6vi_1";
var fadeIn$21 = "_fadeIn_1o6vi_1";
var collapsibleSlideDown$21 = "_collapsibleSlideDown_1o6vi_1";
var collapsibleSlideUp$21 = "_collapsibleSlideUp_1o6vi_1";
var collapsibleSlideDownBlurred$21 = "_collapsibleSlideDownBlurred_1o6vi_1";
var collapsibleSlideUpBlurred$21 = "_collapsibleSlideUpBlurred_1o6vi_1";
var blurSwapIn$21 = "_blurSwapIn_1o6vi_1";
var blurSwapOut$21 = "_blurSwapOut_1o6vi_1";
var pulseGlow$21 = "_pulseGlow_1o6vi_1";
var pulseGlowDelayed$21 = "_pulseGlowDelayed_1o6vi_1";
var fade$21 = "_fade_1o6vi_1";
var fadeInUp$21 = "_fadeInUp_1o6vi_1";
var fadeInDown$21 = "_fadeInDown_1o6vi_1";
var fadeInLeft$21 = "_fadeInLeft_1o6vi_1";
var fadeInRight$21 = "_fadeInRight_1o6vi_1";
var fadeOut$21 = "_fadeOut_1o6vi_1";
var fadeOutDown$21 = "_fadeOutDown_1o6vi_1";
var fadeOutUp$21 = "_fadeOutUp_1o6vi_1";
var fadeOutLeft$21 = "_fadeOutLeft_1o6vi_1";
var fadeOutRight$21 = "_fadeOutRight_1o6vi_1";
var ping$21 = "_ping_1o6vi_1";
var blinkBackground$21 = "_blinkBackground_1o6vi_1";
var typingBlink$21 = "_typingBlink_1o6vi_1";
var LabelItem_vue_vue_type_style_index_0_lang_module_default = {
	label: label$1,
	shimmer: shimmer$21,
	spin: spin$21,
	"skeleton-pulse": "_skeleton-pulse_1o6vi_1",
	opacityPulse: opacityPulse$21,
	popoverIn: popoverIn$21,
	fadeIn: fadeIn$21,
	collapsibleSlideDown: collapsibleSlideDown$21,
	collapsibleSlideUp: collapsibleSlideUp$21,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$21,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$21,
	blurSwapIn: blurSwapIn$21,
	blurSwapOut: blurSwapOut$21,
	pulseGlow: pulseGlow$21,
	pulseGlowDelayed: pulseGlowDelayed$21,
	fade: fade$21,
	fadeInUp: fadeInUp$21,
	fadeInDown: fadeInDown$21,
	fadeInLeft: fadeInLeft$21,
	fadeInRight: fadeInRight$21,
	fadeOut: fadeOut$21,
	fadeOutDown: fadeOutDown$21,
	fadeOutUp: fadeOutUp$21,
	fadeOutLeft: fadeOutLeft$21,
	fadeOutRight: fadeOutRight$21,
	ping: ping$21,
	blinkBackground: blinkBackground$21,
	typingBlink: typingBlink$21
};
var LabelItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(LabelItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LabelItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/ActionItem.vue?vue&type=script&setup=true&lang.ts
var ActionItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ActionItem",
	props: {
		nodeType: {},
		action: {}
	},
	setup(__props) {
		const props = __props;
		const telemetry = useTelemetry();
		const { getActionData, getAddedNodesAndConnections, setAddedNodeActionParameters } = useActions();
		const { activeViewStack } = useViewStacks();
		const state = reactive({
			dragging: false,
			draggablePosition: {
				x: -100,
				y: -100
			},
			storeWatcher: null,
			draggableDataTransfer: null
		});
		const draggableStyle = computed(() => ({
			top: `${state.draggablePosition.y}px`,
			left: `${state.draggablePosition.x}px`
		}));
		const actionData = computed(() => getActionData(props.action));
		const isTriggerAction = (action) => action.name?.toLowerCase().includes("trigger") || action.name === "n8n-nodes-base.webhook";
		function onDragStart(event) {
			/**
			* Workaround for firefox, that doesn't attach the pageX and pageY coordinates to "ondrag" event.
			* All browsers attach the correct page coordinates to the "dragover" event.
			* @bug https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			*/
			document.body.addEventListener("dragover", onDragOver);
			const { pageX: x, pageY: y } = event;
			if (event.dataTransfer && actionData.value.key) {
				event.dataTransfer.effectAllowed = "copy";
				event.dataTransfer.dropEffect = "copy";
				event.dataTransfer.setDragImage(state.draggableDataTransfer, 0, 0);
				event.dataTransfer.setData(DRAG_EVENT_DATA_KEY, JSON.stringify(getAddedNodesAndConnections([{ type: actionData.value.key }])));
				if (telemetry) state.storeWatcher = setAddedNodeActionParameters(actionData.value, telemetry, activeViewStack.rootView);
				document.body.addEventListener("dragend", onDragEnd);
			}
			state.dragging = true;
			state.draggablePosition = {
				x,
				y
			};
		}
		function onDragOver(event) {
			if (!state.dragging || event.pageX === 0 && event.pageY === 0) return;
			const [x, y] = getNewNodePosition([], [event.pageX - DEFAULT_NODE_SIZE[0] / 2, event.pageY - DEFAULT_NODE_SIZE[1] / 2]);
			state.draggablePosition = {
				x,
				y
			};
		}
		function onDragEnd() {
			if (state.storeWatcher) state.storeWatcher();
			document.body.removeEventListener("dragend", onDragEnd);
			document.body.removeEventListener("dragover", onDragOver);
			state.dragging = false;
			setTimeout(() => {
				state.draggablePosition = {
					x: -100,
					y: -100
				};
			}, 300);
		}
		const { draggableDataTransfer, dragging } = toRefs(state);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				draggable: "",
				class: normalizeClass(_ctx.$style.action),
				title: __props.action.displayName,
				"is-trigger": isTriggerAction(__props.action),
				"data-keyboard-nav": "true",
				onDragstart: onDragStart,
				onDragend: onDragEnd
			}, {
				dragContent: withCtx(() => [createBaseVNode("div", {
					ref_key: "draggableDataTransfer",
					ref: draggableDataTransfer,
					class: normalizeClass(_ctx.$style.draggableDataTransfer)
				}, null, 2), withDirectives(createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.draggable),
					style: normalizeStyle(draggableStyle.value)
				}, [createVNode(NodeIcon_default, {
					"node-type": __props.nodeType,
					size: 40,
					shrink: false,
					onClickCapture: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, null, 8, ["node-type"])], 6), [[vShow, unref(dragging)]])]),
				icon: withCtx(() => [createVNode(NodeIcon_default, { "node-type": __props.action }, null, 8, ["node-type"])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"is-trigger"
			]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/ActionItem.vue?vue&type=style&index=0&lang.module.scss
var action$1 = "_action_1uevq_388";
var nodeIcon$3 = "_nodeIcon_1uevq_400";
var draggable = "_draggable_1uevq_404";
var draggableDataTransfer = "_draggableDataTransfer_1uevq_418";
var shimmer$20 = "_shimmer_1uevq_1";
var spin$20 = "_spin_1uevq_1";
var opacityPulse$20 = "_opacityPulse_1uevq_1";
var popoverIn$20 = "_popoverIn_1uevq_1";
var fadeIn$20 = "_fadeIn_1uevq_1";
var collapsibleSlideDown$20 = "_collapsibleSlideDown_1uevq_1";
var collapsibleSlideUp$20 = "_collapsibleSlideUp_1uevq_1";
var collapsibleSlideDownBlurred$20 = "_collapsibleSlideDownBlurred_1uevq_1";
var collapsibleSlideUpBlurred$20 = "_collapsibleSlideUpBlurred_1uevq_1";
var blurSwapIn$20 = "_blurSwapIn_1uevq_1";
var blurSwapOut$20 = "_blurSwapOut_1uevq_1";
var pulseGlow$20 = "_pulseGlow_1uevq_1";
var pulseGlowDelayed$20 = "_pulseGlowDelayed_1uevq_1";
var fade$20 = "_fade_1uevq_1";
var fadeInUp$20 = "_fadeInUp_1uevq_1";
var fadeInDown$20 = "_fadeInDown_1uevq_1";
var fadeInLeft$20 = "_fadeInLeft_1uevq_1";
var fadeInRight$20 = "_fadeInRight_1uevq_1";
var fadeOut$20 = "_fadeOut_1uevq_1";
var fadeOutDown$20 = "_fadeOutDown_1uevq_1";
var fadeOutUp$20 = "_fadeOutUp_1uevq_1";
var fadeOutLeft$20 = "_fadeOutLeft_1uevq_1";
var fadeOutRight$20 = "_fadeOutRight_1uevq_1";
var ping$20 = "_ping_1uevq_1";
var blinkBackground$20 = "_blinkBackground_1uevq_1";
var typingBlink$20 = "_typingBlink_1uevq_1";
var ActionItem_vue_vue_type_style_index_0_lang_module_default = {
	action: action$1,
	nodeIcon: nodeIcon$3,
	draggable,
	draggableDataTransfer,
	shimmer: shimmer$20,
	spin: spin$20,
	"skeleton-pulse": "_skeleton-pulse_1uevq_1",
	opacityPulse: opacityPulse$20,
	popoverIn: popoverIn$20,
	fadeIn: fadeIn$20,
	collapsibleSlideDown: collapsibleSlideDown$20,
	collapsibleSlideUp: collapsibleSlideUp$20,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$20,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$20,
	blurSwapIn: blurSwapIn$20,
	blurSwapOut: blurSwapOut$20,
	pulseGlow: pulseGlow$20,
	pulseGlowDelayed: pulseGlowDelayed$20,
	fade: fade$20,
	fadeInUp: fadeInUp$20,
	fadeInDown: fadeInDown$20,
	fadeInLeft: fadeInLeft$20,
	fadeInRight: fadeInRight$20,
	fadeOut: fadeOut$20,
	fadeOutDown: fadeOutDown$20,
	fadeOutUp: fadeOutUp$20,
	fadeOutLeft: fadeOutLeft$20,
	fadeOutRight: fadeOutRight$20,
	ping: ping$20,
	blinkBackground: blinkBackground$20,
	typingBlink: typingBlink$20
};
var ActionItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ActionItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ActionItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/AgentItem.vue?vue&type=script&setup=true&lang.ts
var AgentItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentItem",
	props: { agent: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				class: normalizeClass(_ctx.$style.agentItem),
				title: __props.agent.name,
				"is-trigger": false,
				description: __props.agent.description,
				"data-test-id": "node-creator-agent-item"
			}, {
				icon: withCtx(() => [__props.agent.variant === "create" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.createIcon)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "plus",
					size: 16
				})], 2)) : (openBlock(), createBlock(AgentPersonalisationIcon_default, {
					key: 1,
					personalisation: __props.agent.personalisation,
					size: 20
				}, null, 8, ["personalisation"]))]),
				_: 1
			}, 8, [
				"class",
				"title",
				"description"
			]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/AgentItem.vue?vue&type=style&index=0&lang.module.scss
var agentItem = "_agentItem_8p1sb_388";
var createIcon = "_createIcon_8p1sb_395";
var shimmer$19 = "_shimmer_8p1sb_1";
var spin$19 = "_spin_8p1sb_1";
var opacityPulse$19 = "_opacityPulse_8p1sb_1";
var popoverIn$19 = "_popoverIn_8p1sb_1";
var fadeIn$19 = "_fadeIn_8p1sb_1";
var collapsibleSlideDown$19 = "_collapsibleSlideDown_8p1sb_1";
var collapsibleSlideUp$19 = "_collapsibleSlideUp_8p1sb_1";
var collapsibleSlideDownBlurred$19 = "_collapsibleSlideDownBlurred_8p1sb_1";
var collapsibleSlideUpBlurred$19 = "_collapsibleSlideUpBlurred_8p1sb_1";
var blurSwapIn$19 = "_blurSwapIn_8p1sb_1";
var blurSwapOut$19 = "_blurSwapOut_8p1sb_1";
var pulseGlow$19 = "_pulseGlow_8p1sb_1";
var pulseGlowDelayed$19 = "_pulseGlowDelayed_8p1sb_1";
var fade$19 = "_fade_8p1sb_1";
var fadeInUp$19 = "_fadeInUp_8p1sb_1";
var fadeInDown$19 = "_fadeInDown_8p1sb_1";
var fadeInLeft$19 = "_fadeInLeft_8p1sb_1";
var fadeInRight$19 = "_fadeInRight_8p1sb_1";
var fadeOut$19 = "_fadeOut_8p1sb_1";
var fadeOutDown$19 = "_fadeOutDown_8p1sb_1";
var fadeOutUp$19 = "_fadeOutUp_8p1sb_1";
var fadeOutLeft$19 = "_fadeOutLeft_8p1sb_1";
var fadeOutRight$19 = "_fadeOutRight_8p1sb_1";
var ping$19 = "_ping_8p1sb_1";
var blinkBackground$19 = "_blinkBackground_8p1sb_1";
var typingBlink$19 = "_typingBlink_8p1sb_1";
var AgentItem_vue_vue_type_style_index_0_lang_module_default = {
	agentItem,
	createIcon,
	shimmer: shimmer$19,
	spin: spin$19,
	"skeleton-pulse": "_skeleton-pulse_8p1sb_1",
	opacityPulse: opacityPulse$19,
	popoverIn: popoverIn$19,
	fadeIn: fadeIn$19,
	collapsibleSlideDown: collapsibleSlideDown$19,
	collapsibleSlideUp: collapsibleSlideUp$19,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$19,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$19,
	blurSwapIn: blurSwapIn$19,
	blurSwapOut: blurSwapOut$19,
	pulseGlow: pulseGlow$19,
	pulseGlowDelayed: pulseGlowDelayed$19,
	fade: fade$19,
	fadeInUp: fadeInUp$19,
	fadeInDown: fadeInDown$19,
	fadeInLeft: fadeInLeft$19,
	fadeInRight: fadeInRight$19,
	fadeOut: fadeOut$19,
	fadeOutDown: fadeOutDown$19,
	fadeOutUp: fadeOutUp$19,
	fadeOutLeft: fadeOutLeft$19,
	fadeOutRight: fadeOutRight$19,
	ping: ping$19,
	blinkBackground: blinkBackground$19,
	typingBlink: typingBlink$19
};
var AgentItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/ViewItem.vue?vue&type=script&setup=true&lang.ts
var ViewItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ViewItem",
	props: { view: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				class: normalizeClass(_ctx.$style.view),
				title: __props.view.title,
				tag: __props.view.tag,
				"is-trigger": false,
				description: __props.view.description,
				"show-action-arrow": true
			}, {
				icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
					type: "icon",
					name: __props.view.icon,
					circle: false,
					"show-tooltip": false
				}, null, 8, ["name"])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"tag",
				"description"
			]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/ViewItem.vue?vue&type=style&index=0&lang.module.scss
var view$1 = "_view_rg3xz_388";
var shimmer$18 = "_shimmer_rg3xz_1";
var spin$18 = "_spin_rg3xz_1";
var opacityPulse$18 = "_opacityPulse_rg3xz_1";
var popoverIn$18 = "_popoverIn_rg3xz_1";
var fadeIn$18 = "_fadeIn_rg3xz_1";
var collapsibleSlideDown$18 = "_collapsibleSlideDown_rg3xz_1";
var collapsibleSlideUp$18 = "_collapsibleSlideUp_rg3xz_1";
var collapsibleSlideDownBlurred$18 = "_collapsibleSlideDownBlurred_rg3xz_1";
var collapsibleSlideUpBlurred$18 = "_collapsibleSlideUpBlurred_rg3xz_1";
var blurSwapIn$18 = "_blurSwapIn_rg3xz_1";
var blurSwapOut$18 = "_blurSwapOut_rg3xz_1";
var pulseGlow$18 = "_pulseGlow_rg3xz_1";
var pulseGlowDelayed$18 = "_pulseGlowDelayed_rg3xz_1";
var fade$18 = "_fade_rg3xz_1";
var fadeInUp$18 = "_fadeInUp_rg3xz_1";
var fadeInDown$18 = "_fadeInDown_rg3xz_1";
var fadeInLeft$18 = "_fadeInLeft_rg3xz_1";
var fadeInRight$18 = "_fadeInRight_rg3xz_1";
var fadeOut$18 = "_fadeOut_rg3xz_1";
var fadeOutDown$18 = "_fadeOutDown_rg3xz_1";
var fadeOutUp$18 = "_fadeOutUp_rg3xz_1";
var fadeOutLeft$18 = "_fadeOutLeft_rg3xz_1";
var fadeOutRight$18 = "_fadeOutRight_rg3xz_1";
var ping$18 = "_ping_rg3xz_1";
var blinkBackground$18 = "_blinkBackground_rg3xz_1";
var typingBlink$18 = "_typingBlink_rg3xz_1";
var ViewItem_vue_vue_type_style_index_0_lang_module_default = {
	view: view$1,
	shimmer: shimmer$18,
	spin: spin$18,
	"skeleton-pulse": "_skeleton-pulse_rg3xz_1",
	opacityPulse: opacityPulse$18,
	popoverIn: popoverIn$18,
	fadeIn: fadeIn$18,
	collapsibleSlideDown: collapsibleSlideDown$18,
	collapsibleSlideUp: collapsibleSlideUp$18,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$18,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$18,
	blurSwapIn: blurSwapIn$18,
	blurSwapOut: blurSwapOut$18,
	pulseGlow: pulseGlow$18,
	pulseGlowDelayed: pulseGlowDelayed$18,
	fade: fade$18,
	fadeInUp: fadeInUp$18,
	fadeInDown: fadeInDown$18,
	fadeInLeft: fadeInLeft$18,
	fadeInRight: fadeInRight$18,
	fadeOut: fadeOut$18,
	fadeOutDown: fadeOutDown$18,
	fadeOutUp: fadeOutUp$18,
	fadeOutLeft: fadeOutLeft$18,
	fadeOutRight: fadeOutRight$18,
	ping: ping$18,
	blinkBackground: blinkBackground$18,
	typingBlink: typingBlink$18
};
var ViewItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ViewItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ViewItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/LinkItem.vue?vue&type=script&setup=true&lang.ts
var LinkItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LinkItem",
	props: { link: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				class: normalizeClass(_ctx.$style.creatorLink),
				title: __props.link.title,
				"is-trigger": false,
				description: __props.link.description,
				tag: __props.link.tag,
				"show-action-arrow": true
			}, {
				icon: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
					type: "icon",
					name: __props.link.icon,
					circle: false,
					"show-tooltip": false
				}, null, 8, ["name"])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"description",
				"tag"
			]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/LinkItem.vue?vue&type=style&index=0&lang.module.scss
var creatorLink = "_creatorLink_bpj7f_388";
var shimmer$17 = "_shimmer_bpj7f_1";
var spin$17 = "_spin_bpj7f_1";
var opacityPulse$17 = "_opacityPulse_bpj7f_1";
var popoverIn$17 = "_popoverIn_bpj7f_1";
var fadeIn$17 = "_fadeIn_bpj7f_1";
var collapsibleSlideDown$17 = "_collapsibleSlideDown_bpj7f_1";
var collapsibleSlideUp$17 = "_collapsibleSlideUp_bpj7f_1";
var collapsibleSlideDownBlurred$17 = "_collapsibleSlideDownBlurred_bpj7f_1";
var collapsibleSlideUpBlurred$17 = "_collapsibleSlideUpBlurred_bpj7f_1";
var blurSwapIn$17 = "_blurSwapIn_bpj7f_1";
var blurSwapOut$17 = "_blurSwapOut_bpj7f_1";
var pulseGlow$17 = "_pulseGlow_bpj7f_1";
var pulseGlowDelayed$17 = "_pulseGlowDelayed_bpj7f_1";
var fade$17 = "_fade_bpj7f_1";
var fadeInUp$17 = "_fadeInUp_bpj7f_1";
var fadeInDown$17 = "_fadeInDown_bpj7f_1";
var fadeInLeft$17 = "_fadeInLeft_bpj7f_1";
var fadeInRight$17 = "_fadeInRight_bpj7f_1";
var fadeOut$17 = "_fadeOut_bpj7f_1";
var fadeOutDown$17 = "_fadeOutDown_bpj7f_1";
var fadeOutUp$17 = "_fadeOutUp_bpj7f_1";
var fadeOutLeft$17 = "_fadeOutLeft_bpj7f_1";
var fadeOutRight$17 = "_fadeOutRight_bpj7f_1";
var ping$17 = "_ping_bpj7f_1";
var blinkBackground$17 = "_blinkBackground_bpj7f_1";
var typingBlink$17 = "_typingBlink_bpj7f_1";
var LinkItem_vue_vue_type_style_index_0_lang_module_default = {
	creatorLink,
	shimmer: shimmer$17,
	spin: spin$17,
	"skeleton-pulse": "_skeleton-pulse_bpj7f_1",
	opacityPulse: opacityPulse$17,
	popoverIn: popoverIn$17,
	fadeIn: fadeIn$17,
	collapsibleSlideDown: collapsibleSlideDown$17,
	collapsibleSlideUp: collapsibleSlideUp$17,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$17,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$17,
	blurSwapIn: blurSwapIn$17,
	blurSwapOut: blurSwapOut$17,
	pulseGlow: pulseGlow$17,
	pulseGlowDelayed: pulseGlowDelayed$17,
	fade: fade$17,
	fadeInUp: fadeInUp$17,
	fadeInDown: fadeInDown$17,
	fadeInLeft: fadeInLeft$17,
	fadeInRight: fadeInRight$17,
	fadeOut: fadeOut$17,
	fadeOutDown: fadeOutDown$17,
	fadeOutUp: fadeOutUp$17,
	fadeOutLeft: fadeOutLeft$17,
	fadeOutRight: fadeOutRight$17,
	ping: ping$17,
	blinkBackground: blinkBackground$17,
	typingBlink: typingBlink$17
};
var LinkItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(LinkItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LinkItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeInstallHint.vue?vue&type=script&setup=true&lang.ts
var CommunityNodeInstallHint_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeInstallHint",
	props: { hint: {} },
	setup(__props) {
		const isAdminOrOwner = computed(() => useUsersStore().isAdminOrOwner);
		return (_ctx, _cache) => {
			return isAdminOrOwner.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.container)
			}, [createVNode(unref(N8nIcon_default), {
				color: "text-light",
				icon: "info",
				size: "large"
			}), createVNode(unref(N8nText_default), {
				color: "text-base",
				size: "medium"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.hint), 1)]),
				_: 1
			})], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeInstallHint.vue?vue&type=style&index=0&lang.module.scss
var container$5 = "_container_10nsv_388";
var shimmer$16 = "_shimmer_10nsv_1";
var spin$16 = "_spin_10nsv_1";
var opacityPulse$16 = "_opacityPulse_10nsv_1";
var popoverIn$16 = "_popoverIn_10nsv_1";
var fadeIn$16 = "_fadeIn_10nsv_1";
var collapsibleSlideDown$16 = "_collapsibleSlideDown_10nsv_1";
var collapsibleSlideUp$16 = "_collapsibleSlideUp_10nsv_1";
var collapsibleSlideDownBlurred$16 = "_collapsibleSlideDownBlurred_10nsv_1";
var collapsibleSlideUpBlurred$16 = "_collapsibleSlideUpBlurred_10nsv_1";
var blurSwapIn$16 = "_blurSwapIn_10nsv_1";
var blurSwapOut$16 = "_blurSwapOut_10nsv_1";
var pulseGlow$16 = "_pulseGlow_10nsv_1";
var pulseGlowDelayed$16 = "_pulseGlowDelayed_10nsv_1";
var fade$16 = "_fade_10nsv_1";
var fadeInUp$16 = "_fadeInUp_10nsv_1";
var fadeInDown$16 = "_fadeInDown_10nsv_1";
var fadeInLeft$16 = "_fadeInLeft_10nsv_1";
var fadeInRight$16 = "_fadeInRight_10nsv_1";
var fadeOut$16 = "_fadeOut_10nsv_1";
var fadeOutDown$16 = "_fadeOutDown_10nsv_1";
var fadeOutUp$16 = "_fadeOutUp_10nsv_1";
var fadeOutLeft$16 = "_fadeOutLeft_10nsv_1";
var fadeOutRight$16 = "_fadeOutRight_10nsv_1";
var ping$16 = "_ping_10nsv_1";
var blinkBackground$16 = "_blinkBackground_10nsv_1";
var typingBlink$16 = "_typingBlink_10nsv_1";
var CommunityNodeInstallHint_vue_vue_type_style_index_0_lang_module_default = {
	container: container$5,
	shimmer: shimmer$16,
	spin: spin$16,
	"skeleton-pulse": "_skeleton-pulse_10nsv_1",
	opacityPulse: opacityPulse$16,
	popoverIn: popoverIn$16,
	fadeIn: fadeIn$16,
	collapsibleSlideDown: collapsibleSlideDown$16,
	collapsibleSlideUp: collapsibleSlideUp$16,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$16,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$16,
	blurSwapIn: blurSwapIn$16,
	blurSwapOut: blurSwapOut$16,
	pulseGlow: pulseGlow$16,
	pulseGlowDelayed: pulseGlowDelayed$16,
	fade: fade$16,
	fadeInUp: fadeInUp$16,
	fadeInDown: fadeInDown$16,
	fadeInLeft: fadeInLeft$16,
	fadeInRight: fadeInRight$16,
	fadeOut: fadeOut$16,
	fadeOutDown: fadeOutDown$16,
	fadeOutUp: fadeOutUp$16,
	fadeOutLeft: fadeOutLeft$16,
	fadeOutRight: fadeOutRight$16,
	ping: ping$16,
	blinkBackground: blinkBackground$16,
	typingBlink: typingBlink$16
};
var CommunityNodeInstallHint_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CommunityNodeInstallHint_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeInstallHint_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/CommunityNodeItem.vue?vue&type=script&setup=true&lang.ts
var CommunityNodeItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeItem",
	props: { isPreview: { type: Boolean } },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [__props.isPreview ? (openBlock(), createBlock(CommunityNodeInstallHint_default, {
				key: 0,
				hint: unref(i18n).baseText("communityNodeItem.node.hint")
			}, null, 8, ["hint"])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.marginLeft)
			}, [createVNode(unref(N8nButton_default), {
				variant: "subtle",
				size: "medium",
				icon: "plus",
				label: unref(i18n).baseText("communityNodeItem.label"),
				outline: ""
			}, null, 8, ["label"])], 2))]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/CommunityNodeItem.vue?vue&type=style&index=0&lang.module.scss
var marginLeft = "_marginLeft_12dbs_388";
var shimmer$15 = "_shimmer_12dbs_1";
var spin$15 = "_spin_12dbs_1";
var opacityPulse$15 = "_opacityPulse_12dbs_1";
var popoverIn$15 = "_popoverIn_12dbs_1";
var fadeIn$15 = "_fadeIn_12dbs_1";
var collapsibleSlideDown$15 = "_collapsibleSlideDown_12dbs_1";
var collapsibleSlideUp$15 = "_collapsibleSlideUp_12dbs_1";
var collapsibleSlideDownBlurred$15 = "_collapsibleSlideDownBlurred_12dbs_1";
var collapsibleSlideUpBlurred$15 = "_collapsibleSlideUpBlurred_12dbs_1";
var blurSwapIn$15 = "_blurSwapIn_12dbs_1";
var blurSwapOut$15 = "_blurSwapOut_12dbs_1";
var pulseGlow$15 = "_pulseGlow_12dbs_1";
var pulseGlowDelayed$15 = "_pulseGlowDelayed_12dbs_1";
var fade$15 = "_fade_12dbs_1";
var fadeInUp$15 = "_fadeInUp_12dbs_1";
var fadeInDown$15 = "_fadeInDown_12dbs_1";
var fadeInLeft$15 = "_fadeInLeft_12dbs_1";
var fadeInRight$15 = "_fadeInRight_12dbs_1";
var fadeOut$15 = "_fadeOut_12dbs_1";
var fadeOutDown$15 = "_fadeOutDown_12dbs_1";
var fadeOutUp$15 = "_fadeOutUp_12dbs_1";
var fadeOutLeft$15 = "_fadeOutLeft_12dbs_1";
var fadeOutRight$15 = "_fadeOutRight_12dbs_1";
var ping$15 = "_ping_12dbs_1";
var blinkBackground$15 = "_blinkBackground_12dbs_1";
var typingBlink$15 = "_typingBlink_12dbs_1";
var CommunityNodeItem_vue_vue_type_style_index_0_lang_module_default = {
	marginLeft,
	shimmer: shimmer$15,
	spin: spin$15,
	"skeleton-pulse": "_skeleton-pulse_12dbs_1",
	opacityPulse: opacityPulse$15,
	popoverIn: popoverIn$15,
	fadeIn: fadeIn$15,
	collapsibleSlideDown: collapsibleSlideDown$15,
	collapsibleSlideUp: collapsibleSlideUp$15,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$15,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$15,
	blurSwapIn: blurSwapIn$15,
	blurSwapOut: blurSwapOut$15,
	pulseGlow: pulseGlow$15,
	pulseGlowDelayed: pulseGlowDelayed$15,
	fade: fade$15,
	fadeInUp: fadeInUp$15,
	fadeInDown: fadeInDown$15,
	fadeInLeft: fadeInLeft$15,
	fadeInRight: fadeInRight$15,
	fadeOut: fadeOut$15,
	fadeOutDown: fadeOutDown$15,
	fadeOutUp: fadeOutUp$15,
	fadeOutLeft: fadeOutLeft$15,
	fadeOutRight: fadeOutRight$15,
	ping: ping$15,
	blinkBackground: blinkBackground$15,
	typingBlink: typingBlink$15
};
var CommunityNodeItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CommunityNodeItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/CategoryItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = ["textContent"];
var CategoryItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CategoryItem",
	props: {
		expanded: {
			type: Boolean,
			default: true
		},
		active: { type: Boolean },
		count: {},
		name: {},
		isTrigger: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const categoryName = computed(() => {
			const itemsCount = props.count || 0;
			return itemsCount > 0 ? `${props.name} (${itemsCount})` : props.name;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ class: _ctx.$style.categoryWrapper }, _ctx.$attrs, {
				"data-keyboard-nav": "true",
				"data-test-id": "node-creator-category-item"
			}), [createBaseVNode("div", { class: normalizeClass({
				[_ctx.$style.category]: true,
				[_ctx.$style.active]: __props.active
			}) }, [
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.name) }, [
					createBaseVNode("span", { textContent: toDisplayString(categoryName.value) }, null, 8, _hoisted_1$7),
					__props.isTrigger ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "bolt-filled",
						size: "xsmall",
						class: normalizeClass(_ctx.$style.triggerIcon)
					}, null, 8, ["class"])) : createCommentVNode("", true),
					renderSlot(_ctx.$slots, "default")
				], 2),
				renderSlot(_ctx.$slots, "trailing"),
				__props.expanded ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "chevron-down",
					color: "text-light",
					size: "large"
				})) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "chevron-up",
					color: "text-light",
					size: "large"
				}))
			], 2)], 16);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/CategoryItem.vue?vue&type=style&index=0&lang.module.scss
var triggerIcon = "_triggerIcon_1cbv5_388";
var category$1 = "_category_1cbv5_393";
var active$3 = "_active_1cbv5_414";
var name = "_name_1cbv5_418";
var shimmer$14 = "_shimmer_1cbv5_1";
var spin$14 = "_spin_1cbv5_1";
var opacityPulse$14 = "_opacityPulse_1cbv5_1";
var popoverIn$14 = "_popoverIn_1cbv5_1";
var fadeIn$14 = "_fadeIn_1cbv5_1";
var collapsibleSlideDown$14 = "_collapsibleSlideDown_1cbv5_1";
var collapsibleSlideUp$14 = "_collapsibleSlideUp_1cbv5_1";
var collapsibleSlideDownBlurred$14 = "_collapsibleSlideDownBlurred_1cbv5_1";
var collapsibleSlideUpBlurred$14 = "_collapsibleSlideUpBlurred_1cbv5_1";
var blurSwapIn$14 = "_blurSwapIn_1cbv5_1";
var blurSwapOut$14 = "_blurSwapOut_1cbv5_1";
var pulseGlow$14 = "_pulseGlow_1cbv5_1";
var pulseGlowDelayed$14 = "_pulseGlowDelayed_1cbv5_1";
var fade$14 = "_fade_1cbv5_1";
var fadeInUp$14 = "_fadeInUp_1cbv5_1";
var fadeInDown$14 = "_fadeInDown_1cbv5_1";
var fadeInLeft$14 = "_fadeInLeft_1cbv5_1";
var fadeInRight$14 = "_fadeInRight_1cbv5_1";
var fadeOut$14 = "_fadeOut_1cbv5_1";
var fadeOutDown$14 = "_fadeOutDown_1cbv5_1";
var fadeOutUp$14 = "_fadeOutUp_1cbv5_1";
var fadeOutLeft$14 = "_fadeOutLeft_1cbv5_1";
var fadeOutRight$14 = "_fadeOutRight_1cbv5_1";
var ping$14 = "_ping_1cbv5_1";
var blinkBackground$14 = "_blinkBackground_1cbv5_1";
var typingBlink$14 = "_typingBlink_1cbv5_1";
var CategoryItem_vue_vue_type_style_index_0_lang_module_default = {
	triggerIcon,
	category: category$1,
	active: active$3,
	name,
	shimmer: shimmer$14,
	spin: spin$14,
	"skeleton-pulse": "_skeleton-pulse_1cbv5_1",
	opacityPulse: opacityPulse$14,
	popoverIn: popoverIn$14,
	fadeIn: fadeIn$14,
	collapsibleSlideDown: collapsibleSlideDown$14,
	collapsibleSlideUp: collapsibleSlideUp$14,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$14,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$14,
	blurSwapIn: blurSwapIn$14,
	blurSwapOut: blurSwapOut$14,
	pulseGlow: pulseGlow$14,
	pulseGlowDelayed: pulseGlowDelayed$14,
	fade: fade$14,
	fadeInUp: fadeInUp$14,
	fadeInDown: fadeInDown$14,
	fadeInLeft: fadeInLeft$14,
	fadeInRight: fadeInRight$14,
	fadeOut: fadeOut$14,
	fadeOutDown: fadeOutDown$14,
	fadeOutUp: fadeOutUp$14,
	fadeOutLeft: fadeOutLeft$14,
	fadeOutRight: fadeOutRight$14,
	ping: ping$14,
	blinkBackground: blinkBackground$14,
	typingBlink: typingBlink$14
};
var CategoryItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CategoryItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CategoryItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/Renderers/CategorizedItemsRenderer.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["data-category-collapsed"];
var CategorizedItemsRenderer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CategorizedItemsRenderer",
	props: {
		elements: { default: () => [] },
		category: {},
		disabled: { type: Boolean },
		activeIndex: {},
		isTriggerCategory: { type: Boolean },
		mouseOverTooltip: {},
		expanded: { type: Boolean },
		showSeparator: { type: Boolean },
		hideHeader: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const { popViewStack, activeViewStack } = useViewStacks();
		const { registerKeyHook } = useKeyboardNavigation();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const nodeCreatorStore = useNodeCreatorStore();
		const i18n = useI18n();
		const activeItemId = computed(() => useKeyboardNavigation()?.activeItemId);
		const actionCount = computed(() => props.elements.filter(({ type }) => type === "action").length);
		const expanded = ref(props.expanded ?? false);
		const isPreview = computed(() => activeViewStack.communityNodeDetails && !activeViewStack.communityNodeDetails.installed);
		function toggleExpanded() {
			setExpanded(!expanded.value);
		}
		function setExpanded(isExpanded) {
			const prev = expanded.value;
			expanded.value = isExpanded;
			if (expanded.value && !prev) nodeCreatorStore.onCategoryExpanded({
				category_name: props.category,
				workflow_id: workflowDocumentStore.value.workflowId
			});
		}
		const $style = useCssModule();
		const containerClasses = computed(() => ({
			[$style.categorizedItemsRenderer]: true,
			[$style.separator]: expanded.value && props.showSeparator,
			[$style.headerless]: props.hideHeader
		}));
		function arrowRight() {
			if (expanded.value) return;
			setExpanded(true);
		}
		function arrowLeft() {
			if (!expanded.value) {
				popViewStack();
				return;
			}
			setExpanded(false);
		}
		watch(() => props.elements, () => {
			setExpanded(true);
		});
		registerKeyHook(`CategoryRight_${props.category}`, {
			keyboardKeys: ["ArrowRight"],
			condition: (type, activeItemId) => type === "category" && props.category === activeItemId,
			handler: arrowRight
		});
		registerKeyHook(`CategoryToggle_${props.category}`, {
			keyboardKeys: ["Enter"],
			condition: (type, activeItemId) => type === "category" && props.category === activeItemId,
			handler: toggleExpanded
		});
		registerKeyHook(`CategoryLeft_${props.category}`, {
			keyboardKeys: ["ArrowLeft"],
			condition: (type, activeItemId) => type === "category" && props.category === activeItemId,
			handler: arrowLeft
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(containerClasses.value),
				"data-category-collapsed": !expanded.value
			}, [
				!__props.hideHeader ? (openBlock(), createBlock(CategoryItem_default, {
					key: 0,
					class: normalizeClass(unref($style).categoryItem),
					name: __props.category,
					disabled: __props.disabled,
					active: activeItemId.value === __props.category,
					count: actionCount.value,
					expanded: expanded.value,
					"is-trigger": __props.isTriggerCategory,
					"data-keyboard-nav-type": "category",
					"data-keyboard-nav-id": __props.category,
					onClick: toggleExpanded
				}, createSlots({
					default: withCtx(() => [__props.mouseOverTooltip ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(unref($style).mouseOverTooltip)
					}, [createVNode(unref(N8nTooltip_default), {
						placement: "top",
						"content-class": unref($style).tooltipPopper
					}, {
						content: withCtx(() => [withDirectives(createBaseVNode("div", null, null, 512), [[_directive_n8n_html, __props.mouseOverTooltip]])]),
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "circle-help",
							size: "small"
						})]),
						_: 1
					}, 8, ["content-class"])], 2)) : createCommentVNode("", true)]),
					_: 2
				}, [_ctx.$slots.trailing ? {
					name: "trailing",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "trailing")]),
					key: "0"
				} : void 0]), 1032, [
					"class",
					"name",
					"disabled",
					"active",
					"count",
					"expanded",
					"is-trigger",
					"data-keyboard-nav-id"
				])) : createCommentVNode("", true),
				expanded.value && actionCount.value > 0 && _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(unref($style).contentSlot)
				}, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("", true),
				isPreview.value && expanded.value ? (openBlock(), createBlock(CommunityNodeInstallHint_default, {
					key: 2,
					hint: unref(i18n).baseText("communityNodeItem.actions.hint")
				}, null, 8, ["hint"])) : createCommentVNode("", true),
				expanded.value ? (openBlock(), createBlock(ItemsRenderer_default, mergeProps({ key: 3 }, _ctx.$attrs, {
					elements: __props.elements,
					"is-trigger": __props.isTriggerCategory,
					class: [{ [unref($style).preview]: isPreview.value }]
				}), {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [])]),
					empty: withCtx(() => [renderSlot(_ctx.$slots, "empty", normalizeProps(guardReactiveProps({ elements: __props.elements })))]),
					_: 3
				}, 16, [
					"elements",
					"is-trigger",
					"class"
				])) : createCommentVNode("", true)
			], 10, _hoisted_1$6);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/Renderers/CategorizedItemsRenderer.vue?vue&type=style&index=0&lang.module.scss
var mouseOverTooltip = "_mouseOverTooltip_13lbw_388";
var categorizedItemsRenderer = "_categorizedItemsRenderer_13lbw_396";
var tooltipPopper = "_tooltipPopper_13lbw_400";
var contentSlot = "_contentSlot_13lbw_404";
var headerless = "_headerless_13lbw_413";
var separator$1 = "_separator_13lbw_417";
var preview$1 = "_preview_13lbw_421";
var shimmer$13 = "_shimmer_13lbw_1";
var spin$13 = "_spin_13lbw_1";
var opacityPulse$13 = "_opacityPulse_13lbw_1";
var popoverIn$13 = "_popoverIn_13lbw_1";
var fadeIn$13 = "_fadeIn_13lbw_1";
var collapsibleSlideDown$13 = "_collapsibleSlideDown_13lbw_1";
var collapsibleSlideUp$13 = "_collapsibleSlideUp_13lbw_1";
var collapsibleSlideDownBlurred$13 = "_collapsibleSlideDownBlurred_13lbw_1";
var collapsibleSlideUpBlurred$13 = "_collapsibleSlideUpBlurred_13lbw_1";
var blurSwapIn$13 = "_blurSwapIn_13lbw_1";
var blurSwapOut$13 = "_blurSwapOut_13lbw_1";
var pulseGlow$13 = "_pulseGlow_13lbw_1";
var pulseGlowDelayed$13 = "_pulseGlowDelayed_13lbw_1";
var fade$13 = "_fade_13lbw_1";
var fadeInUp$13 = "_fadeInUp_13lbw_1";
var fadeInDown$13 = "_fadeInDown_13lbw_1";
var fadeInLeft$13 = "_fadeInLeft_13lbw_1";
var fadeInRight$13 = "_fadeInRight_13lbw_1";
var fadeOut$13 = "_fadeOut_13lbw_1";
var fadeOutDown$13 = "_fadeOutDown_13lbw_1";
var fadeOutUp$13 = "_fadeOutUp_13lbw_1";
var fadeOutLeft$13 = "_fadeOutLeft_13lbw_1";
var fadeOutRight$13 = "_fadeOutRight_13lbw_1";
var ping$13 = "_ping_13lbw_1";
var blinkBackground$13 = "_blinkBackground_13lbw_1";
var typingBlink$13 = "_typingBlink_13lbw_1";
var CategorizedItemsRenderer_vue_vue_type_style_index_0_lang_module_default = {
	mouseOverTooltip,
	categorizedItemsRenderer,
	tooltipPopper,
	contentSlot,
	headerless,
	separator: separator$1,
	preview: preview$1,
	shimmer: shimmer$13,
	spin: spin$13,
	"skeleton-pulse": "_skeleton-pulse_13lbw_1",
	opacityPulse: opacityPulse$13,
	popoverIn: popoverIn$13,
	fadeIn: fadeIn$13,
	collapsibleSlideDown: collapsibleSlideDown$13,
	collapsibleSlideUp: collapsibleSlideUp$13,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$13,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$13,
	blurSwapIn: blurSwapIn$13,
	blurSwapOut: blurSwapOut$13,
	pulseGlow: pulseGlow$13,
	pulseGlowDelayed: pulseGlowDelayed$13,
	fade: fade$13,
	fadeInUp: fadeInUp$13,
	fadeInDown: fadeInDown$13,
	fadeInLeft: fadeInLeft$13,
	fadeInRight: fadeInRight$13,
	fadeOut: fadeOut$13,
	fadeOutDown: fadeOutDown$13,
	fadeOutUp: fadeOutUp$13,
	fadeOutLeft: fadeOutLeft$13,
	fadeOutRight: fadeOutRight$13,
	ping: ping$13,
	blinkBackground: blinkBackground$13,
	typingBlink: typingBlink$13
};
var CategorizedItemsRenderer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CategorizedItemsRenderer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CategorizedItemsRenderer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/SectionHeaderCreditsTag.vue?vue&type=script&setup=true&lang.ts
var SectionHeaderCreditsTag_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SectionHeaderCreditsTag",
	setup(__props) {
		const aiGatewayStore = useAiGatewayStore();
		const i18n = useI18n();
		const text = computed(() => {
			const balance = aiGatewayStore.balance;
			if (balance === void 0) return void 0;
			return balance <= 0 ? i18n.baseText("aiGateway.wallet.noCredits") : i18n.baseText("aiGateway.wallet.balanceRemaining", { interpolate: { balance: `$${balance.toFixed(2)}` } });
		});
		onMounted(() => {
			aiGatewayStore.fetchWallet();
		});
		return (_ctx, _cache) => {
			return text.value ? (openBlock(), createBlock(unref(N8nTag_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.creditsBalance),
				clickable: false,
				text: text.value,
				"data-test-id": "node-creator-credits-balance"
			}, null, 8, ["class", "text"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/SectionHeaderCreditsTag.vue?vue&type=style&index=0&lang.module.scss
var creditsBalance = "_creditsBalance_1n4et_388";
var shimmer$12 = "_shimmer_1n4et_1";
var spin$12 = "_spin_1n4et_1";
var opacityPulse$12 = "_opacityPulse_1n4et_1";
var popoverIn$12 = "_popoverIn_1n4et_1";
var fadeIn$12 = "_fadeIn_1n4et_1";
var collapsibleSlideDown$12 = "_collapsibleSlideDown_1n4et_1";
var collapsibleSlideUp$12 = "_collapsibleSlideUp_1n4et_1";
var collapsibleSlideDownBlurred$12 = "_collapsibleSlideDownBlurred_1n4et_1";
var collapsibleSlideUpBlurred$12 = "_collapsibleSlideUpBlurred_1n4et_1";
var blurSwapIn$12 = "_blurSwapIn_1n4et_1";
var blurSwapOut$12 = "_blurSwapOut_1n4et_1";
var pulseGlow$12 = "_pulseGlow_1n4et_1";
var pulseGlowDelayed$12 = "_pulseGlowDelayed_1n4et_1";
var fade$12 = "_fade_1n4et_1";
var fadeInUp$12 = "_fadeInUp_1n4et_1";
var fadeInDown$12 = "_fadeInDown_1n4et_1";
var fadeInLeft$12 = "_fadeInLeft_1n4et_1";
var fadeInRight$12 = "_fadeInRight_1n4et_1";
var fadeOut$12 = "_fadeOut_1n4et_1";
var fadeOutDown$12 = "_fadeOutDown_1n4et_1";
var fadeOutUp$12 = "_fadeOutUp_1n4et_1";
var fadeOutLeft$12 = "_fadeOutLeft_1n4et_1";
var fadeOutRight$12 = "_fadeOutRight_1n4et_1";
var ping$12 = "_ping_1n4et_1";
var blinkBackground$12 = "_blinkBackground_1n4et_1";
var typingBlink$12 = "_typingBlink_1n4et_1";
var SectionHeaderCreditsTag_vue_vue_type_style_index_0_lang_module_default = {
	creditsBalance,
	shimmer: shimmer$12,
	spin: spin$12,
	"skeleton-pulse": "_skeleton-pulse_1n4et_1",
	opacityPulse: opacityPulse$12,
	popoverIn: popoverIn$12,
	fadeIn: fadeIn$12,
	collapsibleSlideDown: collapsibleSlideDown$12,
	collapsibleSlideUp: collapsibleSlideUp$12,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$12,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$12,
	blurSwapIn: blurSwapIn$12,
	blurSwapOut: blurSwapOut$12,
	pulseGlow: pulseGlow$12,
	pulseGlowDelayed: pulseGlowDelayed$12,
	fade: fade$12,
	fadeInUp: fadeInUp$12,
	fadeInDown: fadeInDown$12,
	fadeInLeft: fadeInLeft$12,
	fadeInRight: fadeInRight$12,
	fadeOut: fadeOut$12,
	fadeOutDown: fadeOutDown$12,
	fadeOutUp: fadeOutUp$12,
	fadeOutLeft: fadeOutLeft$12,
	fadeOutRight: fadeOutRight$12,
	ping: ping$12,
	blinkBackground: blinkBackground$12,
	typingBlink: typingBlink$12
};
var SectionHeaderCreditsTag_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SectionHeaderCreditsTag_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SectionHeaderCreditsTag_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/OpenTemplateItem.vue?vue&type=script&setup=true&lang.ts
var OpenTemplateItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OpenTemplateItem",
	props: { openTemplate: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nNodeCreatorNode_default), {
				class: normalizeClass({
					[_ctx.$style.creatorOpenTemplate]: true,
					[_ctx.$style.compact]: __props.openTemplate.compact
				}),
				title: __props.openTemplate.title,
				description: __props.openTemplate.description,
				tag: __props.openTemplate.tag,
				"show-action-arrow": true,
				"is-trigger": false
			}, createSlots({ _: 2 }, [__props.openTemplate.icon ? {
				name: "icon",
				fn: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
					type: "icon",
					name: __props.openTemplate.icon,
					circle: false,
					"show-tooltip": false
				}, null, 8, ["name"])]),
				key: "0"
			} : void 0, __props.openTemplate.nodes ? {
				name: "extraDetails",
				fn: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.openTemplate.nodes, (node) => {
					return openBlock(), createBlock(NodeIcon_default, {
						key: node.name,
						"node-type": node,
						size: 16,
						"show-tooltip": true
					}, null, 8, ["node-type"]);
				}), 128))]),
				key: "1"
			} : void 0]), 1032, [
				"class",
				"title",
				"description",
				"tag"
			]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/ItemTypes/OpenTemplateItem.vue?vue&type=style&index=0&lang.module.scss
var creatorOpenTemplate = "_creatorOpenTemplate_wbekx_388";
var compact = "_compact_wbekx_396";
var shimmer$11 = "_shimmer_wbekx_1";
var spin$11 = "_spin_wbekx_1";
var opacityPulse$11 = "_opacityPulse_wbekx_1";
var popoverIn$11 = "_popoverIn_wbekx_1";
var fadeIn$11 = "_fadeIn_wbekx_1";
var collapsibleSlideDown$11 = "_collapsibleSlideDown_wbekx_1";
var collapsibleSlideUp$11 = "_collapsibleSlideUp_wbekx_1";
var collapsibleSlideDownBlurred$11 = "_collapsibleSlideDownBlurred_wbekx_1";
var collapsibleSlideUpBlurred$11 = "_collapsibleSlideUpBlurred_wbekx_1";
var blurSwapIn$11 = "_blurSwapIn_wbekx_1";
var blurSwapOut$11 = "_blurSwapOut_wbekx_1";
var pulseGlow$11 = "_pulseGlow_wbekx_1";
var pulseGlowDelayed$11 = "_pulseGlowDelayed_wbekx_1";
var fade$11 = "_fade_wbekx_1";
var fadeInUp$11 = "_fadeInUp_wbekx_1";
var fadeInDown$11 = "_fadeInDown_wbekx_1";
var fadeInLeft$11 = "_fadeInLeft_wbekx_1";
var fadeInRight$11 = "_fadeInRight_wbekx_1";
var fadeOut$11 = "_fadeOut_wbekx_1";
var fadeOutDown$11 = "_fadeOutDown_wbekx_1";
var fadeOutUp$11 = "_fadeOutUp_wbekx_1";
var fadeOutLeft$11 = "_fadeOutLeft_wbekx_1";
var fadeOutRight$11 = "_fadeOutRight_wbekx_1";
var ping$11 = "_ping_wbekx_1";
var blinkBackground$11 = "_blinkBackground_wbekx_1";
var typingBlink$11 = "_typingBlink_wbekx_1";
var OpenTemplateItem_vue_vue_type_style_index_0_lang_module_default = {
	creatorOpenTemplate,
	compact,
	shimmer: shimmer$11,
	spin: spin$11,
	"skeleton-pulse": "_skeleton-pulse_wbekx_1",
	opacityPulse: opacityPulse$11,
	popoverIn: popoverIn$11,
	fadeIn: fadeIn$11,
	collapsibleSlideDown: collapsibleSlideDown$11,
	collapsibleSlideUp: collapsibleSlideUp$11,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$11,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$11,
	blurSwapIn: blurSwapIn$11,
	blurSwapOut: blurSwapOut$11,
	pulseGlow: pulseGlow$11,
	pulseGlowDelayed: pulseGlowDelayed$11,
	fade: fade$11,
	fadeInUp: fadeInUp$11,
	fadeInDown: fadeInDown$11,
	fadeInLeft: fadeInLeft$11,
	fadeInRight: fadeInRight$11,
	fadeOut: fadeOut$11,
	fadeOutDown: fadeOutDown$11,
	fadeOutUp: fadeOutUp$11,
	fadeOutLeft: fadeOutLeft$11,
	fadeOutRight: fadeOutRight$11,
	ping: ping$11,
	blinkBackground: blinkBackground$11,
	typingBlink: typingBlink$11
};
var OpenTemplateItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OpenTemplateItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OpenTemplateItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/Renderers/ItemsRenderer.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = { key: 0 };
var _hoisted_2$3 = [
	"data-keyboard-nav-type",
	"data-keyboard-nav-id",
	"onClick"
];
var LAZY_LOAD_THRESHOLD = 20;
var LAZY_LOAD_ITEMS_PER_TICK = 5;
var ItemsRenderer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ItemsRenderer",
	props: {
		elements: { default: () => [] },
		activeIndex: {},
		disabled: { type: Boolean },
		lazyRender: {
			type: Boolean,
			default: true
		}
	},
	emits: [
		"selected",
		"dragstart",
		"dragend"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const renderedItems = ref([]);
		const renderAnimationRequest = ref(0);
		const { activeViewStack } = useViewStacks();
		const activeItemId = computed(() => useKeyboardNavigation()?.activeItemId);
		const communityNode = computed(() => activeViewStack.mode === "community-node");
		const isPreview = computed(() => {
			return communityNode.value && !activeViewStack.communityNodeDetails?.installed;
		});
		const highlightActiveItem = computed(() => {
			if (activeViewStack.communityNodeDetails && !activeViewStack.communityNodeDetails.installed) return false;
			return true;
		});
		function renderItems() {
			if (props.elements.length <= LAZY_LOAD_THRESHOLD || !props.lazyRender) {
				renderedItems.value = props.elements;
				return;
			}
			if (renderedItems.value.length < props.elements.length) {
				renderedItems.value.push(...props.elements.slice(renderedItems.value.length, renderedItems.value.length + LAZY_LOAD_ITEMS_PER_TICK));
				renderAnimationRequest.value = window.requestAnimationFrame(renderItems);
			}
		}
		function wrappedEmit(event, element, $e) {
			if (props.disabled) return;
			switch (event) {
				case "dragstart": if ($e) {
					emit("dragstart", element, $e);
					break;
				}
				case "dragend": if ($e) {
					emit("dragend", element, $e);
					break;
				}
				case "selected":
					emit("selected", element, $e);
					break;
				default: emit(event, element, $e);
			}
		}
		function beforeEnter(el) {
			el.style.height = "0";
		}
		function enter(el) {
			el.style.height = `${el.scrollHeight}px`;
		}
		function beforeLeave(el) {
			el.style.height = `${el.scrollHeight}px`;
		}
		function leave(el) {
			el.style.height = "0";
		}
		onMounted(() => {
			renderItems();
		});
		onUnmounted(() => {
			window.cancelAnimationFrame(renderAnimationRequest.value);
			renderedItems.value = [];
		});
		watch(() => props.elements, () => {
			window.cancelAnimationFrame(renderAnimationRequest.value);
			renderedItems.value = [];
			renderItems();
		});
		return (_ctx, _cache) => {
			return __props.elements.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.itemsRenderer),
				name: "accordion",
				onBeforeEnter: beforeEnter,
				onEnter: enter,
				onBeforeLeave: beforeLeave,
				onLeave: leave
			}, [renderSlot(_ctx.$slots, "default"), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.elements, (item) => {
				return openBlock(), createElementBlock("div", { key: item.uuid }, [renderedItems.value.includes(item) ? (openBlock(), createElementBlock("div", _hoisted_1$5, [item.type === "section" ? (openBlock(), createBlock(CategorizedItemsRenderer_default, {
					key: 0,
					elements: item.children,
					expanded: "",
					category: item.title,
					showSeparator: item.showSeparator,
					hideHeader: item.hideHeader,
					onSelected: _cache[0] || (_cache[0] = (child) => wrappedEmit("selected", child))
				}, createSlots({ _: 2 }, [item.trailing === "creditsBalance" ? {
					name: "trailing",
					fn: withCtx(() => [createVNode(SectionHeaderCreditsTag_default)]),
					key: "0"
				} : void 0]), 1032, [
					"elements",
					"category",
					"showSeparator",
					"hideHeader"
				])) : (openBlock(), createElementBlock("div", {
					key: 1,
					ref_for: true,
					ref: "iteratorItems",
					class: normalizeClass({
						clickable: !__props.disabled,
						[_ctx.$style.active]: activeItemId.value === item.uuid && highlightActiveItem.value,
						[_ctx.$style.iteratorItem]: !communityNode.value,
						[_ctx.$style[item.type]]: true,
						[_ctx.$style.preview]: isPreview.value,
						[_ctx.$style.borderless]: item.type === "view" && item.properties.borderless === true
					}),
					"data-test-id": "item-iterator-item",
					"data-keyboard-nav-type": item.type !== "label" ? item.type : void 0,
					"data-keyboard-nav-id": item.uuid,
					onClick: ($event) => wrappedEmit("selected", item)
				}, [
					item.type === "label" ? (openBlock(), createBlock(LabelItem_default, {
						key: 0,
						item
					}, null, 8, ["item"])) : createCommentVNode("", true),
					item.type === "subcategory" ? (openBlock(), createBlock(SubcategoryItem_default, {
						key: 1,
						item: item.properties
					}, null, 8, ["item"])) : createCommentVNode("", true),
					communityNode.value ? (openBlock(), createBlock(CommunityNodeItem_default, {
						key: 2,
						"is-preview": isPreview.value
					}, null, 8, ["is-preview"])) : createCommentVNode("", true),
					item.type === "node" && !communityNode.value ? (openBlock(), createBlock(NodeItem_default, {
						key: 3,
						"node-type": item.properties,
						active: true,
						subcategory: item.subcategory
					}, null, 8, ["node-type", "subcategory"])) : createCommentVNode("", true),
					item.type === "action" ? (openBlock(), createBlock(ActionItem_default, {
						key: 4,
						"node-type": item.properties,
						action: item.properties,
						active: true
					}, null, 8, ["node-type", "action"])) : createCommentVNode("", true),
					item.type === "agent" ? (openBlock(), createBlock(AgentItem_default, {
						key: 5,
						agent: item.properties
					}, null, 8, ["agent"])) : item.type === "view" ? (openBlock(), createBlock(ViewItem_default, {
						key: 6,
						view: item.properties,
						class: normalizeClass(_ctx.$style.viewItem)
					}, null, 8, ["view", "class"])) : item.type === "link" ? (openBlock(), createBlock(LinkItem_default, {
						key: 7,
						link: item.properties,
						class: normalizeClass(_ctx.$style.linkItem)
					}, null, 8, ["link", "class"])) : item.type === "openTemplate" ? (openBlock(), createBlock(OpenTemplateItem_default, {
						key: 8,
						"open-template": item.properties,
						class: normalizeClass(_ctx.$style.linkItem)
					}, null, 8, ["open-template", "class"])) : createCommentVNode("", true)
				], 10, _hoisted_2$3))])) : (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 1,
					loading: true,
					rows: 1,
					variant: "p",
					class: normalizeClass(_ctx.$style.itemSkeleton)
				}, null, 8, ["class"]))]);
			}), 128))], 34)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, [renderSlot(_ctx.$slots, "empty")], 2));
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/Renderers/ItemsRenderer.vue?vue&type=style&index=0&lang.module.scss
var itemSkeleton = "_itemSkeleton_1wbe1_388";
var iteratorItem = "_iteratorItem_1wbe1_392";
var label = "_label_1wbe1_404";
var category = "_category_1wbe1_404";
var active$2 = "_active_1wbe1_407";
var empty = "_empty_1wbe1_411";
var itemsRenderer = "_itemsRenderer_1wbe1_415";
var view = "_view_1wbe1_424";
var link = "_link_1wbe1_442";
var borderless = "_borderless_1wbe1_460";
var preview = "_preview_1wbe1_470";
var shimmer$10 = "_shimmer_1wbe1_1";
var spin$10 = "_spin_1wbe1_1";
var opacityPulse$10 = "_opacityPulse_1wbe1_1";
var popoverIn$10 = "_popoverIn_1wbe1_1";
var fadeIn$10 = "_fadeIn_1wbe1_1";
var collapsibleSlideDown$10 = "_collapsibleSlideDown_1wbe1_1";
var collapsibleSlideUp$10 = "_collapsibleSlideUp_1wbe1_1";
var collapsibleSlideDownBlurred$10 = "_collapsibleSlideDownBlurred_1wbe1_1";
var collapsibleSlideUpBlurred$10 = "_collapsibleSlideUpBlurred_1wbe1_1";
var blurSwapIn$10 = "_blurSwapIn_1wbe1_1";
var blurSwapOut$10 = "_blurSwapOut_1wbe1_1";
var pulseGlow$10 = "_pulseGlow_1wbe1_1";
var pulseGlowDelayed$10 = "_pulseGlowDelayed_1wbe1_1";
var fade$10 = "_fade_1wbe1_1";
var fadeInUp$10 = "_fadeInUp_1wbe1_1";
var fadeInDown$10 = "_fadeInDown_1wbe1_1";
var fadeInLeft$10 = "_fadeInLeft_1wbe1_1";
var fadeInRight$10 = "_fadeInRight_1wbe1_1";
var fadeOut$10 = "_fadeOut_1wbe1_1";
var fadeOutDown$10 = "_fadeOutDown_1wbe1_1";
var fadeOutUp$10 = "_fadeOutUp_1wbe1_1";
var fadeOutLeft$10 = "_fadeOutLeft_1wbe1_1";
var fadeOutRight$10 = "_fadeOutRight_1wbe1_1";
var ping$10 = "_ping_1wbe1_1";
var blinkBackground$10 = "_blinkBackground_1wbe1_1";
var typingBlink$10 = "_typingBlink_1wbe1_1";
var ItemsRenderer_vue_vue_type_style_index_0_lang_module_default = {
	itemSkeleton,
	iteratorItem,
	label,
	category,
	active: active$2,
	empty,
	itemsRenderer,
	view,
	link,
	borderless,
	preview,
	shimmer: shimmer$10,
	spin: spin$10,
	"skeleton-pulse": "_skeleton-pulse_1wbe1_1",
	opacityPulse: opacityPulse$10,
	popoverIn: popoverIn$10,
	fadeIn: fadeIn$10,
	collapsibleSlideDown: collapsibleSlideDown$10,
	collapsibleSlideUp: collapsibleSlideUp$10,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$10,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$10,
	blurSwapIn: blurSwapIn$10,
	blurSwapOut: blurSwapOut$10,
	pulseGlow: pulseGlow$10,
	pulseGlowDelayed: pulseGlowDelayed$10,
	fade: fade$10,
	fadeInUp: fadeInUp$10,
	fadeInDown: fadeInDown$10,
	fadeInLeft: fadeInLeft$10,
	fadeInRight: fadeInRight$10,
	fadeOut: fadeOut$10,
	fadeOutDown: fadeOutDown$10,
	fadeOutUp: fadeOutUp$10,
	fadeOutLeft: fadeOutLeft$10,
	fadeOutRight: fadeOutRight$10,
	ping: ping$10,
	blinkBackground: blinkBackground$10,
	typingBlink: typingBlink$10
};
var ItemsRenderer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ItemsRenderer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ItemsRenderer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/OrderSwitcher.vue
var OrderSwitcher_default = /* @__PURE__ */ defineComponent({
	__name: "OrderSwitcher",
	props: { rootView: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [__props.rootView === unref("Regular") ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [renderSlot(_ctx.$slots, "actions"), renderSlot(_ctx.$slots, "triggers")], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [renderSlot(_ctx.$slots, "triggers"), renderSlot(_ctx.$slots, "actions")], 64))]);
		};
	}
});
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeInfo.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { key: 2 };
var _hoisted_2$2 = { key: 3 };
var CommunityNodeInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeInfo",
	setup(__props) {
		const { activeViewStack } = useViewStacks();
		const { communityNodeDetails } = activeViewStack;
		const publisherName = ref(void 0);
		const downloads = ref(null);
		const verified = ref(false);
		const official = ref(false);
		const packageName = computed(() => communityNodeDetails?.packageName);
		const { installedPackage, initInstalledPackage, isUpdateCheckAvailable } = useInstalledCommunityPackage(packageName);
		const { getQuickConnectOptionByPackageName } = useQuickConnect();
		const quickConnect = computed(() => {
			const pkg = packageName.value;
			return pkg ? getQuickConnectOptionByPackageName(pkg) : void 0;
		});
		const nodeTypesStore = useNodeTypesStore();
		const usersStore = useUsersStore();
		const isAdminOrOwner = computed(() => usersStore.isAdminOrOwner);
		const formatNumber = (number) => {
			if (!number) return null;
			return new Intl.NumberFormat("en-US").format(number);
		};
		async function fetchPackageInfo(packageName) {
			const communityNodeAttributes = await nodeTypesStore.getCommunityNodeAttributes(activeViewStack.communityNodeDetails?.key || "");
			let packageInfo = installedPackage.value;
			if (communityNodeDetails?.installed && !packageInfo) packageInfo = await initInstalledPackage();
			if (communityNodeAttributes) {
				publisherName.value = communityNodeAttributes.companyName ?? communityNodeAttributes.authorName;
				downloads.value = formatNumber(communityNodeAttributes.numberOfDownloads);
				official.value = communityNodeAttributes.isOfficialNode;
				if (!packageInfo) verified.value = true;
				else verified.value = (communityNodeAttributes.nodeVersions?.map((v) => v.npmVersion) ?? []).includes(packageInfo.installedVersion);
				return;
			}
			const url = `https://registry.npmjs.org/${packageName}`;
			try {
				const response = await fetch(url);
				if (!response.ok) {
					captureException(/* @__PURE__ */ new Error("Could not get metadata for package"), { extra: { packageName } });
					return;
				}
				publisherName.value = (await response.json()).maintainers?.[0]?.name;
				const downloadsUrl = `https://api.npmjs.org/downloads/range/2022-01-01:${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}/${packageName}`;
				const downloadsResponse = await fetch(downloadsUrl);
				if (!downloadsResponse.ok) {
					captureException(/* @__PURE__ */ new Error("Could not get downloads for package"), { extra: { packageName } });
					return;
				}
				const downloadsData = await downloadsResponse.json();
				if (!downloadsData.downloads?.length) return;
				downloads.value = formatNumber(downloadsData.downloads.reduce((sum, day) => sum + day.downloads, 0));
			} catch (error) {
				captureException(error, { extra: { packageName } });
			}
		}
		onMounted(async () => {
			if (communityNodeDetails?.packageName) await fetchPackageInfo(communityNodeDetails.packageName);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.description),
					color: "text-base",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(communityNodeDetails)?.description), 1)]),
					_: 1
				}, 8, ["class"]),
				unref(isUpdateCheckAvailable) && unref(installedPackage)?.updateAvailable ? (openBlock(), createBlock(CommunityNodeUpdateInfo_default, {
					key: 0,
					"data-test-id": "update-available",
					"package-name": unref(communityNodeDetails)?.packageName,
					source: "node creator panel"
				}, null, 8, ["package-name"])) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.separator)
				}, null, 2)),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [
					verified.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(official.value ? unref(i18n).baseText("communityNodeInfo.officialApproved") : unref(i18n).baseText("communityNodeInfo.approved")), 1)]),
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(shield_alt_default), { class: normalizeClass(_ctx.$style.tooltipIcon) }, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "xsmall",
							bold: "",
							"data-test-id": "verified-tag"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.approved.label")), 1)]),
							_: 1
						})])]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.unverified")), 1)]),
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.tooltipIcon),
							icon: "box"
						}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "xsmall",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.unverified.label")), 1)]),
							_: 1
						})])]),
						_: 1
					})),
					downloads.value ? (openBlock(), createElementBlock("div", _hoisted_1$4, [createVNode(unref(N8nIcon_default), {
						class: normalizeClass(_ctx.$style.tooltipIcon),
						icon: "hard-drive-download"
					}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "xsmall",
						bold: "",
						"data-test-id": "number-of-downloads"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.downloads", { interpolate: { downloads: downloads.value } })), 1)]),
						_: 1
					})])) : createCommentVNode("", true),
					publisherName.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [createVNode(unref(N8nIcon_default), {
						class: normalizeClass(_ctx.$style.tooltipIcon),
						icon: "user"
					}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "xsmall",
						bold: "",
						"data-test-id": "publisher-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.publishedBy", { interpolate: { publisherName: publisherName.value } })), 1)]),
						_: 1
					})])) : createCommentVNode("", true),
					quickConnect.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 4,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.quickConnect.tooltip")), 1)]),
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.tooltipIcon),
							icon: "quick-connect"
						}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "xsmall",
							bold: "",
							"data-test-id": "quick-connect-tag"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeInfo.quickConnect")), 1)]),
							_: 1
						})])]),
						_: 1
					})) : createCommentVNode("", true)
				], 2),
				quickConnect.value ? (openBlock(), createBlock(QuickConnectBanner_default, {
					key: 2,
					text: quickConnect.value?.text,
					disclaimer: quickConnect.value?.disclaimer
				}, null, 8, ["text", "disclaimer"])) : createCommentVNode("", true),
				!isAdminOrOwner.value && !unref(communityNodeDetails)?.installed ? (openBlock(), createBlock(ContactAdministratorToInstall_default, { key: 3 })) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeInfo.vue?vue&type=style&index=0&lang.module.scss
var container$4 = "_container_1al11_388";
var nodeIcon$2 = "_nodeIcon_1al11_397";
var description = "_description_1al11_402";
var separator = "_separator_1al11_406";
var info$1 = "_info_1al11_412";
var tooltipIcon = "_tooltipIcon_1al11_427";
var contactOwnerHint = "_contactOwnerHint_1al11_433";
var shimmer$9 = "_shimmer_1al11_1";
var spin$9 = "_spin_1al11_1";
var opacityPulse$9 = "_opacityPulse_1al11_1";
var popoverIn$9 = "_popoverIn_1al11_1";
var fadeIn$9 = "_fadeIn_1al11_1";
var collapsibleSlideDown$9 = "_collapsibleSlideDown_1al11_1";
var collapsibleSlideUp$9 = "_collapsibleSlideUp_1al11_1";
var collapsibleSlideDownBlurred$9 = "_collapsibleSlideDownBlurred_1al11_1";
var collapsibleSlideUpBlurred$9 = "_collapsibleSlideUpBlurred_1al11_1";
var blurSwapIn$9 = "_blurSwapIn_1al11_1";
var blurSwapOut$9 = "_blurSwapOut_1al11_1";
var pulseGlow$9 = "_pulseGlow_1al11_1";
var pulseGlowDelayed$9 = "_pulseGlowDelayed_1al11_1";
var fade$9 = "_fade_1al11_1";
var fadeInUp$9 = "_fadeInUp_1al11_1";
var fadeInDown$9 = "_fadeInDown_1al11_1";
var fadeInLeft$9 = "_fadeInLeft_1al11_1";
var fadeInRight$9 = "_fadeInRight_1al11_1";
var fadeOut$9 = "_fadeOut_1al11_1";
var fadeOutDown$9 = "_fadeOutDown_1al11_1";
var fadeOutUp$9 = "_fadeOutUp_1al11_1";
var fadeOutLeft$9 = "_fadeOutLeft_1al11_1";
var fadeOutRight$9 = "_fadeOutRight_1al11_1";
var ping$9 = "_ping_1al11_1";
var blinkBackground$9 = "_blinkBackground_1al11_1";
var typingBlink$9 = "_typingBlink_1al11_1";
var CommunityNodeInfo_vue_vue_type_style_index_0_lang_module_default = {
	container: container$4,
	nodeIcon: nodeIcon$2,
	description,
	separator,
	info: info$1,
	tooltipIcon,
	contactOwnerHint,
	shimmer: shimmer$9,
	spin: spin$9,
	"skeleton-pulse": "_skeleton-pulse_1al11_1",
	opacityPulse: opacityPulse$9,
	popoverIn: popoverIn$9,
	fadeIn: fadeIn$9,
	collapsibleSlideDown: collapsibleSlideDown$9,
	collapsibleSlideUp: collapsibleSlideUp$9,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$9,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$9,
	blurSwapIn: blurSwapIn$9,
	blurSwapOut: blurSwapOut$9,
	pulseGlow: pulseGlow$9,
	pulseGlowDelayed: pulseGlowDelayed$9,
	fade: fade$9,
	fadeInUp: fadeInUp$9,
	fadeInDown: fadeInDown$9,
	fadeInLeft: fadeInLeft$9,
	fadeInRight: fadeInRight$9,
	fadeOut: fadeOut$9,
	fadeOutDown: fadeOutDown$9,
	fadeOutUp: fadeOutUp$9,
	fadeOutLeft: fadeOutLeft$9,
	fadeOutRight: fadeOutRight$9,
	ping: ping$9,
	blinkBackground: blinkBackground$9,
	typingBlink: typingBlink$9
};
var CommunityNodeInfo_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CommunityNodeInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeInfo_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/Modes/ActionsMode.vue?vue&type=script&setup=true&lang.ts
var ActionsMode_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ActionsMode",
	emits: ["nodeTypeSelected"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const { popViewStack, updateCurrentViewStack } = useViewStacks();
		const { registerKeyHook } = useKeyboardNavigation();
		const { setAddedNodeActionParameters, getActionData, actionDataToNodeTypeSelectedPayload, getPlaceholderTriggerActions, parseCategoryActions, actionsCategoryLocales } = useActions();
		const nodeCreatorStore = useNodeCreatorStore();
		const { openSampleWorkflowTemplate } = useCalloutHelpers();
		const parsedTriggerActions = computed(() => parseActions(actions.value, actionsCategoryLocales.value.triggers, false));
		const parsedActionActions = computed(() => parseActions(actions.value, actionsCategoryLocales.value.actions, !search.value));
		const parsedTriggerActionsBaseline = computed(() => parseActions(useViewStacks().activeViewStack.baselineItems || [], actionsCategoryLocales.value.triggers, false));
		const parsedActionActionsBaseline = computed(() => parseActions(useViewStacks().activeViewStack.baselineItems || [], actionsCategoryLocales.value.actions, !search.value));
		const triggerCategoryName = computed(() => parsedTriggerActions.value.length || search.value ? actionsCategoryLocales.value.triggers : `${actionsCategoryLocales.value.triggers} (${placeholderTriggerActions.length})`);
		const actions = computed(() => {
			return (useViewStacks().activeViewStack.items || []).filter((p) => p.properties.actionKey !== CUSTOM_API_CALL_KEY);
		});
		const search = computed(() => useViewStacks().activeViewStack.search);
		const subcategory = computed(() => useViewStacks().activeViewStack.subcategory);
		const rootView = computed(() => useViewStacks().activeViewStack.rootView);
		const communityNodeDetails = computed(() => useViewStacks().activeViewStack?.communityNodeDetails);
		const placeholderTriggerActions = getPlaceholderTriggerActions(subcategory.value || "");
		const { getQuickConnectOptionByPackageName } = useQuickConnect();
		const quickConnect = computed(() => {
			const items = useViewStacks().activeViewStack.items;
			if (!communityNodeDetails.value && items?.length) return getQuickConnectOptionByPackageName(items[0].key);
			return null;
		});
		const hasNoTriggerActions = computed(() => parseCategoryActions(useViewStacks().activeViewStack.baselineItems || [], actionsCategoryLocales.value.triggers, !search.value).length === 0);
		const containsAPIAction = computed(() => {
			return (useViewStacks().activeViewStack.baselineItems || []).some((p) => {
				return (p.properties.actionKey ?? "") === CUSTOM_API_CALL_KEY;
			});
		});
		const isTriggerRootView = computed(() => rootView.value === TRIGGER_NODE_CREATOR_VIEW);
		const shouldShowTriggers = computed(() => {
			if (communityNodeDetails.value && !parsedTriggerActions.value.length) return !isNodePreviewKey(useViewStacks().activeViewStack?.items?.[0].key) && isTriggerRootView.value;
			return isTriggerRootView.value || parsedTriggerActionsBaseline.value.length !== 0;
		});
		registerKeyHook("ActionsKeyRight", {
			keyboardKeys: ["ArrowRight", "Enter"],
			condition: (type) => type === "action",
			handler: onKeySelect
		});
		registerKeyHook("ActionsKeyLeft", {
			keyboardKeys: ["ArrowLeft"],
			condition: (type) => type === "action",
			handler: arrowLeft
		});
		function parseActions(base, locale, withLabels = false) {
			return parseCategoryActions(base, locale, withLabels);
		}
		function arrowLeft() {
			popViewStack();
		}
		function onKeySelect(activeItemId) {
			const activeAction = [...actions.value, ...placeholderTriggerActions].find((a) => a.uuid === activeItemId);
			if (activeAction) onSelected(activeAction);
		}
		function onSelected(actionCreateElement) {
			if (actionCreateElement.type === "openTemplate") openSampleWorkflowTemplate(actionCreateElement.properties.templateId, { telemetry: {
				source: "nodeCreator",
				section: useViewStacks().activeViewStack.title
			} });
			if (actionCreateElement.type !== "action") return;
			const actionData = getActionData(actionCreateElement.properties);
			if (placeholderTriggerActions.some((p) => p.key === actionCreateElement.key) && isTriggerRootView.value) {
				const actionNode = actions.value[0]?.key;
				if (actionNode) emit("nodeTypeSelected", [{ type: actionData.key }, { type: actionNode }]);
			} else if (actionData?.key === "@n8n/n8n-nodes-langchain.openAi" && (actionData?.value)?.resource === "assistant" && (actionData?.value)?.operation === "message") emit("nodeTypeSelected", [{ type: OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE }]);
			else if (isNodePreviewKey(actionData?.key)) return;
			else emit("nodeTypeSelected", [actionDataToNodeTypeSelectedPayload(actionData)]);
			if (telemetry) setAddedNodeActionParameters(actionData, telemetry, rootView.value);
		}
		function trackActionsView() {
			const activeViewStack = useViewStacks().activeViewStack;
			const trigger_action_count = (activeViewStack.baselineItems || [])?.filter((action) => action.key.toLowerCase().includes("trigger")).length;
			const trackingPayload = {
				app_identifier: [...actions.value, ...placeholderTriggerActions][0].key,
				actions: (activeViewStack.baselineItems || [])?.map((action) => action.properties.displayName),
				regular_action_count: (activeViewStack.baselineItems || [])?.length - trigger_action_count,
				trigger_action_count
			};
			useExternalHooks().run("nodeCreateList.onViewActions", trackingPayload);
			nodeCreatorStore.onViewActions(trackingPayload);
		}
		function resetSearch() {
			updateCurrentViewStack({ search: "" });
		}
		function addHttpNode() {
			const updateData = {
				name: "",
				key: HTTP_REQUEST_NODE_TYPE,
				value: { authentication: "predefinedCredentialType" }
			};
			emit("nodeTypeSelected", [{ type: HTTP_REQUEST_NODE_TYPE }]);
			if (telemetry) setAddedNodeActionParameters(updateData);
			const app_identifier = actions.value[0]?.key;
			if (!app_identifier) return;
			useExternalHooks().run("nodeCreateList.onActionsCustmAPIClicked", { app_identifier });
			nodeCreatorStore.onActionsCustomAPIClicked({ app_identifier });
		}
		onMounted(() => {
			trackActionsView();
		});
		const callouts = computed(() => []);
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.container]: true,
				[_ctx.$style.containerPaddingBottom]: !communityNodeDetails.value
			}) }, [
				createVNode(ItemsRenderer_default, {
					elements: callouts.value,
					class: normalizeClass(_ctx.$style.items),
					onSelected
				}, null, 8, ["elements", "class"]),
				communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeInfo_default, { key: 0 })) : createCommentVNode("", true),
				quickConnect.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.banner)
				}, [createVNode(QuickConnectBanner_default, {
					text: quickConnect.value.text,
					disclaimer: quickConnect.value.disclaimer
				}, null, 8, ["text", "disclaimer"])], 2)) : createCommentVNode("", true),
				rootView.value ? (openBlock(), createBlock(OrderSwitcher_default, {
					key: 2,
					"root-view": rootView.value
				}, createSlots({ _: 2 }, [shouldShowTriggers.value ? {
					name: "triggers",
					fn: withCtx(() => [withMemo([search.value], () => createVNode(CategorizedItemsRenderer_default, {
						elements: parsedTriggerActions.value,
						category: triggerCategoryName.value,
						"mouse-over-tooltip": unref(i18n).baseText("nodeCreator.actionsTooltip.triggersStartWorkflow"),
						"is-trigger-category": "",
						expanded: isTriggerRootView.value || parsedActionActions.value.length === 0,
						onSelected
					}, createSlots({ _: 2 }, [hasNoTriggerActions.value ? {
						name: "empty",
						fn: withCtx(() => [hasNoTriggerActions.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 0,
							theme: "info",
							iconless: "",
							slim: "",
							"data-test-id": "actions-panel-no-triggers-callout"
						}, {
							default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("nodeCreator.actionsCallout.noTriggerItems", { interpolate: { nodeName: subcategory.value ?? "" } })]])]),
							_: 1
						})) : createCommentVNode("", true), createVNode(ItemsRenderer_default, {
							elements: unref(placeholderTriggerActions),
							onSelected
						}, null, 8, ["elements"])]),
						key: "0"
					} : {
						name: "empty",
						fn: withCtx(() => [withDirectives(createBaseVNode("p", {
							class: normalizeClass(_ctx.$style.resetSearch),
							onClick: resetSearch
						}, null, 2), [[_directive_n8n_html, unref(i18n).baseText("nodeCreator.actionsCategory.noMatchingTriggers")]])]),
						key: "1"
					}]), 1032, [
						"elements",
						"category",
						"mouse-over-tooltip",
						"expanded"
					]), _cache, 0)]),
					key: "0"
				} : void 0, !isTriggerRootView.value || parsedActionActionsBaseline.value.length !== 0 ? {
					name: "actions",
					fn: withCtx(() => [withMemo([search.value], () => createVNode(CategorizedItemsRenderer_default, {
						elements: parsedActionActions.value,
						category: unref(actionsCategoryLocales).actions,
						"mouse-over-tooltip": unref(i18n).baseText("nodeCreator.actionsTooltip.actionsPerformStep"),
						expanded: !isTriggerRootView.value || parsedTriggerActions.value.length === 0,
						onSelected
					}, {
						empty: withCtx(() => [!search.value ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
							key: 0,
							theme: "info",
							type: "note",
							class: normalizeClass(_ctx.$style.actionsEmpty)
						}, {
							default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("nodeCreator.actionsCallout.noActionItems", { interpolate: { nodeName: subcategory.value ?? "" } })]])]),
							_: 1
						}, 8, ["class"])) : withDirectives((openBlock(), createElementBlock("p", {
							key: 1,
							class: normalizeClass(_ctx.$style.resetSearch),
							"data-test-id": "actions-panel-no-matching-actions",
							onClick: resetSearch
						}, null, 2)), [[_directive_n8n_html, unref(i18n).baseText("nodeCreator.actionsCategory.noMatchingActions")]])]),
						default: withCtx(() => [!unref(usersStore).userActivated && isTriggerRootView.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 0,
							theme: "info",
							iconless: "",
							slim: "",
							"data-test-id": "actions-panel-activation-callout"
						}, {
							default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("nodeCreator.actionsCallout.triggersStartWorkflow")]])]),
							_: 1
						})) : createCommentVNode("", true)]),
						_: 1
					}, 8, [
						"elements",
						"category",
						"mouse-over-tooltip",
						"expanded"
					]), _cache, 1)]),
					key: "1"
				} : void 0]), 1032, ["root-view"])) : createCommentVNode("", true),
				containsAPIAction.value && !communityNodeDetails.value ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.apiHint)
				}, [withDirectives(createBaseVNode("span", { onClick: withModifiers(addHttpNode, ["prevent"]) }, null, 512), [[_directive_n8n_html, unref(i18n).baseText("nodeCreator.actionsList.apiCall", { interpolate: { node: subcategory.value ?? "" } })]])], 2)) : createCommentVNode("", true),
				communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeFooter_default, {
					key: 4,
					class: normalizeClass(_ctx.$style.communityNodeFooter),
					"package-name": communityNodeDetails.value.packageName,
					"show-manage": communityNodeDetails.value.installed && unref(usersStore).isAdminOrOwner
				}, null, 8, [
					"class",
					"package-name",
					"show-manage"
				])) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/Modes/ActionsMode.vue?vue&type=style&index=0&lang.module.scss
var container$3 = "_container_1tuel_388";
var containerPaddingBottom = "_containerPaddingBottom_1tuel_394";
var communityNodeFooter = "_communityNodeFooter_1tuel_398";
var resetSearch = "_resetSearch_1tuel_402";
var actionsEmpty = "_actionsEmpty_1tuel_416";
var apiHint = "_apiHint_1tuel_424";
var banner = "_banner_1tuel_432";
var shimmer$8 = "_shimmer_1tuel_1";
var spin$8 = "_spin_1tuel_1";
var opacityPulse$8 = "_opacityPulse_1tuel_1";
var popoverIn$8 = "_popoverIn_1tuel_1";
var fadeIn$8 = "_fadeIn_1tuel_1";
var collapsibleSlideDown$8 = "_collapsibleSlideDown_1tuel_1";
var collapsibleSlideUp$8 = "_collapsibleSlideUp_1tuel_1";
var collapsibleSlideDownBlurred$8 = "_collapsibleSlideDownBlurred_1tuel_1";
var collapsibleSlideUpBlurred$8 = "_collapsibleSlideUpBlurred_1tuel_1";
var blurSwapIn$8 = "_blurSwapIn_1tuel_1";
var blurSwapOut$8 = "_blurSwapOut_1tuel_1";
var pulseGlow$8 = "_pulseGlow_1tuel_1";
var pulseGlowDelayed$8 = "_pulseGlowDelayed_1tuel_1";
var fade$8 = "_fade_1tuel_1";
var fadeInUp$8 = "_fadeInUp_1tuel_1";
var fadeInDown$8 = "_fadeInDown_1tuel_1";
var fadeInLeft$8 = "_fadeInLeft_1tuel_1";
var fadeInRight$8 = "_fadeInRight_1tuel_1";
var fadeOut$8 = "_fadeOut_1tuel_1";
var fadeOutDown$8 = "_fadeOutDown_1tuel_1";
var fadeOutUp$8 = "_fadeOutUp_1tuel_1";
var fadeOutLeft$8 = "_fadeOutLeft_1tuel_1";
var fadeOutRight$8 = "_fadeOutRight_1tuel_1";
var ping$8 = "_ping_1tuel_1";
var blinkBackground$8 = "_blinkBackground_1tuel_1";
var typingBlink$8 = "_typingBlink_1tuel_1";
var ActionsMode_vue_vue_type_style_index_0_lang_module_default = {
	container: container$3,
	containerPaddingBottom,
	communityNodeFooter,
	resetSearch,
	actionsEmpty,
	apiHint,
	banner,
	shimmer: shimmer$8,
	spin: spin$8,
	"skeleton-pulse": "_skeleton-pulse_1tuel_1",
	opacityPulse: opacityPulse$8,
	popoverIn: popoverIn$8,
	fadeIn: fadeIn$8,
	collapsibleSlideDown: collapsibleSlideDown$8,
	collapsibleSlideUp: collapsibleSlideUp$8,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$8,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$8,
	blurSwapIn: blurSwapIn$8,
	blurSwapOut: blurSwapOut$8,
	pulseGlow: pulseGlow$8,
	pulseGlowDelayed: pulseGlowDelayed$8,
	fade: fade$8,
	fadeInUp: fadeInUp$8,
	fadeInDown: fadeInDown$8,
	fadeInLeft: fadeInLeft$8,
	fadeInRight: fadeInRight$8,
	fadeOut: fadeOut$8,
	fadeOutDown: fadeOutDown$8,
	fadeOutUp: fadeOutUp$8,
	fadeOutLeft: fadeOutLeft$8,
	fadeOutRight: fadeOutRight$8,
	ping: ping$8,
	blinkBackground: blinkBackground$8,
	typingBlink: typingBlink$8
};
var ActionsMode_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ActionsMode_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ActionsMode_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/Modes/AgentsMode.vue?vue&type=script&setup=true&lang.ts
var AgentsMode_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentsMode",
	emits: ["nodeTypeSelected"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const { debounce } = useDebounce();
		const { popViewStack, updateCurrentViewStack } = useViewStacks();
		const { registerKeyHook } = useKeyboardNavigation();
		const { setAddedNodeActionParameters, shouldPrependChatTrigger } = useActions();
		const nodeCreatorStore = useNodeCreatorStore();
		const uiStore = useUIStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const projectId = useAgentScopeProjectId();
		const { resolveProjectName } = useAgentProjectNameResolver();
		const { agentsResources, isLoadingResources, loadError, hasMoreAgentsToLoad, onSearchFilter, loadMore, setAgentsResources } = useAgentResourcesLocator(projectId, resolveProjectName);
		const search = computed(() => useViewStacks().activeViewStack.search ?? "");
		const debouncedSearchFilter = debounce((term) => {
			onSearchFilter(term);
		}, {
			debounceTime: getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH),
			trailing: true
		});
		watch(search, (term) => debouncedSearchFilter(term));
		const { isFeatureEnabled: isInlineAgentsEnabled } = useInlineAgentsExperiment();
		const staticElements = computed(() => {
			if (!isInlineAgentsEnabled.value) return [];
			return [{
				key: "agent-create-new",
				uuid: "agent-create-new",
				type: "agent",
				properties: {
					name: i18n.baseText("nodeCreator.agentsPanel.createNewAgent"),
					description: i18n.baseText("nodeCreator.agentsPanel.createNewAgentDescription"),
					variant: "create"
				}
			}, {
				key: i18n.baseText("nodeCreator.agentsPanel.existingAgentsLabel"),
				uuid: "agents-divider",
				type: "label",
				subcategory: "",
				properties: { key: i18n.baseText("nodeCreator.agentsPanel.existingAgentsLabel") }
			}];
		});
		const agentElements = computed(() => agentsResources.value.map((agent) => ({
			key: agent.value,
			uuid: `agent-${agent.value}`,
			type: "agent",
			properties: {
				name: agent.name,
				variant: "existing",
				agentId: agent.value,
				personalisation: agent.personalisation
			}
		})));
		const showEmptyState = computed(() => !isLoadingResources.value && !loadError.value && agentElements.value.length === 0);
		const showLoadingSkeleton = computed(() => isLoadingResources.value && agentElements.value.length === 0);
		const loadMoreSentinel = ref(null);
		const { observe: observeForLoadMore } = useIntersectionObserver({
			root: ref(null),
			onIntersect: () => {
				loadMore();
			}
		});
		watch([
			loadMoreSentinel,
			hasMoreAgentsToLoad,
			() => agentElements.value.length
		], ([sentinel, canLoadMore]) => {
			if (sentinel && canLoadMore) observeForLoadMore(sentinel);
		}, { immediate: true });
		function chatInputMessagePreset() {
			const willAutoAddChatTrigger = shouldPrependChatTrigger([{ type: MESSAGE_AN_AGENT_NODE_TYPE }]);
			const connectsToChatTrigger = (uiStore.lastInteractedWithNodeId ? workflowDocumentStore.value.getNodeById(uiStore.lastInteractedWithNodeId) : void 0)?.type === CHAT_TRIGGER_NODE_TYPE;
			return willAutoAddChatTrigger || connectsToChatTrigger ? { message: "={{ $json.chatInput }}" } : {};
		}
		function onSelected(element) {
			if (element.type !== "agent") return;
			const messagePreset = chatInputMessagePreset();
			emit("nodeTypeSelected", [{ type: MESSAGE_AN_AGENT_NODE_TYPE }]);
			if (element.properties.variant === "create") {
				setAddedNodeActionParameters({
					name: element.properties.name,
					key: MESSAGE_AN_AGENT_NODE_TYPE,
					value: {
						agentSource: "inline",
						...messagePreset
					}
				});
				nodeCreatorStore.onAgentPanelOptionSelected({ choice: "create_new" });
				return;
			}
			setAddedNodeActionParameters({
				name: element.properties.name,
				key: MESSAGE_AN_AGENT_NODE_TYPE,
				value: {
					agentSource: "referenced",
					agentId: {
						__rl: true,
						mode: "list",
						value: element.properties.agentId ?? "",
						cachedResultName: element.properties.name
					},
					...messagePreset
				}
			});
			nodeCreatorStore.onAgentPanelOptionSelected({ choice: "existing_agent" });
		}
		function onKeySelect(activeItemId) {
			const element = [...staticElements.value, ...agentElements.value].find((item) => item.uuid === activeItemId);
			if (element) onSelected(element);
		}
		registerKeyHook("AgentsModeSelect", {
			keyboardKeys: ["ArrowRight", "Enter"],
			condition: (type) => type === "agent",
			handler: onKeySelect
		});
		registerKeyHook("AgentsModeLeft", {
			keyboardKeys: ["ArrowLeft"],
			condition: (type) => type === "agent",
			handler: () => popViewStack()
		});
		function resetSearch() {
			updateCurrentViewStack({ search: "" });
		}
		onMounted(() => {
			setAgentsResources();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "node-creator-agents-panel"
			}, [createVNode(ItemsRenderer_default, {
				elements: staticElements.value,
				onSelected
			}, null, 8, ["elements"]), showLoadingSkeleton.value ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.state),
				loading: true,
				rows: 3,
				variant: "p"
			}, null, 8, ["class"])) : unref(loadError) && agentElements.value.length === 0 ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.state),
				"data-test-id": "agents-panel-load-error"
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeCreator.agentsPanel.loadError")), 1)]),
				_: 1
			}), createVNode(unref(N8nLink_default), {
				size: "small",
				onClick: unref(setAgentsResources)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
				_: 1
			}, 8, ["onClick"])], 2)) : showEmptyState.value ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.state),
				"data-test-id": "agents-panel-empty"
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(search.value ? unref(i18n).baseText("nodeCreator.agentsPanel.noMatchingAgents") : unref(i18n).baseText("nodeCreator.agentsPanel.empty")), 1)]),
				_: 1
			}), search.value ? (openBlock(), createBlock(unref(N8nLink_default), {
				key: 0,
				size: "small",
				onClick: resetSearch
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.clear")), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [createVNode(ItemsRenderer_default, {
				elements: agentElements.value,
				onSelected
			}, null, 8, ["elements"]), unref(loadError) ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.state),
				"data-test-id": "agents-panel-load-more-error"
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeCreator.agentsPanel.loadError")), 1)]),
				_: 1
			}), createVNode(unref(N8nLink_default), {
				size: "small",
				onClick: unref(setAgentsResources)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
				_: 1
			}, 8, ["onClick"])], 2)) : unref(hasMoreAgentsToLoad) && !unref(isLoadingResources) ? (openBlock(), createElementBlock("div", {
				key: 1,
				ref_key: "loadMoreSentinel",
				ref: loadMoreSentinel,
				class: normalizeClass(_ctx.$style.sentinel),
				"data-test-id": "agents-panel-load-more"
			}, [createVNode(unref(N8nLoading_default), {
				loading: true,
				rows: 1,
				variant: "p"
			})], 2)) : createCommentVNode("", true)], 64))], 2);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/Modes/AgentsMode.vue?vue&type=style&index=0&lang.module.scss
var container$2 = "_container_1sukq_388";
var state = "_state_1sukq_394";
var sentinel = "_sentinel_1sukq_401";
var shimmer$7 = "_shimmer_1sukq_1";
var spin$7 = "_spin_1sukq_1";
var opacityPulse$7 = "_opacityPulse_1sukq_1";
var popoverIn$7 = "_popoverIn_1sukq_1";
var fadeIn$7 = "_fadeIn_1sukq_1";
var collapsibleSlideDown$7 = "_collapsibleSlideDown_1sukq_1";
var collapsibleSlideUp$7 = "_collapsibleSlideUp_1sukq_1";
var collapsibleSlideDownBlurred$7 = "_collapsibleSlideDownBlurred_1sukq_1";
var collapsibleSlideUpBlurred$7 = "_collapsibleSlideUpBlurred_1sukq_1";
var blurSwapIn$7 = "_blurSwapIn_1sukq_1";
var blurSwapOut$7 = "_blurSwapOut_1sukq_1";
var pulseGlow$7 = "_pulseGlow_1sukq_1";
var pulseGlowDelayed$7 = "_pulseGlowDelayed_1sukq_1";
var fade$7 = "_fade_1sukq_1";
var fadeInUp$7 = "_fadeInUp_1sukq_1";
var fadeInDown$7 = "_fadeInDown_1sukq_1";
var fadeInLeft$7 = "_fadeInLeft_1sukq_1";
var fadeInRight$7 = "_fadeInRight_1sukq_1";
var fadeOut$7 = "_fadeOut_1sukq_1";
var fadeOutDown$7 = "_fadeOutDown_1sukq_1";
var fadeOutUp$7 = "_fadeOutUp_1sukq_1";
var fadeOutLeft$7 = "_fadeOutLeft_1sukq_1";
var fadeOutRight$7 = "_fadeOutRight_1sukq_1";
var ping$7 = "_ping_1sukq_1";
var blinkBackground$7 = "_blinkBackground_1sukq_1";
var typingBlink$7 = "_typingBlink_1sukq_1";
var AgentsMode_vue_vue_type_style_index_0_lang_module_default = {
	container: container$2,
	state,
	sentinel,
	shimmer: shimmer$7,
	spin: spin$7,
	"skeleton-pulse": "_skeleton-pulse_1sukq_1",
	opacityPulse: opacityPulse$7,
	popoverIn: popoverIn$7,
	fadeIn: fadeIn$7,
	collapsibleSlideDown: collapsibleSlideDown$7,
	collapsibleSlideUp: collapsibleSlideUp$7,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$7,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$7,
	blurSwapIn: blurSwapIn$7,
	blurSwapOut: blurSwapOut$7,
	pulseGlow: pulseGlow$7,
	pulseGlowDelayed: pulseGlowDelayed$7,
	fade: fade$7,
	fadeInUp: fadeInUp$7,
	fadeInDown: fadeInDown$7,
	fadeInLeft: fadeInLeft$7,
	fadeInRight: fadeInRight$7,
	fadeOut: fadeOut$7,
	fadeOutDown: fadeOutDown$7,
	fadeOutUp: fadeOutUp$7,
	fadeOutLeft: fadeOutLeft$7,
	fadeOutRight: fadeOutRight$7,
	ping: ping$7,
	blinkBackground: blinkBackground$7,
	typingBlink: typingBlink$7
};
var AgentsMode_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentsMode_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentsMode_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/Panel/NoResultsIcon.vue
var _sfc_main = {};
var _hoisted_1$3 = {
	width: "75px",
	height: "75px",
	viewBox: "0 0 75 75",
	version: "1.1",
	xmlns: "http://www.w3.org/2000/svg",
	"xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [createStaticVNode("<title>no-nodes-keyart</title><g id=\"Nodes-panel-prototype-V2.1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"nodes-panel-(component)\" transform=\"translate(-2085.000000, -352.000000)\"><g id=\"nodes_panel\" transform=\"translate(1880.000000, 151.000000)\"><g id=\"Panel\" transform=\"translate(50.000000, 0.000000)\"><g id=\"Group-3\" transform=\"translate(105.000000, 171.000000)\"><g id=\"no-nodes-keyart\" transform=\"translate(50.000000, 30.000000)\"><rect id=\"Rectangle\" x=\"0\" y=\"0\" width=\"75\" height=\"75\"></rect><g id=\"Group\" transform=\"translate(6.562500, 8.164062)\" fill=\"#C4C8D1\" fill-rule=\"nonzero\"><polygon id=\"Rectangle\" transform=\"translate(49.192016, 45.302553) rotate(-45.000000) translate(-49.192016, -45.302553) \" points=\"44.5045606 32.0526802 53.8794707 32.0526802 53.8794707 58.5524261 44.5045606 58.5524261\"></polygon><path id=\"Path\" d=\"M48.125,23.0859375 C54.15625,23.0859375 59.0625,18.1796875 59.0625,12.1484375 C59.0625,10.3359375 58.5625,8.6484375 57.78125,7.1484375 L49.34375,15.5859375 L44.6875,10.9296875 L53.125,2.4921875 C51.625,1.7109375 49.9375,1.2109375 48.125,1.2109375 C42.09375,1.2109375 37.1875,6.1171875 37.1875,12.1484375 C37.1875,13.4296875 37.4375,14.6484375 37.84375,15.7734375 L32.0625,21.5546875 L26.5,15.9921875 L28.71875,13.7734375 L24.3125,9.3671875 L30.9375,2.7421875 C27.28125,-0.9140625 21.34375,-0.9140625 17.6875,2.7421875 L6.625,13.8046875 L11.03125,18.2109375 L2.21875,18.2109375 L1.38777878e-15,20.4296875 L11.0625,31.4921875 L13.28125,29.2734375 L13.28125,20.4296875 L17.6875,24.8359375 L19.90625,22.6171875 L25.46875,28.1796875 L2.3125,51.3359375 L8.9375,57.9609375 L44.5,22.4296875 C45.625,22.8359375 46.84375,23.0859375 48.125,23.0859375 Z\"></path></g></g></g></g></g></g></g>", 2)])]);
}
var NoResultsIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
//#region src/features/shared/nodeCreator/components/Panel/NoResults.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["textContent"];
var _hoisted_2$1 = ["textContent"];
var NoResults_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NoResults",
	props: {
		showIcon: { type: Boolean },
		showRequest: { type: Boolean },
		rootView: {}
	},
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass({
					[_ctx.$style.noResults]: true,
					[_ctx.$style.iconless]: !__props.showIcon
				}),
				"data-test-id": "node-creator-no-results"
			}, [
				__props.showIcon ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.icon)
				}, [createVNode(NoResultsIcon_default)], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [
					renderSlot(_ctx.$slots, "title"),
					createBaseVNode("p", { textContent: toDisplayString(unref(i18n).baseText("nodeCreator.noResults.weDidntMakeThatYet")) }, null, 8, _hoisted_1$2),
					__props.rootView === unref("Regular") || __props.rootView === unref("Trigger") ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.action)
					}, [
						createTextVNode(toDisplayString(unref(i18n).baseText("nodeCreator.noResults.dontWorryYouCanProbablyDoItWithThe")) + " ", 1),
						__props.rootView === unref("Trigger") ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nLink_default), { onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("addWebhookNode")) }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeCreator.noResults.webhook")), 1)]),
							_: 1
						}), createTextVNode(" " + toDisplayString(`${unref(i18n).baseText("nodeCreator.noResults.or")} `), 1)], 64)) : createCommentVNode("", true),
						createVNode(unref(N8nLink_default), { onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("addHttpNode")) }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeCreator.noResults.httpRequest")), 1)]),
							_: 1
						}),
						createTextVNode(" " + toDisplayString(unref(i18n).baseText("nodeCreator.noResults.node")), 1)
					], 2)) : createCommentVNode("", true)
				], 2),
				__props.showRequest ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.request)
				}, [createBaseVNode("p", { textContent: toDisplayString(unref(i18n).baseText("nodeCreator.noResults.wantUsToMakeItFaster")) }, null, 8, _hoisted_2$1), createBaseVNode("div", null, [createVNode(unref(N8nLink_default), { to: unref(REQUEST_NODE_FORM_URL) }, {
					default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("nodeCreator.noResults.requestTheNode")), 1), createBaseVNode("span", null, [createVNode(unref(N8nIcon_default), {
						class: normalizeClass(_ctx.$style.external),
						icon: "external-link",
						title: unref(i18n).baseText("nodeCreator.noResults.requestTheNode")
					}, null, 8, ["class", "title"])])]),
					_: 1
				}, 8, ["to"])])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/Panel/NoResults.vue?vue&type=style&index=0&lang.module.scss
var noResults = "_noResults_fv6fc_388";
var title$2 = "_title_fv6fc_401";
var action = "_action_fv6fc_410";
var request = "_request_fv6fc_411";
var icon = "_icon_fv6fc_427";
var external = "_external_fv6fc_433";
var shimmer$6 = "_shimmer_fv6fc_1";
var spin$6 = "_spin_fv6fc_1";
var opacityPulse$6 = "_opacityPulse_fv6fc_1";
var popoverIn$6 = "_popoverIn_fv6fc_1";
var fadeIn$6 = "_fadeIn_fv6fc_1";
var collapsibleSlideDown$6 = "_collapsibleSlideDown_fv6fc_1";
var collapsibleSlideUp$6 = "_collapsibleSlideUp_fv6fc_1";
var collapsibleSlideDownBlurred$6 = "_collapsibleSlideDownBlurred_fv6fc_1";
var collapsibleSlideUpBlurred$6 = "_collapsibleSlideUpBlurred_fv6fc_1";
var blurSwapIn$6 = "_blurSwapIn_fv6fc_1";
var blurSwapOut$6 = "_blurSwapOut_fv6fc_1";
var pulseGlow$6 = "_pulseGlow_fv6fc_1";
var pulseGlowDelayed$6 = "_pulseGlowDelayed_fv6fc_1";
var fade$6 = "_fade_fv6fc_1";
var fadeInUp$6 = "_fadeInUp_fv6fc_1";
var fadeInDown$6 = "_fadeInDown_fv6fc_1";
var fadeInLeft$6 = "_fadeInLeft_fv6fc_1";
var fadeInRight$6 = "_fadeInRight_fv6fc_1";
var fadeOut$6 = "_fadeOut_fv6fc_1";
var fadeOutDown$6 = "_fadeOutDown_fv6fc_1";
var fadeOutUp$6 = "_fadeOutUp_fv6fc_1";
var fadeOutLeft$6 = "_fadeOutLeft_fv6fc_1";
var fadeOutRight$6 = "_fadeOutRight_fv6fc_1";
var ping$6 = "_ping_fv6fc_1";
var blinkBackground$6 = "_blinkBackground_fv6fc_1";
var typingBlink$6 = "_typingBlink_fv6fc_1";
var NoResults_vue_vue_type_style_index_0_lang_module_default = {
	noResults,
	title: title$2,
	action,
	request,
	icon,
	external,
	shimmer: shimmer$6,
	spin: spin$6,
	"skeleton-pulse": "_skeleton-pulse_fv6fc_1",
	opacityPulse: opacityPulse$6,
	popoverIn: popoverIn$6,
	fadeIn: fadeIn$6,
	collapsibleSlideDown: collapsibleSlideDown$6,
	collapsibleSlideUp: collapsibleSlideUp$6,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$6,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$6,
	blurSwapIn: blurSwapIn$6,
	blurSwapOut: blurSwapOut$6,
	pulseGlow: pulseGlow$6,
	pulseGlowDelayed: pulseGlowDelayed$6,
	fade: fade$6,
	fadeInUp: fadeInUp$6,
	fadeInDown: fadeInDown$6,
	fadeInLeft: fadeInLeft$6,
	fadeInRight: fadeInRight$6,
	fadeOut: fadeOut$6,
	fadeOutDown: fadeOutDown$6,
	fadeOutUp: fadeOutUp$6,
	fadeOutLeft: fadeOutLeft$6,
	fadeOutRight: fadeOutRight$6,
	ping: ping$6,
	blinkBackground: blinkBackground$6,
	typingBlink: typingBlink$6
};
var NoResults_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NoResults_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NoResults_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/Modes/NodesMode.vue?vue&type=script&setup=true&lang.ts
var NodesMode_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodesMode",
	emits: ["nodeTypeSelected"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const { isRagStarterCalloutVisible, openSampleWorkflowTemplate } = useCalloutHelpers();
		const { mergedNodes, actions, onSubcategorySelected } = useNodeCreatorStore();
		const { pushViewStack, popViewStack, isAiSubcategoryView, isHitlSubcategoryView } = useViewStacks();
		const { setAddedNodeActionParameters, nodeCreateElementToNodeTypeSelectedPayload } = useActions();
		const { registerKeyHook } = useKeyboardNavigation();
		const activeViewStack = computed(() => useViewStacks().activeViewStack);
		const globalSearchItemsDiff = computed(() => useViewStacks().globalSearchItemsDiff);
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const communityNodesAndActions = computed(() => useNodeTypesStore().communityNodesAndActions);
		const moreFromCommunity = computed(() => {
			return filterAndSearchNodes(communityNodesAndActions.value.mergedNodes, activeViewStack.value.search ?? "", {
				isAiSubcategory: isAiSubcategoryView(activeViewStack.value),
				isHitlSubcategory: isHitlSubcategoryView(activeViewStack.value),
				aiConnectionType: activeViewStack.value.connectionType
			});
		});
		const isSearchResultEmpty = computed(() => {
			return (activeViewStack.value.items || []).length === 0 && globalCallouts.value.length + globalSearchItemsDiff.value.length + moreFromCommunity.value.length === 0;
		});
		function getFilteredActions(node, actions) {
			const nodeActions = actions?.[node.key] || [];
			if (activeViewStack.value.subcategory === "Human in the Loop") return getHumanInTheLoopActions(nodeActions);
			if (activeViewStack.value.actionsFilter) return activeViewStack.value.actionsFilter(nodeActions);
			return nodeActions;
		}
		function onSelected(item) {
			if (item.type === "subcategory") {
				const subcategoryKey = (0, import_camelCase.default)(item.properties.title);
				const title = i18n.baseText(`nodeCreator.subcategoryNames.${subcategoryKey}`);
				const infoKey = `nodeCreator.subcategoryInfos.${subcategoryKey}`;
				const info = i18n.baseText(infoKey);
				const extendedInfo = info !== infoKey ? { info } : {};
				const nodeIcon = item.properties.icon ? {
					type: "icon",
					name: item.properties.icon
				} : void 0;
				pushViewStack({
					subcategory: item.key,
					mode: "nodes",
					title,
					nodeIcon,
					...extendedInfo,
					...item.properties.panelClass ? { panelClass: item.properties.panelClass } : {},
					...item.properties.connectionType ? { connectionType: item.properties.connectionType } : {},
					rootView: activeViewStack.value.rootView,
					forceIncludeNodes: item.properties.forceIncludeNodes,
					baseFilter: baseSubcategoriesFilter,
					itemsMapper: subcategoriesMapper,
					sections: item.properties.sections,
					items: item.properties.items,
					hideActions: item.properties.hideActions,
					actionsFilter: item.properties.actionsFilter
				});
				onSubcategorySelected({ subcategory: item.key });
			}
			if (item.type === "node") {
				const payload = nodeCreateElementToNodeTypeSelectedPayload(item);
				let nodeActions = getFilteredActions(item, actions);
				const notInstalledCommunityNode = isCommunityPackageName(item.key) && !useNodeTypesStore().getIsNodeInstalled(item.key);
				const nodeIcon = getNodeIconSource(item.properties, null, workflowDocumentStore?.value?.getExpressionHandler() ?? null);
				if (item.key === "n8n-nodes-base.messageAnAgent") {
					pushViewStack({
						title: item.properties.displayName,
						nodeIcon,
						rootView: activeViewStack.value.rootView,
						hasSearch: true,
						mode: "agents",
						items: []
					});
					return;
				}
				if (shouldShowCommunityNodeDetails(isCommunityPackageName(item.key), activeViewStack.value) || notInstalledCommunityNode) {
					if (!nodeActions.length) nodeActions = getFilteredActions(item, communityNodesAndActions.value.actions);
					pushViewStack(prepareCommunityNodeDetailsViewStack(item, nodeIcon, activeViewStack.value.rootView, nodeActions));
					return;
				}
				if (nodeActions.length === 1) {
					emit("nodeTypeSelected", [payload]);
					setAddedNodeActionParameters({
						name: nodeActions[0].defaults.name ?? item.properties.displayName,
						key: item.key,
						value: nodeActions[0].values
					});
					return;
				}
				if (nodeActions.length === 0 || activeViewStack.value.hideActions) {
					emit("nodeTypeSelected", [payload]);
					return;
				}
				const transformedActions = nodeActions?.map((a) => transformNodeType(a, item.properties.displayName, "action"));
				pushViewStack({
					subcategory: item.properties.displayName,
					title: item.properties.displayName,
					nodeIcon,
					rootView: activeViewStack.value.rootView,
					hasSearch: true,
					mode: "actions",
					items: transformedActions
				});
			}
			if (item.type === "view") {
				const views = {
					[TRIGGER_NODE_CREATOR_VIEW]: TriggerView,
					[REGULAR_NODE_CREATOR_VIEW]: RegularView,
					["AI"]: AIView,
					[AI_OTHERS_NODE_CREATOR_VIEW]: AINodesView
				};
				const itemKey = item.key;
				const matchedView = views[itemKey];
				if (!matchedView) {
					console.warn(`No view found for ${itemKey}`);
					return;
				}
				const view = matchedView(mergedNodes);
				pushViewStack({
					title: view.title,
					subtitle: view?.subtitle ?? "",
					info: view?.info ?? "",
					items: view.items,
					hasSearch: true,
					rootView: view.value,
					mode: "nodes",
					searchItems: mergedNodes
				});
			}
			if (item.type === "link") window.open(item.properties.url, "_blank");
			if (item.type === "openTemplate") openSampleWorkflowTemplate(item.properties.templateId, { telemetry: {
				source: "nodeCreator",
				section: activeViewStack.value.title
			} });
		}
		function subcategoriesMapper(item) {
			if (item.type !== "node") return item;
			const hasTriggerGroup = item.properties.group.includes("trigger");
			const hasActions = getFilteredActions(item, actions).length > 0;
			if (hasTriggerGroup && hasActions) {
				if (item.properties?.codex) item.properties.codex.alias = [...item.properties.codex?.alias || [], item.properties.displayName];
				item.properties.displayName = item.properties.displayName.replace(" Trigger", "");
			}
			return item;
		}
		function baseSubcategoriesFilter(item) {
			if (item.type === "section") return true;
			if (item.type !== "node") return false;
			const hasTriggerGroup = item.properties.group.includes("trigger");
			const hasActions = getFilteredActions(item, actions).length > 0;
			if (activeViewStack.value.rootView === "Trigger") return hasActions || hasTriggerGroup;
			return hasActions || !hasTriggerGroup;
		}
		const globalCallouts = computed(() => [...getRootSearchCallouts(activeViewStack.value.search ?? "", { isRagStarterCalloutVisible: isRagStarterCalloutVisible.value }, mergedNodes)]);
		function arrowLeft() {
			popViewStack();
		}
		function onKeySelect(activeItemId) {
			const item = flattenCreateElements([
				...globalCallouts.value ?? [],
				...activeViewStack.value.items ?? [],
				...globalSearchItemsDiff.value ?? [],
				...moreFromCommunity.value ?? []
			]).find((i) => i.uuid === activeItemId);
			if (!item) return;
			onSelected(item);
		}
		registerKeyHook("MainViewArrowRight", {
			keyboardKeys: ["ArrowRight", "Enter"],
			condition: (type) => [
				"subcategory",
				"node",
				"link",
				"view",
				"openTemplate"
			].includes(type),
			handler: onKeySelect
		});
		registerKeyHook("MainViewArrowLeft", {
			keyboardKeys: ["ArrowLeft"],
			condition: (type) => [
				"subcategory",
				"node",
				"link",
				"view",
				"openTemplate"
			].includes(type),
			handler: arrowLeft
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", null, [
				createVNode(ItemsRenderer_default, {
					elements: globalCallouts.value,
					class: normalizeClass(_ctx.$style.items),
					onSelected
				}, null, 8, ["elements", "class"]),
				withMemo([activeViewStack.value.search], () => createVNode(ItemsRenderer_default, {
					elements: activeViewStack.value.items,
					class: normalizeClass(_ctx.$style.items),
					onSelected
				}, createSlots({ _: 2 }, [isSearchResultEmpty.value ? {
					name: "empty",
					fn: withCtx(() => [createVNode(NoResults_default, {
						"root-view": activeViewStack.value.rootView,
						"show-icon": "",
						"show-request": "",
						onAddWebhookNode: _cache[0] || (_cache[0] = ($event) => emit("nodeTypeSelected", [{ type: unref("n8n-nodes-base.webhook") }])),
						onAddHttpNode: _cache[1] || (_cache[1] = ($event) => emit("nodeTypeSelected", [{ type: unref("n8n-nodes-base.httpRequest") }]))
					}, null, 8, ["root-view"])]),
					key: "0"
				} : void 0]), 1032, ["elements", "class"]), _cache, 2),
				globalSearchItemsDiff.value.length > 0 ? (openBlock(), createBlock(CategorizedItemsRenderer_default, {
					key: 0,
					elements: globalSearchItemsDiff.value,
					category: unref(i18n).baseText("nodeCreator.categoryNames.otherCategories"),
					expanded: true,
					onSelected
				}, null, 8, ["elements", "category"])) : createCommentVNode("", true),
				moreFromCommunity.value.length > 0 ? (openBlock(), createBlock(CategorizedItemsRenderer_default, {
					key: 1,
					elements: moreFromCommunity.value,
					category: unref(i18n).baseText("nodeCreator.categoryNames.moreFromCommunity"),
					expanded: true,
					onSelected
				}, null, 8, ["elements", "category"])) : createCommentVNode("", true)
			]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/Modes/NodesMode.vue?vue&type=style&index=0&lang.module.scss
var items = "_items_1b52q_388";
var shimmer$5 = "_shimmer_1b52q_1";
var spin$5 = "_spin_1b52q_1";
var opacityPulse$5 = "_opacityPulse_1b52q_1";
var popoverIn$5 = "_popoverIn_1b52q_1";
var fadeIn$5 = "_fadeIn_1b52q_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_1b52q_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_1b52q_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_1b52q_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_1b52q_1";
var blurSwapIn$5 = "_blurSwapIn_1b52q_1";
var blurSwapOut$5 = "_blurSwapOut_1b52q_1";
var pulseGlow$5 = "_pulseGlow_1b52q_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_1b52q_1";
var fade$5 = "_fade_1b52q_1";
var fadeInUp$5 = "_fadeInUp_1b52q_1";
var fadeInDown$5 = "_fadeInDown_1b52q_1";
var fadeInLeft$5 = "_fadeInLeft_1b52q_1";
var fadeInRight$5 = "_fadeInRight_1b52q_1";
var fadeOut$5 = "_fadeOut_1b52q_1";
var fadeOutDown$5 = "_fadeOutDown_1b52q_1";
var fadeOutUp$5 = "_fadeOutUp_1b52q_1";
var fadeOutLeft$5 = "_fadeOutLeft_1b52q_1";
var fadeOutRight$5 = "_fadeOutRight_1b52q_1";
var ping$5 = "_ping_1b52q_1";
var blinkBackground$5 = "_blinkBackground_1b52q_1";
var typingBlink$5 = "_typingBlink_1b52q_1";
var NodesMode_vue_vue_type_style_index_0_lang_module_default = {
	items,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_1b52q_1",
	opacityPulse: opacityPulse$5,
	popoverIn: popoverIn$5,
	fadeIn: fadeIn$5,
	collapsibleSlideDown: collapsibleSlideDown$5,
	collapsibleSlideUp: collapsibleSlideUp$5,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$5,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$5,
	blurSwapIn: blurSwapIn$5,
	blurSwapOut: blurSwapOut$5,
	pulseGlow: pulseGlow$5,
	pulseGlowDelayed: pulseGlowDelayed$5,
	fade: fade$5,
	fadeInUp: fadeInUp$5,
	fadeInDown: fadeInDown$5,
	fadeInLeft: fadeInLeft$5,
	fadeInRight: fadeInRight$5,
	fadeOut: fadeOut$5,
	fadeOutDown: fadeOutDown$5,
	fadeOutUp: fadeOutUp$5,
	fadeOutLeft: fadeOutLeft$5,
	fadeOutRight: fadeOutRight$5,
	ping: ping$5,
	blinkBackground: blinkBackground$5,
	typingBlink: typingBlink$5
};
var NodesMode_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodesMode_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodesMode_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/Panel/SearchBar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["placeholder", "value"];
var SearchBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SearchBar",
	props: {
		placeholder: { default: "" },
		modelValue: { default: "" }
	},
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const state = reactive({ inputRef: null });
		const externalHooks = useExternalHooks();
		function focus() {
			state.inputRef?.focus();
		}
		function onInput(event) {
			const input = event.target;
			emit("update:modelValue", input.value.trim());
		}
		function clear() {
			emit("update:modelValue", "");
		}
		onMounted(() => {
			externalHooks.run("nodeCreatorSearchBar.mount", { inputRef: state.inputRef });
			setTimeout(focus, 0);
		});
		onBeforeUnmount(() => {
			state.inputRef?.remove();
		});
		const { inputRef } = toRefs(state);
		__expose({ focus });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.searchContainer),
				"data-test-id": "search-bar"
			}, [
				createBaseVNode("div", { class: normalizeClass({
					[_ctx.$style.prefix]: true,
					[_ctx.$style.active]: __props.modelValue.length > 0
				}) }, [createVNode(unref(N8nIcon_default), {
					icon: "search",
					size: "small"
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, [createBaseVNode("input", {
					ref_key: "inputRef",
					ref: inputRef,
					placeholder: __props.placeholder,
					value: __props.modelValue,
					class: normalizeClass(_ctx.$style.input),
					autofocus: "",
					"data-test-id": "node-creator-search-bar",
					tabindex: "0",
					onInput
				}, null, 42, _hoisted_1$1)], 2),
				__props.modelValue.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.suffix, _ctx.$style.clickable]),
					onClick: clear
				}, [createVNode(unref(N8nIcon_default), {
					size: "small",
					icon: "circle-x"
				})], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/Panel/SearchBar.vue?vue&type=style&index=0&lang.module.scss
var searchContainer = "_searchContainer_6uzu3_388";
var prefix = "_prefix_6uzu3_404";
var active$1 = "_active_6uzu3_409";
var text = "_text_6uzu3_413";
var suffix = "_suffix_6uzu3_429";
var clear = "_clear_6uzu3_435";
var clickable = "_clickable_6uzu3_448";
var shimmer$4 = "_shimmer_6uzu3_1";
var spin$4 = "_spin_6uzu3_1";
var opacityPulse$4 = "_opacityPulse_6uzu3_1";
var popoverIn$4 = "_popoverIn_6uzu3_1";
var fadeIn$4 = "_fadeIn_6uzu3_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_6uzu3_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_6uzu3_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_6uzu3_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_6uzu3_1";
var blurSwapIn$4 = "_blurSwapIn_6uzu3_1";
var blurSwapOut$4 = "_blurSwapOut_6uzu3_1";
var pulseGlow$4 = "_pulseGlow_6uzu3_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_6uzu3_1";
var fade$4 = "_fade_6uzu3_1";
var fadeInUp$4 = "_fadeInUp_6uzu3_1";
var fadeInDown$4 = "_fadeInDown_6uzu3_1";
var fadeInLeft$4 = "_fadeInLeft_6uzu3_1";
var fadeInRight$4 = "_fadeInRight_6uzu3_1";
var fadeOut$4 = "_fadeOut_6uzu3_1";
var fadeOutDown$4 = "_fadeOutDown_6uzu3_1";
var fadeOutUp$4 = "_fadeOutUp_6uzu3_1";
var fadeOutLeft$4 = "_fadeOutLeft_6uzu3_1";
var fadeOutRight$4 = "_fadeOutRight_6uzu3_1";
var ping$4 = "_ping_6uzu3_1";
var blinkBackground$4 = "_blinkBackground_6uzu3_1";
var typingBlink$4 = "_typingBlink_6uzu3_1";
var SearchBar_vue_vue_type_style_index_0_lang_module_default = {
	searchContainer,
	prefix,
	active: active$1,
	text,
	suffix,
	clear,
	clickable,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_6uzu3_1",
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
var SearchBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SearchBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SearchBar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeDetails.vue?vue&type=script&setup=true&lang.ts
var CommunityNodeDetails_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeDetails",
	setup(__props) {
		const { activeViewStack, pushViewStack, popViewStack, getAllNodeCreateElements, updateCurrentViewStack } = useViewStacks();
		const { communityNodeDetails } = activeViewStack;
		const packageName = computed(() => activeViewStack.communityNodeDetails?.packageName);
		const { getQuickConnectOptionByPackageName } = useQuickConnect();
		const quickConnect = computed(() => {
			const pkg = packageName.value;
			return pkg ? getQuickConnectOptionByPackageName(pkg) : void 0;
		});
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const nodeCreatorStore = useNodeCreatorStore();
		const { installNode, loading } = useInstallNode();
		const isAdminOrOwner = computed(() => useUsersStore().isAdminOrOwner);
		const updateViewStack = (key) => {
			const installedNodeKey = removePreviewToken(key);
			const installedNode = getAllNodeCreateElements().find((node) => node.key === installedNodeKey);
			if (installedNode) {
				const nodeActions = nodeCreatorStore.actions?.[installedNode.key] || [];
				popViewStack();
				updateCurrentViewStack({ searchItems: nodeCreatorStore.mergedNodes });
				pushViewStack(prepareCommunityNodeDetailsViewStack(installedNode, getNodeIconSource(installedNode.properties, null, workflowDocumentStore?.value?.getExpressionHandler() ?? null), activeViewStack.rootView, nodeActions), { transitionDirection: "none" });
			} else {
				const viewStack = { ...activeViewStack };
				viewStack.communityNodeDetails.installed = true;
				pushViewStack(activeViewStack, { resetStacks: true });
			}
		};
		const updateStoresAndViewStack = (key) => {
			updateViewStack(key);
			nodeCreatorStore.removeNodeFromMergedNodes(key);
		};
		const onInstall = async () => {
			if (isAdminOrOwner.value && activeViewStack.communityNodeDetails && !communityNodeDetails?.installed) {
				const { key, packageName } = activeViewStack.communityNodeDetails;
				if ((await installNode({
					type: "verified",
					packageName,
					nodeType: key,
					telemetry: {
						source: "cnr package detail page",
						hasQuickConnect: quickConnect.value !== void 0
					}
				})).success) updateStoresAndViewStack(key);
			}
		};
		return (_ctx, _cache) => {
			return unref(communityNodeDetails) ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.container)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [
				unref(communityNodeDetails).nodeIcon ? (openBlock(), createBlock(NodeIcon_default, {
					key: 0,
					class: normalizeClass(_ctx.$style.nodeIcon),
					"icon-source": unref(communityNodeDetails).nodeIcon,
					circle: false,
					"show-tooltip": false
				}, null, 8, ["class", "icon-source"])) : createCommentVNode("", true),
				createBaseVNode("span", null, toDisplayString(unref(communityNodeDetails).title), 1),
				unref(communityNodeDetails).official ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "bottom",
					"show-after": 500
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.officialNode.tooltip", { interpolate: { author: unref(communityNodeDetails).companyName ?? unref(communityNodeDetails).title } })), 1)]),
					default: withCtx(() => [createVNode(unref(verified_default), { class: normalizeClass(_ctx.$style.officialIcon) }, null, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true)
			], 2), createBaseVNode("div", null, [unref(communityNodeDetails).installed ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.installed)
			}, [!unref(communityNodeDetails).official ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.installedIcon),
				icon: "box"
			}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
				color: "text-light",
				size: "small",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeDetails.installed")), 1)]),
				_: 1
			})], 2)) : createCommentVNode("", true), isAdminOrOwner.value && !unref(communityNodeDetails).installed ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				loading: unref(loading),
				disabled: unref(loading),
				label: unref(i18n).baseText("communityNodeDetails.install"),
				size: "small",
				"data-test-id": "install-community-node-button",
				onClick: onInstall
			}, null, 8, [
				"loading",
				"disabled",
				"label"
			])) : createCommentVNode("", true)])], 2)], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeDetails.vue?vue&type=style&index=0&lang.module.scss
var container$1 = "_container_4oj6w_388";
var header$1 = "_header_4oj6w_396";
var title$1 = "_title_4oj6w_403";
var nodeIcon$1 = "_nodeIcon_4oj6w_411";
var installedIcon = "_installedIcon_4oj6w_416";
var officialIcon = "_officialIcon_4oj6w_422";
var installed = "_installed_4oj6w_416";
var shimmer$3 = "_shimmer_4oj6w_1";
var spin$3 = "_spin_4oj6w_1";
var opacityPulse$3 = "_opacityPulse_4oj6w_1";
var popoverIn$3 = "_popoverIn_4oj6w_1";
var fadeIn$3 = "_fadeIn_4oj6w_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_4oj6w_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_4oj6w_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_4oj6w_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_4oj6w_1";
var blurSwapIn$3 = "_blurSwapIn_4oj6w_1";
var blurSwapOut$3 = "_blurSwapOut_4oj6w_1";
var pulseGlow$3 = "_pulseGlow_4oj6w_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_4oj6w_1";
var fade$3 = "_fade_4oj6w_1";
var fadeInUp$3 = "_fadeInUp_4oj6w_1";
var fadeInDown$3 = "_fadeInDown_4oj6w_1";
var fadeInLeft$3 = "_fadeInLeft_4oj6w_1";
var fadeInRight$3 = "_fadeInRight_4oj6w_1";
var fadeOut$3 = "_fadeOut_4oj6w_1";
var fadeOutDown$3 = "_fadeOutDown_4oj6w_1";
var fadeOutUp$3 = "_fadeOutUp_4oj6w_1";
var fadeOutLeft$3 = "_fadeOutLeft_4oj6w_1";
var fadeOutRight$3 = "_fadeOutRight_4oj6w_1";
var ping$3 = "_ping_4oj6w_1";
var blinkBackground$3 = "_blinkBackground_4oj6w_1";
var typingBlink$3 = "_typingBlink_4oj6w_1";
var CommunityNodeDetails_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	header: header$1,
	title: title$1,
	nodeIcon: nodeIcon$1,
	installedIcon,
	officialIcon,
	installed,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_4oj6w_1",
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
var CommunityNodeDetails_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CommunityNodeDetails_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeDetails_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeDocsLink.vue?vue&type=script&setup=true&lang.ts
var CommunityNodeDocsLink_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeDocsLink",
	props: { packageName: {} },
	setup(__props) {
		const props = __props;
		const openCommunityNodeDocsPage = () => {
			const newTab = window.open(`https://www.npmjs.com/package/${props.packageName}`, "_blank");
			if (newTab) newTab.opener = null;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nLink_default), {
				theme: "text",
				class: normalizeClass(_ctx.$style.container),
				title: unref(i18n).baseText("communityNodesDocsLink.link.title"),
				onClick: openCommunityNodeDocsPage
			}, {
				default: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "small",
					bold: "",
					style: { "margin-right": "5px" }
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodesDocsLink.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), { icon: "external-link" })]),
				_: 1
			}, 8, ["class", "title"]);
		};
	}
});
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeDocsLink.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1n0od_388";
var shimmer$2 = "_shimmer_1n0od_1";
var spin$2 = "_spin_1n0od_1";
var opacityPulse$2 = "_opacityPulse_1n0od_1";
var popoverIn$2 = "_popoverIn_1n0od_1";
var fadeIn$2 = "_fadeIn_1n0od_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1n0od_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1n0od_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1n0od_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1n0od_1";
var blurSwapIn$2 = "_blurSwapIn_1n0od_1";
var blurSwapOut$2 = "_blurSwapOut_1n0od_1";
var pulseGlow$2 = "_pulseGlow_1n0od_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1n0od_1";
var fade$2 = "_fade_1n0od_1";
var fadeInUp$2 = "_fadeInUp_1n0od_1";
var fadeInDown$2 = "_fadeInDown_1n0od_1";
var fadeInLeft$2 = "_fadeInLeft_1n0od_1";
var fadeInRight$2 = "_fadeInRight_1n0od_1";
var fadeOut$2 = "_fadeOut_1n0od_1";
var fadeOutDown$2 = "_fadeOutDown_1n0od_1";
var fadeOutUp$2 = "_fadeOutUp_1n0od_1";
var fadeOutLeft$2 = "_fadeOutLeft_1n0od_1";
var fadeOutRight$2 = "_fadeOutRight_1n0od_1";
var ping$2 = "_ping_1n0od_1";
var blinkBackground$2 = "_blinkBackground_1n0od_1";
var typingBlink$2 = "_typingBlink_1n0od_1";
var CommunityNodeDocsLink_vue_vue_type_style_index_0_lang_module_default = {
	container,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1n0od_1",
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
var CommunityNodeDocsLink_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CommunityNodeDocsLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeDocsLink_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/Panel/NodesListPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["textContent"];
var _hoisted_2 = ["textContent"];
var NodesListPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodesListPanel",
	setup(__props) {
		const i18n = useI18n();
		const { callDebounced, debounce } = useDebounce();
		const { mergedNodes } = useNodeCreatorStore();
		const { pushViewStack, popViewStack, updateCurrentViewStack } = useViewStacks();
		const { setActiveItemIndex, attachKeydownEvent, detachKeydownEvent } = useKeyboardNavigation();
		const nodeCreatorStore = useNodeCreatorStore();
		const { isAdminOrOwner } = useUsersStore();
		const activeViewStack = computed(() => useViewStacks().activeViewStack);
		const communityNodeDetails = computed(() => activeViewStack.value.communityNodeDetails);
		const viewStacks = computed(() => useViewStacks().viewStacks);
		const isActionsMode = computed(() => useViewStacks().activeViewStackMode === "actions");
		const isAgentsMode = computed(() => useViewStacks().activeViewStackMode === "agents");
		const searchPlaceholder = computed(() => {
			let node = activeViewStack.value?.title;
			if (communityNodeDetails.value) node = communityNodeDetails.value.title;
			if (isActionsMode.value) return i18n.baseText("nodeCreator.actionsCategory.searchActions", { interpolate: { node } });
			if (isAgentsMode.value) return i18n.baseText("nodeCreator.agentsPanel.searchPlaceholder");
			return i18n.baseText("nodeCreator.searchBar.searchNodes");
		});
		const showSearchBar = computed(() => {
			if (activeViewStack.value.communityNodeDetails) return false;
			return activeViewStack.value.hasSearch;
		});
		const nodeCreatorView = computed(() => useNodeCreatorStore().selectedView);
		const isCommunityNodeActionsMode = computed(() => {
			return communityNodeDetails.value && isActionsMode.value && activeViewStack.value.subcategory;
		});
		const viewStackTitle = computed(() => {
			if (nodeCreatorStore.openingContext === "replacement") return i18n.baseText("nodeCreator.replaceNode.title");
			return activeViewStack.value.title;
		});
		function getDefaultActiveIndex(search = "") {
			if (activeViewStack.value.mode === "actions") return 1;
			else if (activeViewStack.value.sections) return search ? 0 : 1;
			return 0;
		}
		function applySearch(value) {
			if (!activeViewStack.value.uuid) return;
			if (activeViewStack.value.search === value) return;
			updateCurrentViewStack({ search: value });
			setActiveItemIndex(getDefaultActiveIndex(value));
			if (value.length) callDebounced(nodeCreatorStore.onNodeFilterChanged, {
				trailing: true,
				debounceTime: 2e3
			}, {
				newValue: value,
				filteredNodes: activeViewStack.value.items ?? [],
				filterMode: activeViewStack.value.rootView ?? "Regular",
				subcategory: activeViewStack.value.subcategory,
				title: activeViewStack.value.title
			});
		}
		const debouncedApplySearch = debounce((value, scheduledForViewUuid) => {
			if (activeViewStack.value.uuid !== scheduledForViewUuid) return;
			applySearch(value);
		}, {
			trailing: true,
			debounceTime: DEBOUNCE_TIME.INPUT.SEARCH
		});
		function onSearch(value) {
			if (value === "") {
				debouncedApplySearch.cancel();
				applySearch(value);
				return;
			}
			debouncedApplySearch(value, activeViewStack.value.uuid);
		}
		function flushPendingSearchOnNavigation(event) {
			if ([
				"Enter",
				"ArrowDown",
				"ArrowUp"
			].includes(event.key)) debouncedApplySearch.flush();
		}
		function onTransitionEnd() {
			cleanupopeningContext();
			setActiveItemIndex(getDefaultActiveIndex());
		}
		function cleanupopeningContext() {
			nodeCreatorStore.openingContext = null;
		}
		onMounted(() => {
			document.addEventListener("keydown", flushPendingSearchOnNavigation, { capture: true });
			attachKeydownEvent();
			setActiveItemIndex(getDefaultActiveIndex());
		});
		onUnmounted(() => {
			document.removeEventListener("keydown", flushPendingSearchOnNavigation, { capture: true });
			cleanupopeningContext();
			detachKeydownEvent();
		});
		watch(() => nodeCreatorView.value, (selectedView) => {
			const views = {
				[TRIGGER_NODE_CREATOR_VIEW]: TriggerView,
				[REGULAR_NODE_CREATOR_VIEW]: RegularView,
				["AI"]: AIView,
				[AI_OTHERS_NODE_CREATOR_VIEW]: AINodesView,
				[AI_UNCATEGORIZED_CATEGORY]: AINodesView,
				[AI_EVALUATION]: AINodesView,
				[HUMAN_IN_THE_LOOP_CATEGORY]: HitlToolView
			};
			const additionalOptions = { [HUMAN_IN_THE_LOOP_CATEGORY]: { hasSearch: false } };
			const matchedView = views[selectedView];
			if (!matchedView) {
				console.warn(`No view found for ${selectedView}`);
				return;
			}
			const view = matchedView(mergedNodes);
			pushViewStack({
				title: view.title,
				subtitle: view?.subtitle ?? "",
				items: view.items,
				nodeIcon: view.nodeIcon,
				info: view.info,
				hasSearch: true,
				mode: "nodes",
				rootView: selectedView,
				searchItems: mergedNodes,
				...additionalOptions[selectedView]
			});
			const pending = nodeCreatorStore.consumePendingInitialViewStack();
			if (pending) pushViewStack(pending);
		}, { immediate: true });
		function onBackButton() {
			popViewStack();
		}
		return (_ctx, _cache) => {
			return viewStacks.value.length > 0 ? (openBlock(), createBlock(Transition, {
				key: 0,
				name: `panel-slide-${activeViewStack.value.transitionDirection}`,
				onAfterLeave: onTransitionEnd
			}, {
				default: withCtx(() => [(openBlock(), createElementBlock("aside", {
					key: `${activeViewStack.value.uuid}`,
					class: normalizeClass([_ctx.$style.nodesListPanel, activeViewStack.value.panelClass]),
					onKeydownCapture: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [
					createBaseVNode("header", {
						class: normalizeClass({
							[_ctx.$style.header]: true,
							[_ctx.$style.hasBg]: !activeViewStack.value.subtitle,
							"nodes-list-panel-header": true
						}),
						"data-test-id": "nodes-list-header"
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.top) }, [
						viewStacks.value.length > 1 && !activeViewStack.value.preventBack ? (openBlock(), createElementBlock("button", {
							key: 0,
							class: normalizeClass(_ctx.$style.backButton),
							onClick: onBackButton
						}, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.backButtonIcon),
							icon: "arrow-left",
							size: 22
						}, null, 8, ["class"])], 2)) : createCommentVNode("", true),
						activeViewStack.value.nodeIcon ? (openBlock(), createBlock(NodeIcon_default, {
							key: 1,
							class: normalizeClass(_ctx.$style.nodeIcon),
							"icon-source": activeViewStack.value.nodeIcon,
							circle: false,
							"show-tooltip": false,
							size: unref(getNodeIconSize)("nodeList", activeViewStack.value.nodeIcon?.type === "icon" ? activeViewStack.value.nodeIcon.name : void 0)
						}, null, 8, [
							"class",
							"icon-source",
							"size"
						])) : createCommentVNode("", true),
						activeViewStack.value.title ? (openBlock(), createElementBlock("p", {
							key: 2,
							class: normalizeClass(_ctx.$style.title),
							textContent: toDisplayString(viewStackTitle.value)
						}, null, 10, _hoisted_1)) : createCommentVNode("", true),
						communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeDocsLink_default, {
							key: 3,
							"package-name": communityNodeDetails.value.packageName
						}, null, 8, ["package-name"])) : createCommentVNode("", true)
					], 2), activeViewStack.value.subtitle ? (openBlock(), createElementBlock("p", {
						key: 0,
						class: normalizeClass({
							[_ctx.$style.subtitle]: true,
							[_ctx.$style.offsetSubtitle]: viewStacks.value.length > 1
						}),
						textContent: toDisplayString(activeViewStack.value.subtitle)
					}, null, 10, _hoisted_2)) : createCommentVNode("", true)], 2),
					showSearchBar.value ? (openBlock(), createBlock(SearchBar_default, {
						key: 0,
						class: normalizeClass(_ctx.$style.searchBar),
						placeholder: searchPlaceholder.value ? searchPlaceholder.value : unref(i18n).baseText("nodeCreator.searchBar.searchNodes"),
						"model-value": activeViewStack.value.search,
						"onUpdate:modelValue": onSearch
					}, null, 8, [
						"class",
						"placeholder",
						"model-value"
					])) : createCommentVNode("", true),
					communityNodeDetails.value ? (openBlock(), createBlock(CommunityNodeDetails_default, { key: 1 })) : createCommentVNode("", true),
					communityNodeDetails.value && !isActionsMode.value ? (openBlock(), createBlock(CommunityNodeInfo_default, { key: 2 })) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.renderedItems) }, [activeViewStack.value.info && !activeViewStack.value.search ? (openBlock(), createBlock(unref(N8nNotice_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.info),
						content: activeViewStack.value.info,
						theme: "warning"
					}, null, 8, ["class", "content"])) : createCommentVNode("", true), isActionsMode.value && activeViewStack.value.subcategory ? (openBlock(), createBlock(ActionsMode_default, normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)), null, 16)) : isAgentsMode.value ? (openBlock(), createBlock(AgentsMode_default, normalizeProps(mergeProps({ key: 2 }, _ctx.$attrs)), null, 16)) : (openBlock(), createBlock(NodesMode_default, mergeProps({
						key: 3,
						"root-view": nodeCreatorView.value
					}, _ctx.$attrs), null, 16, ["root-view"]))], 2),
					communityNodeDetails.value && !isCommunityNodeActionsMode.value ? (openBlock(), createBlock(CommunityNodeFooter_default, {
						key: 3,
						"package-name": communityNodeDetails.value.packageName,
						"show-manage": communityNodeDetails.value.installed && unref(isAdminOrOwner)
					}, null, 8, ["package-name", "show-manage"])) : createCommentVNode("", true)
				], 34))]),
				_: 1
			}, 8, ["name"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/Panel/NodesListPanel.vue?vue&type=style&index=0&lang.module.scss
var info = "_info_1lfck_410";
var backButton = "_backButton_1lfck_414";
var backButtonIcon = "_backButtonIcon_1lfck_421";
var nodeIcon = "_nodeIcon_1lfck_426";
var renderedItems = "_renderedItems_1lfck_432";
var searchBar = "_searchBar_1lfck_444";
var nodesListPanel = "_nodesListPanel_1lfck_448";
var footer = "_footer_1lfck_466";
var top = "_top_1lfck_477";
var header = "_header_1lfck_482";
var hasBg = "_hasBg_1lfck_488";
var title = "_title_1lfck_493";
var subtitle = "_subtitle_1lfck_504";
var offsetSubtitle = "_offsetSubtitle_1lfck_512";
var shimmer$1 = "_shimmer_1lfck_1";
var spin$1 = "_spin_1lfck_1";
var opacityPulse$1 = "_opacityPulse_1lfck_1";
var popoverIn$1 = "_popoverIn_1lfck_1";
var fadeIn$1 = "_fadeIn_1lfck_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1lfck_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1lfck_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1lfck_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1lfck_1";
var blurSwapIn$1 = "_blurSwapIn_1lfck_1";
var blurSwapOut$1 = "_blurSwapOut_1lfck_1";
var pulseGlow$1 = "_pulseGlow_1lfck_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1lfck_1";
var fade$1 = "_fade_1lfck_1";
var fadeInUp$1 = "_fadeInUp_1lfck_1";
var fadeInDown$1 = "_fadeInDown_1lfck_1";
var fadeInLeft$1 = "_fadeInLeft_1lfck_1";
var fadeInRight$1 = "_fadeInRight_1lfck_1";
var fadeOut$1 = "_fadeOut_1lfck_1";
var fadeOutDown$1 = "_fadeOutDown_1lfck_1";
var fadeOutUp$1 = "_fadeOutUp_1lfck_1";
var fadeOutLeft$1 = "_fadeOutLeft_1lfck_1";
var fadeOutRight$1 = "_fadeOutRight_1lfck_1";
var ping$1 = "_ping_1lfck_1";
var blinkBackground$1 = "_blinkBackground_1lfck_1";
var typingBlink$1 = "_typingBlink_1lfck_1";
var NodesListPanel_vue_vue_type_style_index_0_lang_module_default = {
	info,
	backButton,
	backButtonIcon,
	nodeIcon,
	renderedItems,
	searchBar,
	nodesListPanel,
	footer,
	top,
	header,
	hasBg,
	title,
	subtitle,
	offsetSubtitle,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1lfck_1",
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
var NodesListPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodesListPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodesListPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/components/NodeCreator.vue?vue&type=script&setup=true&lang.ts
var NodeCreator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCreator",
	props: {
		active: { type: Boolean },
		onNodeTypeSelected: { type: Function }
	},
	emits: ["closeNodeCreator", "nodeTypeSelected"],
	setup(__props, { emit: __emit }) {
		const OUTSIDE_CLICK_WHITELIST = [".el-overlay-dialog"];
		const props = __props;
		const { resetViewStacks } = useViewStacks();
		const { registerKeyHook } = useKeyboardNavigation();
		const emit = __emit;
		const uiStore = useUIStore();
		const bannersStore = useBannersStore();
		const chatPanelStore = useChatPanelStore();
		const settingsStore = useSettingsStore();
		const { setActions, setMergeNodes, consumePendingInitialViewStack } = useNodeCreatorStore();
		const { generateMergedNodesAndActions } = useActionsGenerator();
		const state = reactive({
			nodeCreator: null,
			mousedownInsideEvent: null
		});
		const viewStacksLength = computed(() => useViewStacks().viewStacks.length);
		const nodeCreatorInlineStyle = computed(() => {
			const rightPosition = getRightOffset();
			return {
				top: `${settingsStore.isCanvasOnly ? 0 : bannersStore.bannersHeight + uiStore.headerHeight}px`,
				right: `${rightPosition}px`
			};
		});
		function getRightOffset() {
			if (chatPanelStore.isOpen) return chatPanelStore.width;
			return 0;
		}
		function onMouseUpOutside() {
			if (state.mousedownInsideEvent) {
				const clickEvent = new MouseEvent("click", {
					bubbles: true,
					cancelable: true
				});
				state.mousedownInsideEvent.target?.dispatchEvent(clickEvent);
				state.mousedownInsideEvent = null;
				unBindOnMouseUpOutside();
			}
		}
		function unBindOnMouseUpOutside() {
			document.removeEventListener("mouseup", onMouseUpOutside);
			document.removeEventListener("touchstart", onMouseUpOutside);
		}
		function onMouseUp() {
			state.mousedownInsideEvent = null;
			unBindOnMouseUpOutside();
		}
		function onMouseDown(event) {
			state.mousedownInsideEvent = event;
			document.addEventListener("mouseup", onMouseUpOutside);
			document.addEventListener("touchstart", onMouseUpOutside);
		}
		function onDragOver(event) {
			event.preventDefault();
		}
		function onDrop(event) {
			if (!event.dataTransfer) return;
			const dragData = event.dataTransfer.getData(DRAG_EVENT_DATA_KEY);
			const nodeCreatorBoundingRect = state.nodeCreator.getBoundingClientRect();
			if (dragData && event.pageX >= nodeCreatorBoundingRect.x && event.pageY >= nodeCreatorBoundingRect.y) event.stopPropagation();
		}
		const { fetchConfig: fetchAiGatewayConfig } = useAiGateway();
		onMounted(() => {
			fetchAiGatewayConfig();
		});
		watch(() => props.active, (isActive) => {
			if (!isActive) {
				resetViewStacks();
				consumePendingInitialViewStack();
			}
		});
		watch(viewStacksLength, (value) => {
			if (value === 0) emit("closeNodeCreator");
		});
		registerKeyHook("NodeCreatorCloseEscape", {
			keyboardKeys: ["Escape"],
			handler: () => emit("closeNodeCreator")
		});
		watch(() => ({
			httpOnlyCredentials: useCredentialsStore().httpOnlyCredentialTypes,
			nodeTypes: useNodeTypesStore().visibleNodeTypes
		}), ({ nodeTypes, httpOnlyCredentials }) => {
			const { actions, mergedNodes } = generateMergedNodesAndActions(nodeTypes, httpOnlyCredentials);
			setActions(actions);
			setMergeNodes(mergedNodes);
		}, { immediate: true });
		const { nodeCreator } = toRefs(state);
		onBeforeUnmount(() => {
			unBindOnMouseUpOutside();
		});
		onClickOutside(nodeCreator, () => {
			emit("closeNodeCreator");
		}, { ignore: OUTSIDE_CLICK_WHITELIST });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createBaseVNode("aside", { class: normalizeClass(_ctx.$style.nodeCreatorScrim) }, null, 2),
				__props.active ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					variant: "subtle",
					class: normalizeClass(_ctx.$style.close),
					icon: "x",
					"aria-label": "Close Node Creator",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("closeNodeCreator"))
				}, null, 8, ["class"])) : createCommentVNode("", true),
				createVNode(SlideTransition_default, null, {
					default: withCtx(() => [__props.active ? (openBlock(), createElementBlock("div", {
						key: 0,
						ref_key: "nodeCreator",
						ref: nodeCreator,
						class: normalizeClass({ [_ctx.$style.nodeCreator]: true }),
						style: normalizeStyle(nodeCreatorInlineStyle.value),
						"data-test-id": "node-creator",
						onDragover: onDragOver,
						onDrop,
						onMousedown: onMouseDown,
						onMouseup: onMouseUp
					}, [createVNode(NodesListPanel_default, { onNodeTypeSelected: __props.onNodeTypeSelected }, null, 8, ["onNodeTypeSelected"])], 38)) : createCommentVNode("", true)]),
					_: 1
				})
			]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/components/NodeCreator.vue?vue&type=style&index=0&lang.module.scss
var nodeCreator = "_nodeCreator_1kj3n_392";
var nodeCreatorScrim = "_nodeCreatorScrim_1kj3n_404";
var active = "_active_1kj3n_416";
var close = "_close_1kj3n_420";
var shimmer = "_shimmer_1kj3n_1";
var spin = "_spin_1kj3n_1";
var opacityPulse = "_opacityPulse_1kj3n_1";
var popoverIn = "_popoverIn_1kj3n_1";
var fadeIn = "_fadeIn_1kj3n_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1kj3n_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1kj3n_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1kj3n_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1kj3n_1";
var blurSwapIn = "_blurSwapIn_1kj3n_1";
var blurSwapOut = "_blurSwapOut_1kj3n_1";
var pulseGlow = "_pulseGlow_1kj3n_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1kj3n_1";
var fade = "_fade_1kj3n_1";
var fadeInUp = "_fadeInUp_1kj3n_1";
var fadeInDown = "_fadeInDown_1kj3n_1";
var fadeInLeft = "_fadeInLeft_1kj3n_1";
var fadeInRight = "_fadeInRight_1kj3n_1";
var fadeOut = "_fadeOut_1kj3n_1";
var fadeOutDown = "_fadeOutDown_1kj3n_1";
var fadeOutUp = "_fadeOutUp_1kj3n_1";
var fadeOutLeft = "_fadeOutLeft_1kj3n_1";
var fadeOutRight = "_fadeOutRight_1kj3n_1";
var ping = "_ping_1kj3n_1";
var blinkBackground = "_blinkBackground_1kj3n_1";
var typingBlink = "_typingBlink_1kj3n_1";
var NodeCreator_vue_vue_type_style_index_0_lang_module_default = {
	nodeCreator,
	nodeCreatorScrim,
	active,
	close,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1kj3n_1",
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
var NodeCreator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeCreator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { NodeCreator_default as default };
