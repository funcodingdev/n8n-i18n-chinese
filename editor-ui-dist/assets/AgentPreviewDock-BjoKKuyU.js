import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, Nt as onScopeDispose, O as createSlots, Pt as reactive, R as inject, S as computed, T as createCommentVNode, U as mergeProps, Vt as toRef, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, at as resolveComponent, bn as normalizeStyle, bt as withCtx, dt as useModel, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, n as Transition, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, tt as provide, ut as useId, vn as normalizeClass, w as createBlock, xt as withDirectives, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BjbSP7dI.js";
import { t as useI18n$1 } from "./useI18n-a4QAfELR.js";
import { i as NodeErrorView_default, t as RunData_default } from "./RunData-DWpBiH3s.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-CK49ozr4.js";
import { t as N8nIcon_default } from "./N8nIcon-Cb6ivP-y.js";
import { t as N8nIconButton_default } from "./N8nIconButton-WmwX0N4c.js";
import { C as useResizeObserver, D as useSpeechSynthesis, O as useStorage, c as useActiveElement, f as useDocumentVisibility, g as useEventListener } from "./dist-CYNfKCbA.js";
import { t as Input_default } from "./Input-BuISsKX4.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as DropdownMenu_default } from "./DropdownMenu-CfEiybjF.js";
import { r as CollapsibleRoot_default, t as CollapsibleTrigger_default } from "./CollapsibleTrigger-DKE_Sw72.js";
import { a as HoverCardRoot_default, i as HoverCardContent_default, n as HoverCardTrigger_default, r as HoverCardPortal_default, t as N8nHoverCard_default } from "./N8nHoverCard-DkIeqXKR.js";
import { t as truncate } from "./truncate-B0m9bkui.js";
import { t as N8nTooltip_default } from "./N8nTooltip-CXMYm6HE.js";
import { r as N8nSendStopButton_default } from "./N8nChatInput-BE6EHV3S.js";
import { t as N8nCallout_default } from "./N8nCallout-B4BbbbO7.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as ElRadio } from "./radio-BHh-pAFY.js";
import { t as ElNotification } from "./notification-DkLCiB8u.js";
import { t as N8nCard_default } from "./N8nCard-Bo_W3SAE.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-Cx0g_EXp.js";
import { c as useRoute, l as useRouter } from "./vue-router-CMlLwP0b.js";
import { t as N8nRecycleScroller_default } from "./N8nRecycleScroller-B7KGpz8R.js";
import { A as useWorkflowDocumentStore, Ci as useExecutionDataStore, D as disposeWorkflowDocumentStore, H as useNodeTypesStore, T as createWorkflowDocumentId, _ as disposeWorkflowExecutionStateStore, bi as createExecutionDataId, en as useWorkflowHelpers, fn as useNDVStore, jr as shouldIgnoreCanvasShortcut, ln as disposeNDVStore, xi as disposeExecutionDataStore, y as useWorkflowExecutionStateStore } from "./workflows.store-BO9owX3m.js";
import { t as AnimatedCollapsibleContent_default } from "./AnimatedCollapsibleContent-BT-C6Xij.js";
import { B as APPROVAL_TOOL_NAME, Co as stringType, Fi as UnexpectedError, G as N8N_CHAT_ACTION_TOOL_NAME, H as WAIT_TOOL_NAME, J as richCardComponentSchema, U as WORKFLOW_WAIT_SUSPEND_TYPE, Wt as Workflow, Y as richMessageSchema, _o as enumType, at as emptyChildTrace, bo as numberType, et as PROVIDER_CAPABILITIES, go as arrayType, it as applyForwardedChildChunk, mo as isDraftIntegration, so as SUB_AGENT_TASK_DIFFICULTIES, vo as literalType, xi as deepCopy, xo as objectType } from "./src-B2jBAc9z.js";
import { t as MarkdownEditor_default } from "./MarkdownEditor-Clk6DH0e.js";
import { t as core_default } from "./core-D8l50o8u.js";
import { t as json } from "./json-BTFwBmHt.js";
import { a as python, i as typescript } from "./xml-AqPLxZQZ.js";
import { t as useRootStore } from "./useRootStore-B4L7-X8D.js";
import { t as useSettingsStore } from "./settings.store-CT5GOXKB.js";
import { t as VIEWS } from "./views-Bvvv9vv2.js";
import { n as useToast } from "./useToast-DD-gkdwx.js";
import { Ar as CONTINUE_SESSION_ID_PARAM, Fr as CHAT_MESSAGE_STATUS, Ir as TOOL_CALL_STATE, Nr as NEW_SESSION_PARAM, Sr as AGENT_SESSION_DETAIL_VIEW, br as AGENT_PREVIEW_VIEW, ga as WorkflowIdKey, ha as WorkflowDocumentStoreKey } from "./constants-DOw6b_w2.js";
import { t as useClipboard } from "./useClipboard-Bsxouor_.js";
import { t as useExecutionsStore } from "./executions.store-BMll7GaQ.js";
import { F as useWorkflowNormalization, w as ChatSymbol } from "./useCanvasOperations-CLcQQUUB.js";
import { t as VueMarkdown } from "./VueMarkdown--pRb5Ny1.js";
import { t as convertFileToBinaryData } from "./fileUtils-BBmONHi7.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DwKNK0D5.js";
import { b as getTestChatMessages, g as getChatMessages, n as clearTestChatMessages, t as cancelAgentChatRun } from "./useAgentApi-C6kFPtBY.js";
import { t as convertToDisplayDate } from "./dateFormatter-PxD81FVB.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-BbMAp1cv.js";
import { t as isRecord } from "./is-record-C7JaOngB.js";
import { t as useKeybindings } from "./useKeybindings-BxGVCjtJ.js";
import { r as useProjectAgentsList } from "./useProjectAgentsList-DluaLnvM.js";
import { n as getToolNameTranslationKey, r as resolveToolNameForDisplay, t as formatToolNameForDisplay } from "./toolDisplayName-CFfqAgix.js";
import { t as AgentPersonalisationIcon_default } from "./AgentPersonalisationIcon-Xnp-Rzuo.js";
import { d as flattenLogEntries, g as getSubtreeTotalConsumedTokens, o as createLogTree, t as LogsOverviewRow_default, w as isNodeLog } from "./LogsOverviewRow-Cj_ZhgX2.js";
import { t as CopyButton_default } from "./CopyButton-DG96-HHw.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-jUHHwEdv.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-BTBfswp8.js";
import { n as useAgentSessionsStore, t as useThreadTitle } from "./thread-title-dMud_E0i.js";
import { n as ChatInputBase_default, t as AttachmentPreview_default } from "./AttachmentPreview--dr-DeO-.js";
import { t as formatBytes } from "./bytes-Atkkw5KY.js";
//#region ../@n8n/design-system/src/components/N8nAiActivityStepButton/AiActivityStepButton.vue?vue&type=script&setup=true&lang.ts
var AiActivityStepButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiActivityStepButton",
	props: {
		size: { default: "small" },
		loading: {
			type: Boolean,
			default: false
		},
		interactive: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		function handleClick(event) {
			if (!props.interactive) {
				event.preventDefault();
				event.stopPropagation();
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nButton_default), {
				variant: "ghost",
				size: props.size,
				class: normalizeClass([_ctx.$style.button, !props.interactive && _ctx.$style.nonInteractive]),
				onClick: handleClick
			}, {
				default: withCtx(() => [
					renderSlot(_ctx.$slots, "prefix"),
					createBaseVNode("span", { class: normalizeClass({
						[_ctx.$style.label]: true,
						[_ctx.$style.shimmer]: props.loading
					}) }, [renderSlot(_ctx.$slots, "default")], 2),
					renderSlot(_ctx.$slots, "icon"),
					renderSlot(_ctx.$slots, "suffix")
				]),
				_: 3
			}, 8, ["size", "class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStepButton/AiActivityStepButton.vue?vue&type=style&index=0&lang.module.scss
var button$1 = "_button_ydyl9_388";
var nonInteractive = "_nonInteractive_ydyl9_403";
var label$2 = "_label_ydyl9_418";
var shimmer$28 = "_shimmer_ydyl9_426";
var spin$28 = "_spin_ydyl9_1";
var opacityPulse$28 = "_opacityPulse_ydyl9_1";
var popoverIn$28 = "_popoverIn_ydyl9_1";
var fadeIn$28 = "_fadeIn_ydyl9_1";
var collapsibleSlideDown$28 = "_collapsibleSlideDown_ydyl9_1";
var collapsibleSlideUp$28 = "_collapsibleSlideUp_ydyl9_1";
var collapsibleSlideDownBlurred$28 = "_collapsibleSlideDownBlurred_ydyl9_1";
var collapsibleSlideUpBlurred$28 = "_collapsibleSlideUpBlurred_ydyl9_1";
var blurSwapIn$28 = "_blurSwapIn_ydyl9_1";
var blurSwapOut$28 = "_blurSwapOut_ydyl9_1";
var pulseGlow$28 = "_pulseGlow_ydyl9_1";
var pulseGlowDelayed$28 = "_pulseGlowDelayed_ydyl9_1";
var fade$28 = "_fade_ydyl9_1";
var fadeInUp$28 = "_fadeInUp_ydyl9_1";
var fadeInDown$28 = "_fadeInDown_ydyl9_1";
var fadeInLeft$28 = "_fadeInLeft_ydyl9_1";
var fadeInRight$28 = "_fadeInRight_ydyl9_1";
var fadeOut$28 = "_fadeOut_ydyl9_1";
var fadeOutDown$28 = "_fadeOutDown_ydyl9_1";
var fadeOutUp$28 = "_fadeOutUp_ydyl9_1";
var fadeOutLeft$28 = "_fadeOutLeft_ydyl9_1";
var fadeOutRight$28 = "_fadeOutRight_ydyl9_1";
var ping$28 = "_ping_ydyl9_1";
var blinkBackground$28 = "_blinkBackground_ydyl9_1";
var typingBlink$28 = "_typingBlink_ydyl9_1";
var AiActivityStepButton_vue_vue_type_style_index_0_lang_module_default = {
	button: button$1,
	nonInteractive,
	label: label$2,
	shimmer: shimmer$28,
	spin: spin$28,
	"skeleton-pulse": "_skeleton-pulse_ydyl9_1",
	opacityPulse: opacityPulse$28,
	popoverIn: popoverIn$28,
	fadeIn: fadeIn$28,
	collapsibleSlideDown: collapsibleSlideDown$28,
	collapsibleSlideUp: collapsibleSlideUp$28,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$28,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$28,
	blurSwapIn: blurSwapIn$28,
	blurSwapOut: blurSwapOut$28,
	pulseGlow: pulseGlow$28,
	pulseGlowDelayed: pulseGlowDelayed$28,
	fade: fade$28,
	fadeInUp: fadeInUp$28,
	fadeInDown: fadeInDown$28,
	fadeInLeft: fadeInLeft$28,
	fadeInRight: fadeInRight$28,
	fadeOut: fadeOut$28,
	fadeOutDown: fadeOutDown$28,
	fadeOutUp: fadeOutUp$28,
	fadeOutLeft: fadeOutLeft$28,
	fadeOutRight: fadeOutRight$28,
	ping: ping$28,
	blinkBackground: blinkBackground$28,
	typingBlink: typingBlink$28
};
var AiActivityStepButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiActivityStepButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiActivityStepButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStepChevron/AiActivityStepChevron.vue?vue&type=script&setup=true&lang.ts
var AiActivityStepChevron_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiActivityStepChevron",
	props: { open: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nIcon_default), {
				icon: "chevron-right",
				size: "large",
				class: normalizeClass([_ctx.$style.chevron, __props.open && _ctx.$style.open])
			}, null, 8, ["class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStepChevron/AiActivityStepChevron.vue?vue&type=style&index=0&lang.module.scss
var chevron = "_chevron_8us5m_388";
var open$1 = "_open_8us5m_393";
var shimmer$27 = "_shimmer_8us5m_1";
var spin$27 = "_spin_8us5m_1";
var opacityPulse$27 = "_opacityPulse_8us5m_1";
var popoverIn$27 = "_popoverIn_8us5m_1";
var fadeIn$27 = "_fadeIn_8us5m_1";
var collapsibleSlideDown$27 = "_collapsibleSlideDown_8us5m_1";
var collapsibleSlideUp$27 = "_collapsibleSlideUp_8us5m_1";
var collapsibleSlideDownBlurred$27 = "_collapsibleSlideDownBlurred_8us5m_1";
var collapsibleSlideUpBlurred$27 = "_collapsibleSlideUpBlurred_8us5m_1";
var blurSwapIn$27 = "_blurSwapIn_8us5m_1";
var blurSwapOut$27 = "_blurSwapOut_8us5m_1";
var pulseGlow$27 = "_pulseGlow_8us5m_1";
var pulseGlowDelayed$27 = "_pulseGlowDelayed_8us5m_1";
var fade$27 = "_fade_8us5m_1";
var fadeInUp$27 = "_fadeInUp_8us5m_1";
var fadeInDown$27 = "_fadeInDown_8us5m_1";
var fadeInLeft$27 = "_fadeInLeft_8us5m_1";
var fadeInRight$27 = "_fadeInRight_8us5m_1";
var fadeOut$27 = "_fadeOut_8us5m_1";
var fadeOutDown$27 = "_fadeOutDown_8us5m_1";
var fadeOutUp$27 = "_fadeOutUp_8us5m_1";
var fadeOutLeft$27 = "_fadeOutLeft_8us5m_1";
var fadeOutRight$27 = "_fadeOutRight_8us5m_1";
var ping$27 = "_ping_8us5m_1";
var blinkBackground$27 = "_blinkBackground_8us5m_1";
var typingBlink$27 = "_typingBlink_8us5m_1";
var AiActivityStepChevron_vue_vue_type_style_index_0_lang_module_default = {
	chevron,
	open: open$1,
	shimmer: shimmer$27,
	spin: spin$27,
	"skeleton-pulse": "_skeleton-pulse_8us5m_1",
	opacityPulse: opacityPulse$27,
	popoverIn: popoverIn$27,
	fadeIn: fadeIn$27,
	collapsibleSlideDown: collapsibleSlideDown$27,
	collapsibleSlideUp: collapsibleSlideUp$27,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$27,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$27,
	blurSwapIn: blurSwapIn$27,
	blurSwapOut: blurSwapOut$27,
	pulseGlow: pulseGlow$27,
	pulseGlowDelayed: pulseGlowDelayed$27,
	fade: fade$27,
	fadeInUp: fadeInUp$27,
	fadeInDown: fadeInDown$27,
	fadeInLeft: fadeInLeft$27,
	fadeInRight: fadeInRight$27,
	fadeOut: fadeOut$27,
	fadeOutDown: fadeOutDown$27,
	fadeOutUp: fadeOutUp$27,
	fadeOutLeft: fadeOutLeft$27,
	fadeOutRight: fadeOutRight$27,
	ping: ping$27,
	blinkBackground: blinkBackground$27,
	typingBlink: typingBlink$27
};
var AiActivityStepChevron_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiActivityStepChevron_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiActivityStepChevron_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStep/context.ts
var aiActivityStepGroupContext = Symbol("aiActivityStepGroupContext");
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStepGroup/AiActivityStepGroup.vue
var AiActivityStepGroup_default = /* @__PURE__ */ defineComponent({
	__name: "AiActivityStepGroup",
	props: {
		label: {},
		size: { default: "medium" },
		loading: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		provide(aiActivityStepGroupContext, true);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), null, {
				default: withCtx(({ open: isOpen }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(unref(AiActivityStepButton_default), {
						size: __props.size,
						loading: __props.loading
					}, {
						suffix: withCtx(() => [createVNode(unref(AiActivityStepChevron_default), { open: isOpen }, null, 8, ["open"])]),
						default: withCtx(() => [createTextVNode(toDisplayString(__props.label) + " ", 1)]),
						_: 2
					}, 1032, ["size", "loading"])]),
					_: 2
				}, 1024), createVNode(unref(AnimatedCollapsibleContent_default), null, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				})]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStepResultSection/AiActivityStepResultSection.vue?vue&type=style&index=0&lang.module.scss
var resultSection = "_resultSection_gix41_388";
var shimmer$26 = "_shimmer_gix41_1";
var spin$26 = "_spin_gix41_1";
var opacityPulse$26 = "_opacityPulse_gix41_1";
var popoverIn$26 = "_popoverIn_gix41_1";
var fadeIn$26 = "_fadeIn_gix41_1";
var collapsibleSlideDown$26 = "_collapsibleSlideDown_gix41_1";
var collapsibleSlideUp$26 = "_collapsibleSlideUp_gix41_1";
var collapsibleSlideDownBlurred$26 = "_collapsibleSlideDownBlurred_gix41_1";
var collapsibleSlideUpBlurred$26 = "_collapsibleSlideUpBlurred_gix41_1";
var blurSwapIn$26 = "_blurSwapIn_gix41_1";
var blurSwapOut$26 = "_blurSwapOut_gix41_1";
var pulseGlow$26 = "_pulseGlow_gix41_1";
var pulseGlowDelayed$26 = "_pulseGlowDelayed_gix41_1";
var fade$26 = "_fade_gix41_1";
var fadeInUp$26 = "_fadeInUp_gix41_1";
var fadeInDown$26 = "_fadeInDown_gix41_1";
var fadeInLeft$26 = "_fadeInLeft_gix41_1";
var fadeInRight$26 = "_fadeInRight_gix41_1";
var fadeOut$26 = "_fadeOut_gix41_1";
var fadeOutDown$26 = "_fadeOutDown_gix41_1";
var fadeOutUp$26 = "_fadeOutUp_gix41_1";
var fadeOutLeft$26 = "_fadeOutLeft_gix41_1";
var fadeOutRight$26 = "_fadeOutRight_gix41_1";
var ping$26 = "_ping_gix41_1";
var blinkBackground$26 = "_blinkBackground_gix41_1";
var typingBlink$26 = "_typingBlink_gix41_1";
var AiActivityStepResultSection_vue_vue_type_style_index_0_lang_module_default = {
	resultSection,
	shimmer: shimmer$26,
	spin: spin$26,
	"skeleton-pulse": "_skeleton-pulse_gix41_1",
	opacityPulse: opacityPulse$26,
	popoverIn: popoverIn$26,
	fadeIn: fadeIn$26,
	collapsibleSlideDown: collapsibleSlideDown$26,
	collapsibleSlideUp: collapsibleSlideUp$26,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$26,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$26,
	blurSwapIn: blurSwapIn$26,
	blurSwapOut: blurSwapOut$26,
	pulseGlow: pulseGlow$26,
	pulseGlowDelayed: pulseGlowDelayed$26,
	fade: fade$26,
	fadeInUp: fadeInUp$26,
	fadeInDown: fadeInDown$26,
	fadeInLeft: fadeInLeft$26,
	fadeInRight: fadeInRight$26,
	fadeOut: fadeOut$26,
	fadeOutDown: fadeOutDown$26,
	fadeOutUp: fadeOutUp$26,
	fadeOutLeft: fadeOutLeft$26,
	fadeOutRight: fadeOutRight$26,
	ping: ping$26,
	blinkBackground: blinkBackground$26,
	typingBlink: typingBlink$26
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStepResultSection/AiActivityStepResultSection.vue
var _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.resultSection) }, [renderSlot(_ctx.$slots, "default")], 2);
}
var AiActivityStepResultSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1], ["__cssModules", { "$style": AiActivityStepResultSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStep/AiActivityStep.vue?vue&type=script&setup=true&lang.ts
var MAX_ERROR_TOOLTIP_LENGTH = 160;
var AiActivityStep_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiActivityStep",
	props: {
		label: {},
		loading: {
			type: Boolean,
			default: false
		},
		error: { default: void 0 },
		hasContent: {
			type: Boolean,
			default: true
		},
		wrapContent: {
			type: Boolean,
			default: false
		},
		hideErrorCallout: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const isNested = inject(aiActivityStepGroupContext, false);
		const errorTooltip = computed(() => props.error ? truncate(props.error, MAX_ERROR_TOOLTIP_LENGTH) : "");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({ [_ctx.$style.nestedRow]: unref(isNested) }) }, [unref(isNested) ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.rail)
			}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.railDot) }, null, 2)], 2)) : createCommentVNode("", true), props.hasContent ? (openBlock(), createBlock(unref(CollapsibleRoot_default), { key: 1 }, {
				default: withCtx(({ open: isOpen }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(unref(AiActivityStepButton_default), {
						size: "small",
						loading: props.loading
					}, {
						icon: withCtx(() => [props.error ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							placement: "top"
						}, {
							content: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.errorTooltip) }, toDisplayString(errorTooltip.value), 3)]),
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "triangle-alert",
								color: "danger",
								size: "small",
								class: normalizeClass(_ctx.$style.activityErrorIcon)
							}, null, 8, ["class"])]),
							_: 1
						})) : createCommentVNode("", true)]),
						suffix: withCtx(() => [createVNode(unref(AiActivityStepChevron_default), { open: isOpen }, null, 8, ["open"])]),
						default: withCtx(() => [createTextVNode(toDisplayString(props.label) + " ", 1)]),
						_: 2
					}, 1032, ["loading"])]),
					_: 2
				}, 1024), createVNode(unref(AnimatedCollapsibleContent_default), null, {
					default: withCtx(() => [props.wrapContent ? (openBlock(), createBlock(unref(AiActivityStepResultSection_default), { key: 0 }, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					})) : renderSlot(_ctx.$slots, "default", { key: 1 }), props.error !== void 0 && !props.hideErrorCallout ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 2,
						theme: "danger",
						class: normalizeClass(_ctx.$style.errorCallout)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.error), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 3
				})]),
				_: 3
			})) : (openBlock(), createBlock(unref(AiActivityStepButton_default), {
				key: 2,
				size: "small",
				loading: props.loading,
				interactive: false
			}, {
				icon: withCtx(() => [props.error ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "top"
				}, {
					content: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.errorTooltip) }, toDisplayString(errorTooltip.value), 3)]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						color: "danger",
						size: "small",
						class: normalizeClass(_ctx.$style.activityErrorIcon)
					}, null, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true)]),
				default: withCtx(() => [createTextVNode(toDisplayString(props.label) + " ", 1)]),
				_: 1
			}, 8, ["loading"]))], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStep/AiActivityStep.vue?vue&type=style&index=0&lang.module.scss
var nestedRow = "_nestedRow_mik81_388";
var rail = "_rail_mik81_395";
var railDot = "_railDot_mik81_428";
var errorTooltip = "_errorTooltip_mik81_438";
var errorCallout$1 = "_errorCallout_mik81_442";
var activityErrorIcon = "_activityErrorIcon_mik81_447";
var shimmer$25 = "_shimmer_mik81_1";
var spin$25 = "_spin_mik81_1";
var opacityPulse$25 = "_opacityPulse_mik81_1";
var popoverIn$25 = "_popoverIn_mik81_1";
var fadeIn$25 = "_fadeIn_mik81_1";
var collapsibleSlideDown$25 = "_collapsibleSlideDown_mik81_1";
var collapsibleSlideUp$25 = "_collapsibleSlideUp_mik81_1";
var collapsibleSlideDownBlurred$25 = "_collapsibleSlideDownBlurred_mik81_1";
var collapsibleSlideUpBlurred$25 = "_collapsibleSlideUpBlurred_mik81_1";
var blurSwapIn$25 = "_blurSwapIn_mik81_1";
var blurSwapOut$25 = "_blurSwapOut_mik81_1";
var pulseGlow$25 = "_pulseGlow_mik81_1";
var pulseGlowDelayed$25 = "_pulseGlowDelayed_mik81_1";
var fade$25 = "_fade_mik81_1";
var fadeInUp$25 = "_fadeInUp_mik81_1";
var fadeInDown$25 = "_fadeInDown_mik81_1";
var fadeInLeft$25 = "_fadeInLeft_mik81_1";
var fadeInRight$25 = "_fadeInRight_mik81_1";
var fadeOut$25 = "_fadeOut_mik81_1";
var fadeOutDown$25 = "_fadeOutDown_mik81_1";
var fadeOutUp$25 = "_fadeOutUp_mik81_1";
var fadeOutLeft$25 = "_fadeOutLeft_mik81_1";
var fadeOutRight$25 = "_fadeOutRight_mik81_1";
var ping$25 = "_ping_mik81_1";
var blinkBackground$25 = "_blinkBackground_mik81_1";
var typingBlink$25 = "_typingBlink_mik81_1";
var AiActivityStep_vue_vue_type_style_index_0_lang_module_default = {
	nestedRow,
	rail,
	railDot,
	errorTooltip,
	errorCallout: errorCallout$1,
	activityErrorIcon,
	shimmer: shimmer$25,
	spin: spin$25,
	"skeleton-pulse": "_skeleton-pulse_mik81_1",
	opacityPulse: opacityPulse$25,
	popoverIn: popoverIn$25,
	fadeIn: fadeIn$25,
	collapsibleSlideDown: collapsibleSlideDown$25,
	collapsibleSlideUp: collapsibleSlideUp$25,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$25,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$25,
	blurSwapIn: blurSwapIn$25,
	blurSwapOut: blurSwapOut$25,
	pulseGlow: pulseGlow$25,
	pulseGlowDelayed: pulseGlowDelayed$25,
	fade: fade$25,
	fadeInUp: fadeInUp$25,
	fadeInDown: fadeInDown$25,
	fadeInLeft: fadeInLeft$25,
	fadeInRight: fadeInRight$25,
	fadeOut: fadeOut$25,
	fadeOutDown: fadeOutDown$25,
	fadeOutUp: fadeOutUp$25,
	fadeOutLeft: fadeOutLeft$25,
	fadeOutRight: fadeOutRight$25,
	ping: ping$25,
	blinkBackground: blinkBackground$25,
	typingBlink: typingBlink$25
};
var AiActivityStep_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiActivityStep_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiActivityStep_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nCodeBlock/CodeBlock.types.ts
var CODE_BLOCK_LANGUAGES = [
	"json",
	"python",
	"typescript"
];
//#endregion
//#region ../@n8n/design-system/src/components/N8nCodeBlock/CodeBlock.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$10 = ["aria-label", "tabindex"];
var _hoisted_2$5 = ["innerHTML"];
var CodeBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CodeBlock",
	props: /* @__PURE__ */ mergeModels({
		code: {},
		language: { default: "auto" },
		copyable: {
			type: Boolean,
			default: true
		},
		maxHeight: { default: 280 },
		ariaLabel: { default: void 0 }
	}, {
		"collapsed": {
			type: Boolean,
			default: true
		},
		"collapsedModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["copy"], ["update:collapsed"]),
	setup(__props, { emit: __emit }) {
		core_default.registerLanguage("json", json);
		core_default.registerLanguage("python", python);
		core_default.registerLanguage("typescript", typescript);
		const props = __props;
		const emit = __emit;
		const collapsed = useModel(__props, "collapsed");
		const preRef = useTemplateRef("pre");
		const explicitHeight = ref();
		const isCollapsible = ref(false);
		const { t } = useI18n$1();
		const highlightedCode = computed(() => {
			if (props.language === "auto") return core_default.highlightAuto(props.code, [...CODE_BLOCK_LANGUAGES]).value;
			return core_default.highlight(props.code, {
				language: props.language,
				ignoreIllegals: true
			}).value;
		});
		const heightStyle = computed(() => {
			if (explicitHeight.value) return { height: explicitHeight.value };
			return collapsed.value ? { maxHeight: `${props.maxHeight}px` } : void 0;
		});
		const expandButtonLabel = computed(() => collapsed.value ? t("codeBlock.expand") : t("codeBlock.collapse"));
		const expandButtonIcon = computed(() => collapsed.value ? "arrow-down" : "arrow-up");
		const isClipboardAvailable = typeof navigator !== "undefined" && typeof navigator.clipboard?.writeText === "function";
		/** Here we check if the collapsible control is needed.
		* Only if we exceed the maxHeight (default: 280px) do we show the Expand/Collapse toggle
		*/
		function measureCollapsibility() {
			const element = preRef.value;
			isCollapsible.value = element ? element.scrollHeight - props.maxHeight > 1 : false;
		}
		useResizeObserver(preRef, measureCollapsibility);
		watch(() => [
			preRef.value,
			props.code,
			props.maxHeight
		], measureCollapsibility, {
			flush: "post",
			immediate: true
		});
		async function copyCode() {
			try {
				await navigator.clipboard.writeText(props.code);
				ElNotification({
					title: t("codeBlock.copiedToClipboard"),
					type: "success",
					position: "bottom-right"
				});
				emit("copy", props.code);
			} catch {
				ElNotification({
					title: t("codeBlock.copyFailed"),
					type: "error",
					position: "bottom-right"
				});
			}
		}
		async function toggleCollapsed() {
			const element = preRef.value;
			if (!element) return;
			explicitHeight.value = `${element.getBoundingClientRect().height}px`;
			await nextTick();
			/** Force layout so browser re-registers the transitions starting height.
			* Prevents accidental batch into a single frame.
			*/
			element.offsetHeight;
			collapsed.value = !collapsed.value;
			await nextTick();
			const contentHeight = element.scrollHeight;
			explicitHeight.value = `${collapsed.value ? Math.min(contentHeight, props.maxHeight) : contentHeight}px`;
		}
		function onHeightTransitionEnd(event) {
			if (event.propertyName === "height" && event.target === preRef.value) explicitHeight.value = void 0;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.codeBlock) }, [
				createBaseVNode("pre", {
					ref: "pre",
					class: normalizeClass([_ctx.$style.pre, { [_ctx.$style.isExpanded]: !collapsed.value }]),
					style: normalizeStyle(heightStyle.value),
					"aria-label": __props.ariaLabel,
					tabindex: __props.ariaLabel ? 0 : void 0,
					onTransitionend: onHeightTransitionEnd
				}, [createBaseVNode("code", {
					class: "hljs",
					innerHTML: highlightedCode.value
				}, null, 8, _hoisted_2$5)], 46, _hoisted_1$10),
				__props.copyable && unref(isClipboardAvailable) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.actions)
				}, [createVNode(unref(N8nTooltip_default), { content: unref(t)("codeBlock.copy") }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						icon: "copy",
						"icon-only": "",
						"icon-size": "medium",
						size: "small",
						variant: "ghost",
						"aria-label": unref(t)("codeBlock.copy"),
						title: unref(t)("codeBlock.copy"),
						onClick: copyCode
					}, null, 8, ["aria-label", "title"])]),
					_: 1
				}, 8, ["content"])], 2)) : createCommentVNode("", true),
				isCollapsible.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.expandButtonContainer)
				}, [createVNode(unref(N8nTooltip_default), { content: expandButtonLabel.value }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "small",
						icon: expandButtonIcon.value,
						"icon-only": "",
						"icon-size": "medium",
						variant: "subtle",
						class: normalizeClass(_ctx.$style.expandButton),
						"aria-label": expandButtonLabel.value,
						onClick: toggleCollapsed
					}, null, 8, [
						"icon",
						"class",
						"aria-label"
					])]),
					_: 1
				}, 8, ["content"])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nCodeBlock/CodeBlock.vue?vue&type=style&index=0&lang.module.scss
var codeBlock = "_codeBlock_x7vgj_388";
var pre = "_pre_x7vgj_395";
var actions$3 = "_actions_x7vgj_400";
var isExpanded = "_isExpanded_x7vgj_439";
var expandButtonContainer = "_expandButtonContainer_x7vgj_443";
var expandButton = "_expandButton_x7vgj_443";
var shimmer$24 = "_shimmer_x7vgj_1";
var spin$24 = "_spin_x7vgj_1";
var opacityPulse$24 = "_opacityPulse_x7vgj_1";
var popoverIn$24 = "_popoverIn_x7vgj_1";
var fadeIn$24 = "_fadeIn_x7vgj_1";
var collapsibleSlideDown$24 = "_collapsibleSlideDown_x7vgj_1";
var collapsibleSlideUp$24 = "_collapsibleSlideUp_x7vgj_1";
var collapsibleSlideDownBlurred$24 = "_collapsibleSlideDownBlurred_x7vgj_1";
var collapsibleSlideUpBlurred$24 = "_collapsibleSlideUpBlurred_x7vgj_1";
var blurSwapIn$24 = "_blurSwapIn_x7vgj_1";
var blurSwapOut$24 = "_blurSwapOut_x7vgj_1";
var pulseGlow$24 = "_pulseGlow_x7vgj_1";
var pulseGlowDelayed$24 = "_pulseGlowDelayed_x7vgj_1";
var fade$24 = "_fade_x7vgj_1";
var fadeInUp$24 = "_fadeInUp_x7vgj_1";
var fadeInDown$24 = "_fadeInDown_x7vgj_1";
var fadeInLeft$24 = "_fadeInLeft_x7vgj_1";
var fadeInRight$24 = "_fadeInRight_x7vgj_1";
var fadeOut$24 = "_fadeOut_x7vgj_1";
var fadeOutDown$24 = "_fadeOutDown_x7vgj_1";
var fadeOutUp$24 = "_fadeOutUp_x7vgj_1";
var fadeOutLeft$24 = "_fadeOutLeft_x7vgj_1";
var fadeOutRight$24 = "_fadeOutRight_x7vgj_1";
var ping$24 = "_ping_x7vgj_1";
var blinkBackground$24 = "_blinkBackground_x7vgj_1";
var typingBlink$24 = "_typingBlink_x7vgj_1";
var CodeBlock_vue_vue_type_style_index_0_lang_module_default = {
	codeBlock,
	pre,
	actions: actions$3,
	isExpanded,
	expandButtonContainer,
	expandButton,
	shimmer: shimmer$24,
	spin: spin$24,
	"skeleton-pulse": "_skeleton-pulse_x7vgj_1",
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
var CodeBlock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CodeBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CodeBlock_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/agentTelemetry.utils.ts
/**
* Internal helper used to compute a stable 16-char hex `config_version` join
* key. Not a privacy mechanism — agent payloads carry the raw config fields.
*/
async function sha256Hex16(input) {
	const bytes = new TextEncoder().encode(input);
	const digest = await crypto.subtle.digest("SHA-256", bytes);
	return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 16);
}
function toolIdentifier(ref) {
	if (ref.type === "custom") return ref.id ?? "";
	if (ref.type === "workflow") return ref.name ?? ref.workflow ?? "";
	return ref.name ?? ref.node?.nodeType ?? "";
}
function toolIdentifiersFromConfig(config) {
	return (config?.tools ?? []).map(toolIdentifier).filter(Boolean).sort();
}
function skillIdentifiersFromConfig(config) {
	return (config?.skills ?? []).map((ref) => ref.id).filter(Boolean).sort();
}
function taskIdentifiersFromConfig(config) {
	return Array.from(new Set((config?.tasks ?? []).map((ref) => ref.id).filter(Boolean))).sort();
}
async function buildAgentConfigFingerprint(config, connectedTriggers, additionalConfiguredTriggers = []) {
	const instructions = config?.instructions ?? "";
	const tools = toolIdentifiersFromConfig(config);
	const skills = skillIdentifiersFromConfig(config);
	const tasks = taskIdentifiersFromConfig(config);
	const configuredTriggers = new Set([...(config?.integrations ?? []).filter((integration) => !isDraftIntegration(integration)).map((integration) => integration.type), ...additionalConfiguredTriggers]);
	const triggers = connectedTriggers.filter((trigger) => configuredTriggers.has(trigger)).sort();
	const vectorStores = (config?.vectorStores ?? []).map((store) => `${store.provider}:${store.name}`).sort();
	const memory = config?.memory ? {
		enabled: config.memory.enabled,
		storage: config.memory.storage
	} : null;
	const model = config?.model ?? null;
	return {
		instructions,
		tools,
		skills,
		tasks,
		triggers,
		vector_stores: vectorStores,
		memory,
		model,
		config_version: await sha256Hex16(JSON.stringify({
			instructions,
			tools,
			skills,
			tasks,
			triggers,
			vector_stores: vectorStores,
			memory,
			model
		}))
	};
}
function deriveAgentStatus(agent) {
	if (!agent?.activeVersionId) return "draft";
	return agent.versionId === agent.activeVersionId ? "production" : "draft";
}
//#endregion
//#region src/features/agents/utils/relative-time.ts
var SECOND = 1e3;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
/**
* Returns a short, recognisable description of when something happened:
*
*   - within 5s   → "just now"
*   - within 1m   → "Ns ago"
*   - within 1h   → "Nm ago"
*   - within 24h  → "Nh ago"
*   - calendar day = previous local day → "Yesterday"
*   - older       → short locale date, e.g. "Oct 3" / "3 Oct"
*
* The shared `app/components/TimeAgo.vue` (timeago.js-based) also exists, but
* it walks the full seconds→years ladder with no "Yesterday" step and never
* falls back to an absolute date — wrong shape for a chat-history list where
* old sessions should drop to a date so the dropdown stays scannable.
*/
function formatRelativeTimestamp(date, i18n, now = /* @__PURE__ */ new Date()) {
	const past = date instanceof Date ? date : new Date(date);
	const diff = now.getTime() - past.getTime();
	if (diff < 5 * SECOND) return i18n.justNow;
	if (diff < MINUTE) return i18n.secondsAgo(Math.floor(diff / SECOND));
	if (diff < HOUR) return i18n.minutesAgo(Math.floor(diff / MINUTE));
	if (isSameLocalDay(past, now)) return i18n.hoursAgo(Math.floor(diff / HOUR));
	if (isYesterdayLocal(past, now)) return i18n.yesterday;
	return past.toLocaleDateString(void 0, {
		month: "short",
		day: "numeric"
	});
}
function isSameLocalDay(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isYesterdayLocal(past, now) {
	const yesterday = new Date(now);
	yesterday.setDate(now.getDate() - 1);
	return isSameLocalDay(past, yesterday);
}
function useRelativeTimestamp() {
	const i18n = useI18n();
	const strings = {
		justNow: i18n.baseText("agents.relativeTime.justNow"),
		secondsAgo: (n) => i18n.baseText("agents.relativeTime.secondsAgo", { interpolate: { count: String(n) } }),
		minutesAgo: (n) => i18n.baseText("agents.relativeTime.minutesAgo", { interpolate: { count: String(n) } }),
		hoursAgo: (n) => i18n.baseText("agents.relativeTime.hoursAgo", { interpolate: { count: String(n) } }),
		yesterday: i18n.baseText("agents.relativeTime.yesterday")
	};
	return (date) => formatRelativeTimestamp(date, strings);
}
//#endregion
//#region src/features/agents/composables/useAgentBuilderSession.ts
/**
* Max chars for session-name display in the preview breadcrumb dropdown trigger
* and its menu rows. Long titles otherwise crowd the header actions.
*/
var SESSION_TITLE_MAX_CHARS = 64;
/**
* Owns the preview chat-session state:
*
* - `continueSessionId` — set via the URL query string for shareable deep-links
*   into a specific session. Takes precedence when route backing is enabled.
* - `activeChatSessionId` — the in-tab session selection. Used exclusively
*   when route backing is disabled and as a fallback otherwise.
*
* Plus the session-picker dropdown menu and titles, all driven off the
* `agentSessionsStore` thread list.
*/
function useAgentBuilderSession({ routeBacked }) {
	const route = useRoute();
	const router = useRouter();
	const i18n = useI18n();
	const sessionsStore = useAgentSessionsStore();
	const threadTitleOf = useThreadTitle();
	const relativeTimeOf = useRelativeTimestamp();
	const activeChatSessionId = ref(null);
	const pendingRouteSessionId = ref(null);
	const ephemeralSessionId = ref(null);
	const continueSessionId = computed(() => {
		const raw = route.query[CONTINUE_SESSION_ID_PARAM];
		const value = Array.isArray(raw) ? raw[0] : raw;
		return typeof value === "string" && value.length > 0 ? value : void 0;
	});
	const effectiveSessionId = computed(() => (routeBacked.value ? pendingRouteSessionId.value ?? continueSessionId.value : void 0) ?? activeChatSessionId.value ?? void 0);
	watch([routeBacked, continueSessionId], ([isRouteBacked, routeSessionId]) => {
		if (!isRouteBacked) {
			pendingRouteSessionId.value = null;
			return;
		}
		if (routeSessionId && routeSessionId !== ephemeralSessionId.value) ephemeralSessionId.value = null;
		if (pendingRouteSessionId.value !== null) pendingRouteSessionId.value = null;
		if (routeSessionId) activeChatSessionId.value = routeSessionId;
	}, { immediate: true });
	watch(activeChatSessionId, (sessionId) => {
		if (sessionId === null) {
			pendingRouteSessionId.value = null;
			ephemeralSessionId.value = null;
		} else {
			if (ephemeralSessionId.value !== null && sessionId !== ephemeralSessionId.value) ephemeralSessionId.value = null;
			if (routeBacked.value && sessionId !== continueSessionId.value) pendingRouteSessionId.value = sessionId;
		}
	});
	const currentSessionIsEphemeral = computed(() => ephemeralSessionId.value !== null && ephemeralSessionId.value === effectiveSessionId.value);
	/**
	* The current session is "empty" until it's been persisted as a thread —
	* a freshly minted `activeChatSessionId` doesn't show up in `threads` until
	* the user sends the first message.
	*/
	const currentSessionHasMessages = computed(() => {
		const id = effectiveSessionId.value;
		if (!id) return false;
		return (sessionsStore.threads ?? []).some((t) => t.id === id);
	});
	const currentSessionTitle = computed(() => {
		const id = effectiveSessionId.value;
		if (!id) return "";
		const thread = (sessionsStore.threads ?? []).find((t) => t.id === id);
		if (!thread) return i18n.baseText("agents.builder.chat.newChat.label");
		return truncate(threadTitleOf(thread), SESSION_TITLE_MAX_CHARS);
	});
	const sessionMenu = computed(() => {
		const threads = sessionsStore.threads ?? [];
		if (threads.length === 0) return [{
			id: "__empty__",
			title: i18n.baseText("agents.builder.chat.sessionPicker.empty"),
			disabled: true
		}];
		return threads.map((thread) => ({
			id: thread.id,
			title: "",
			label: truncate(threadTitleOf(thread), SESSION_TITLE_MAX_CHARS),
			when: relativeTimeOf(thread.updatedAt)
		}));
	});
	function selectSession(id, ephemeral = false) {
		activeChatSessionId.value = id;
		ephemeralSessionId.value = ephemeral ? id : null;
		if (!routeBacked.value) return;
		pendingRouteSessionId.value = id;
		const query = {
			...route.query,
			[CONTINUE_SESSION_ID_PARAM]: id
		};
		if (ephemeral) delete query[NEW_SESSION_PARAM];
		router.replace({ query });
	}
	function setSessionInUrl(id) {
		selectSession(id);
	}
	function clearContinueSessionParam() {
		if (!routeBacked.value) return;
		const { [CONTINUE_SESSION_ID_PARAM]: _dropped, ...rest } = route.query;
		router.replace({ query: rest });
	}
	function onSessionPick(id) {
		if (id === "__empty__") return;
		selectSession(id);
	}
	function onNewChat() {
		selectSession(crypto.randomUUID(), true);
	}
	return {
		activeChatSessionId,
		continueSessionId,
		effectiveSessionId,
		currentSessionHasMessages,
		currentSessionTitle,
		currentSessionIsEphemeral,
		sessionMenu,
		setSessionInUrl,
		clearContinueSessionParam,
		onSessionPick,
		onNewChat
	};
}
//#endregion
//#region src/features/ai/shared/thinking.utils.ts
/** First sentence of streamed markdown-like text, for thinking status lines. */
function firstSentence(content) {
	const plain = content.replace(/[*_`#]/g, "").trim();
	const match = plain.match(/^.*?[.!?](?=\s|$)/s);
	return (match ? match[0] : plain).trim();
}
//#endregion
//#region src/features/ai/shared/components/AiReasoningBlock.vue?vue&type=script&setup=true&lang.ts
var AiReasoningBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiReasoningBlock",
	props: {
		entry: {},
		streaming: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const label = computed(() => firstSentence(props.entry.content) || i18n.baseText("ai.reasoning"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AiActivityStep_default), {
				label: label.value,
				loading: props.streaming
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.reasoningPanel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.reasoningScroll) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.reasoningContent) }, toDisplayString(props.entry.content), 3)], 2)], 2)]),
				_: 1
			}, 8, ["label", "loading"]);
		};
	}
});
//#endregion
//#region src/features/ai/shared/components/AiReasoningBlock.vue?vue&type=style&index=0&lang.module.scss
var reasoningPanel = "_reasoningPanel_cvmvz_388";
var reasoningScroll = "_reasoningScroll_cvmvz_397";
var reasoningContent = "_reasoningContent_cvmvz_407";
var shimmer$23 = "_shimmer_cvmvz_1";
var spin$23 = "_spin_cvmvz_1";
var opacityPulse$23 = "_opacityPulse_cvmvz_1";
var popoverIn$23 = "_popoverIn_cvmvz_1";
var fadeIn$23 = "_fadeIn_cvmvz_1";
var collapsibleSlideDown$23 = "_collapsibleSlideDown_cvmvz_1";
var collapsibleSlideUp$23 = "_collapsibleSlideUp_cvmvz_1";
var collapsibleSlideDownBlurred$23 = "_collapsibleSlideDownBlurred_cvmvz_1";
var collapsibleSlideUpBlurred$23 = "_collapsibleSlideUpBlurred_cvmvz_1";
var blurSwapIn$23 = "_blurSwapIn_cvmvz_1";
var blurSwapOut$23 = "_blurSwapOut_cvmvz_1";
var pulseGlow$23 = "_pulseGlow_cvmvz_1";
var pulseGlowDelayed$23 = "_pulseGlowDelayed_cvmvz_1";
var fade$23 = "_fade_cvmvz_1";
var fadeInUp$23 = "_fadeInUp_cvmvz_1";
var fadeInDown$23 = "_fadeInDown_cvmvz_1";
var fadeInLeft$23 = "_fadeInLeft_cvmvz_1";
var fadeInRight$23 = "_fadeInRight_cvmvz_1";
var fadeOut$23 = "_fadeOut_cvmvz_1";
var fadeOutDown$23 = "_fadeOutDown_cvmvz_1";
var fadeOutUp$23 = "_fadeOutUp_cvmvz_1";
var fadeOutLeft$23 = "_fadeOutLeft_cvmvz_1";
var fadeOutRight$23 = "_fadeOutRight_cvmvz_1";
var ping$23 = "_ping_cvmvz_1";
var blinkBackground$23 = "_blinkBackground_cvmvz_1";
var typingBlink$23 = "_typingBlink_cvmvz_1";
var AiReasoningBlock_vue_vue_type_style_index_0_lang_module_default = {
	reasoningPanel,
	reasoningScroll,
	reasoningContent,
	shimmer: shimmer$23,
	spin: spin$23,
	"skeleton-pulse": "_skeleton-pulse_cvmvz_1",
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
var AiReasoningBlock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiReasoningBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiReasoningBlock_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useSubAgentNames.ts
/**
* Resolves sub-agent ids → friendly names for delegate labels. Wraps the
* cached/deduped project agents list and loads it lazily — only once the caller
* signals (via `isNeeded`) that the current content actually contains
* delegations. Shared by the chat tool step and the session timeline.
*/
function useSubAgentNames(projectId, isNeeded) {
	const { list, ensureLoaded } = useProjectAgentsList(projectId);
	const subAgentNameById = computed(() => {
		const map = /* @__PURE__ */ new Map();
		for (const agent of list.value ?? []) map.set(agent.id, agent.name);
		return map;
	});
	watch([isNeeded, projectId], ([needed, id]) => {
		if (needed && id) ensureLoaded().catch(() => {});
	}, { immediate: true });
	return { subAgentNameById };
}
//#endregion
//#region src/features/ai/shared/agentsChat/delegateTool.ts
/**
* Name of the SDK tool a parent agent calls to hand a task to a sub-agent.
* Mirrors `DELEGATE_SUB_AGENT_TOOL_NAME` in `@n8n/agents` (not FE-importable),
* so the chat can special-case the tool call and render it as an expandable
* tool step.
*/
var DELEGATE_SUB_AGENT_TOOL_NAME = "delegate_subagent";
/** Mirrors `DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE` in `@n8n/agents`. */
var DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE = "agents.chat.delegate.childSuspendUnsupported";
var delegateInputSchema = objectType({
	subAgentId: stringType().min(1),
	taskName: stringType().optional(),
	difficulty: enumType(SUB_AGENT_TASK_DIFFICULTIES).optional()
});
var delegateOutputSchema = objectType({
	status: enumType([
		"completed",
		"failed",
		"suspended"
	]).optional(),
	answer: stringType().optional(),
	error: stringType().optional(),
	model: stringType().optional()
});
var SUB_AGENT_DIFFICULTY_I18N_KEY = {
	low: "agents.chat.difficulty.low",
	medium: "agents.chat.difficulty.medium",
	high: "agents.chat.difficulty.high"
};
function isDelegateSubAgentTool(toolName) {
	return toolName === DELEGATE_SUB_AGENT_TOOL_NAME;
}
/** Parse a delegate tool-call input; returns `undefined` when it isn't an object. */
function parseDelegateInput(input) {
	const result = delegateInputSchema.safeParse(input);
	return result.success ? result.data : void 0;
}
/**
* Parse a delegate tool-call output; returns `undefined` when it isn't an object
* (e.g. a rejected tool call whose output is the raw error string).
*/
function parseDelegateOutput(output) {
	const result = delegateOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function getDelegateDifficulty(input) {
	return parseDelegateInput(input)?.difficulty;
}
/** One-line localized difficulty label for a delegate tool call. */
function getDelegateDifficultySummary(input, i18n) {
	const difficulty = getDelegateDifficulty(input);
	return difficulty ? i18n.baseText(SUB_AGENT_DIFFICULTY_I18N_KEY[difficulty]) : void 0;
}
/** Localize a delegate tool error when it is a known i18n key. */
function formatDelegateError(error, i18n) {
	if (i18n && error === "agents.chat.delegate.childSuspendUnsupported") return i18n.baseText(DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE);
	return error;
}
/**
* True when a `delegate_subagent` call resolved with a failed result. Such a
* call settles successfully at the tool layer, so its step must be flipped to an
* error state explicitly (both live and on reload).
*/
function isFailedDelegateOutput(toolName, output) {
	if (!isDelegateSubAgentTool(toolName)) return false;
	return parseDelegateOutput(output)?.status === "failed";
}
/** Humanize a snake/kebab task name, e.g. `research_api` → `Research api`. */
function humanizeTaskName(taskName) {
	const normalized = taskName?.trim().replace(/[_-]+/g, " ").replace(/\s+/g, " ");
	if (!normalized) return "";
	return normalized.charAt(0).toLocaleUpperCase() + normalized.slice(1);
}
/** Friendly label for a raw sub-agent id (delegate hints, todo delegateHint, etc.). */
function resolveSubAgentIdForDisplay(subAgentId, nameById) {
	if (subAgentId === "inline") return humanizeTaskName("inline");
	const resolved = nameById.get(subAgentId)?.trim();
	if (resolved) return resolved;
	return humanizeTaskName(subAgentId) || subAgentId;
}
function resolveSubAgentName(input, nameById) {
	const parsed = parseDelegateInput(input);
	const resolved = parsed?.subAgentId && parsed.subAgentId !== "inline" ? nameById.get(parsed.subAgentId)?.trim() : void 0;
	if (resolved) return resolved;
	return humanizeTaskName(parsed?.taskName);
}
/**
* Format a delegate label: `Sub-agent · <name>` when a name resolved, otherwise
* the bare `Sub-agent` fallback. Takes the i18n instance (rather than resolving
* keys at the call site) so the chat, timeline row, and detail panel stay in
* sync.
*/
function delegateLabel(i18n, name) {
	return name ? i18n.baseText("agents.chat.delegate.label", { interpolate: { name } }) : i18n.baseText("agents.chat.delegate.labelFallback");
}
//#endregion
//#region src/features/agents/utils/write-todos-tool.ts
/**
* Name of the SDK tool the parent agent calls to maintain a structured task list.
* Mirrors `WRITE_TODOS_TOOL_NAME` in `@n8n/agents` (not FE-importable).
*/
var WRITE_TODOS_TOOL_NAME = "write_todos";
var todoStatusSchema = enumType([
	"pending",
	"in_progress",
	"completed",
	"blocked",
	"cancelled"
]);
var todoDifficultySchema = enumType(SUB_AGENT_TASK_DIFFICULTIES);
var todoItemSchema = objectType({
	id: stringType().min(1),
	content: stringType().min(1),
	status: todoStatusSchema,
	difficulty: todoDifficultySchema.optional(),
	delegateHint: objectType({
		subAgentId: stringType().optional(),
		expectedOutput: stringType().optional()
	}).optional()
});
var writeTodosOutputSchema = objectType({
	status: literalType("ok"),
	todoCount: numberType(),
	todos: arrayType(todoItemSchema)
});
var writeTodosFailedOutputSchema = objectType({
	status: literalType("failed"),
	error: stringType()
});
var STATUS_I18N_KEY = {
	in_progress: "agents.chat.writeTodos.status.inProgress",
	pending: "agents.chat.writeTodos.status.pending",
	completed: "agents.chat.writeTodos.status.completed",
	blocked: "agents.chat.writeTodos.status.blocked",
	cancelled: "agents.chat.writeTodos.status.cancelled"
};
var STATUS_ORDER = [
	"in_progress",
	"pending",
	"completed",
	"blocked",
	"cancelled"
];
function isWriteTodosTool(toolName) {
	return toolName === WRITE_TODOS_TOOL_NAME;
}
function parseWriteTodosOutput(output) {
	const result = writeTodosOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function parseWriteTodosFailedOutput(output) {
	const result = writeTodosFailedOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function formatWriteTodosErrorText(output) {
	const failed = parseWriteTodosFailedOutput(output);
	if (failed) {
		const error = failed.error.trim();
		return error.length > 0 ? error : void 0;
	}
	if (typeof output === "string") {
		const trimmed = output.trim();
		return trimmed.length > 0 ? trimmed : void 0;
	}
}
function writeTodosLabel(i18n) {
	return i18n.baseText("agents.chat.writeTodos.label");
}
function countIncompleteTodos(todos) {
	return todos.filter((todo) => todo.status !== "completed").length;
}
function writeTodosSummaryLabel(i18n, incompleteTodoCount) {
	if (incompleteTodoCount === 0) return i18n.baseText("agents.chat.writeTodos.summary.done");
	const key = incompleteTodoCount === 1 ? "agents.chat.writeTodos.summary.one" : "agents.chat.writeTodos.summary.other";
	return i18n.baseText(key, { interpolate: { count: String(incompleteTodoCount) } });
}
function writeTodosStatusLabel(i18n, status) {
	return i18n.baseText(STATUS_I18N_KEY[status]);
}
function writeTodosDifficultyLabel(i18n, difficulty) {
	return i18n.baseText(SUB_AGENT_DIFFICULTY_I18N_KEY[difficulty]);
}
function formatTodoItem(todo, i18n, subAgentNameById) {
	const hints = [];
	if (todo.difficulty) hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.difficulty")}: ${writeTodosDifficultyLabel(i18n, todo.difficulty)}`);
	if (todo.delegateHint?.subAgentId) {
		const displayName = resolveSubAgentIdForDisplay(todo.delegateHint.subAgentId, subAgentNameById ?? /* @__PURE__ */ new Map());
		hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.subAgent")}: ${displayName}`);
	}
	if (todo.delegateHint?.expectedOutput) hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.expectedOutput")}: ${todo.delegateHint.expectedOutput}`);
	const suffix = hints.length > 0 ? ` _(${hints.join("; ")})_` : "";
	return `- ${todo.content}${suffix}`;
}
/** Format parsed write_todos output as Markdown for the expandable details panel. */
function formatWriteTodosMarkdown(output, i18n, subAgentNameById) {
	const errorText = formatWriteTodosErrorText(output);
	if (errorText) return errorText;
	const parsed = parseWriteTodosOutput(output);
	if (!parsed || !i18n || parsed.todos.length === 0) return void 0;
	const sections = [];
	for (const status of STATUS_ORDER) {
		const items = parsed.todos.filter((todo) => todo.status === status);
		if (items.length === 0) continue;
		sections.push(`**${writeTodosStatusLabel(i18n, status)}**`);
		sections.push(items.map((todo) => formatTodoItem(todo, i18n, subAgentNameById)).join("\n"));
	}
	return sections.join("\n\n");
}
//#endregion
//#region src/features/agents/utils/tool-call-details.ts
function isSettledState(state) {
	return state === TOOL_CALL_STATE.DONE || state === TOOL_CALL_STATE.ERROR;
}
function formatDelegateDetails(output, i18n) {
	const parsed = parseDelegateOutput(output);
	if (!parsed) return void 0;
	const answer = parsed.answer?.trim();
	if (answer) return answer;
	const error = parsed.error?.trim();
	if (error) return formatDelegateError(error, i18n);
}
function formatExpandableDetails(toolName, output, i18n, subAgentNameById) {
	if (isDelegateSubAgentTool(toolName)) return formatDelegateDetails(output, i18n);
	if (isWriteTodosTool(toolName)) return formatWriteTodosMarkdown(output, i18n, subAgentNameById);
}
/**
* Returns Markdown/text for the expandable tool-call details panel.
* Only `delegate_subagent` and `write_todos` have purpose-built detail views;
* other tools are not expandable until their UX is designed.
*/
function getToolCallDetails(tc, i18n, subAgentNameById) {
	if (!isSettledState(tc.state)) return void 0;
	return formatExpandableDetails(tc.tool, tc.output, i18n, subAgentNameById);
}
//#endregion
//#region src/features/agents/components/AgentChatToolSteps.vue?vue&type=script&setup=true&lang.ts
var AgentChatToolSteps_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatToolSteps",
	props: {
		toolCalls: {},
		projectId: {},
		canFixWithAssistant: { type: Boolean },
		executionId: {}
	},
	emits: ["fixWithAssistant"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const showFix = computed(() => Boolean(props.canFixWithAssistant && props.executionId));
		const fixableFailures = computed(() => {
			if (!showFix.value) return [];
			const failures = [];
			for (const toolCall of props.toolCalls) {
				if (toolCall.state !== TOOL_CALL_STATE.ERROR) continue;
				const error = toolStepError(toolCall)?.trim();
				if (!error) continue;
				failures.push({
					toolCallId: toolCall.toolCallId,
					toolName: toolCall.tool,
					toolDisplayName: toolStepLabel(toolCall),
					error,
					...toolCall.startTime !== void 0 ? { startedAt: toolCall.startTime } : {},
					...toolCall.endTime !== void 0 ? { endedAt: toolCall.endTime } : {}
				});
			}
			return failures;
		});
		const fixableErrorTexts = computed(() => {
			return [...new Set(fixableFailures.value.map(({ error }) => error))];
		});
		function toolCallsNeedSubAgentNames(toolCalls) {
			return toolCalls.some((tc) => {
				if (isDelegateSubAgentTool(tc.tool)) return true;
				if (!isWriteTodosTool(tc.tool)) return false;
				return parseWriteTodosOutput(tc.output)?.todos.some((todo) => Boolean(todo.delegateHint?.subAgentId)) ?? false;
			});
		}
		const { subAgentNameById } = useSubAgentNames(toRef(() => props.projectId ?? ""), () => toolCallsNeedSubAgentNames(props.toolCalls));
		function getToolDisplayName(toolName) {
			return resolveToolNameForDisplay(toolName, i18n);
		}
		function toolStepLabel(tc) {
			if (isDelegateSubAgentTool(tc.tool)) return i18n.baseText("agents.chat.delegate.labelFallback");
			if (isWriteTodosTool(tc.tool)) return writeTodosLabel(i18n);
			return getToolDisplayName(tc.tool);
		}
		function toolStepMetadata(tc) {
			if (isDelegateSubAgentTool(tc.tool)) return [resolveSubAgentName(tc.input, subAgentNameById.value), getDelegateDifficultySummary(tc.input, i18n)].filter((part) => Boolean(part));
			if (isWriteTodosTool(tc.tool)) {
				const parsed = parseWriteTodosOutput(tc.output);
				if (parsed) return [writeTodosSummaryLabel(i18n, countIncompleteTodos(parsed.todos))];
			}
			if (tc.displaySummary) return [tc.displaySummary];
			return [];
		}
		function hasToolData(tc) {
			return tc.input !== void 0 || tc.output !== void 0;
		}
		/** Render a delegated child's live steps through this same component, so they look
		*  identical to the parent's own tool steps. */
		function childToolCalls(steps) {
			return steps.map((step) => ({
				tool: step.toolName,
				toolCallId: step.toolCallId,
				state: step.running ? TOOL_CALL_STATE.RUNNING : TOOL_CALL_STATE.DONE
			}));
		}
		/** Traces recorded before empty segments were dropped can still carry reasoning
		*  the provider never revealed, which would render as blank rows. */
		function childReasoningSegments(childProgress) {
			return childProgress.reasoningSegments.filter((segment) => segment.content.length > 0);
		}
		function formatToolData(value) {
			if (typeof value === "string") return value;
			return JSON.stringify(value, null, 2) ?? String(value);
		}
		function isEmptyToolErrorPayload(value) {
			if (value === void 0 || value === null) return true;
			if (typeof value === "string") return value.trim().length === 0;
			if (typeof value === "object" && !Array.isArray(value)) return Object.keys(value).length === 0;
			return false;
		}
		function toolStepView(tc) {
			const details = getToolCallDetails(tc, i18n, subAgentNameById.value) ?? "";
			const metadata = toolStepMetadata(tc);
			const hasChildProgress = Boolean(tc.childProgress);
			return {
				label: [toolStepLabel(tc), ...metadata].join(" · "),
				details,
				hasRawData: details.length === 0 && hasToolData(tc) && !hasChildProgress,
				expandable: details.length > 0 || hasToolData(tc) || hasChildProgress
			};
		}
		function toolStepError(tc) {
			if (tc.state !== TOOL_CALL_STATE.ERROR) return void 0;
			if (isEmptyToolErrorPayload(tc.output)) return i18n.baseText("agents.chat.toolError.generic");
			return formatToolData(tc.output);
		}
		function emitFixWithAssistant() {
			if (fixableFailures.value.length === 0) return;
			emit("fixWithAssistant", fixableFailures.value);
		}
		function isToolStepLoading(tc) {
			return tc.state === TOOL_CALL_STATE.PENDING || tc.state === TOOL_CALL_STATE.RUNNING || tc.state === TOOL_CALL_STATE.SUSPENDED;
		}
		function groupLabel() {
			return i18n.baseText("instanceAi.activitySummary.toolCalls", {
				adjustToNumber: props.toolCalls.length,
				interpolate: { count: String(props.toolCalls.length) }
			});
		}
		function hasActiveToolCall() {
			return props.toolCalls.some((tc) => tc.state === TOOL_CALL_STATE.PENDING || tc.state === TOOL_CALL_STATE.RUNNING);
		}
		return (_ctx, _cache) => {
			const _component_AgentChatToolSteps = resolveComponent("AgentChatToolSteps", true);
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.toolSteps) }, [__props.toolCalls.length > 1 ? (openBlock(), createBlock(unref(AiActivityStepGroup_default), {
				key: 0,
				label: groupLabel(),
				size: "small",
				loading: hasActiveToolCall()
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.toolCalls, (tc) => {
					return openBlock(), createElementBlock(Fragment, { key: tc.toolCallId }, [(openBlock(true), createElementBlock(Fragment, null, renderList([toolStepView(tc)], (view) => {
						return openBlock(), createBlock(unref(AiActivityStep_default), {
							key: `${tc.toolCallId}-${view.label}`,
							label: view.label,
							loading: isToolStepLoading(tc),
							error: toolStepError(tc),
							"hide-error-callout": showFix.value && tc.state === unref(TOOL_CALL_STATE).ERROR,
							"has-content": view.expandable
						}, {
							default: withCtx(() => [
								tc.childProgress ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass(_ctx.$style.childProgress),
									"data-test-id": "agent-chat-delegate-child-progress"
								}, [
									tc.childProgress.steps.length > 0 ? (openBlock(), createBlock(_component_AgentChatToolSteps, {
										key: 0,
										"tool-calls": childToolCalls(tc.childProgress.steps),
										"project-id": __props.projectId
									}, null, 8, ["tool-calls", "project-id"])) : createCommentVNode("", true),
									(openBlock(true), createElementBlock(Fragment, null, renderList(childReasoningSegments(tc.childProgress), (segment) => {
										return openBlock(), createBlock(AiReasoningBlock_default, {
											key: segment.id,
											entry: segment,
											streaming: segment.endTime === void 0
										}, null, 8, ["entry", "streaming"]);
									}), 128)),
									tc.childProgress.text && !view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
										key: 1,
										"model-value": tc.childProgress.text,
										readonly: "",
										variant: "ghost",
										"show-toolbar": "never",
										"max-height": "240px",
										class: normalizeClass(_ctx.$style.answer)
									}, null, 8, ["model-value", "class"])) : createCommentVNode("", true)
								], 2)) : createCommentVNode("", true),
								view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
									key: 1,
									"model-value": view.details,
									readonly: "",
									variant: "ghost",
									"show-toolbar": "never",
									"max-height": "240px",
									class: normalizeClass(_ctx.$style.answer)
								}, null, 8, ["model-value", "class"])) : createCommentVNode("", true),
								view.hasRawData ? (openBlock(), createElementBlock("div", {
									key: 2,
									class: normalizeClass(_ctx.$style.toolDataList)
								}, [tc.input !== void 0 ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass(_ctx.$style.toolDataSection)
								}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.input)), 3)], 2)) : createCommentVNode("", true), tc.output !== void 0 ? (openBlock(), createElementBlock("div", {
									key: 1,
									class: normalizeClass(_ctx.$style.toolDataSection)
								}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.output)), 3)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
							]),
							_: 2
						}, 1032, [
							"label",
							"loading",
							"error",
							"hide-error-callout",
							"has-content"
						]);
					}), 128))], 64);
				}), 128))]),
				_: 1
			}, 8, ["label", "loading"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.toolCalls, (tc) => {
				return openBlock(), createBlock(unref(AiActivityStep_default), {
					key: tc.toolCallId,
					label: toolStepView(tc).label,
					loading: isToolStepLoading(tc),
					error: toolStepError(tc),
					"hide-error-callout": showFix.value && tc.state === unref(TOOL_CALL_STATE).ERROR,
					"has-content": toolStepView(tc).expandable
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList([toolStepView(tc)], (view) => {
						return openBlock(), createElementBlock(Fragment, { key: view.label }, [
							tc.childProgress ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.childProgress),
								"data-test-id": "agent-chat-delegate-child-progress"
							}, [
								tc.childProgress.steps.length > 0 ? (openBlock(), createBlock(_component_AgentChatToolSteps, {
									key: 0,
									"tool-calls": childToolCalls(tc.childProgress.steps),
									"project-id": __props.projectId
								}, null, 8, ["tool-calls", "project-id"])) : createCommentVNode("", true),
								(openBlock(true), createElementBlock(Fragment, null, renderList(childReasoningSegments(tc.childProgress), (segment) => {
									return openBlock(), createBlock(AiReasoningBlock_default, {
										key: segment.id,
										entry: segment,
										streaming: segment.endTime === void 0
									}, null, 8, ["entry", "streaming"]);
								}), 128)),
								tc.childProgress.text && !view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
									key: 1,
									"model-value": tc.childProgress.text,
									readonly: "",
									variant: "ghost",
									"show-toolbar": "never",
									"max-height": "240px",
									class: normalizeClass(_ctx.$style.answer)
								}, null, 8, ["model-value", "class"])) : createCommentVNode("", true)
							], 2)) : createCommentVNode("", true),
							view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
								key: 1,
								"model-value": view.details,
								readonly: "",
								variant: "ghost",
								"show-toolbar": "never",
								"max-height": "240px",
								class: normalizeClass(_ctx.$style.answer)
							}, null, 8, ["model-value", "class"])) : createCommentVNode("", true),
							view.hasRawData ? (openBlock(), createElementBlock("div", {
								key: 2,
								class: normalizeClass(_ctx.$style.toolDataList)
							}, [tc.input !== void 0 ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.toolDataSection)
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.input)), 3)], 2)) : createCommentVNode("", true), tc.output !== void 0 ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style.toolDataSection)
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.output)), 3)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
						], 64);
					}), 128))]),
					_: 2
				}, 1032, [
					"label",
					"loading",
					"error",
					"hide-error-callout",
					"has-content"
				]);
			}), 128)), fixableErrorTexts.value.length > 0 ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 2,
				theme: "danger",
				"data-test-id": "agent-chat-tool-fix-with-assistant-callout"
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					size: "small",
					variant: "subtle",
					"data-test-id": "agent-chat-tool-fix-with-assistant",
					onClick: emitFixWithAssistant
				}, {
					icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "sparkles",
						size: "small"
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.preview.fixWithAssistant")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [fixableErrorTexts.value.length === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(fixableErrorTexts.value[0]), 1)], 64)) : (openBlock(), createElementBlock("ul", {
					key: 1,
					class: normalizeClass(_ctx.$style.errorList)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(fixableErrorTexts.value, (error) => {
					return openBlock(), createElementBlock("li", { key: error }, toDisplayString(error), 1);
				}), 128))], 2))]),
				_: 1
			})) : createCommentVNode("", true)], 2);
		};
	}
});
var AgentChatToolSteps_vue_vue_type_style_index_0_lang_module_default = {
	toolSteps: "_toolSteps_brv5u_2",
	errorList: "_errorList_brv5u_6",
	childProgress: "_childProgress_brv5u_15",
	answer: "_answer_brv5u_28",
	toolDataList: "_toolDataList_brv5u_38",
	toolDataSection: "_toolDataSection_brv5u_46",
	toolDataLabel: "_toolDataLabel_brv5u_54",
	toolDataContent: "_toolDataContent_brv5u_62"
};
var AgentChatToolSteps_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatToolSteps_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatToolSteps_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/n8nChatInteraction.ts
/**
* Single-operation integration action tool input — any `<platform>_action`
* tool's `{ action, input: { message: { text?, card? } } }` shape, with the
* message validated against the SAME `richMessageSchema` the backend tool
* boundary uses (`@n8n/api-types/agents/rich-card.schema.ts`). Batch inputs
* (`actions: [...]`) never suspend and don't match this schema; they fall
* back to raw JSON rendering.
*/
var actionToolInputSchema = objectType({
	action: stringType(),
	input: objectType({ message: richMessageSchema }).passthrough()
}).passthrough();
/** Resume payload shape shared with the platform card path (component-mapper / bridge). */
var n8nChatResumeValueSchema = objectType({
	type: enumType(["button", "select"]),
	value: stringType(),
	id: stringType().optional()
}).passthrough();
var INTERACTIVE_COMPONENT_TYPES = new Set([
	"button",
	"select",
	"radio_select"
]);
/**
* Mirrors the backend's shouldAwaitResponse: explicit flag or interactive components.
*
* @see shouldAwaitResponse in packages/cli/src/modules/agents/integrations/integration-tool-execution.ts
*/
function isAwaitingCard(card) {
	if (card.awaitResponse === true) return true;
	return card.components.some((component) => INTERACTIVE_COMPONENT_TYPES.has(component.type) || component.type === "section" && component.button !== void 0);
}
/**
* Parse any integration action tool input (slack_action, chat_action, …)
* into its renderable card, or undefined when it carries none. Used for the
* live n8n chat cards and for session-log card previews of every integration.
*/
function parseIntegrationActionCard(input) {
	const parsed = actionToolInputSchema.safeParse(input);
	if (!parsed.success) return void 0;
	const { message } = parsed.data.input;
	if (!message.card) return void 0;
	return {
		text: message.text,
		card: message.card
	};
}
/** Parse a persisted/live chat_action tool input into a renderable card, or undefined. */
function parseN8nChatActionInput(input) {
	return parseIntegrationActionCard(input);
}
/**
* Suspend payload of a workflow tool parked on a Wait node — the same card the
* chat platforms render, so it goes through the same card renderer here.
*
* @see buildWaitCard in packages/cli/src/modules/agents/tools/workflow-tool-factory.ts
*/
var waitSuspendPayloadSchema = objectType({
	type: literalType(WORKFLOW_WAIT_SUSPEND_TYPE),
	title: stringType(),
	components: arrayType(richCardComponentSchema).min(1)
});
/** Parse a Wait-node suspend payload into a renderable card, or undefined. */
function parseWaitSuspendPayload(payload) {
	const parsed = waitSuspendPayloadSchema.safeParse(payload);
	if (!parsed.success) return void 0;
	return { card: {
		title: parsed.data.title,
		components: parsed.data.components
	} };
}
/**
* Human-readable label for a card's resume value: the clicked button's label
* or the chosen option's label, falling back to the raw value. Used for the
* tool-step summary once an answered card clears from the chat.
*/
function cardChoiceLabel(card, resume) {
	if (resume.type === "button") {
		for (const component of card.components) {
			const candidates = component.type === "button" ? [component] : component.type === "section" && component.button ? [component.button] : [];
			for (const button of candidates) if (button.value === resume.value) return button.label ?? button.text ?? resume.value;
		}
		return resume.value;
	}
	for (const component of card.components) {
		if (component.type !== "select" && component.type !== "radio_select") continue;
		if (resume.id !== void 0 && component.id !== void 0 && component.id !== resume.id) continue;
		const option = component.options.find((candidate) => candidate.value === resume.value);
		if (option) return option.label;
	}
	return resume.value;
}
//#endregion
//#region src/features/ai/shared/agentsChat/interactiveSummary.ts
/**
* Build a one-line human-readable label for a resolved interactive tool call.
* Used by `AgentChatToolSteps` to show the user's answer beside the tool name
* (e.g. "→ n8n_chat_action · Approve & Send") so resolved cards leave a compact
* trace in scrollback instead of vanishing.
*
* Returns `undefined` for non-interactive tools or when the output isn't
* shaped as expected — callers fall back to rendering just the tool name.
*/
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function summariseToolCall(toolName, output, input) {
	if (!isPlainObject(output)) return void 0;
	if (toolName === "chat_action") {
		const resume = n8nChatResumeValueSchema.safeParse(output);
		if (!resume.success) return void 0;
		const parsed = parseN8nChatActionInput(input);
		if (!parsed) return resume.data.value;
		return cardChoiceLabel(parsed.card, resume.data);
	}
}
//#endregion
//#region src/features/ai/shared/agentsChat/messageMappers.ts
function syncLegacyInteractive(message) {
	const interactives = message.interactives;
	if (!interactives?.length) {
		delete message.interactive;
		return;
	}
	message.interactive = interactives.find((payload) => payload.resolvedAt === void 0) ?? interactives[0];
}
function getMessageInteractives(message) {
	if (message.interactives?.length) return message.interactives;
	return message.interactive ? [message.interactive] : [];
}
function setMessageInteractives(message, interactives) {
	if (interactives.length === 0) {
		delete message.interactives;
		delete message.interactive;
		return;
	}
	message.interactives = interactives;
	syncLegacyInteractive(message);
}
function upsertMessageInteractive(message, interactive) {
	const interactives = [...getMessageInteractives(message)];
	const index = interactives.findIndex((payload) => payload.toolCallId === interactive.toolCallId);
	if (index === -1) interactives.push(interactive);
	else interactives[index] = interactive;
	setMessageInteractives(message, interactives);
}
function getMessageInteractive(message, toolCallId) {
	return getMessageInteractives(message).find((payload) => payload.toolCallId === toolCallId);
}
function findOpenInteractive(messages) {
	for (const message of messages) {
		const open = getMessageInteractives(message).find((payload) => payload.resolvedAt === void 0);
		if (open) return open;
	}
}
/**
* The open interactive on the last turn, which is the one that owns the chat
* input and any steering. A parked run is always the tail of the transcript, so
* an unresolved card further up belongs to a turn the conversation already moved
* past — `findOpenInteractive` returns those too, and acting on them would
* answer or cancel the wrong tool call.
*/
function findTailOpenInteractive(messages) {
	const tail = messages[messages.length - 1];
	if (!tail) return void 0;
	return getMessageInteractives(tail).find((payload) => payload.resolvedAt === void 0);
}
/**
* The open interactive on the last turn that a steering message is allowed to
* cancel. A waiting card is never one: the workflow resumes it by itself, so
* cancelling it because the user typed would abandon a run they never asked to
* stop and leave the sub-workflow finishing into a checkpoint nobody reads.
* Stopping a wait is a deliberate act — the card's own button, or Stop.
*/
function findTailSteerableInteractive(messages) {
	const tail = messages[messages.length - 1];
	if (!tail) return void 0;
	return getMessageInteractives(tail).find((payload) => payload.resolvedAt === void 0 && payload.toolName !== "wait");
}
/** True when a suspend payload is the approval tool's renderable input. */
function isApprovalSuspendInput(value) {
	return parseApprovalInput(value) !== void 0;
}
function parseApprovalInput(value) {
	if (!isRecord(value)) return void 0;
	if (value.type !== "approval") return void 0;
	if (typeof value.toolName !== "string" || value.toolName.length === 0) return void 0;
	return {
		type: "approval",
		toolName: value.toolName,
		...typeof value.displayName === "string" && value.displayName.length > 0 && { displayName: value.displayName },
		args: value.args,
		...value.details !== void 0 && { details: value.details }
	};
}
function preserveApprovalDetails(next, previous) {
	const nextApproval = parseApprovalInput(next);
	const previousApproval = parseApprovalInput(previous);
	if (!nextApproval || nextApproval.details !== void 0 || previousApproval?.details === void 0) return next;
	return {
		...nextApproval,
		details: previousApproval.details
	};
}
function isDeclinedToolOutput$1(value) {
	return isRecord(value) && value.declined === true;
}
/**
* Given a tool call belonging to one of the interactive tools still rendered
* in agents chat (`approval`, `chat_action`) — or a workflow tool parked on a
* Wait node — reconstruct an `InteractivePayload` for it. The result is:
*
* - **resolved**: when `output` is present.
* - **open**: when `output` is absent — the card renders as an active
*   awaiting-user prompt. Used when a refresh during a suspension restored the
*   suspended assistant turn from the open checkpoint.
*
* Returns `undefined` when the tool name isn't interactive or input parsing fails.
*/
function rebuildInteractiveFromHistory(tc) {
	const approvalInput = parseApprovalInput(tc.suspendPayload) ?? parseApprovalInput(tc.input);
	if (approvalInput) {
		const resolved = tc.output !== void 0;
		return {
			toolCallId: tc.toolCallId,
			...resolved && { resolvedAt: 1 },
			...tc.canceled === true && { cancelled: true },
			toolName: APPROVAL_TOOL_NAME,
			input: approvalInput,
			...resolved && tc.canceled !== true && !isDelegateSubAgentTool(tc.tool) && { resolvedValue: { approved: !isDeclinedToolOutput$1(tc.output) } }
		};
	}
	const waitInput = parseWaitSuspendPayload(tc.suspendPayload);
	if (waitInput) {
		const resolved = tc.output !== void 0 ? n8nChatResumeValueSchema.safeParse(tc.output) : null;
		return {
			toolCallId: tc.toolCallId,
			...tc.output !== void 0 && { resolvedAt: 1 },
			...tc.canceled === true && { cancelled: true },
			toolName: WAIT_TOOL_NAME,
			input: waitInput,
			...tc.canceled !== true && resolved?.success && { resolvedValue: resolved.data }
		};
	}
	if (tc.tool === "chat_action") {
		const input = parseN8nChatActionInput(tc.input);
		if (!input) return void 0;
		if (tc.output === void 0 && !isAwaitingCard(input.card)) return void 0;
		const resolved = tc.output !== void 0 ? n8nChatResumeValueSchema.safeParse(tc.output) : null;
		return {
			toolCallId: tc.toolCallId,
			...tc.output !== void 0 && { resolvedAt: 1 },
			...tc.canceled === true && { cancelled: true },
			toolName: N8N_CHAT_ACTION_TOOL_NAME,
			input,
			...tc.canceled !== true && resolved?.success && { resolvedValue: resolved.data }
		};
	}
}
/**
* Convert persisted agent messages into the frontend ChatMessage format.
*
* Whenever a tool call is interactive, we attach a reconstructed
* `InteractivePayload` so the UI re-renders the card in either its open
* (awaiting user) or resolved (disabled) state.
*/
function convertDbMessages(dbMessages) {
	const result = [];
	for (const msg of dbMessages) {
		if (!msg.role || !Array.isArray(msg.content)) continue;
		const role = msg.role === "user" ? "user" : msg.role === "assistant" ? "assistant" : null;
		if (role === null) continue;
		let text = "";
		let thinking = "";
		const thinkingSegments = [];
		const toolCalls = [];
		const renderParts = [];
		const interactives = [];
		const attachments = [];
		let status = msg.executionStatus === "error" ? CHAT_MESSAGE_STATUS.ERROR : void 0;
		for (const [partIndex, part] of msg.content.entries()) if (part.type === "text" && part.text) {
			text += part.text;
			renderParts.push({
				type: "text",
				text: part.text
			});
		} else if (part.type === "file" && part.fileId) attachments.push({
			fileId: part.fileId,
			fileName: part.fileName ?? "attachment",
			mimeType: part.mimeType ?? "application/octet-stream",
			sizeBytes: part.sizeBytes
		});
		else if (part.type === "reasoning" && part.text) {
			thinking += part.text;
			thinkingSegments.push({
				id: `${msg.id}:reasoning:${partIndex}`,
				content: part.text,
				...part.startTime !== void 0 && { startTime: part.startTime },
				...part.endTime !== void 0 && { endTime: part.endTime }
			});
		} else if (part.type === "tool-call" && part.toolName) {
			let state;
			let output;
			const canceled = part.canceled === true;
			if (part.state === "resolved") {
				output = part.output;
				if (canceled) state = TOOL_CALL_STATE.CANCELLED;
				else if (isFailedDelegateOutput(part.toolName, part.output)) state = TOOL_CALL_STATE.ERROR;
				else state = TOOL_CALL_STATE.DONE;
			} else if (part.state === "rejected") {
				state = TOOL_CALL_STATE.ERROR;
				output = part.error;
			} else if (msg.executionStatus === "error") {
				state = TOOL_CALL_STATE.ERROR;
				output = part.error;
			} else {
				state = TOOL_CALL_STATE.RUNNING;
				output = void 0;
			}
			const toolCall = {
				tool: part.toolName,
				toolCallId: part.toolCallId ?? "",
				input: part.input,
				...output !== void 0 && { output },
				...canceled && { canceled },
				state,
				...part.startTime !== void 0 && { startTime: part.startTime },
				...part.endTime !== void 0 && { endTime: part.endTime },
				...part.suspendPayload !== void 0 && { suspendPayload: part.suspendPayload },
				...part.childTrace && { childProgress: part.childTrace },
				displaySummary: summariseToolCall(part.toolName, output, part.input)
			};
			toolCalls.push(toolCall);
			const rebuilt = rebuildInteractiveFromHistory(toolCall);
			if (!rebuilt) continue;
			if (rebuilt.resolvedAt === void 0 && msg.executionStatus !== "error") {
				toolCall.state = TOOL_CALL_STATE.SUSPENDED;
				status = CHAT_MESSAGE_STATUS.AWAITING_USER;
			}
			interactives.push(rebuilt);
			renderParts.push({
				type: "interactive",
				toolCallId: rebuilt.toolCallId
			});
		}
		const chatMessage = {
			id: msg.id ?? crypto.randomUUID(),
			role,
			content: text,
			...renderParts.length > 0 && { renderParts },
			thinking: thinking || void 0,
			...thinkingSegments.length > 0 && { thinkingSegments },
			toolCalls: toolCalls.length > 0 ? toolCalls : void 0,
			...attachments.length > 0 && { attachments },
			...status && { status },
			...msg.executionId ? { executionId: msg.executionId } : {}
		};
		setMessageInteractives(chatMessage, interactives);
		result.push(chatMessage);
	}
	return result;
}
/**
* Reconcile unfinished tool calls and interactive cards with the suspensions
* still open on the backend. The sidecar comes from chat history
* (`openSuspensions`) — raw persisted messages don't carry runIds or enough
* information to distinguish a live suspension from an interrupted run.
*
* Mutates `chat` in place (history-load happens before reactivity wraps the
* messages, so this is safe and avoids an extra deep clone) and returns it
* for ergonomic chaining.
*/
function applyOpenSuspensions(chat, suspensions) {
	const byToolCallId = new Map(suspensions.map((s) => [s.toolCallId, s]));
	for (const msg of chat) {
		let hasOpenToolCall = false;
		for (const toolCall of msg.toolCalls ?? []) {
			if (toolCall.state === TOOL_CALL_STATE.DONE || toolCall.state === TOOL_CALL_STATE.ERROR || toolCall.state === TOOL_CALL_STATE.CANCELLED) continue;
			const suspension = byToolCallId.get(toolCall.toolCallId);
			if (suspension) {
				toolCall.state = TOOL_CALL_STATE.SUSPENDED;
				toolCall.runId = suspension.runId;
				if (suspension.suspendPayload !== void 0) toolCall.suspendPayload = preserveApprovalDetails(suspension.suspendPayload, toolCall.suspendPayload);
				const rebuilt = rebuildInteractiveFromHistory(toolCall);
				if (rebuilt) {
					rebuilt.runId = suspension.runId;
					upsertMessageInteractive(msg, rebuilt);
				}
				hasOpenToolCall = true;
			} else if (msg.status === CHAT_MESSAGE_STATUS.ERROR) toolCall.state = TOOL_CALL_STATE.ERROR;
			else {
				toolCall.state = TOOL_CALL_STATE.CANCELLED;
				toolCall.canceled = true;
			}
		}
		const interactives = getMessageInteractives(msg);
		const retained = [];
		for (const interactive of interactives) {
			if (interactive.resolvedAt !== void 0) {
				retained.push(interactive);
				continue;
			}
			const suspension = byToolCallId.get(interactive.toolCallId);
			if (suspension) {
				interactive.runId = suspension.runId;
				retained.push(interactive);
			}
		}
		setMessageInteractives(msg, retained);
		if (hasOpenToolCall) msg.status = CHAT_MESSAGE_STATUS.AWAITING_USER;
		else if (msg.status === CHAT_MESSAGE_STATUS.AWAITING_USER) msg.status = msg.toolCalls?.some((tc) => tc.state === TOOL_CALL_STATE.ERROR) ? CHAT_MESSAGE_STATUS.ERROR : CHAT_MESSAGE_STATUS.SUCCESS;
	}
	return chat;
}
//#endregion
//#region src/features/ai/shared/agentsChat/thinking.ts
function getMessageThinkingSegments(message) {
	if (message.thinkingSegments?.length) return message.thinkingSegments.filter((segment) => segment.content.trim().length > 0);
	if (!message.thinking?.trim()) return [];
	return [{
		id: `${message.id}:reasoning`,
		content: message.thinking
	}];
}
function getThinkingDurationSec(segments) {
	let startTime;
	let endTime;
	for (const segment of segments) {
		if (segment.startTime !== void 0) startTime = startTime === void 0 ? segment.startTime : Math.min(startTime, segment.startTime);
		if (segment.endTime !== void 0) endTime = endTime === void 0 ? segment.endTime : Math.max(endTime, segment.endTime);
	}
	if (startTime === void 0 || endTime === void 0 || endTime < startTime) return void 0;
	return Math.max(1, Math.round((endTime - startTime) / 1e3));
}
//#endregion
//#region src/features/agents/composables/useAgentExecutionUpdates.ts
/**
* Call `onUpdate` when the backend records a turn for this agent. The push is an
* invalidation signal, not the data, so the callback has to re-read.
*
* Connects the shared push client but never disconnects it — the editor has one
* connection, and tearing it down here would cut off everything else on it.
*/
function useAgentExecutionUpdates(target, onUpdate) {
	const pushStore = usePushConnectionStore();
	function matches(event) {
		if (event.type !== "agentExecutionUpdated") return false;
		if (event.data.projectId !== target.projectId.value) return false;
		if (event.data.agentId !== target.agentId.value) return false;
		const threadId = target.threadId?.value;
		return !threadId || event.data.threadId === threadId;
	}
	let inFlight;
	let queued = false;
	function run() {
		if (inFlight) {
			queued = true;
			return;
		}
		inFlight = Promise.resolve().then(onUpdate).catch(() => {}).finally(() => {
			inFlight = void 0;
			if (queued) {
				queued = false;
				run();
			}
		});
	}
	pushStore.pushConnect();
	const removeListener = pushStore.addEventListener((event) => {
		if (matches(event)) run();
	});
	onScopeDispose(() => removeListener());
}
//#endregion
//#region src/features/agents/composables/useAgentChatStream.ts
function getApprovalDecision(value) {
	if (!isRecord(value) || typeof value.approved !== "boolean") return void 0;
	return value.approved;
}
function warningKey(warning) {
	return JSON.stringify([
		warning.code ?? "",
		warning.server ?? "",
		warning.message
	]);
}
function useAgentChatStream(params) {
	const rootStore = useRootStore();
	const locale = useI18n();
	const { showError } = useToast();
	const messages = ref([]);
	const isStreaming = ref(false);
	const isCancelling = ref(false);
	const abortController = ref(null);
	const streamSettlements = /* @__PURE__ */ new WeakMap();
	const preserveTerminalStateOnAbort = /* @__PURE__ */ new WeakSet();
	const historyLoaded = ref(false);
	/**
	* Set when the backend rejects the stream because the agent itself is
	* misconfigured (missing instructions / model / credential). Cleared on the
	* next send so users can fix the config and retry without a manual dismiss.
	*/
	const fatalError = ref(null);
	/**
	* Non-fatal warnings emitted during a run (e.g. an MCP server that failed to
	* connect, so its tools were skipped). The run continues; these are shown to
	* the user as a warning callout. Visible warnings clear on the next send;
	* explicitly dismissed warnings stay hidden for this composable instance.
	*/
	const warnings = ref([]);
	const dismissedWarningKeys = /* @__PURE__ */ new Set();
	const messagingState = computed(() => {
		if (!isStreaming.value) return "idle";
		const lastMsg = messages.value[messages.value.length - 1];
		if (!lastMsg || lastMsg.role === "user") return "waitingFirstChunk";
		return "receiving";
	});
	async function refreshHistory({ clearOnNotFound = false, silent = false, abortIfStale } = {}) {
		const continueId = params.continueSessionId?.value;
		try {
			let dbMessages;
			let openSuspensions = [];
			if (continueId) {
				const envelope = await getChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value, continueId);
				dbMessages = envelope.messages;
				openSuspensions = envelope.openSuspensions;
			} else {
				const envelope = await getTestChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value);
				dbMessages = envelope.messages;
				openSuspensions = envelope.openSuspensions;
			}
			if (abortIfStale?.()) return false;
			messages.value = applyOpenSuspensions(convertDbMessages(dbMessages), openSuspensions);
			return true;
		} catch (error) {
			if (error?.httpStatusCode === 404) {
				if (clearOnNotFound) messages.value = [];
				return clearOnNotFound;
			} else if (!silent) showError(error, locale.baseText("agents.chat.loadHistory.error"));
			return false;
		}
	}
	async function loadHistory() {
		if (historyLoaded.value) return;
		await refreshHistory({ clearOnNotFound: true });
		historyLoaded.value = true;
		params.onHistoryLoaded?.(messages.value.length);
	}
	useAgentExecutionUpdates({
		projectId: params.projectId,
		agentId: params.agentId,
		...params.continueSessionId ? { threadId: params.continueSessionId } : {}
	}, async () => {
		if (isStreaming.value) return;
		await refreshHistory({
			silent: true,
			abortIfStale: () => isStreaming.value
		});
	});
	async function clearHistory() {
		try {
			await clearTestChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value);
			messages.value = [];
		} catch (error) {
			showError(error, locale.baseText("agents.chat.clearHistory.error"));
		}
	}
	/**
	* Lazily mint a ChatMessage when the next text/reasoning/tool event needs
	* one. The id is FE-issued (used as a v-for key) — the wire format no
	* longer carries a server-minted messageId.
	*/
	function ensureCurrent(session) {
		if (session.current) return session.current;
		const msg = reactive({
			id: crypto.randomUUID(),
			role: "assistant",
			content: "",
			toolCalls: [],
			status: CHAT_MESSAGE_STATUS.STREAMING
		});
		messages.value.push(msg);
		session.current = msg;
		session.minted.add(msg);
		return msg;
	}
	function ensureReasoningSegment(session, id) {
		const existing = session.openReasoning.get(id);
		if (existing) return existing;
		const msg = ensureCurrent(session);
		const segment = reactive({
			id,
			content: "",
			startTime: session.reasoningStartedAt.get(id) ?? Date.now()
		});
		msg.thinkingSegments = [...msg.thinkingSegments ?? [], segment];
		session.openReasoning.set(id, segment);
		return segment;
	}
	function settleReasoning(session, id, endTime = Date.now()) {
		const segment = session.openReasoning.get(id);
		if (segment) segment.endTime = endTime;
		session.openReasoning.delete(id);
		session.reasoningStartedAt.delete(id);
	}
	function settleOpenReasoning(session) {
		const endTime = Date.now();
		for (const id of session.openReasoning.keys()) settleReasoning(session, id, endTime);
		session.reasoningStartedAt.clear();
	}
	/**
	* Find a ToolCall by its `toolCallId`, walking from the latest ChatMessage
	* backwards. Tool results / execution-start events arrive in fresh LLM
	* iterations after the tool-call message has been closed by `finish-step`,
	* so we cannot rely on the cursor — only the natural id.
	*/
	function findToolCallById(toolCallId) {
		for (let i = messages.value.length - 1; i >= 0; i--) {
			const m = messages.value[i];
			const found = m.toolCalls?.find((t) => t.toolCallId === toolCallId);
			if (found) return {
				msg: m,
				tc: found
			};
		}
		return null;
	}
	function findOpenSuspension() {
		const interactive = findTailOpenInteractive(messages.value) ?? findOpenInteractive(messages.value);
		if (interactive?.runId) return {
			runId: interactive.runId,
			toolCallId: interactive.toolCallId
		};
		for (const message of messages.value) {
			const toolCall = message.toolCalls?.find((tc) => tc.state === TOOL_CALL_STATE.SUSPENDED && tc.runId);
			if (toolCall?.runId) return {
				runId: toolCall.runId,
				toolCallId: toolCall.toolCallId
			};
		}
	}
	function markMessageSuccessIfSettled(msg) {
		if (msg.status !== CHAT_MESSAGE_STATUS.AWAITING_USER) return;
		if (!getMessageInteractives(msg).some((payload) => payload.resolvedAt === void 0)) msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
	}
	function isToolCallInFlight(toolCall) {
		return toolCall.state === TOOL_CALL_STATE.PENDING || toolCall.state === TOOL_CALL_STATE.RUNNING || toolCall.state === TOOL_CALL_STATE.SUSPENDED;
	}
	function markRunCancelled(runId) {
		for (const message of messages.value) {
			if (!message.toolCalls?.some((toolCall) => toolCall.runId === runId)) continue;
			let changed = false;
			for (const toolCall of message.toolCalls ?? []) {
				if (toolCall.runId !== runId && !isToolCallInFlight(toolCall)) continue;
				toolCall.state = TOOL_CALL_STATE.CANCELLED;
				toolCall.canceled = true;
				changed = true;
				const interactive = getMessageInteractive(message, toolCall.toolCallId);
				if (interactive) upsertMessageInteractive(message, {
					...interactive,
					resolvedAt: Date.now(),
					cancelled: true
				});
			}
			if (changed) markMessageSuccessIfSettled(message);
		}
	}
	function dropOrphanMintedBubbles(session) {
		for (const msg of session.minted) if (!msg.content && (msg.toolCalls?.length ?? 0) === 0 && getMessageThinkingSegments(msg).length === 0) {
			messages.value = messages.value.filter((m) => m !== msg);
			session.minted.delete(msg);
		}
	}
	function markInFlightStateFailed(session) {
		for (const msg of session.minted) {
			if (msg.status === CHAT_MESSAGE_STATUS.STREAMING || msg.status === CHAT_MESSAGE_STATUS.AWAITING_USER) msg.status = CHAT_MESSAGE_STATUS.ERROR;
			for (const toolCall of msg.toolCalls ?? []) if (isToolCallInFlight(toolCall)) toolCall.state = TOOL_CALL_STATE.ERROR;
			setMessageInteractives(msg, getMessageInteractives(msg).filter((interactive) => interactive.resolvedAt !== void 0));
		}
	}
	function markStreamInterrupted(session) {
		settleOpenReasoning(session);
		dropOrphanMintedBubbles(session);
		markInFlightStateFailed(session);
		messages.value.push(reactive({
			id: crypto.randomUUID(),
			role: "assistant",
			content: locale.baseText("agents.chat.streamInterrupted"),
			toolCalls: [],
			status: CHAT_MESSAGE_STATUS.ERROR
		}));
	}
	/**
	* Settle tool calls left `pending`/`running` after the stream ended (their
	* terminal events never arrived). Used by `stopGenerating` to recover the
	* desync where the chat is idle and responsive but tool steps keep pulsing.
	* Suspended tools are left untouched — they have a `runId` and are still
	* resolvable through the normal resume/cancel flow.
	*/
	function settleStaleInFlightToolCalls() {
		for (const message of messages.value) {
			let changed = false;
			for (const toolCall of message.toolCalls ?? []) if (toolCall.state === TOOL_CALL_STATE.PENDING || toolCall.state === TOOL_CALL_STATE.RUNNING) {
				toolCall.state = TOOL_CALL_STATE.CANCELLED;
				toolCall.canceled = true;
				changed = true;
			}
			if (changed) markMessageSuccessIfSettled(message);
		}
	}
	function handleEvent(event, session) {
		switch (event.type) {
			case "start-step":
			case "finish-step":
				session.current = void 0;
				break;
			case "text-start":
			case "text-end": break;
			case "reasoning-start":
				session.reasoningStartedAt.set(event.id, Date.now());
				break;
			case "text-delta": {
				const msg = ensureCurrent(session);
				msg.content += event.delta;
				break;
			}
			case "reasoning-delta": {
				const msg = ensureCurrent(session);
				const segment = ensureReasoningSegment(session, event.id);
				segment.content += event.delta;
				msg.thinking = (msg.thinking ?? "") + event.delta;
				break;
			}
			case "reasoning-end":
				settleReasoning(session, event.id);
				break;
			case "tool-input-start": {
				const msg = ensureCurrent(session);
				if (msg.content && !msg.content.endsWith("\n")) msg.content += "\n";
				msg.toolCalls = msg.toolCalls ?? [];
				if (!msg.toolCalls.find((t) => t.toolCallId === event.toolCallId)) msg.toolCalls.push({
					tool: event.toolName,
					toolCallId: event.toolCallId,
					state: TOOL_CALL_STATE.PENDING
				});
				break;
			}
			case "tool-input-delta": break;
			case "tool-call": {
				const msg = ensureCurrent(session);
				msg.toolCalls = msg.toolCalls ?? [];
				const existing = msg.toolCalls.find((t) => t.toolCallId === event.toolCallId);
				if (!existing) msg.toolCalls.push({
					tool: event.toolName,
					toolCallId: event.toolCallId,
					input: event.input,
					state: TOOL_CALL_STATE.PENDING,
					displaySummary: summariseToolCall(event.toolName, void 0, event.input)
				});
				else {
					existing.input = event.input;
					existing.displaySummary = summariseToolCall(existing.tool, existing.output, existing.input);
					if (existing.state !== TOOL_CALL_STATE.RUNNING && existing.state !== TOOL_CALL_STATE.DONE && existing.state !== TOOL_CALL_STATE.CANCELLED) existing.state = TOOL_CALL_STATE.PENDING;
				}
				break;
			}
			case "tool-execution-start": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					found.tc.startTime = event.startTime;
					if (found.tc.state !== TOOL_CALL_STATE.DONE && found.tc.state !== TOOL_CALL_STATE.ERROR && found.tc.state !== TOOL_CALL_STATE.CANCELLED) found.tc.state = TOOL_CALL_STATE.RUNNING;
				}
				break;
			}
			case "tool-execution-end": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					if (found.tc.state !== TOOL_CALL_STATE.DONE && found.tc.state !== TOOL_CALL_STATE.ERROR && found.tc.state !== TOOL_CALL_STATE.SUSPENDED) found.tc.state = event.isError ? TOOL_CALL_STATE.ERROR : TOOL_CALL_STATE.DONE;
					found.tc.endTime = event.endTime;
				}
				break;
			}
			case "tool-result": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					const toolResultEvent = event;
					found.tc.output = event.output;
					const failed = event.isError || isFailedDelegateOutput(found.tc.tool, event.output);
					found.tc.state = failed ? TOOL_CALL_STATE.ERROR : toolResultEvent.canceled === true ? TOOL_CALL_STATE.CANCELLED : TOOL_CALL_STATE.DONE;
					found.tc.canceled = toolResultEvent.canceled === true;
					found.tc.displaySummary = summariseToolCall(found.tc.tool, event.output, found.tc.input);
					const currentInteractive = getMessageInteractive(found.msg, event.toolCallId);
					const updated = rebuildInteractiveFromHistory(found.tc);
					if (updated && currentInteractive?.resolvedAt === void 0) upsertMessageInteractive(found.msg, updated);
					markMessageSuccessIfSettled(found.msg);
				}
				break;
			}
			case "tool-call-suspended": {
				const { payload } = event;
				const found = findToolCallById(payload.toolCallId);
				const suspendIsRenderableInput = isApprovalSuspendInput(payload.input);
				let msg;
				let tc;
				if (found) {
					msg = found.msg;
					tc = found.tc;
					tc.state = TOOL_CALL_STATE.SUSPENDED;
					tc.canceled = false;
					tc.output = void 0;
					tc.endTime = void 0;
					tc.displaySummary = void 0;
					tc.runId = payload.runId;
					tc.suspendPayload = payload.input;
				} else {
					msg = ensureCurrent(session);
					tc = {
						tool: payload.toolName,
						toolCallId: payload.toolCallId,
						state: TOOL_CALL_STATE.SUSPENDED,
						runId: payload.runId,
						...suspendIsRenderableInput ? { input: payload.input } : { suspendPayload: payload.input }
					};
					msg.toolCalls = [...msg.toolCalls ?? [], tc];
				}
				const interactive = rebuildInteractiveFromHistory({
					...tc,
					output: void 0
				});
				if (interactive) {
					interactive.runId = payload.runId;
					upsertMessageInteractive(msg, interactive);
					msg.status = CHAT_MESSAGE_STATUS.AWAITING_USER;
				}
				session.terminalEventReceived = true;
				break;
			}
			case "subagent-chunk": {
				const found = findToolCallById(event.parentToolCallId);
				if (!found) break;
				found.tc.childProgress ??= emptyChildTrace();
				applyForwardedChildChunk(found.tc.childProgress, event.chunk);
				break;
			}
			case "message": break;
			case "warning": {
				const warning = {
					message: event.message,
					...event.server !== void 0 && { server: event.server },
					...event.code !== void 0 && { code: event.code }
				};
				if (!dismissedWarningKeys.has(warningKey(warning))) warnings.value.push(warning);
				break;
			}
			case "error":
				session.errorEmitted = true;
				settleOpenReasoning(session);
				dropOrphanMintedBubbles(session);
				markInFlightStateFailed(session);
				if (event.errorCode === "agent_misconfigured") fatalError.value = {
					message: event.message,
					missing: event.missing ?? []
				};
				else messages.value.push(reactive({
					id: crypto.randomUUID(),
					role: "assistant",
					content: event.message,
					toolCalls: [],
					status: CHAT_MESSAGE_STATUS.ERROR
				}));
				session.terminalEventReceived = true;
				break;
			case "done":
				settleOpenReasoning(session);
				if (event.executionId) for (const msg of session.minted) msg.executionId = event.executionId;
				session.terminalEventReceived = true;
				return { done: true };
			default: break;
		}
	}
	async function consumeStream(response, session) {
		if (!response.body) return;
		const reader = response.body.getReader();
		const decoder = new TextDecoder();
		let buffer = "";
		try {
			readerLoop: while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				buffer += decoder.decode(value, { stream: true });
				const lines = buffer.split("\n");
				buffer = lines.pop() ?? "";
				for (const line of lines) {
					if (!line.startsWith("data: ")) continue;
					const raw = line.slice(6);
					let event;
					try {
						event = JSON.parse(raw);
					} catch {
						continue;
					}
					if (handleEvent(event, session)?.done) break readerLoop;
				}
			}
		} finally {
			reader.releaseLock();
		}
	}
	function finalizeStream(session) {
		settleOpenReasoning(session);
		for (const msg of session.minted) {
			if (msg.status === CHAT_MESSAGE_STATUS.STREAMING) msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
			for (const toolCall of msg.toolCalls ?? []) if (isToolCallInFlight(toolCall) && toolCall.state !== TOOL_CALL_STATE.SUSPENDED) toolCall.state = TOOL_CALL_STATE.DONE;
		}
	}
	async function postAndConsume(url, body) {
		const session = {
			errorEmitted: false,
			terminalEventReceived: false,
			minted: /* @__PURE__ */ new Set(),
			reasoningStartedAt: /* @__PURE__ */ new Map(),
			openReasoning: /* @__PURE__ */ new Map()
		};
		isStreaming.value = true;
		const controller = new AbortController();
		abortController.value = controller;
		let settleStream;
		const streamSettlement = new Promise((resolve) => {
			settleStream = resolve;
		});
		streamSettlements.set(controller, streamSettlement);
		let transportFailed = false;
		try {
			const browserId = localStorage.getItem("n8n-browserId") ?? "";
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"browser-id": browserId
				},
				credentials: "include",
				body: JSON.stringify(body),
				signal: controller.signal
			});
			if (!response.ok || !response.body) {
				transportFailed = true;
				const errorMsg = {
					id: crypto.randomUUID(),
					role: "assistant",
					content: `Error: ${response.statusText || "Failed to reach agent"}`,
					status: "error"
				};
				messages.value.push(errorMsg);
				return { outcome: "failed" };
			}
			await consumeStream(response, session);
			if (!session.terminalEventReceived) {
				transportFailed = true;
				markStreamInterrupted(session);
				return { outcome: "failed" };
			}
			finalizeStream(session);
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				dropOrphanMintedBubbles(session);
				if (preserveTerminalStateOnAbort.has(controller) && session.terminalEventReceived) finalizeStream(session);
				else markInFlightStateFailed(session);
				return { outcome: "aborted" };
			}
			if (session.terminalEventReceived) finalizeStream(session);
			else {
				transportFailed = true;
				markStreamInterrupted(session);
			}
		} finally {
			if (abortController.value === controller) {
				abortController.value = null;
				isStreaming.value = false;
			}
			preserveTerminalStateOnAbort.delete(controller);
			streamSettlements.delete(controller);
			settleStream?.();
		}
		return { outcome: !transportFailed && !session.errorEmitted ? "completed" : "failed" };
	}
	async function streamChat(message, files) {
		const { baseUrl } = rootStore.restApiContext;
		const url = `${baseUrl}/projects/${params.projectId.value}/agents/v2/${params.agentId.value}/chat`;
		const body = { message };
		if (params.continueSessionId?.value) body.sessionId = params.continueSessionId.value;
		if (files?.length) body.attachments = await Promise.all(files.map(async (file) => {
			const encoded = await convertFileToBinaryData(file);
			return {
				fileName: file.name,
				mimeType: file.type || "application/octet-stream",
				data: encoded.data
			};
		}));
		await postAndConsume(url, body);
	}
	/**
	* Resume a suspended interaction via `chat/resume`, re-entering the same
	* SSE handler. The `runId` is required — it comes from the original
	* `tool-call-suspended` chunk (live) or from the `openSuspensions` sidecar
	* applied during history reload.
	*
	* The UI updates optimistically, then reconciles with persisted history if
	* the resume fails, falling back to the previous card state if history is unavailable.
	*/
	async function resume(payload) {
		if (isCancelling.value) return;
		const isCancellation = "cancelled" in payload;
		const text = isCancellation ? payload.text.trim() : "";
		if (isCancellation && !text) return;
		const found = findToolCallById(payload.toolCallId);
		const snapshot = found ? {
			tc: found.tc,
			prevState: found.tc.state,
			prevOutput: found.tc.output,
			prevCanceled: found.tc.canceled,
			prevSummary: found.tc.displaySummary,
			msg: found.msg,
			prevStatus: found.msg.status,
			prevInteractive: found.msg.interactive,
			prevInteractives: found.msg.interactives ? [...found.msg.interactives] : void 0
		} : null;
		let optimisticUserMessageId;
		if (found) {
			if (isCancellation) {
				found.tc.state = TOOL_CALL_STATE.CANCELLED;
				found.tc.canceled = true;
				const interactive = getMessageInteractive(found.msg, payload.toolCallId);
				if (interactive) upsertMessageInteractive(found.msg, {
					...interactive,
					resolvedAt: Date.now(),
					cancelled: true
				});
			} else {
				found.tc.state = TOOL_CALL_STATE.DONE;
				found.tc.canceled = false;
				found.tc.output = payload.resumeData;
				found.tc.displaySummary = summariseToolCall(found.tc.tool, payload.resumeData, found.tc.input);
				const updated = rebuildInteractiveFromHistory(found.tc);
				if (updated?.toolName === "approval") {
					const approved = getApprovalDecision(payload.resumeData);
					if (approved !== void 0) updated.resolvedValue = { approved };
				}
				if (updated) upsertMessageInteractive(found.msg, updated);
			}
			markMessageSuccessIfSettled(found.msg);
		}
		const resumeData = isCancellation ? {
			_type: "agent.cancellation",
			message: text
		} : payload.resumeData;
		if (isCancellation) {
			optimisticUserMessageId = crypto.randomUUID();
			fatalError.value = null;
			messages.value.push({
				id: optimisticUserMessageId,
				role: "user",
				content: text,
				status: "success"
			});
		}
		const { baseUrl } = rootStore.restApiContext;
		const { outcome } = await postAndConsume(`${baseUrl}/projects/${params.projectId.value}/agents/v2/${params.agentId.value}/chat/resume`, {
			runId: payload.runId,
			toolCallId: payload.toolCallId,
			resumeData
		});
		let reconciled = false;
		if (outcome === "failed") reconciled = await refreshHistory();
		if (outcome === "failed" && !reconciled && snapshot) {
			snapshot.tc.state = snapshot.prevState;
			snapshot.tc.output = snapshot.prevOutput;
			snapshot.tc.canceled = snapshot.prevCanceled;
			snapshot.tc.displaySummary = snapshot.prevSummary;
			snapshot.msg.status = snapshot.prevStatus;
			if (snapshot.prevInteractives) setMessageInteractives(snapshot.msg, snapshot.prevInteractives);
			else if (snapshot.prevInteractive) setMessageInteractives(snapshot.msg, [snapshot.prevInteractive]);
			else setMessageInteractives(snapshot.msg, []);
		}
		if (outcome === "failed" && !reconciled && optimisticUserMessageId) messages.value = messages.value.filter((m) => m.id !== optimisticUserMessageId);
	}
	async function cancelAndSteer(text) {
		const openInteractive = findTailSteerableInteractive(messages.value);
		if (!openInteractive?.runId) return;
		await resume({
			runId: openInteractive.runId,
			toolCallId: openInteractive.toolCallId,
			cancelled: true,
			text
		});
	}
	async function sendMessage(text, files) {
		const trimmed = text.trim();
		if (!trimmed && !files?.length || isStreaming.value || isCancelling.value) return;
		fatalError.value = null;
		warnings.value = [];
		messages.value.push({
			id: crypto.randomUUID(),
			role: "user",
			content: trimmed,
			status: "success",
			...files?.length && { attachments: files.map((file) => ({
				fileName: file.name,
				mimeType: file.type || "application/octet-stream",
				sizeBytes: file.size,
				file
			})) }
		});
		await streamChat(trimmed, files);
	}
	function dismissFatalError() {
		fatalError.value = null;
	}
	function dismissWarning(index) {
		const warning = warnings.value[index];
		if (!warning) return;
		const dismissedKey = warningKey(warning);
		dismissedWarningKeys.add(dismissedKey);
		warnings.value = warnings.value.filter((item) => warningKey(item) !== dismissedKey);
	}
	async function stopGenerating() {
		if (isCancelling.value) return;
		const openSuspension = findOpenSuspension();
		const activeController = abortController.value;
		const activeStreamSettlement = activeController ? streamSettlements.get(activeController) : void 0;
		if (!openSuspension) {
			activeController?.abort();
			await activeStreamSettlement;
			if (!isStreaming.value) settleStaleInFlightToolCalls();
			return;
		}
		isCancelling.value = true;
		let preserveTerminalState = false;
		try {
			const { cancelled } = await cancelAgentChatRun(rootStore.restApiContext, params.projectId.value, params.agentId.value, openSuspension.runId);
			if (cancelled) {
				markRunCancelled(openSuspension.runId);
				preserveTerminalState = true;
				return;
			}
			preserveTerminalState = !await refreshHistory();
		} catch (error) {
			preserveTerminalState = !await refreshHistory();
			showError(error, locale.baseText("agents.chat.stop.error"));
		} finally {
			if (activeController && preserveTerminalState) preserveTerminalStateOnAbort.add(activeController);
			activeController?.abort();
			await activeStreamSettlement;
			isCancelling.value = false;
		}
	}
	return {
		messages,
		isStreaming,
		isCancelling,
		messagingState,
		fatalError,
		warnings,
		loadHistory,
		clearHistory,
		sendMessage,
		stopGenerating,
		resume,
		cancelAndSteer,
		dismissFatalError,
		dismissWarning
	};
}
//#endregion
//#region src/features/agents/components/AgentChatEmptyState.vue?vue&type=script&setup=true&lang.ts
var AgentChatEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatEmptyState",
	props: { agentConfig: {} },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.emptyState) }, [
				createVNode(AgentPersonalisationIcon_default, {
					personalisation: __props.agentConfig?.personalisation,
					class: normalizeClass(_ctx.$style.icon),
					size: 64
				}, null, 8, ["personalisation", "class"]),
				createVNode(unref(N8nText_default), {
					tag: "h3",
					step: "xl",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.agentConfig?.name), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), {
					step: "sm",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.emptyState.description")), 1)]),
					_: 1
				})
			], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatEmptyState.vue?vue&type=style&index=0&lang.module.scss
var emptyState = "_emptyState_rc3o1_388";
var fadeInUp$22 = "_fadeInUp_rc3o1_1";
var icon = "_icon_rc3o1_414";
var shimmer$22 = "_shimmer_rc3o1_1";
var spin$22 = "_spin_rc3o1_1";
var opacityPulse$22 = "_opacityPulse_rc3o1_1";
var popoverIn$22 = "_popoverIn_rc3o1_1";
var fadeIn$22 = "_fadeIn_rc3o1_1";
var collapsibleSlideDown$22 = "_collapsibleSlideDown_rc3o1_1";
var collapsibleSlideUp$22 = "_collapsibleSlideUp_rc3o1_1";
var collapsibleSlideDownBlurred$22 = "_collapsibleSlideDownBlurred_rc3o1_1";
var collapsibleSlideUpBlurred$22 = "_collapsibleSlideUpBlurred_rc3o1_1";
var blurSwapIn$22 = "_blurSwapIn_rc3o1_1";
var blurSwapOut$22 = "_blurSwapOut_rc3o1_1";
var pulseGlow$22 = "_pulseGlow_rc3o1_1";
var pulseGlowDelayed$22 = "_pulseGlowDelayed_rc3o1_1";
var fade$22 = "_fade_rc3o1_1";
var fadeInDown$22 = "_fadeInDown_rc3o1_1";
var fadeInLeft$22 = "_fadeInLeft_rc3o1_1";
var fadeInRight$22 = "_fadeInRight_rc3o1_1";
var fadeOut$22 = "_fadeOut_rc3o1_1";
var fadeOutDown$22 = "_fadeOutDown_rc3o1_1";
var fadeOutUp$22 = "_fadeOutUp_rc3o1_1";
var fadeOutLeft$22 = "_fadeOutLeft_rc3o1_1";
var fadeOutRight$22 = "_fadeOutRight_rc3o1_1";
var ping$22 = "_ping_rc3o1_1";
var blinkBackground$22 = "_blinkBackground_rc3o1_1";
var typingBlink$22 = "_typingBlink_rc3o1_1";
var AgentChatEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	emptyState,
	fadeInUp: fadeInUp$22,
	icon,
	shimmer: shimmer$22,
	spin: spin$22,
	"skeleton-pulse": "_skeleton-pulse_rc3o1_1",
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
var AgentChatEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/displayGroups.ts
function isGroupable(message) {
	return message.role === "assistant" && !!message.toolCalls?.length && !message.content.trim();
}
function isAssistantGroup(group) {
	return group.kind === "toolRun" || group.message.role === "assistant";
}
function executionIdForGroup(group) {
	return group.kind === "toolRun" ? group.executionId : group.message.executionId;
}
/** Keep one reasoning block at the tail of each assistant run, below its final output. */
function moveThinkingToRunTail(groups) {
	let run = [];
	let executionId;
	const flush = () => {
		if (run.length === 0) return;
		const segments = run.flatMap((group) => group.thinkingSegments);
		for (const group of run) group.thinkingSegments = [];
		run[run.length - 1].thinkingSegments = segments;
		run = [];
		executionId = void 0;
	};
	for (const group of groups) {
		if (!isAssistantGroup(group)) {
			flush();
			continue;
		}
		const groupExecutionId = executionIdForGroup(group);
		if (executionId !== void 0 && groupExecutionId !== void 0 && executionId !== groupExecutionId) flush();
		run.push(group);
		executionId ??= groupExecutionId;
	}
	flush();
}
/**
* Whether `message` may join an open toolRun. Same-turn live streams often
* lack executionId until `done`; those still fold. Distinct defined ids
* (suspended vs resumed HITL executions) must stay separate so Fix CTA
* handoff uses the turn that owns the errored tool.
*/
function canAppendToToolRun(last, message) {
	if (last.finalMessage) return false;
	if (last.executionId !== void 0 && message.executionId !== void 0 && last.executionId !== message.executionId) return false;
	return true;
}
/**
* Merge two records of the same tool call: messages are now stored both when a
* stream suspends and again on completion, so history can carry the same
* toolCallId twice (open, then resolved). Ported from master's undrained-stream
* fix (#32119).
*/
function mergeToolCall(previous, next) {
	const merged = {
		...previous,
		...next,
		input: next.input ?? previous.input,
		startTime: previous.startTime ?? next.startTime,
		endTime: next.endTime ?? previous.endTime,
		canceled: next.canceled ?? previous.canceled
	};
	return {
		...merged,
		displaySummary: summariseToolCall(merged.tool, merged.output, merged.input)
	};
}
function appendToolCalls(existing, next) {
	const merged = [...existing];
	const indexByToolCallId = /* @__PURE__ */ new Map();
	for (const [index, toolCall] of merged.entries()) if (toolCall.toolCallId) indexByToolCallId.set(toolCall.toolCallId, index);
	for (const toolCall of next) {
		if (!toolCall.toolCallId) {
			merged.push(toolCall);
			continue;
		}
		const index = indexByToolCallId.get(toolCall.toolCallId);
		if (index === void 0) {
			indexByToolCallId.set(toolCall.toolCallId, merged.length);
			merged.push(toolCall);
			continue;
		}
		merged[index] = mergeToolCall(merged[index], toolCall);
	}
	return merged;
}
function appendInteractivePayloads(existing, next) {
	let merged = existing;
	for (const payload of next) {
		const index = merged.findIndex((existingPayload) => existingPayload.toolCallId === payload.toolCallId);
		if (index === -1) merged = [...merged, payload];
		else merged = merged.map((existingPayload, i) => i === index ? payload : existingPayload);
	}
	return merged;
}
function buildDisplayGroups(messages) {
	const groups = [];
	for (const message of messages) {
		if (isGroupable(message)) {
			const last = groups[groups.length - 1];
			if (last?.kind === "toolRun" && canAppendToToolRun(last, message)) {
				last.toolCalls = appendToolCalls(last.toolCalls, message.toolCalls ?? []);
				last.thinkingSegments.push(...getMessageThinkingSegments(message));
				last.active ||= message.status === "streaming";
				last.interactives = appendInteractivePayloads(last.interactives, getMessageInteractives(message));
				last.awaitingInput = last.interactives.some((payload) => payload.resolvedAt === void 0);
				last.executionId ??= message.executionId;
				continue;
			}
			groups.push({
				kind: "toolRun",
				id: message.id,
				thinkingSegments: getMessageThinkingSegments(message),
				active: message.status === "streaming",
				awaitingInput: message.status === "awaitingUser",
				toolCalls: [...message.toolCalls ?? []],
				interactives: getMessageInteractives(message),
				...message.executionId ? { executionId: message.executionId } : {}
			});
			continue;
		}
		if (message.role === "assistant") {
			const last = groups[groups.length - 1];
			if (last?.kind === "toolRun" && canAppendToToolRun(last, message)) {
				last.finalMessage = message;
				last.executionId ??= message.executionId;
				last.thinkingSegments.push(...getMessageThinkingSegments(message));
				last.active ||= message.status === "streaming";
				if (message.toolCalls?.length) last.toolCalls = appendToolCalls(last.toolCalls, message.toolCalls);
				last.interactives = appendInteractivePayloads(last.interactives, getMessageInteractives(message));
				last.awaitingInput = last.interactives.some((payload) => payload.resolvedAt === void 0);
				continue;
			}
		}
		groups.push({
			kind: "message",
			id: message.id,
			message,
			thinkingSegments: message.role === "assistant" ? getMessageThinkingSegments(message) : []
		});
	}
	moveThinkingToRunTail(groups);
	return groups;
}
//#endregion
//#region src/features/ai/shared/components/AiThinkingBlock.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$9 = ["aria-expanded"];
var AiThinkingBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiThinkingBlock",
	props: {
		segments: {},
		active: { type: Boolean },
		awaitingInput: {
			type: Boolean,
			default: false
		},
		activityLabel: { default: void 0 },
		durationSec: { default: void 0 },
		testId: { default: "ai-thinking-block" }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const userToggled = ref(null);
		const expanded = computed(() => userToggled.value ?? false);
		watch(() => props.active, () => {
			userToggled.value = null;
		});
		const nowMs = ref(Date.now());
		const activeSinceMs = ref(null);
		const settledElapsedSec = ref(0);
		let ticker = null;
		const elapsedSec = computed(() => {
			const live = activeSinceMs.value === null ? 0 : Math.max(0, Math.floor((nowMs.value - activeSinceMs.value) / 1e3));
			return settledElapsedSec.value + live;
		});
		const isCounting = computed(() => props.active && !props.awaitingInput);
		watch(isCounting, (counting) => {
			if (counting) {
				nowMs.value = Date.now();
				activeSinceMs.value = Date.now();
				ticker ??= setInterval(() => {
					nowMs.value = Date.now();
				}, 1e3);
				return;
			}
			settledElapsedSec.value = props.awaitingInput ? 0 : elapsedSec.value;
			activeSinceMs.value = null;
			if (ticker) {
				clearInterval(ticker);
				ticker = null;
			}
		}, { immediate: true });
		onUnmounted(() => {
			if (ticker) clearInterval(ticker);
		});
		function formatDuration(totalSec) {
			if (totalSec < 60) return `${totalSec}s`;
			return `${Math.floor(totalSec / 60)}m ${totalSec % 60}s`;
		}
		const elapsedLabel = computed(() => {
			return elapsedSec.value >= 1 ? formatDuration(elapsedSec.value) : void 0;
		});
		const title = computed(() => {
			if (!props.active) {
				const observed = settledElapsedSec.value >= 1 ? settledElapsedSec.value : void 0;
				const duration = props.durationSec === void 0 ? observed : observed === void 0 ? props.durationSec : Math.max(props.durationSec, observed);
				return {
					key: "done",
					text: duration === void 0 ? i18n.baseText("ai.thinking.doneFallback") : i18n.baseText("ai.thinking.done", { interpolate: { duration: formatDuration(duration) } })
				};
			}
			if (props.awaitingInput) return {
				key: "waiting",
				text: i18n.baseText("ai.thinking.waitingForInput")
			};
			for (let index = props.segments.length - 1; index >= 0; index--) {
				const sentence = firstSentence(props.segments[index].content);
				if (sentence) return {
					key: `segment-${index}`,
					text: sentence
				};
			}
			return {
				key: "active",
				text: i18n.baseText("ai.thinking.active")
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), {
				open: expanded.value,
				"data-test-id": props.testId,
				"onUpdate:open": _cache[0] || (_cache[0] = (value) => userToggled.value = value)
			}, {
				default: withCtx(() => [
					createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createBaseVNode("button", {
							type: "button",
							class: normalizeClass(_ctx.$style.header),
							"aria-expanded": expanded.value,
							"data-test-id": "thinking-block-header"
						}, [
							createVNode(Transition, {
								name: "thinking-title",
								mode: "out-in"
							}, {
								default: withCtx(() => [(openBlock(), createElementBlock("span", {
									key: title.value.key,
									class: normalizeClass(_ctx.$style.title)
								}, toDisplayString(title.value.text), 3))]),
								_: 1
							}),
							expanded.value && isCounting.value && elapsedLabel.value ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.headerElapsed)
							}, toDisplayString(elapsedLabel.value), 3)) : createCommentVNode("", true),
							createVNode(unref(AiActivityStepChevron_default), { open: expanded.value }, null, 8, ["open"])
						], 10, _hoisted_1$9)]),
						_: 1
					}),
					props.active && !props.awaitingInput && !expanded.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.subline),
						"data-test-id": "thinking-block-subline"
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sublineLabel) }, toDisplayString(props.activityLabel ?? unref(i18n).baseText("ai.thinking.active")), 3), elapsedLabel.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.sublineElapsed)
					}, " · " + toDisplayString(elapsedLabel.value), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					createVNode(unref(AnimatedCollapsibleContent_default), null, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 2)]),
						_: 3
					})
				]),
				_: 3
			}, 8, ["open", "data-test-id"]);
		};
	}
});
//#endregion
//#region src/features/ai/shared/components/AiThinkingBlock.vue?vue&type=style&index=1&lang.module.scss
var header$2 = "_header_1j146_388";
var title$3 = "_title_1j146_407";
var headerElapsed = "_headerElapsed_1j146_415";
var sublineElapsed = "_sublineElapsed_1j146_416";
var subline = "_subline_1j146_416";
var sublineLabel = "_sublineLabel_1j146_431";
var shimmer$21 = "_shimmer_1j146_1";
var content$1 = "_content_1j146_458";
var spin$21 = "_spin_1j146_1";
var opacityPulse$21 = "_opacityPulse_1j146_1";
var popoverIn$21 = "_popoverIn_1j146_1";
var fadeIn$21 = "_fadeIn_1j146_1";
var collapsibleSlideDown$21 = "_collapsibleSlideDown_1j146_1";
var collapsibleSlideUp$21 = "_collapsibleSlideUp_1j146_1";
var collapsibleSlideDownBlurred$21 = "_collapsibleSlideDownBlurred_1j146_1";
var collapsibleSlideUpBlurred$21 = "_collapsibleSlideUpBlurred_1j146_1";
var blurSwapIn$21 = "_blurSwapIn_1j146_1";
var blurSwapOut$21 = "_blurSwapOut_1j146_1";
var pulseGlow$21 = "_pulseGlow_1j146_1";
var pulseGlowDelayed$21 = "_pulseGlowDelayed_1j146_1";
var fade$21 = "_fade_1j146_1";
var fadeInUp$21 = "_fadeInUp_1j146_1";
var fadeInDown$21 = "_fadeInDown_1j146_1";
var fadeInLeft$21 = "_fadeInLeft_1j146_1";
var fadeInRight$21 = "_fadeInRight_1j146_1";
var fadeOut$21 = "_fadeOut_1j146_1";
var fadeOutDown$21 = "_fadeOutDown_1j146_1";
var fadeOutUp$21 = "_fadeOutUp_1j146_1";
var fadeOutLeft$21 = "_fadeOutLeft_1j146_1";
var fadeOutRight$21 = "_fadeOutRight_1j146_1";
var ping$21 = "_ping_1j146_1";
var blinkBackground$21 = "_blinkBackground_1j146_1";
var typingBlink$21 = "_typingBlink_1j146_1";
var AiThinkingBlock_vue_vue_type_style_index_1_lang_module_default = {
	header: header$2,
	title: title$3,
	headerElapsed,
	sublineElapsed,
	subline,
	sublineLabel,
	shimmer: shimmer$21,
	content: content$1,
	spin: spin$21,
	"skeleton-pulse": "_skeleton-pulse_1j146_1",
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
var AiThinkingBlock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiThinkingBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiThinkingBlock_vue_vue_type_style_index_1_lang_module_default }], ["__scopeId", "data-v-8a894310"]]);
//#endregion
//#region src/features/agents/components/AgentChatMemoryUsed.vue?vue&type=script&setup=true&lang.ts
var memoriesCountLabelKey = "agents.builder.quickActions.memoriesUsed.count";
var keyMemoryLabelKey = "agents.builder.quickActions.memoriesUsed.keyMemory";
var AgentChatMemoryUsed_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMemoryUsed",
	props: { memories: {} },
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const memories = computed(() => props.memories);
		const isOpen = ref(false);
		function onOpenChange(open) {
			isOpen.value = open;
			emit("update:open", open);
		}
		function splitKeyMemory(text) {
			return text.split(/(?<=[.!?])\s+/).filter((part) => part.length > 0);
		}
		return (_ctx, _cache) => {
			return memories.value.length > 0 ? (openBlock(), createBlock(unref(HoverCardRoot_default), {
				key: 0,
				open: isOpen.value,
				"onUpdate:open": [_cache[0] || (_cache[0] = ($event) => isOpen.value = $event), onOpenChange],
				"open-delay": 400,
				"close-delay": 0
			}, {
				default: withCtx(() => [createVNode(unref(HoverCardTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.trigger) }, [createVNode(unref(N8nIcon_default), {
						icon: "brain",
						size: "small"
					}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(memoriesCountLabelKey, {
						adjustToNumber: memories.value.length,
						interpolate: { count: String(memories.value.length) }
					})), 1)], 2)]),
					_: 1
				}), createVNode(unref(HoverCardPortal_default), null, {
					default: withCtx(() => [createVNode(unref(HoverCardContent_default), {
						side: "bottom",
						align: "end",
						"side-offset": 8,
						class: normalizeClass([_ctx.$style.popoverContent, _ctx.$style.panel])
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(memories.value, (memory) => {
							return openBlock(), createElementBlock("div", {
								key: memory.id,
								class: normalizeClass(_ctx.$style.memorySection)
							}, [createVNode(unref(N8nText_default), {
								step: "sm",
								bold: "",
								class: normalizeClass(_ctx.$style.label)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(keyMemoryLabelKey)), 1)]),
								_: 1
							}, 8, ["class"]), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.keyMemoryList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(splitKeyMemory(memory.keyMemory), (sentence, sentenceIndex) => {
								return openBlock(), createElementBlock("li", { key: `${memory.id}-${sentenceIndex}` }, [createVNode(unref(N8nText_default), {
									step: "sm",
									tag: "p",
									class: normalizeClass(_ctx.$style.keyMemory)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(sentence), 1)]),
									_: 2
								}, 1032, ["class"])]);
							}), 128))], 2)], 2);
						}), 128))]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})]),
				_: 1
			}, 8, ["open"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMemoryUsed.vue?vue&type=style&index=0&lang.module.scss
var popoverContent = "_popoverContent_zmrke_389";
var popoverIn$20 = "_popoverIn_zmrke_1";
var panel$3 = "_panel_zmrke_458";
var trigger$1 = "_trigger_zmrke_470";
var keyMemoryList = "_keyMemoryList_zmrke_482";
var memorySection = "_memorySection_zmrke_495";
var keyMemory = "_keyMemory_zmrke_482";
var shimmer$20 = "_shimmer_zmrke_1";
var spin$20 = "_spin_zmrke_1";
var opacityPulse$20 = "_opacityPulse_zmrke_1";
var fadeIn$20 = "_fadeIn_zmrke_1";
var collapsibleSlideDown$20 = "_collapsibleSlideDown_zmrke_1";
var collapsibleSlideUp$20 = "_collapsibleSlideUp_zmrke_1";
var collapsibleSlideDownBlurred$20 = "_collapsibleSlideDownBlurred_zmrke_1";
var collapsibleSlideUpBlurred$20 = "_collapsibleSlideUpBlurred_zmrke_1";
var blurSwapIn$20 = "_blurSwapIn_zmrke_1";
var blurSwapOut$20 = "_blurSwapOut_zmrke_1";
var pulseGlow$20 = "_pulseGlow_zmrke_1";
var pulseGlowDelayed$20 = "_pulseGlowDelayed_zmrke_1";
var fade$20 = "_fade_zmrke_1";
var fadeInUp$20 = "_fadeInUp_zmrke_1";
var fadeInDown$20 = "_fadeInDown_zmrke_1";
var fadeInLeft$20 = "_fadeInLeft_zmrke_1";
var fadeInRight$20 = "_fadeInRight_zmrke_1";
var fadeOut$20 = "_fadeOut_zmrke_1";
var fadeOutDown$20 = "_fadeOutDown_zmrke_1";
var fadeOutUp$20 = "_fadeOutUp_zmrke_1";
var fadeOutLeft$20 = "_fadeOutLeft_zmrke_1";
var fadeOutRight$20 = "_fadeOutRight_zmrke_1";
var ping$20 = "_ping_zmrke_1";
var blinkBackground$20 = "_blinkBackground_zmrke_1";
var typingBlink$20 = "_typingBlink_zmrke_1";
var AgentChatMemoryUsed_vue_vue_type_style_index_0_lang_module_default = {
	popoverContent,
	popoverIn: popoverIn$20,
	panel: panel$3,
	trigger: trigger$1,
	keyMemoryList,
	memorySection,
	keyMemory,
	shimmer: shimmer$20,
	spin: spin$20,
	"skeleton-pulse": "_skeleton-pulse_zmrke_1",
	opacityPulse: opacityPulse$20,
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
var AgentChatMemoryUsed_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMemoryUsed_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMemoryUsed_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentChatMessageActions.vue?vue&type=script&setup=true&lang.ts
var AgentChatMessageActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageActions",
	props: {
		content: {},
		isSpeechSynthesisAvailable: { type: Boolean },
		isSpeaking: { type: Boolean },
		canSendToAssistant: { type: Boolean }
	},
	emits: ["readAloud", "sendToAssistant"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.actions),
				"data-test-id": "agent-chat-message-actions"
			}, [
				createVNode(CopyButton_default, {
					content: __props.content,
					"data-test-id": "agent-chat-message-copy"
				}, null, 8, ["content"]),
				__props.canSendToAssistant ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.preview.sendToAssistant")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "square-arrow-out-up-right",
						size: "small",
						"icon-size": "medium",
						"data-test-id": "agent-chat-message-send-to-assistant",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("sendToAssistant"))
					})]),
					_: 1
				})) : createCommentVNode("", true),
				__props.isSpeechSynthesisAvailable ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(__props.isSpeaking ? unref(i18n).baseText("chatHub.message.actions.stopReading") : unref(i18n).baseText("chatHub.message.actions.readAloud")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: __props.isSpeaking ? "volume-x" : "volume-2",
						size: "small",
						"icon-size": "medium",
						"data-test-id": "agent-chat-message-read-aloud",
						onClick: _cache[1] || (_cache[1] = ($event) => emit("readAloud"))
					}, null, 8, ["icon"])]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMessageActions.vue?vue&type=style&index=0&lang.module.scss
var actions$2 = "_actions_si7mu_388";
var shimmer$19 = "_shimmer_si7mu_1";
var spin$19 = "_spin_si7mu_1";
var opacityPulse$19 = "_opacityPulse_si7mu_1";
var popoverIn$19 = "_popoverIn_si7mu_1";
var fadeIn$19 = "_fadeIn_si7mu_1";
var collapsibleSlideDown$19 = "_collapsibleSlideDown_si7mu_1";
var collapsibleSlideUp$19 = "_collapsibleSlideUp_si7mu_1";
var collapsibleSlideDownBlurred$19 = "_collapsibleSlideDownBlurred_si7mu_1";
var collapsibleSlideUpBlurred$19 = "_collapsibleSlideUpBlurred_si7mu_1";
var blurSwapIn$19 = "_blurSwapIn_si7mu_1";
var blurSwapOut$19 = "_blurSwapOut_si7mu_1";
var pulseGlow$19 = "_pulseGlow_si7mu_1";
var pulseGlowDelayed$19 = "_pulseGlowDelayed_si7mu_1";
var fade$19 = "_fade_si7mu_1";
var fadeInUp$19 = "_fadeInUp_si7mu_1";
var fadeInDown$19 = "_fadeInDown_si7mu_1";
var fadeInLeft$19 = "_fadeInLeft_si7mu_1";
var fadeInRight$19 = "_fadeInRight_si7mu_1";
var fadeOut$19 = "_fadeOut_si7mu_1";
var fadeOutDown$19 = "_fadeOutDown_si7mu_1";
var fadeOutUp$19 = "_fadeOutUp_si7mu_1";
var fadeOutLeft$19 = "_fadeOutLeft_si7mu_1";
var fadeOutRight$19 = "_fadeOutRight_si7mu_1";
var ping$19 = "_ping_si7mu_1";
var blinkBackground$19 = "_blinkBackground_si7mu_1";
var typingBlink$19 = "_typingBlink_si7mu_1";
var AgentChatMessageActions_vue_vue_type_style_index_0_lang_module_default = {
	actions: actions$2,
	shimmer: shimmer$19,
	spin: spin$19,
	"skeleton-pulse": "_skeleton-pulse_si7mu_1",
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
var AgentChatMessageActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMessageActions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentChatMessageAttachments.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$8 = ["title"];
var _hoisted_2$4 = [
	"href",
	"title",
	"onClick"
];
var _hoisted_3$3 = [
	"src",
	"alt",
	"onError"
];
var AgentChatMessageAttachments_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageAttachments",
	props: {
		attachments: {},
		projectId: {},
		agentId: {}
	},
	setup(__props) {
		const props = __props;
		const rootStore = useRootStore();
		const i18n = useI18n();
		const unavailableKeys = reactive(/* @__PURE__ */ new Set());
		const objectUrlsByFile = /* @__PURE__ */ new Map();
		function objectUrlFor(file) {
			let url = objectUrlsByFile.get(file);
			if (!url) {
				url = URL.createObjectURL(file);
				objectUrlsByFile.set(file, url);
			}
			return url;
		}
		function downloadUrl(attachment) {
			if (!attachment.fileId) return void 0;
			const { baseUrl } = rootStore.restApiContext;
			return `${baseUrl}/projects/${encodeURIComponent(props.projectId)}/agents/v2/${encodeURIComponent(props.agentId)}/chat/attachments/${encodeURIComponent(attachment.fileId)}`;
		}
		function isImage(attachment) {
			return attachment.mimeType.startsWith("image/");
		}
		const items = computed(() => props.attachments.map((attachment, index) => {
			const href = downloadUrl(attachment);
			let imageSrc;
			if (isImage(attachment)) {
				if (href) imageSrc = href;
				else if (attachment.file) imageSrc = objectUrlFor(attachment.file);
			}
			return {
				key: attachment.fileId ?? `local-${index}`,
				attachment,
				imageSrc,
				href
			};
		}));
		onBeforeUnmount(() => {
			for (const url of objectUrlsByFile.values()) URL.revokeObjectURL(url);
			objectUrlsByFile.clear();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.attachments),
				"data-testid": "agent-chat-message-attachments"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item) => {
				return openBlock(), createElementBlock(Fragment, { key: item.key }, [unavailableKeys.has(item.key) ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([_ctx.$style.fileChip, _ctx.$style.unavailable]),
					title: item.attachment.fileName,
					"data-testid": "agent-chat-attachment-unavailable"
				}, [
					createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						size: "small"
					}),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileName) }, toDisplayString(item.attachment.fileName), 3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileSize) }, toDisplayString(unref(i18n).baseText("agents.chat.attachments.unavailable")), 3)
				], 10, _hoisted_1$8)) : item.imageSrc ? (openBlock(), createElementBlock("a", {
					key: 1,
					href: item.href,
					target: "_blank",
					rel: "noopener noreferrer",
					class: normalizeClass([_ctx.$style.thumbnailLink, { [_ctx.$style.notClickable]: !item.href }]),
					title: item.attachment.fileName,
					onClick: ($event) => !item.href && $event.preventDefault()
				}, [createBaseVNode("img", {
					src: item.imageSrc,
					alt: item.attachment.fileName,
					class: normalizeClass(_ctx.$style.thumbnail),
					onError: ($event) => item.href && unavailableKeys.add(item.key)
				}, null, 42, _hoisted_3$3)], 10, _hoisted_2$4)) : (openBlock(), createBlock(resolveDynamicComponent(item.href ? "a" : "span"), {
					key: 2,
					href: item.href,
					download: item.href ? item.attachment.fileName : void 0,
					class: normalizeClass(_ctx.$style.fileChip),
					title: item.attachment.fileName
				}, {
					default: withCtx(() => [
						createVNode(unref(N8nIcon_default), {
							icon: "paperclip",
							size: "small"
						}),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileName) }, toDisplayString(item.attachment.fileName), 3),
						item.attachment.sizeBytes !== void 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.fileSize)
						}, toDisplayString(unref(formatBytes)(item.attachment.sizeBytes)), 3)) : createCommentVNode("", true)
					]),
					_: 2
				}, 1032, [
					"href",
					"download",
					"class",
					"title"
				]))], 64);
			}), 128))], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMessageAttachments.vue?vue&type=style&index=0&lang.module.scss
var attachments = "_attachments_d6wjl_388";
var thumbnailLink = "_thumbnailLink_d6wjl_396";
var notClickable = "_notClickable_d6wjl_406";
var thumbnail = "_thumbnail_d6wjl_396";
var fileChip = "_fileChip_d6wjl_417";
var fileName = "_fileName_d6wjl_431";
var fileSize = "_fileSize_d6wjl_438";
var unavailable = "_unavailable_d6wjl_443";
var shimmer$18 = "_shimmer_d6wjl_1";
var spin$18 = "_spin_d6wjl_1";
var opacityPulse$18 = "_opacityPulse_d6wjl_1";
var popoverIn$18 = "_popoverIn_d6wjl_1";
var fadeIn$18 = "_fadeIn_d6wjl_1";
var collapsibleSlideDown$18 = "_collapsibleSlideDown_d6wjl_1";
var collapsibleSlideUp$18 = "_collapsibleSlideUp_d6wjl_1";
var collapsibleSlideDownBlurred$18 = "_collapsibleSlideDownBlurred_d6wjl_1";
var collapsibleSlideUpBlurred$18 = "_collapsibleSlideUpBlurred_d6wjl_1";
var blurSwapIn$18 = "_blurSwapIn_d6wjl_1";
var blurSwapOut$18 = "_blurSwapOut_d6wjl_1";
var pulseGlow$18 = "_pulseGlow_d6wjl_1";
var pulseGlowDelayed$18 = "_pulseGlowDelayed_d6wjl_1";
var fade$18 = "_fade_d6wjl_1";
var fadeInUp$18 = "_fadeInUp_d6wjl_1";
var fadeInDown$18 = "_fadeInDown_d6wjl_1";
var fadeInLeft$18 = "_fadeInLeft_d6wjl_1";
var fadeInRight$18 = "_fadeInRight_d6wjl_1";
var fadeOut$18 = "_fadeOut_d6wjl_1";
var fadeOutDown$18 = "_fadeOutDown_d6wjl_1";
var fadeOutUp$18 = "_fadeOutUp_d6wjl_1";
var fadeOutLeft$18 = "_fadeOutLeft_d6wjl_1";
var fadeOutRight$18 = "_fadeOutRight_d6wjl_1";
var ping$18 = "_ping_d6wjl_1";
var blinkBackground$18 = "_blinkBackground_d6wjl_1";
var typingBlink$18 = "_typingBlink_d6wjl_1";
var AgentChatMessageAttachments_vue_vue_type_style_index_0_lang_module_default = {
	attachments,
	thumbnailLink,
	notClickable,
	thumbnail,
	fileChip,
	fileName,
	fileSize,
	unavailable,
	shimmer: shimmer$18,
	spin: spin$18,
	"skeleton-pulse": "_skeleton-pulse_d6wjl_1",
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
var AgentChatMessageAttachments_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMessageAttachments_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMessageAttachments_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentMarkdownChunk.vue?vue&type=script&setup=true&lang.ts
var AgentMarkdownChunk_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentMarkdownChunk",
	props: { source: {} },
	setup(__props) {
		const router = useRouter();
		const AGENT_PREVIEW_PATH = /^\/projects\/[^/]+\/agents\/[^/]+\/preview\/?$/;
		function handleLinkClick(event) {
			if (event.metaKey || event.ctrlKey || !(event.target instanceof Element)) return;
			const href = event.target.closest("a")?.getAttribute("href");
			if (!href || !AGENT_PREVIEW_PATH.test(href)) return;
			event.preventDefault();
			router.push(href);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(VueMarkdown), {
				source: __props.source,
				class: normalizeClass(_ctx.$style.markdown),
				onClick: handleLinkClick
			}, null, 8, ["source", "class"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentMarkdownChunk.vue?vue&type=style&index=0&lang.module.scss
var markdown$1 = "_markdown_z6ee0_388";
var shimmer$17 = "_shimmer_z6ee0_1";
var spin$17 = "_spin_z6ee0_1";
var opacityPulse$17 = "_opacityPulse_z6ee0_1";
var popoverIn$17 = "_popoverIn_z6ee0_1";
var fadeIn$17 = "_fadeIn_z6ee0_1";
var collapsibleSlideDown$17 = "_collapsibleSlideDown_z6ee0_1";
var collapsibleSlideUp$17 = "_collapsibleSlideUp_z6ee0_1";
var collapsibleSlideDownBlurred$17 = "_collapsibleSlideDownBlurred_z6ee0_1";
var collapsibleSlideUpBlurred$17 = "_collapsibleSlideUpBlurred_z6ee0_1";
var blurSwapIn$17 = "_blurSwapIn_z6ee0_1";
var blurSwapOut$17 = "_blurSwapOut_z6ee0_1";
var pulseGlow$17 = "_pulseGlow_z6ee0_1";
var pulseGlowDelayed$17 = "_pulseGlowDelayed_z6ee0_1";
var fade$17 = "_fade_z6ee0_1";
var fadeInUp$17 = "_fadeInUp_z6ee0_1";
var fadeInDown$17 = "_fadeInDown_z6ee0_1";
var fadeInLeft$17 = "_fadeInLeft_z6ee0_1";
var fadeInRight$17 = "_fadeInRight_z6ee0_1";
var fadeOut$17 = "_fadeOut_z6ee0_1";
var fadeOutDown$17 = "_fadeOutDown_z6ee0_1";
var fadeOutUp$17 = "_fadeOutUp_z6ee0_1";
var fadeOutLeft$17 = "_fadeOutLeft_z6ee0_1";
var fadeOutRight$17 = "_fadeOutRight_z6ee0_1";
var ping$17 = "_ping_z6ee0_1";
var blinkBackground$17 = "_blinkBackground_z6ee0_1";
var typingBlink$17 = "_typingBlink_z6ee0_1";
var AgentMarkdownChunk_vue_vue_type_style_index_0_lang_module_default = {
	markdown: markdown$1,
	shimmer: shimmer$17,
	spin: spin$17,
	"skeleton-pulse": "_skeleton-pulse_z6ee0_1",
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
var AgentMarkdownChunk_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentMarkdownChunk_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentMarkdownChunk_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentTypingIndicator.vue?vue&type=style&index=0&lang.module.scss
var typing = "_typing_1bkfo_388";
var typingBlink$16 = "_typingBlink_1bkfo_1";
var shimmer$16 = "_shimmer_1bkfo_1";
var spin$16 = "_spin_1bkfo_1";
var opacityPulse$16 = "_opacityPulse_1bkfo_1";
var popoverIn$16 = "_popoverIn_1bkfo_1";
var fadeIn$16 = "_fadeIn_1bkfo_1";
var collapsibleSlideDown$16 = "_collapsibleSlideDown_1bkfo_1";
var collapsibleSlideUp$16 = "_collapsibleSlideUp_1bkfo_1";
var collapsibleSlideDownBlurred$16 = "_collapsibleSlideDownBlurred_1bkfo_1";
var collapsibleSlideUpBlurred$16 = "_collapsibleSlideUpBlurred_1bkfo_1";
var blurSwapIn$16 = "_blurSwapIn_1bkfo_1";
var blurSwapOut$16 = "_blurSwapOut_1bkfo_1";
var pulseGlow$16 = "_pulseGlow_1bkfo_1";
var pulseGlowDelayed$16 = "_pulseGlowDelayed_1bkfo_1";
var fade$16 = "_fade_1bkfo_1";
var fadeInUp$16 = "_fadeInUp_1bkfo_1";
var fadeInDown$16 = "_fadeInDown_1bkfo_1";
var fadeInLeft$16 = "_fadeInLeft_1bkfo_1";
var fadeInRight$16 = "_fadeInRight_1bkfo_1";
var fadeOut$16 = "_fadeOut_1bkfo_1";
var fadeOutDown$16 = "_fadeOutDown_1bkfo_1";
var fadeOutUp$16 = "_fadeOutUp_1bkfo_1";
var fadeOutLeft$16 = "_fadeOutLeft_1bkfo_1";
var fadeOutRight$16 = "_fadeOutRight_1bkfo_1";
var ping$16 = "_ping_1bkfo_1";
var blinkBackground$16 = "_blinkBackground_1bkfo_1";
var AgentTypingIndicator_vue_vue_type_style_index_0_lang_module_default = {
	typing,
	typingBlink: typingBlink$16,
	shimmer: shimmer$16,
	spin: spin$16,
	"skeleton-pulse": "_skeleton-pulse_1bkfo_1",
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
	blinkBackground: blinkBackground$16
};
//#endregion
//#region src/features/agents/components/AgentTypingIndicator.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("span", {
		class: normalizeClass(_ctx.$style.typing),
		"data-test-id": "agent-typing-indicator"
	}, [..._cache[0] || (_cache[0] = [
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1)
	])], 2);
}
var AgentTypingIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": AgentTypingIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/interactionRegistry.ts
function findInteractionRenderer(payload, renderers) {
	return renderers.find((renderer) => renderer.matches(payload));
}
//#endregion
//#region src/features/ai/shared/agentsChat/components/InteractionRenderer.vue
var InteractionRenderer_default = /* @__PURE__ */ defineComponent({
	__name: "InteractionRenderer",
	props: {
		payload: {},
		renderers: {},
		disabled: { type: Boolean }
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const renderer = computed(() => findInteractionRenderer(props.payload, props.renderers));
		const rendererProps = computed(() => {
			if (!renderer.value?.getProps) return { payload: props.payload };
			return renderer.value.getProps(props.payload);
		});
		function onSubmit(resumeData) {
			emit("submit", resumeData);
		}
		return (_ctx, _cache) => {
			return renderer.value ? (openBlock(), createBlock(resolveDynamicComponent(renderer.value.component), mergeProps({ key: 0 }, rendererProps.value, {
				disabled: __props.disabled,
				onSubmit
			}), null, 16, ["disabled"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/interactive/ApprovalCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = {
	key: 0,
	"data-testid": "agent-approval-tool-details"
};
var ApprovalCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApprovalCard",
	props: {
		input: {},
		disabled: { type: Boolean },
		resolvedValue: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toolLabel = computed(() => props.input.displayName ?? props.input.toolName);
		const detailsText = computed(() => {
			const details = props.input.details ?? props.input.args;
			if (details === void 0) return "";
			try {
				return JSON.stringify(details, null, 2) ?? "";
			} catch {
				return String(details);
			}
		});
		function submit(approved) {
			if (props.disabled) return;
			emit("submit", { approved });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass([_ctx.$style.card, __props.disabled && _ctx.$style.disabled]),
				"data-testid": "agent-approval-card"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [
					createVNode(unref(N8nText_default), {
						tag: "p",
						bold: "",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.title")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.description", { interpolate: { toolName: toolLabel.value } })), 1)]),
						_: 1
					}, 8, ["class"]),
					detailsText.value ? (openBlock(), createElementBlock("details", _hoisted_1$7, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.detailsSummary) }, [createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.viewToolDetails")), 1)]),
						_: 1
					})], 2), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.args) }, toDisplayString(detailsText.value), 3)])) : createCommentVNode("", true),
					__props.disabled && __props.resolvedValue ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.resolved)
					}, [createVNode(unref(N8nIcon_default), {
						icon: __props.resolvedValue.approved ? "circle-check" : "circle-x",
						size: "small",
						color: __props.resolvedValue.approved ? "success" : "danger"
					}, null, 8, ["icon", "color"]), createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(__props.resolvedValue.approved ? "agents.chat.approval.approved" : "agents.chat.approval.rejected")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.actions)
					}, [createVNode(unref(N8nButton_default), {
						size: "medium",
						disabled: __props.disabled,
						"data-testid": "agent-approval-approve",
						onClick: _cache[0] || (_cache[0] = ($event) => submit(true))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.approve")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						size: "medium",
						variant: "outline",
						disabled: __props.disabled,
						"data-testid": "agent-approval-reject",
						onClick: _cache[1] || (_cache[1] = ($event) => submit(false))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.reject")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2))
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/interactive/ApprovalCard.vue?vue&type=style&index=0&lang.module.scss
var card$2 = "_card_1cy3j_388";
var disabled = "_disabled_1cy3j_394";
var cardBody = "_cardBody_1cy3j_398";
var resolved = "_resolved_1cy3j_404";
var actions$1 = "_actions_1cy3j_405";
var title$2 = "_title_1cy3j_411";
var description = "_description_1cy3j_412";
var args = "_args_1cy3j_420";
var detailsSummary = "_detailsSummary_1cy3j_433";
var shimmer$15 = "_shimmer_1cy3j_1";
var spin$15 = "_spin_1cy3j_1";
var opacityPulse$15 = "_opacityPulse_1cy3j_1";
var popoverIn$15 = "_popoverIn_1cy3j_1";
var fadeIn$15 = "_fadeIn_1cy3j_1";
var collapsibleSlideDown$15 = "_collapsibleSlideDown_1cy3j_1";
var collapsibleSlideUp$15 = "_collapsibleSlideUp_1cy3j_1";
var collapsibleSlideDownBlurred$15 = "_collapsibleSlideDownBlurred_1cy3j_1";
var collapsibleSlideUpBlurred$15 = "_collapsibleSlideUpBlurred_1cy3j_1";
var blurSwapIn$15 = "_blurSwapIn_1cy3j_1";
var blurSwapOut$15 = "_blurSwapOut_1cy3j_1";
var pulseGlow$15 = "_pulseGlow_1cy3j_1";
var pulseGlowDelayed$15 = "_pulseGlowDelayed_1cy3j_1";
var fade$15 = "_fade_1cy3j_1";
var fadeInUp$15 = "_fadeInUp_1cy3j_1";
var fadeInDown$15 = "_fadeInDown_1cy3j_1";
var fadeInLeft$15 = "_fadeInLeft_1cy3j_1";
var fadeInRight$15 = "_fadeInRight_1cy3j_1";
var fadeOut$15 = "_fadeOut_1cy3j_1";
var fadeOutDown$15 = "_fadeOutDown_1cy3j_1";
var fadeOutUp$15 = "_fadeOutUp_1cy3j_1";
var fadeOutLeft$15 = "_fadeOutLeft_1cy3j_1";
var fadeOutRight$15 = "_fadeOutRight_1cy3j_1";
var ping$15 = "_ping_1cy3j_1";
var blinkBackground$15 = "_blinkBackground_1cy3j_1";
var typingBlink$15 = "_typingBlink_1cy3j_1";
var ApprovalCard_vue_vue_type_style_index_0_lang_module_default = {
	card: card$2,
	disabled,
	cardBody,
	resolved,
	actions: actions$1,
	title: title$2,
	description,
	args,
	detailsSummary,
	shimmer: shimmer$15,
	spin: spin$15,
	"skeleton-pulse": "_skeleton-pulse_1cy3j_1",
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
var ApprovalCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApprovalCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApprovalCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/N8nChatActionCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["src", "alt"];
var N8nChatActionCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nChatActionCard",
	props: {
		input: {},
		resolvedValue: {},
		disabled: { type: Boolean }
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const blocks = computed(() => {
			const result = [];
			for (const component of props.input.card.components) if (component.type === "button") {
				const last = result[result.length - 1];
				if (last?.kind === "buttons") last.buttons.push(component);
				else result.push({
					kind: "buttons",
					buttons: [component]
				});
			} else result.push({
				kind: "component",
				component
			});
			return result;
		});
		const fallbackSummary = computed(() => {
			if (props.input.card.title || props.input.card.message) return void 0;
			const text = props.input.text?.trim();
			return text ? text : void 0;
		});
		/**
		* Map the card's button style to a design-system button variant, mirroring
		* how the platform mappers treat them: `primary` = emphasized, `danger` =
		* destructive, `default`/unset = neutral.
		*/
		function buttonVariant(btn) {
			if (btn.style === "primary") return "solid";
			if (btn.style === "danger") return "destructive";
			return "outline";
		}
		function submitButton(btn) {
			if (props.disabled) return;
			emit("submit", {
				type: "button",
				value: btn.value
			});
		}
		function submitOption(component, value) {
			if (props.disabled) return;
			emit("submit", {
				type: "select",
				...component.id && { id: component.id },
				value
			});
		}
		function isButtonSelected(btn) {
			return props.resolvedValue?.type === "button" && props.resolvedValue.value === btn.value;
		}
		function isOptionSelected(component, value) {
			return props.resolvedValue?.type === "select" && props.resolvedValue.value === value && (props.resolvedValue.id === void 0 || props.resolvedValue.id === component.id);
		}
		/** Chosen value for a select/radio_select group: the resolved answer, if any. */
		function selectedOptionValue(component) {
			return component.options.find((option) => isOptionSelected(component, option.value))?.value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				"data-testid": "n8n-chat-action-card"
			}, [
				__props.input.card.title ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.title),
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.input.card.title), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				__props.input.card.message ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.message),
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.input.card.message), 1)]),
					_: 1
				}, 8, ["class"])) : fallbackSummary.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					class: normalizeClass(_ctx.$style.title),
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(fallbackSummary.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(blocks.value, (block, blockIdx) => {
					return openBlock(), createElementBlock(Fragment, { key: blockIdx }, [block.kind === "buttons" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.buttonRow),
						"data-testid": "n8n-chat-card-button-row"
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(block.buttons, (button, buttonIdx) => {
						return openBlock(), createBlock(unref(N8nButton_default), {
							key: buttonIdx,
							size: "small",
							variant: buttonVariant(button),
							disabled: __props.disabled && !isButtonSelected(button),
							"data-testid": "n8n-chat-card-button",
							onClick: ($event) => submitButton(button)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(button.label ?? button.text ?? button.value), 1)]),
							_: 2
						}, 1032, [
							"variant",
							"disabled",
							"onClick"
						]);
					}), 128))], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [block.component.type === "section" && (block.component.text || block.component.button) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.section)
					}, [block.component.text ? (openBlock(), createBlock(unref(N8nText_default), { key: 0 }, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.text), 1)]),
						_: 2
					}, 1024)) : createCommentVNode("", true), block.component.button ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.sectionButton),
						size: "small",
						variant: buttonVariant(block.component.button),
						disabled: __props.disabled && !isButtonSelected(block.component.button),
						"data-testid": "n8n-chat-card-section-button",
						onClick: ($event) => submitButton(block.component.button)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.button.label ?? block.component.button.text ?? block.component.button.value), 1)]),
						_: 2
					}, 1032, [
						"class",
						"variant",
						"disabled",
						"onClick"
					])) : createCommentVNode("", true)], 2)) : block.component.type === "divider" ? (openBlock(), createElementBlock("hr", {
						key: 1,
						class: normalizeClass(_ctx.$style.divider)
					}, null, 2)) : block.component.type === "radio_select" ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.selectGroup)
					}, [block.component.label ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.selectLabel),
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.label), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(block.component.options ?? [], (option) => {
						return openBlock(), createBlock(unref(ElRadio), {
							key: option.value,
							class: normalizeClass(_ctx.$style.radio),
							"model-value": selectedOptionValue(block.component) ?? "",
							label: option.value,
							disabled: __props.disabled,
							"data-testid": "n8n-chat-card-radio",
							"onUpdate:modelValue": ($event) => submitOption(block.component, option.value)
						}, {
							default: withCtx(() => [createBaseVNode("span", null, toDisplayString(option.label), 1), option.description ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								size: "xsmall",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(option.description), 1)]),
								_: 2
							}, 1024)) : createCommentVNode("", true)]),
							_: 2
						}, 1032, [
							"class",
							"model-value",
							"label",
							"disabled",
							"onUpdate:modelValue"
						]);
					}), 128))], 2)) : block.component.type === "select" ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.selectGroup)
					}, [block.component.label ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.selectLabel),
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.label), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nSelect_default), {
						"model-value": selectedOptionValue(block.component),
						size: "small",
						disabled: __props.disabled,
						placeholder: block.component.placeholder,
						"data-testid": "n8n-chat-card-select",
						"onUpdate:modelValue": ($event) => submitOption(block.component, $event)
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(block.component.options ?? [], (option) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: option.value,
								value: option.value,
								label: option.label
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 2
					}, 1032, [
						"model-value",
						"disabled",
						"placeholder",
						"onUpdate:modelValue"
					])], 2)) : block.component.type === "fields" ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.fieldsGroup)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(block.component.fields ?? block.component.items ?? [], (field) => {
						return openBlock(), createElementBlock("div", {
							key: field.label,
							class: normalizeClass(_ctx.$style.fieldRow)
						}, [createVNode(unref(N8nText_default), {
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(field.label), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(field.value), 1)]),
							_: 2
						}, 1024)], 2);
					}), 128))], 2)) : block.component.type === "image" && block.component.url ? (openBlock(), createElementBlock("img", {
						key: 5,
						src: block.component.url,
						alt: block.component.alt ?? block.component.altText ?? "",
						class: normalizeClass(_ctx.$style.image)
					}, null, 10, _hoisted_1$6)) : createCommentVNode("", true)], 64))], 64);
				}), 128))
			], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/interactive/N8nChatActionCard.vue?vue&type=style&index=0&lang.module.scss
var card$1 = "_card_n7rna_389";
var title$1 = "_title_n7rna_398";
var message$2 = "_message_n7rna_402";
var section$1 = "_section_n7rna_406";
var sectionButton = "_sectionButton_n7rna_413";
var divider$1 = "_divider_n7rna_417";
var buttonRow = "_buttonRow_n7rna_423";
var selectGroup$1 = "_selectGroup_n7rna_429";
var selectLabel$1 = "_selectLabel_n7rna_435";
var radio = "_radio_n7rna_439";
var fieldsGroup$1 = "_fieldsGroup_n7rna_443";
var fieldRow$1 = "_fieldRow_n7rna_449";
var image$1 = "_image_n7rna_454";
var shimmer$14 = "_shimmer_n7rna_1";
var spin$14 = "_spin_n7rna_1";
var opacityPulse$14 = "_opacityPulse_n7rna_1";
var popoverIn$14 = "_popoverIn_n7rna_1";
var fadeIn$14 = "_fadeIn_n7rna_1";
var collapsibleSlideDown$14 = "_collapsibleSlideDown_n7rna_1";
var collapsibleSlideUp$14 = "_collapsibleSlideUp_n7rna_1";
var collapsibleSlideDownBlurred$14 = "_collapsibleSlideDownBlurred_n7rna_1";
var collapsibleSlideUpBlurred$14 = "_collapsibleSlideUpBlurred_n7rna_1";
var blurSwapIn$14 = "_blurSwapIn_n7rna_1";
var blurSwapOut$14 = "_blurSwapOut_n7rna_1";
var pulseGlow$14 = "_pulseGlow_n7rna_1";
var pulseGlowDelayed$14 = "_pulseGlowDelayed_n7rna_1";
var fade$14 = "_fade_n7rna_1";
var fadeInUp$14 = "_fadeInUp_n7rna_1";
var fadeInDown$14 = "_fadeInDown_n7rna_1";
var fadeInLeft$14 = "_fadeInLeft_n7rna_1";
var fadeInRight$14 = "_fadeInRight_n7rna_1";
var fadeOut$14 = "_fadeOut_n7rna_1";
var fadeOutDown$14 = "_fadeOutDown_n7rna_1";
var fadeOutUp$14 = "_fadeOutUp_n7rna_1";
var fadeOutLeft$14 = "_fadeOutLeft_n7rna_1";
var fadeOutRight$14 = "_fadeOutRight_n7rna_1";
var ping$14 = "_ping_n7rna_1";
var blinkBackground$14 = "_blinkBackground_n7rna_1";
var typingBlink$14 = "_typingBlink_n7rna_1";
var N8nChatActionCard_vue_vue_type_style_index_0_lang_module_default = {
	card: card$1,
	title: title$1,
	message: message$2,
	section: section$1,
	sectionButton,
	divider: divider$1,
	buttonRow,
	selectGroup: selectGroup$1,
	selectLabel: selectLabel$1,
	radio,
	fieldsGroup: fieldsGroup$1,
	fieldRow: fieldRow$1,
	image: image$1,
	shimmer: shimmer$14,
	spin: spin$14,
	"skeleton-pulse": "_skeleton-pulse_n7rna_1",
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
var N8nChatActionCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nChatActionCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nChatActionCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/InteractiveCard.vue
var InteractiveCard_default = /* @__PURE__ */ defineComponent({
	__name: "InteractiveCard",
	props: { payload: {} },
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		/**
		* Disabled when the card is already resolved OR when it's still open but has
		* no `runId` to resume against. The latter happens when a stale interactive
		* card from the open checkpoint can't be matched to a backend suspension —
		* normally an after-effect of expired or pruned checkpoint state.
		*/
		const disabled = computed(() => !!props.payload.resolvedAt || !props.payload.runId);
		const interactiveRenderers = [
			{
				key: "approval",
				component: ApprovalCard_default,
				matches: (payload) => payload.toolName === APPROVAL_TOOL_NAME,
				getProps: (payload) => {
					if (payload.toolName !== "approval") return {};
					return {
						input: payload.input,
						resolvedValue: payload.resolvedValue
					};
				}
			},
			{
				key: "chat_action",
				component: N8nChatActionCard_default,
				matches: (payload) => payload.toolName === N8N_CHAT_ACTION_TOOL_NAME,
				getProps: (payload) => {
					if (payload.toolName !== "chat_action") return {};
					return {
						input: payload.input,
						resolvedValue: payload.resolvedValue
					};
				}
			},
			{
				key: "wait",
				component: N8nChatActionCard_default,
				matches: (payload) => payload.toolName === WAIT_TOOL_NAME,
				getProps: (payload) => {
					if (payload.toolName !== "wait") return {};
					return {
						input: payload.input,
						resolvedValue: payload.resolvedValue
					};
				}
			}
		];
		function onSubmit(resumeData) {
			emit("submit", resumeData);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(InteractionRenderer_default, {
				payload: __props.payload,
				renderers: interactiveRenderers,
				disabled: disabled.value,
				onSubmit
			}, null, 8, ["payload", "disabled"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMessageList.vue?vue&type=script&setup=true&lang.ts
var SCROLL_STICK_THRESHOLD_PX = 80;
/**
* True when the user is (or was last) near the bottom of the chat and wants
* incoming stream chunks to keep scrolling into view. Flipped to false when
* the user scrolls up away from the bottom, and back to true when they
* scroll back down or send a new message.
*/
var AgentChatMessageList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageList",
	props: {
		messages: {},
		messagingState: {},
		projectId: {},
		agentId: {},
		sessionId: {},
		canSendToAssistant: { type: Boolean }
	},
	emits: ["resume", "sendToAssistant"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const canSendToAssistant = computed(() => Boolean(props.canSendToAssistant && props.agentId && props.sessionId));
		function onFixWithAssistant(group, failures) {
			const executionId = group.kind === "toolRun" ? group.executionId : group.message.executionId;
			if (!executionId || failures.length === 0) return;
			emit("sendToAssistant", {
				executionId,
				failures
			});
		}
		function onInteractiveSubmit(payload, resumeData) {
			if (!payload.runId) return;
			emit("resume", {
				runId: payload.runId,
				toolCallId: payload.toolCallId,
				resumeData
			});
		}
		function isIntegrationActionSuspend(value) {
			return isRecord(value) && value.type === "integration_action";
		}
		/**
		* Returns a display name for the external platform a tool call is waiting on,
		* or `undefined` when the tool call either isn't suspended or renders its own
		* interactive card. n8n_chat_action carries the integration_action sidecar
		* but is excluded explicitly because it renders its own interactive card in
		* the chat.
		*/
		function externalWaitPlatform(tc) {
			if (tc.state !== TOOL_CALL_STATE.SUSPENDED) return void 0;
			if (tc.tool === "chat_action") return void 0;
			if (!isIntegrationActionSuspend(tc.suspendPayload)) return void 0;
			const base = tc.tool.replace(/_action$/, "").replace(/_\d+$/, "");
			return base.charAt(0).toUpperCase() + base.slice(1);
		}
		/**
		* Open cards always render. Once resolved, answered interactive cards clear
		* from the chat (both approval and n8n chat cards collapse into their
		* tool-step summary) — but display-only n8n chat cards persist: they are
		* content, and being born resolved they would otherwise never render at all.
		*/
		function shouldRenderInteractive(payload) {
			if (!payload.resolvedAt) return !!payload.runId;
			return payload.toolName === "chat_action" && !isAwaitingCard(payload.input.card);
		}
		function getRenderableInteractives(message) {
			return getMessageInteractives(message).filter(shouldRenderInteractive);
		}
		function getMessageRenderItems(message) {
			const renderableInteractives = getRenderableInteractives(message);
			const renderableByToolCallId = new Map(renderableInteractives.map((payload) => [payload.toolCallId, payload]));
			if (!message.renderParts?.length) return [...message.content ? [{
				type: "text",
				key: "text",
				text: message.content
			}] : [], ...renderableInteractives.map((payload) => ({
				type: "interactive",
				key: `interactive-${payload.toolCallId}`,
				payload
			}))];
			const items = [];
			const renderedInteractiveIds = /* @__PURE__ */ new Set();
			for (const [index, part] of message.renderParts.entries()) {
				if (part.type === "text") {
					if (part.text) items.push({
						type: "text",
						key: `text-${index}`,
						text: part.text
					});
					continue;
				}
				const payload = renderableByToolCallId.get(part.toolCallId);
				if (!payload) continue;
				renderedInteractiveIds.add(payload.toolCallId);
				items.push({
					type: "interactive",
					key: `interactive-${payload.toolCallId}`,
					payload
				});
			}
			for (const payload of renderableInteractives) {
				if (renderedInteractiveIds.has(payload.toolCallId)) continue;
				items.push({
					type: "interactive",
					key: `interactive-${payload.toolCallId}`,
					payload
				});
			}
			return items;
		}
		const scrollRef = useTemplateRef("scrollRef");
		const displayGroups = computed(() => buildDisplayGroups(props.messages));
		function isThinkingActive(message) {
			return message.status === CHAT_MESSAGE_STATUS.STREAMING || message.status === CHAT_MESSAGE_STATUS.AWAITING_USER;
		}
		function getAssistantGroupContent(group) {
			if (group.kind === "toolRun") return group.finalMessage?.content ?? "";
			return group.message.role === "assistant" ? group.message.content : "";
		}
		function isAssistantGroup(group) {
			return group.kind === "toolRun" || group.message.role === "assistant";
		}
		function getAssistantRunContent(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return "";
			const lines = [];
			for (let i = index; i >= 0; i--) {
				const group = displayGroups.value[i];
				if (!isAssistantGroup(group)) break;
				const content = getAssistantGroupContent(group).trim();
				if (content) lines.unshift(content);
			}
			return lines.join("\n\n");
		}
		function getRecallMemoryEntries(output) {
			if (!output || typeof output !== "object") return [];
			if (!("entries" in output) || !Array.isArray(output.entries)) return [];
			const entries = [];
			for (const [index, entry] of output.entries.entries()) {
				if (!entry || typeof entry !== "object") continue;
				if (!("content" in entry) || typeof entry.content !== "string") continue;
				const id = "id" in entry && typeof entry.id === "string" ? entry.id : "createdAt" in entry && typeof entry.createdAt === "string" ? entry.createdAt : `${entry.content}:${index}`;
				entries.push({
					id,
					content: entry.content
				});
			}
			return entries;
		}
		function parseMemoryOutput(output) {
			return getRecallMemoryEntries(output).map((entry) => ({
				id: entry.id,
				keyMemory: entry.content.trim(),
				evidence: []
			})).filter((memory) => memory.keyMemory.length > 0);
		}
		function isCompletedAssistantGroup(group) {
			if (group.kind === "toolRun") return group.finalMessage !== void 0 && group.finalMessage.status !== CHAT_MESSAGE_STATUS.STREAMING && group.finalMessage.status !== CHAT_MESSAGE_STATUS.AWAITING_USER;
			return group.message.role === "assistant" && group.message.status !== CHAT_MESSAGE_STATUS.STREAMING && group.message.status !== CHAT_MESSAGE_STATUS.AWAITING_USER;
		}
		function shouldShowAssistantFooter(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return false;
			const group = displayGroups.value[index];
			if (!isAssistantGroup(group) || !isCompletedAssistantGroup(group)) return false;
			const nextGroup = displayGroups.value[index + 1];
			return !nextGroup || !isAssistantGroup(nextGroup);
		}
		function getMemoriesUsedInAssistantRun(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return [];
			const memories = [];
			const memoryIds = /* @__PURE__ */ new Set();
			for (let i = index; i >= 0; i--) {
				const group = displayGroups.value[i];
				if (!isAssistantGroup(group)) break;
				const toolCalls = group.kind === "toolRun" ? group.toolCalls : group.message.toolCalls ?? [];
				for (let j = toolCalls.length - 1; j >= 0; j--) {
					const toolCall = toolCalls[j];
					if (toolCall.tool !== "recall_memory") continue;
					const uniqueMemories = parseMemoryOutput(toolCall.output).filter((memory) => {
						if (memoryIds.has(memory.id)) return false;
						memoryIds.add(memory.id);
						return true;
					});
					memories.unshift(...uniqueMemories);
				}
			}
			return memories;
		}
		const openMemoryFooterGroupId = ref(null);
		function setMemoryFooterOpen(groupId, open) {
			openMemoryFooterGroupId.value = open ? groupId : openMemoryFooterGroupId.value === groupId ? null : openMemoryFooterGroupId.value;
		}
		const spokenMessageId = ref(null);
		const spokenText = computed(() => {
			if (!spokenMessageId.value) return "";
			return getAssistantRunContent(spokenMessageId.value);
		});
		const speech = useSpeechSynthesis(spokenText, {
			pitch: 1,
			rate: 1,
			volume: 1
		});
		const isSpeechSynthesisAvailable = computed(() => speech.isSupported.value);
		const isStickToBottom = ref(true);
		function isNearBottom() {
			const el = scrollRef.value;
			if (!el) return true;
			return el.scrollHeight - el.scrollTop - el.clientHeight <= SCROLL_STICK_THRESHOLD_PX;
		}
		function onScroll() {
			isStickToBottom.value = isNearBottom();
		}
		function scrollToBottom() {
			nextTick(() => {
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						if (scrollRef.value) {
							scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
							isStickToBottom.value = true;
						}
					});
				});
			});
		}
		function autoScrollIfSticky() {
			if (isStickToBottom.value) scrollToBottom();
		}
		function isSpeakingMessage(messageId) {
			return spokenMessageId.value === messageId && speech.status.value === "play";
		}
		function toggleReadAloud(messageId) {
			if (!isSpeechSynthesisAvailable.value) return;
			if (spokenMessageId.value === messageId && speech.status.value === "play") {
				speech.stop();
				spokenMessageId.value = null;
				return;
			}
			speech.stop();
			spokenMessageId.value = messageId;
			speech.speak();
		}
		onMounted(() => {
			if (props.messages.length > 0) scrollToBottom();
		});
		watch(() => props.messages.length, (newLen, oldLen) => {
			if ((oldLen ?? 0) < newLen) {
				if (props.messages[newLen - 1]?.role === "user") {
					scrollToBottom();
					return;
				}
			}
			autoScrollIfSticky();
		}, { flush: "post" });
		watch(() => props.messagingState, autoScrollIfSticky, { flush: "post" });
		watch(() => {
			const last = props.messages[props.messages.length - 1];
			if (!last) return "";
			const thinking = getMessageThinkingSegments(last).map((segment) => segment.content).join("");
			return `${last.content}|${last.toolCalls?.length ?? 0}|${getMessageInteractives(last).length}|${thinking}`;
		}, autoScrollIfSticky, { flush: "post" });
		watch(() => speech.status.value, (status) => {
			if (status === "end") spokenMessageId.value = null;
		});
		watch(spokenText, (value) => {
			if (!value && spokenMessageId.value) {
				speech.stop();
				spokenMessageId.value = null;
			}
		});
		onBeforeUnmount(() => {
			speech.stop();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "scrollRef",
				ref: scrollRef,
				class: normalizeClass(_ctx.$style.messages),
				onScrollPassive: onScroll
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayGroups.value, (group) => {
				return openBlock(), createElementBlock(Fragment, { key: group.id }, [group.kind === "toolRun" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.message, _ctx.$style.assistant])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					group.toolCalls.length ? (openBlock(), createBlock(AgentChatToolSteps_default, {
						key: 0,
						"tool-calls": group.toolCalls,
						"project-id": __props.projectId,
						"can-fix-with-assistant": canSendToAssistant.value,
						"execution-id": group.executionId,
						onFixWithAssistant: ($event) => onFixWithAssistant(group, $event)
					}, null, 8, [
						"tool-calls",
						"project-id",
						"can-fix-with-assistant",
						"execution-id",
						"onFixWithAssistant"
					])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(group.toolCalls, (tc) => {
						return openBlock(), createElementBlock(Fragment, { key: `wait-${tc.toolCallId}` }, [externalWaitPlatform(tc) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							"data-testid": "agent-chat-external-wait"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.waitingExternal", { interpolate: { platform: externalWaitPlatform(tc) } })), 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true)], 64);
					}), 128)),
					group.interactives.some(shouldRenderInteractive) ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.interactives)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.interactives.filter(shouldRenderInteractive), (payload) => {
						return openBlock(), createBlock(InteractiveCard_default, {
							key: payload.toolCallId,
							payload,
							onSubmit: ($event) => onInteractiveSubmit(payload, $event)
						}, null, 8, ["payload", "onSubmit"]);
					}), 128))], 2)) : createCommentVNode("", true),
					group.finalMessage?.content ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.chatMessageError]: group.finalMessage.status === "error" }])
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.markdownContent) }, [createVNode(AgentMarkdownChunk_default, { source: group.finalMessage.content }, null, 8, ["source"])], 2)], 2)) : createCommentVNode("", true),
					group.thinkingSegments.length ? (openBlock(), createBlock(AiThinkingBlock_default, {
						key: 3,
						segments: group.thinkingSegments,
						active: group.active || group.awaitingInput,
						"awaiting-input": group.awaitingInput,
						"duration-sec": unref(getThinkingDurationSec)(group.thinkingSegments),
						"test-id": "agent-chat-thinking-block"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(group.thinkingSegments, (segment) => {
							return openBlock(), createBlock(AiReasoningBlock_default, {
								key: segment.id,
								entry: segment,
								streaming: group.active && segment.endTime === void 0
							}, null, 8, ["entry", "streaming"]);
						}), 128))]),
						_: 2
					}, 1032, [
						"segments",
						"active",
						"awaiting-input",
						"duration-sec"
					])) : createCommentVNode("", true),
					shouldShowAssistantFooter(group.id) ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass([_ctx.$style.messageFooter, { [_ctx.$style.messageFooterVisible]: openMemoryFooterGroupId.value === group.id }])
					}, [createVNode(AgentChatMemoryUsed_default, {
						memories: getMemoriesUsedInAssistantRun(group.id),
						"onUpdate:open": ($event) => setMemoryFooterOpen(group.id, $event)
					}, null, 8, ["memories", "onUpdate:open"]), getAssistantRunContent(group.id) ? (openBlock(), createBlock(AgentChatMessageActions_default, {
						key: 0,
						content: getAssistantRunContent(group.id),
						"is-speech-synthesis-available": isSpeechSynthesisAvailable.value,
						"is-speaking": isSpeakingMessage(group.id),
						"can-send-to-assistant": canSendToAssistant.value,
						onReadAloud: ($event) => toggleReadAloud(group.id),
						onSendToAssistant: _cache[0] || (_cache[0] = ($event) => emit("sendToAssistant"))
					}, null, 8, [
						"content",
						"is-speech-synthesis-available",
						"is-speaking",
						"can-send-to-assistant",
						"onReadAloud"
					])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					group.finalMessage?.status === unref(CHAT_MESSAGE_STATUS).STREAMING && !group.finalMessage.content && !group.toolCalls.length && !group.thinkingSegments.length ? (openBlock(), createBlock(AgentTypingIndicator_default, {
						key: 5,
						class: normalizeClass(_ctx.$style.typingIndicator)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([_ctx.$style.message, group.message.role === "user" ? _ctx.$style.user : _ctx.$style.assistant])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					group.message.toolCalls?.length ? (openBlock(), createBlock(AgentChatToolSteps_default, {
						key: 0,
						"tool-calls": group.message.toolCalls,
						"project-id": __props.projectId,
						"can-fix-with-assistant": canSendToAssistant.value,
						"execution-id": group.message.executionId,
						onFixWithAssistant: ($event) => onFixWithAssistant(group, $event)
					}, null, 8, [
						"tool-calls",
						"project-id",
						"can-fix-with-assistant",
						"execution-id",
						"onFixWithAssistant"
					])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(group.message.toolCalls ?? [], (tc) => {
						return openBlock(), createElementBlock(Fragment, { key: `wait-${tc.toolCallId}` }, [externalWaitPlatform(tc) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							"data-testid": "agent-chat-external-wait"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.waitingExternal", { interpolate: { platform: externalWaitPlatform(tc) } })), 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true)], 64);
					}), 128)),
					group.message.attachments?.length && __props.projectId && __props.agentId ? (openBlock(), createBlock(AgentChatMessageAttachments_default, {
						key: 1,
						attachments: group.message.attachments,
						"project-id": __props.projectId,
						"agent-id": __props.agentId
					}, null, 8, [
						"attachments",
						"project-id",
						"agent-id"
					])) : createCommentVNode("", true),
					group.message.role === "user" && group.message.content ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass([_ctx.$style.chatMessage, _ctx.$style.chatMessageUser])
					}, toDisplayString(group.message.content), 3)) : (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(getMessageRenderItems(group.message), (item) => {
						return openBlock(), createElementBlock(Fragment, { key: item.key }, [item.type === "text" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.chatMessageError]: group.message.status === "error" }])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.markdownContent) }, [createVNode(AgentMarkdownChunk_default, { source: item.text }, null, 8, ["source"])], 2)], 2)) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.interactives)
						}, [createVNode(InteractiveCard_default, {
							payload: item.payload,
							onSubmit: ($event) => onInteractiveSubmit(item.payload, $event)
						}, null, 8, ["payload", "onSubmit"])], 2))], 64);
					}), 128)),
					group.thinkingSegments.length ? (openBlock(), createBlock(AiThinkingBlock_default, {
						key: 4,
						segments: group.thinkingSegments,
						active: isThinkingActive(group.message),
						"awaiting-input": group.message.status === unref(CHAT_MESSAGE_STATUS).AWAITING_USER,
						"duration-sec": unref(getThinkingDurationSec)(group.thinkingSegments),
						"test-id": "agent-chat-thinking-block"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(group.thinkingSegments, (segment) => {
							return openBlock(), createBlock(AiReasoningBlock_default, {
								key: segment.id,
								entry: segment,
								streaming: group.message.status === unref(CHAT_MESSAGE_STATUS).STREAMING && segment.endTime === void 0
							}, null, 8, ["entry", "streaming"]);
						}), 128))]),
						_: 2
					}, 1032, [
						"segments",
						"active",
						"awaiting-input",
						"duration-sec"
					])) : createCommentVNode("", true),
					shouldShowAssistantFooter(group.id) ? (openBlock(), createElementBlock("div", {
						key: 5,
						class: normalizeClass([_ctx.$style.messageFooter, { [_ctx.$style.messageFooterVisible]: openMemoryFooterGroupId.value === group.id }])
					}, [getAssistantRunContent(group.id) ? (openBlock(), createBlock(AgentChatMessageActions_default, {
						key: 0,
						content: getAssistantRunContent(group.id),
						"is-speech-synthesis-available": isSpeechSynthesisAvailable.value,
						"is-speaking": isSpeakingMessage(group.id),
						"can-send-to-assistant": canSendToAssistant.value,
						onReadAloud: ($event) => toggleReadAloud(group.id),
						onSendToAssistant: _cache[1] || (_cache[1] = ($event) => emit("sendToAssistant"))
					}, null, 8, [
						"content",
						"is-speech-synthesis-available",
						"is-speaking",
						"can-send-to-assistant",
						"onReadAloud"
					])) : createCommentVNode("", true), createVNode(AgentChatMemoryUsed_default, {
						memories: getMemoriesUsedInAssistantRun(group.id),
						"onUpdate:open": ($event) => setMemoryFooterOpen(group.id, $event)
					}, null, 8, ["memories", "onUpdate:open"])], 2)) : createCommentVNode("", true),
					group.message.role === "assistant" && group.message.status === unref(CHAT_MESSAGE_STATUS).STREAMING && !group.message.content && !group.message.toolCalls?.length && !unref(getMessageThinkingSegments)(group.message).length ? (openBlock(), createBlock(AgentTypingIndicator_default, {
						key: 6,
						class: normalizeClass(_ctx.$style.typingIndicator)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2))], 64);
			}), 128)), __props.messagingState === "waitingFirstChunk" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.message)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(AgentTypingIndicator_default, { class: normalizeClass(_ctx.$style.typingIndicator) }, null, 8, ["class"])], 2)], 2)) : createCommentVNode("", true)], 34);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMessageList.vue?vue&type=style&index=0&lang.module.scss
var messages = "_messages_1qk2j_388";
var message$1 = "_message_1qk2j_388";
var content = "_content_1qk2j_411";
var messageFooter = "_messageFooter_1qk2j_417";
var assistant = "_assistant_1qk2j_426";
var messageFooterVisible = "_messageFooterVisible_1qk2j_430";
var user = "_user_1qk2j_434";
var interactives = "_interactives_1qk2j_444";
var chatMessage = "_chatMessage_1qk2j_452";
var chatMessageUser = "_chatMessageUser_1qk2j_458";
var chatMessageError = "_chatMessageError_1qk2j_467";
var markdownContent = "_markdownContent_1qk2j_475";
var typingIndicator = "_typingIndicator_1qk2j_487";
var shimmer$13 = "_shimmer_1qk2j_1";
var spin$13 = "_spin_1qk2j_1";
var opacityPulse$13 = "_opacityPulse_1qk2j_1";
var popoverIn$13 = "_popoverIn_1qk2j_1";
var fadeIn$13 = "_fadeIn_1qk2j_1";
var collapsibleSlideDown$13 = "_collapsibleSlideDown_1qk2j_1";
var collapsibleSlideUp$13 = "_collapsibleSlideUp_1qk2j_1";
var collapsibleSlideDownBlurred$13 = "_collapsibleSlideDownBlurred_1qk2j_1";
var collapsibleSlideUpBlurred$13 = "_collapsibleSlideUpBlurred_1qk2j_1";
var blurSwapIn$13 = "_blurSwapIn_1qk2j_1";
var blurSwapOut$13 = "_blurSwapOut_1qk2j_1";
var pulseGlow$13 = "_pulseGlow_1qk2j_1";
var pulseGlowDelayed$13 = "_pulseGlowDelayed_1qk2j_1";
var fade$13 = "_fade_1qk2j_1";
var fadeInUp$13 = "_fadeInUp_1qk2j_1";
var fadeInDown$13 = "_fadeInDown_1qk2j_1";
var fadeInLeft$13 = "_fadeInLeft_1qk2j_1";
var fadeInRight$13 = "_fadeInRight_1qk2j_1";
var fadeOut$13 = "_fadeOut_1qk2j_1";
var fadeOutDown$13 = "_fadeOutDown_1qk2j_1";
var fadeOutUp$13 = "_fadeOutUp_1qk2j_1";
var fadeOutLeft$13 = "_fadeOutLeft_1qk2j_1";
var fadeOutRight$13 = "_fadeOutRight_1qk2j_1";
var ping$13 = "_ping_1qk2j_1";
var blinkBackground$13 = "_blinkBackground_1qk2j_1";
var typingBlink$13 = "_typingBlink_1qk2j_1";
var AgentChatMessageList_vue_vue_type_style_index_0_lang_module_default = {
	messages,
	message: message$1,
	content,
	messageFooter,
	assistant,
	messageFooterVisible,
	user,
	interactives,
	chatMessage,
	chatMessageUser,
	chatMessageError,
	markdownContent,
	typingIndicator,
	shimmer: shimmer$13,
	spin: spin$13,
	"skeleton-pulse": "_skeleton-pulse_1qk2j_1",
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
var AgentChatMessageList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMessageList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMessageList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentChatPanel.vue?vue&type=script&setup=true&lang.ts
var AgentChatPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatPanel",
	props: {
		visible: {
			type: Boolean,
			default: true
		},
		projectId: {},
		agentId: {},
		mode: { default: "panel" },
		continueSessionId: { default: void 0 },
		agentConfig: {},
		agentStatus: {},
		connectedTriggers: {},
		canEditAgent: {
			type: Boolean,
			default: true
		},
		canSendToAssistant: {
			type: Boolean,
			default: false
		},
		beforeSend: {
			type: Function,
			default: void 0
		},
		inputDraft: { default: void 0 }
	},
	emits: [
		"update:streaming",
		"update:inputDraft",
		"continue-loaded",
		"initial-consumed",
		"back",
		"open-build",
		"send-to-assistant"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const agentTelemetry = useAgentTelemetry();
		const toast = useToast();
		const attachedFiles = ref([]);
		const chatInput = useTemplateRef("chatInput");
		function focusInput(options) {
			chatInput.value?.focus(options);
		}
		const attachmentCapabilities = computed(() => {
			const provider = props.agentConfig?.model?.split("/")[0];
			return provider ? PROVIDER_CAPABILITIES[provider]?.attachments : void 0;
		});
		const showAttach = computed(() => {
			const capabilities = attachmentCapabilities.value;
			return !!capabilities && (capabilities.image || capabilities.pdf || capabilities.audio);
		});
		const acceptedMimeTypes = computed(() => {
			const capabilities = attachmentCapabilities.value;
			if (!capabilities) return void 0;
			return [
				capabilities.image ? "image/*" : null,
				capabilities.pdf ? "application/pdf" : null,
				capabilities.audio ? "audio/*" : null
			].filter((entry) => entry !== null).join(",");
		});
		function handleFilesSelected(files) {
			for (const file of files) {
				if (attachedFiles.value.length >= 10) {
					toast.showMessage({
						type: "error",
						title: locale.baseText("agents.chat.attachments.tooMany", { interpolate: { limit: String(10) } })
					});
					break;
				}
				if (file.size > 10485760) {
					toast.showMessage({
						type: "error",
						title: locale.baseText("agents.chat.attachments.tooLarge", { interpolate: {
							fileName: file.name,
							limit: String(10)
						} })
					});
					continue;
				}
				attachedFiles.value.push(file);
			}
		}
		function handleFileRemove(file) {
			attachedFiles.value = attachedFiles.value.filter((f) => f !== file);
		}
		const internalInputText = ref(props.inputDraft ?? "");
		const inputText = computed({
			get: () => props.inputDraft !== void 0 ? props.inputDraft : internalInputText.value,
			set: (value) => {
				if (props.inputDraft !== void 0) emit("update:inputDraft", value);
				else internalInputText.value = value;
			}
		});
		const isPreparingToSend = ref(false);
		let disposed = false;
		const { messages, isStreaming, isCancelling, messagingState, fatalError, warnings, loadHistory, sendMessage, stopGenerating, resume, cancelAndSteer, dismissFatalError, dismissWarning } = useAgentChatStream({
			projectId: toRef(props, "projectId"),
			agentId: toRef(props, "agentId"),
			continueSessionId: toRef(props, "continueSessionId"),
			onHistoryLoaded: (count) => {
				if (props.continueSessionId) emit("continue-loaded", {
					sessionId: props.continueSessionId,
					count
				});
			}
		});
		const RUNTIME_ISSUE_PATH_PREFIXES = [
			{
				prefix: "tools.",
				key: "agents.chat.misconfigured.missing.tools"
			},
			{
				prefix: "mcpServers.",
				key: "agents.chat.misconfigured.missing.mcpServers"
			},
			{
				prefix: "subAgents.agents.",
				key: "agents.chat.misconfigured.missing.subAgents.agents"
			}
		];
		function humaniseMissingField(field) {
			if (field.startsWith("skill:")) return locale.baseText("agents.chat.misconfigured.missing.skill", { interpolate: { id: field.slice(6) } });
			const exactKey = `agents.chat.misconfigured.missing.${field}`;
			const exactTranslation = locale.baseText(exactKey);
			if (exactTranslation !== exactKey) return exactTranslation;
			for (const { prefix, key } of RUNTIME_ISSUE_PATH_PREFIXES) if (field.startsWith(prefix)) return locale.baseText(key);
			return field;
		}
		const missingFields = computed(() => {
			if (!fatalError.value) return "";
			return fatalError.value.missing.map(humaniseMissingField).join(", ");
		});
		/**
		* Only the last turn can hold the input. A parked run is always the tail of the
		* transcript, so anything after it — a resumed answer, a later turn — means that
		* suspension is history. Reading the tail rather than the first open card
		* anywhere keeps one abandoned card from wedging the chat for good, and keeps it
		* from hiding a real question on the current turn.
		*/
		const openInteractive = computed(() => findTailOpenInteractive(messages.value));
		const hasOpenInteraction = computed(() => openInteractive.value !== void 0);
		const hasOpenApproval = computed(() => openInteractive.value?.toolName === APPROVAL_TOOL_NAME);
		const hasOpenWaitCard = computed(() => openInteractive.value?.toolName === WAIT_TOOL_NAME);
		const hasOpenInteractiveQuestion = computed(() => hasOpenInteraction.value && !hasOpenApproval.value && !hasOpenWaitCard.value);
		const hasOpenSuspension = computed(() => messages.value[messages.value.length - 1]?.toolCalls?.some((toolCall) => toolCall.state === TOOL_CALL_STATE.SUSPENDED && toolCall.runId) ?? false);
		/**
		* A parked run owns the conversation: sending now would start a second run
		* whose context has the pending tool call stripped out, so the model would
		* re-invoke the same tool. Only an open question is exempt — answering or
		* steering it resumes the same run. Stop stays available either way.
		*/
		const inputBlockedBySuspension = computed(() => hasOpenApproval.value || hasOpenWaitCard.value || hasOpenSuspension.value && !hasOpenInteractiveQuestion.value);
		const hasInFlightToolCalls = computed(() => messages.value.some((message) => message.toolCalls?.some((toolCall) => toolCall.state === TOOL_CALL_STATE.PENDING || toolCall.state === TOOL_CALL_STATE.RUNNING)));
		const showSuspensionStopAlongsideSend = computed(() => hasOpenInteractiveQuestion.value && !isStreaming.value && !isCancelling.value);
		const showStopAsPrimaryAction = computed(() => isStreaming.value || isCancelling.value || inputBlockedBySuspension.value || !isStreaming.value && hasInFlightToolCalls.value);
		const chatPlaceholder = computed(() => {
			if (hasOpenApproval.value) return locale.baseText("agents.chat.approval.inputPlaceholder");
			if (inputBlockedBySuspension.value) return locale.baseText("agents.chat.waiting.inputPlaceholder");
			if (hasOpenInteractiveQuestion.value) return locale.baseText("agents.chat.answerQuestionPlaceholder");
			const agentName = props.agentConfig?.name?.trim();
			return agentName ? locale.baseText("agents.chat.input.placeholder.withAgent", { interpolate: { agentName } }) : locale.baseText("agents.chat.input.placeholder");
		});
		watch(isStreaming, (v) => emit("update:streaming", v));
		async function onSubmit() {
			const text = inputText.value.trim();
			const files = attachedFiles.value;
			if (!text && files.length === 0 || isStreaming.value || isCancelling.value || isPreparingToSend.value || inputBlockedBySuspension.value) return;
			if (hasOpenInteractiveQuestion.value) {
				if (!text) return;
				inputText.value = "";
				await cancelAndSteer(text);
				return;
			}
			isPreparingToSend.value = true;
			try {
				const target = {
					projectId: props.projectId,
					agentId: props.agentId,
					continueSessionId: props.continueSessionId
				};
				const isCurrentTarget = () => !disposed && props.projectId === target.projectId && props.agentId === target.agentId && props.continueSessionId === target.continueSessionId;
				try {
					await props.beforeSend?.();
				} catch {
					return;
				}
				if (!isCurrentTarget()) return;
				const fingerprint = await buildAgentConfigFingerprint(props.agentConfig, props.connectedTriggers);
				if (!isCurrentTarget()) return;
				inputText.value = "";
				attachedFiles.value = [];
				agentTelemetry.trackSubmittedMessage({
					agentId: props.agentId,
					status: props.agentStatus,
					agentConfig: fingerprint
				});
				if (files.length > 0) await sendMessage(text, files);
				else await sendMessage(text);
			} finally {
				isPreparingToSend.value = false;
			}
		}
		function sendMessageFromOutside(message) {
			if (inputBlockedBySuspension.value) return;
			inputText.value = message;
			onSubmit();
		}
		__expose({
			focusInput,
			sendMessageFromOutside
		});
		onMounted(() => {
			loadHistory();
		});
		onBeforeUnmount(() => {
			disposed = true;
			if (isStreaming.value) stopGenerating();
		});
		return (_ctx, _cache) => {
			return __props.visible ? (openBlock(), createElementBlock("aside", {
				key: 0,
				class: normalizeClass([__props.mode === "inline" ? _ctx.$style.inlinePanel : _ctx.$style.panel])
			}, [
				unref(fatalError) ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					theme: "danger",
					class: normalizeClass(_ctx.$style.errorBanner),
					slim: ""
				}, {
					trailingContent: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "x",
						variant: "ghost",
						size: "xsmall",
						"aria-label": unref(locale).baseText("agents.chat.misconfigured.dismiss"),
						title: unref(locale).baseText("agents.chat.misconfigured.dismiss"),
						onClick: unref(dismissFatalError)
					}, null, 8, [
						"aria-label",
						"title",
						"onClick"
					])]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorBannerBody) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.errorBannerTitle) }, toDisplayString(unref(locale).baseText("agents.chat.misconfigured.title")), 3), missingFields.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.errorBannerDetail)
					}, toDisplayString(unref(locale).baseText("agents.chat.misconfigured.issuesPrefix")) + " " + toDisplayString(missingFields.value), 3)) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(unref(warnings), (warning, index) => {
					return openBlock(), createElementBlock("div", {
						key: `${warning.code ?? "mcp"}-${index}`,
						class: normalizeClass(_ctx.$style.warningBanner)
					}, [createVNode(unref(N8nCallout_default), {
						theme: "warning",
						slim: "",
						"data-test-id": `agent-chat-warning-${index}`
					}, {
						trailingContent: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "x",
							variant: "ghost",
							size: "xsmall",
							"aria-label": unref(locale).baseText("agents.chat.warning.dismiss"),
							title: unref(locale).baseText("agents.chat.warning.dismiss"),
							onClick: ($event) => unref(dismissWarning)(index)
						}, null, 8, [
							"aria-label",
							"title",
							"onClick"
						])]),
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.warningBannerBody) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.warningBannerTitle) }, toDisplayString(unref(locale).baseText("agents.chat.warning.mcp.title")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.warningBannerDetail) }, toDisplayString(warning.server ? unref(locale).baseText("agents.chat.warning.mcp.detail", { interpolate: {
							server: warning.server,
							error: warning.message
						} }) : warning.message), 3)], 2)]),
						_: 2
					}, 1032, ["data-test-id"])], 2);
				}), 128)),
				unref(messages).length === 0 && !unref(isStreaming) ? (openBlock(), createBlock(AgentChatEmptyState_default, {
					key: 1,
					"agent-config": __props.agentConfig
				}, null, 8, ["agent-config"])) : (openBlock(), createBlock(AgentChatMessageList_default, {
					key: 2,
					messages: unref(messages),
					"messaging-state": unref(messagingState),
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					"session-id": __props.continueSessionId,
					"can-send-to-assistant": __props.canSendToAssistant,
					onResume: unref(resume),
					onSendToAssistant: _cache[0] || (_cache[0] = ($event) => emit("send-to-assistant", $event))
				}, null, 8, [
					"messages",
					"messaging-state",
					"project-id",
					"agent-id",
					"session-id",
					"can-send-to-assistant",
					"onResume"
				])),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputArea) }, [createVNode(ChatInputBase_default, {
					ref_key: "chatInput",
					ref: chatInput,
					modelValue: inputText.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => inputText.value = $event),
					placeholder: chatPlaceholder.value,
					"is-streaming": showStopAsPrimaryAction.value,
					"show-voice": "",
					"show-attach": showAttach.value,
					"accepted-mime-types": acceptedMimeTypes.value,
					"can-submit": !inputBlockedBySuspension.value && !unref(isStreaming) && !unref(isCancelling) && !isPreparingToSend.value && (inputText.value.trim().length > 0 || attachedFiles.value.length > 0),
					disabled: inputBlockedBySuspension.value || unref(isCancelling) || isPreparingToSend.value || unref(isStreaming) && unref(messagingState) !== "receiving",
					"data-testid": "chat-input",
					onSubmit,
					onStop: unref(stopGenerating),
					onFilesSelected: handleFilesSelected
				}, createSlots({
					"footer-start": withCtx(() => [renderSlot(_ctx.$slots, "footer-start"), showSuspensionStopAlongsideSend.value ? (openBlock(), createBlock(unref(N8nSendStopButton_default), {
						key: 0,
						streaming: "",
						"stop-button-test-id": "agent-chat-suspended-stop-button",
						onStop: unref(stopGenerating)
					}, null, 8, ["onStop"])) : createCommentVNode("", true)]),
					_: 2
				}, [attachedFiles.value.length > 0 ? {
					name: "attachments",
					fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.attachmentsStrip) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachedFiles.value, (file, index) => {
						return openBlock(), createBlock(AttachmentPreview_default, {
							key: `${file.name}-${index}`,
							file,
							"is-removable": "",
							onRemove: handleFileRemove
						}, null, 8, ["file"]);
					}), 128))], 2)]),
					key: "0"
				} : void 0]), 1032, [
					"modelValue",
					"placeholder",
					"is-streaming",
					"show-attach",
					"accepted-mime-types",
					"can-submit",
					"disabled",
					"onStop"
				])], 2)
			], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatPanel.vue?vue&type=style&index=0&lang.module.scss
var panel$2 = "_panel_1cwt3_388";
var inlinePanel = "_inlinePanel_1cwt3_397";
var inputArea = "_inputArea_1cwt3_406";
var attachmentsStrip = "_attachmentsStrip_1cwt3_416";
var errorBanner$2 = "_errorBanner_1cwt3_423";
var errorBannerBody = "_errorBannerBody_1cwt3_428";
var errorBannerTitle = "_errorBannerTitle_1cwt3_436";
var errorBannerDetail = "_errorBannerDetail_1cwt3_440";
var warningBanner = "_warningBanner_1cwt3_445";
var warningBannerBody = "_warningBannerBody_1cwt3_450";
var warningBannerTitle = "_warningBannerTitle_1cwt3_458";
var warningBannerDetail = "_warningBannerDetail_1cwt3_462";
var shimmer$12 = "_shimmer_1cwt3_1";
var spin$12 = "_spin_1cwt3_1";
var opacityPulse$12 = "_opacityPulse_1cwt3_1";
var popoverIn$12 = "_popoverIn_1cwt3_1";
var fadeIn$12 = "_fadeIn_1cwt3_1";
var collapsibleSlideDown$12 = "_collapsibleSlideDown_1cwt3_1";
var collapsibleSlideUp$12 = "_collapsibleSlideUp_1cwt3_1";
var collapsibleSlideDownBlurred$12 = "_collapsibleSlideDownBlurred_1cwt3_1";
var collapsibleSlideUpBlurred$12 = "_collapsibleSlideUpBlurred_1cwt3_1";
var blurSwapIn$12 = "_blurSwapIn_1cwt3_1";
var blurSwapOut$12 = "_blurSwapOut_1cwt3_1";
var pulseGlow$12 = "_pulseGlow_1cwt3_1";
var pulseGlowDelayed$12 = "_pulseGlowDelayed_1cwt3_1";
var fade$12 = "_fade_1cwt3_1";
var fadeInUp$12 = "_fadeInUp_1cwt3_1";
var fadeInDown$12 = "_fadeInDown_1cwt3_1";
var fadeInLeft$12 = "_fadeInLeft_1cwt3_1";
var fadeInRight$12 = "_fadeInRight_1cwt3_1";
var fadeOut$12 = "_fadeOut_1cwt3_1";
var fadeOutDown$12 = "_fadeOutDown_1cwt3_1";
var fadeOutUp$12 = "_fadeOutUp_1cwt3_1";
var fadeOutLeft$12 = "_fadeOutLeft_1cwt3_1";
var fadeOutRight$12 = "_fadeOutRight_1cwt3_1";
var ping$12 = "_ping_1cwt3_1";
var blinkBackground$12 = "_blinkBackground_1cwt3_1";
var typingBlink$12 = "_typingBlink_1cwt3_1";
var AgentChatPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: panel$2,
	inlinePanel,
	inputArea,
	attachmentsStrip,
	errorBanner: errorBanner$2,
	errorBannerBody,
	errorBannerTitle,
	errorBannerDetail,
	warningBanner,
	warningBannerBody,
	warningBannerTitle,
	warningBannerDetail,
	shimmer: shimmer$12,
	spin: spin$12,
	"skeleton-pulse": "_skeleton-pulse_1cwt3_1",
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
var AgentChatPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentPreviewChatPage.vue?vue&type=script&setup=true&lang.ts
var AgentPreviewChatPage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPreviewChatPage",
	props: {
		initialized: { type: Boolean },
		projectId: {},
		agentId: {},
		agent: {},
		localConfig: {},
		connectedTriggers: {},
		effectiveSessionId: {},
		initialPrompt: {},
		canSendToAssistant: { type: Boolean },
		beforeSend: {},
		layout: { default: "page" }
	},
	emits: [
		"continue-loaded",
		"open-build",
		"send-to-assistant"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const inputDraft = ref("");
		const chatPanel = useTemplateRef("chatPanel");
		function focusInput(options) {
			chatPanel.value?.focusInput(options);
		}
		__expose({ focusInput });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.layout === "dock" ? "div" : "main"), {
				class: normalizeClass([_ctx.$style.previewPage, { [_ctx.$style.dockLayout]: __props.layout === "dock" }]),
				"data-testid": "agent-preview-chat-page"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatFrame) }, [__props.initialized && __props.effectiveSessionId ? (openBlock(), createBlock(AgentChatPanel_default, {
					key: `preview-${__props.effectiveSessionId}`,
					ref_key: "chatPanel",
					ref: chatPanel,
					"input-draft": inputDraft.value,
					"onUpdate:inputDraft": _cache[0] || (_cache[0] = ($event) => inputDraft.value = $event),
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					mode: "inline",
					"continue-session-id": __props.effectiveSessionId,
					"agent-config": __props.localConfig,
					"agent-status": unref(deriveAgentStatus)(__props.agent),
					"connected-triggers": __props.connectedTriggers,
					"can-send-to-assistant": __props.canSendToAssistant,
					"before-send": __props.beforeSend,
					onContinueLoaded: _cache[1] || (_cache[1] = ($event) => emit("continue-loaded", $event)),
					onOpenBuild: _cache[2] || (_cache[2] = ($event) => emit("open-build")),
					onSendToAssistant: _cache[3] || (_cache[3] = ($event) => emit("send-to-assistant", $event))
				}, null, 8, [
					"input-draft",
					"project-id",
					"agent-id",
					"continue-session-id",
					"agent-config",
					"agent-status",
					"connected-triggers",
					"can-send-to-assistant",
					"before-send"
				])) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentPreviewChatPage.vue?vue&type=style&index=0&lang.module.scss
var previewPage = "_previewPage_50n3o_388";
var chatFrame = "_chatFrame_50n3o_397";
var dockLayout = "_dockLayout_50n3o_403";
var shimmer$11 = "_shimmer_50n3o_1";
var spin$11 = "_spin_50n3o_1";
var opacityPulse$11 = "_opacityPulse_50n3o_1";
var popoverIn$11 = "_popoverIn_50n3o_1";
var fadeIn$11 = "_fadeIn_50n3o_1";
var collapsibleSlideDown$11 = "_collapsibleSlideDown_50n3o_1";
var collapsibleSlideUp$11 = "_collapsibleSlideUp_50n3o_1";
var collapsibleSlideDownBlurred$11 = "_collapsibleSlideDownBlurred_50n3o_1";
var collapsibleSlideUpBlurred$11 = "_collapsibleSlideUpBlurred_50n3o_1";
var blurSwapIn$11 = "_blurSwapIn_50n3o_1";
var blurSwapOut$11 = "_blurSwapOut_50n3o_1";
var pulseGlow$11 = "_pulseGlow_50n3o_1";
var pulseGlowDelayed$11 = "_pulseGlowDelayed_50n3o_1";
var fade$11 = "_fade_50n3o_1";
var fadeInUp$11 = "_fadeInUp_50n3o_1";
var fadeInDown$11 = "_fadeInDown_50n3o_1";
var fadeInLeft$11 = "_fadeInLeft_50n3o_1";
var fadeInRight$11 = "_fadeInRight_50n3o_1";
var fadeOut$11 = "_fadeOut_50n3o_1";
var fadeOutDown$11 = "_fadeOutDown_50n3o_1";
var fadeOutUp$11 = "_fadeOutUp_50n3o_1";
var fadeOutLeft$11 = "_fadeOutLeft_50n3o_1";
var fadeOutRight$11 = "_fadeOutRight_50n3o_1";
var ping$11 = "_ping_50n3o_1";
var blinkBackground$11 = "_blinkBackground_50n3o_1";
var typingBlink$11 = "_typingBlink_50n3o_1";
var AgentPreviewChatPage_vue_vue_type_style_index_0_lang_module_default = {
	previewPage,
	chatFrame,
	dockLayout,
	shimmer: shimmer$11,
	spin: spin$11,
	"skeleton-pulse": "_skeleton-pulse_50n3o_1",
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
var AgentPreviewChatPage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPreviewChatPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPreviewChatPage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useAgentSessionLangSmithExport.ts
function useAgentSessionLangSmithExport() {
	const i18n = useI18n();
	const settingsStore = useSettingsStore();
	const sessionsStore = useAgentSessionsStore();
	const clipboard = useClipboard();
	const { showError, showMessage } = useToast();
	const { openAgentConfirmationModal } = useAgentConfirmationModal();
	const isExporting = ref(false);
	const isEnabled = computed(() => localStorage.getItem("instanceAi.debugMode") === "true" && settingsStore.moduleSettings.agents?.proxyEnabled === true);
	async function sendSession({ projectId, agentId, threadId }) {
		if (!isEnabled.value || isExporting.value) return;
		isExporting.value = true;
		try {
			if (await openAgentConfirmationModal({
				title: i18n.baseText("agentSessions.langsmithExport.confirm.title"),
				description: i18n.baseText("agentSessions.langsmithExport.confirm.body"),
				confirmButtonText: i18n.baseText("agentSessions.langsmithExport.confirm.button"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm") return;
			const { traceId } = await sessionsStore.exportThreadToLangSmith(projectId, agentId, threadId);
			await clipboard.copy(traceId).catch(() => {});
			showMessage({
				title: i18n.baseText("agentSessions.langsmithExport.success"),
				message: i18n.baseText("agentSessions.langsmithExport.successMessage", { interpolate: { traceId } }),
				type: "success"
			});
		} catch (error) {
			showError(error, i18n.baseText("agentSessions.langsmithExport.error"));
		} finally {
			isExporting.value = false;
		}
	}
	return {
		isEnabled,
		isExporting,
		sendSession
	};
}
function endTimestampOf(item) {
	return item.endTimestamp ?? item.timestamp;
}
/** A `delegate_subagent` tool call — rendered as a sub-agent (bot icon) rather than a plain tool. */
function isSubAgentTimelineItem(item) {
	return item.kind === "tool" && isDelegateSubAgentTool(item.toolName);
}
function errorTextFromValue(value) {
	if (typeof value === "string" && value.length > 0) return value;
	if (isRecord(value) && typeof value.message === "string" && value.message.length > 0) return value.message;
	return "";
}
/** MCP CallToolResult stores the message in structuredContent.error or text content. */
function mcpErrorMessage(output) {
	if (isRecord(output.structuredContent)) {
		const fromStructured = errorTextFromValue(output.structuredContent.error);
		if (fromStructured) return fromStructured;
	}
	if (!Array.isArray(output.content)) return "";
	for (const block of output.content) {
		if (!isRecord(block) || block.type !== "text" || typeof block.text !== "string") continue;
		const text = block.text.trim();
		if (!text) continue;
		try {
			const parsed = JSON.parse(text);
			if (typeof parsed === "string" && parsed.length > 0) return parsed;
			if (isRecord(parsed)) {
				const fromJson = errorTextFromValue(parsed.error);
				if (fromJson) return fromJson;
			}
		} catch {
			return text;
		}
	}
	return "";
}
/**
* A tool/workflow/node call is failed when the runtime recorded an error
* outcome, or when a built-in tool returned a soft-failure payload instead
* of throwing. In-flight calls without output are not failed.
*/
function isErroredToolCallTimelineItem(item) {
	if (item.kind !== "tool" && item.kind !== "workflow" && item.kind !== "node") return false;
	if (item.toolOutcome === "error") return true;
	if (item.toolOutcome === void 0 && item.toolSuccess === false) return true;
	if (!isRecord(item.toolOutput)) return false;
	const { error, status, success, ok, isError } = item.toolOutput;
	return typeof error === "string" && error.length > 0 || isRecord(error) && typeof error.message === "string" && error.message.length > 0 || status === "error" || status === "failed" || success === false || ok === false || isError === true;
}
function isErroredTimelineItem(item) {
	return item.kind === "execution-error" || isErroredToolCallTimelineItem(item);
}
/** Extracts a human-readable error message from a failed item's tool output. */
function timelineItemErrorMessage(item) {
	if (!isErroredToolCallTimelineItem(item)) return "";
	const output = item.toolOutput;
	if (!isRecord(output)) return "";
	return errorTextFromValue(output.error) || mcpErrorMessage(output);
}
var HITL_REQUEST_LABEL_KEYS = {
	approval: "agentSessions.timeline.approvalRequested",
	interaction: "agentSessions.timeline.hitlRequested",
	wait: "agentSessions.timeline.waitRequested"
};
/** Search/filter keys resolved by the label maps in the timeline panel and table. */
var HITL_REQUEST_FILTER_KEYS = {
	approval: "approval-requested",
	interaction: "hitl-requested",
	wait: "wait-requested"
};
/** Label for a suspension row. Legacy items with no request type read as an interaction. */
function hitlRequestLabelKey(requestType) {
	return HITL_REQUEST_LABEL_KEYS[requestType ?? "interaction"];
}
function hitlTimelineNameKey(item) {
	if (item.hitlRequestType !== "approval") return void 0;
	if (item.kind === "suspension") return "agentSessions.timeline.approvalRequestForTool";
	if (item.kind === "hitl-response") return "agentSessions.timeline.approvalResponseForTool";
}
function executionErrorLabel(item, i18n) {
	return i18n.baseText(item.executionStatus === "interrupted" ? "agentSessions.timeline.executionInterrupted" : "agentSessions.timeline.executionFailed");
}
function executionErrorMessage(item, i18n) {
	if (item.content) return item.content;
	return i18n.baseText(item.executionStatus === "interrupted" ? "agentSessions.timeline.executionInterruptedFallback" : "agentSessions.timeline.executionFailedFallback");
}
function linkedToolDisplayName(item, i18n) {
	return item.hitlToolDisplayName ?? item.workflowName ?? item.nodeDisplayName ?? resolveToolNameForDisplay(item.toolName, i18n);
}
function hitlTimelineName(item, i18n) {
	const toolName = linkedToolDisplayName(item, i18n);
	const nameKey = hitlTimelineNameKey(item);
	return nameKey ? i18n.baseText(nameKey, { interpolate: { toolName } }) : toolName;
}
function timelineItemStatus(item) {
	if (item.kind === "hitl-response") {
		if (item.hitlResponseStatus === "approved") return {
			kind: "hitl-response",
			labelKey: "agentSessions.timeline.approved",
			theme: "success"
		};
		return {
			kind: "hitl-response",
			labelKey: item.hitlResponseStatus === "declined" ? "agentSessions.timeline.declined" : "agentSessions.timeline.responseReceived",
			theme: "default"
		};
	}
	if (isErroredTimelineItem(item)) return {
		kind: "tool-error",
		labelKey: "agentSessions.timeline.error",
		theme: "danger"
	};
}
function computeIdleRanges(items) {
	const ranges = [];
	for (let i = 0; i < items.length - 1; i++) {
		const a = items[i];
		const b = items[i + 1];
		if (a.kind === "suspension" || b.kind === "suspension") continue;
		const aEnd = endTimestampOf(a);
		if (b.timestamp - aEnd > 6e5) ranges.push({
			start: aEnd,
			end: b.timestamp
		});
	}
	return ranges;
}
function itemFilterKey(item) {
	return item.kind;
}
function itemStatusFilterKey(item) {
	if (isErroredTimelineItem(item)) return "error";
	if (item.kind === "hitl-response" && (item.hitlResponseStatus === "approved" || item.hitlResponseStatus === "declined")) return item.hitlResponseStatus;
}
function matchesTimelineFilters(item, selectedFilters) {
	if (selectedFilters.size === 0 || selectedFilters.has(itemFilterKey(item))) return true;
	const statusKey = itemStatusFilterKey(item);
	return statusKey !== void 0 && selectedFilters.has(statusKey);
}
function searchableValueText(value) {
	if (value === void 0) return void 0;
	if (value === null) return "null";
	if (typeof value === "string") return value;
	if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") return String(value);
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function timelineItemSearchText(item, labelForKey) {
	const parts = [];
	parts.push(labelForKey(itemFilterKey(item)));
	if (item.kind === "execution-error" && item.executionStatus === "interrupted") parts.push(labelForKey("execution-interrupted"));
	if (item.kind === "suspension") parts.push(labelForKey(HITL_REQUEST_FILTER_KEYS[item.hitlRequestType ?? "interaction"]));
	if (item.kind === "hitl-response") parts.push(labelForKey("hitl-response"));
	if (item.hitlResponseStatus) parts.push(labelForKey(item.hitlResponseStatus));
	if (isErroredTimelineItem(item)) parts.push(labelForKey("error"));
	parts.push(item.content, item.toolName, item.workflowName, item.nodeDisplayName, item.subAgentName, searchableValueText(item.toolInput), searchableValueText(item.toolOutput), searchableValueText(item.hitlRequest), searchableValueText(item.hitlResponse));
	if (item.toolName) parts.push(formatToolNameForDisplay(item.toolName));
	const toolKey = builtinToolLabelKey(item.toolName, item.toolOutput);
	if (toolKey) parts.push(labelForKey(toolKey));
	return parts.filter((part) => typeof part === "string").join(" ").toLowerCase();
}
function matchesSearch(item, query, labelForKey) {
	if (!query) return true;
	return timelineItemSearchText(item, labelForKey).includes(query.toLowerCase());
}
function filteredTimelineItemIndexes(items, visibleKinds, searchQuery, labelForKey) {
	return items.map((item, index) => ({
		item,
		index
	})).filter(({ item }) => matchesTimelineFilters(item, visibleKinds) && matchesSearch(item, searchQuery.trim(), labelForKey)).map(({ index }) => index);
}
function sessionBounds(items) {
	if (items.length === 0) return {
		start: 0,
		end: 1
	};
	let start = Infinity;
	let end = -Infinity;
	for (const item of items) {
		if (item.timestamp < start) start = item.timestamp;
		const e = endTimestampOf(item);
		if (e > end) end = e;
	}
	if (end <= start) end = start + 1;
	return {
		start,
		end
	};
}
var CHART_BLOCK_COLOR_MAP = {
	user: "var(--color--blue-600)",
	agent: "var(--color--purple-600)",
	tool: "var(--color--green-600)",
	node: "var(--color--neutral-600)",
	workflow: "var(--color--pink-600)",
	"execution-error": "var(--color--red-600)",
	suspension: "var(--color--yellow-600)",
	"hitl-response": "var(--color--blue-600)"
};
function chartBlockColor(kind) {
	return CHART_BLOCK_COLOR_MAP[kind];
}
function builtinToolLabelKey(toolName, _output) {
	return getToolNameTranslationKey(toolName) ?? null;
}
function formatDuration(ms) {
	if (!ms || ms <= 0) return "";
	if (ms < 1e3) return `${ms}ms`;
	if (ms < 6e4) return `${(ms / 1e3).toFixed(1)}s`;
	const minutes = Math.floor(ms / 6e4);
	const seconds = Math.floor(ms % 6e4 / 1e3);
	if (minutes < 60) return seconds > 0 ? `${minutes}m ${seconds}s` : `${minutes}m`;
	const hours = Math.floor(minutes / 60);
	const remMinutes = minutes % 60;
	return remMinutes > 0 ? `${hours}h ${remMinutes}m` : `${hours}h`;
}
/**
* Cast the loose API timeline shape (`Record<string, unknown> & { type }`)
* into the discriminated union used by the renderer. The backend writes
* the same producer schema both layers expect; the API type is loose so
* `useAgentThreadsApi.ts` doesn't have to import the renderer's types.
*/
function timelineEvents(exec) {
	return exec.timeline ?? [];
}
function isDeclinedToolOutput(output) {
	return isRecord(output) && output.declined === true;
}
function isApprovalRequest(value) {
	return isRecord(value) && value.type === "approval";
}
function isIntegrationActionRequest(value) {
	return isRecord(value) && value.type === "integration_action";
}
function isWaitRequest(value) {
	return isRecord(value) && value.type === "workflow_wait";
}
function toolCallOutcome(event) {
	if (event.endTime === 0) return void 0;
	return event.success ? "success" : "error";
}
function inferHitlRequestType(event, toolCall, legacyApprovalToolCallIds) {
	if (isApprovalRequest(event.suspendPayload)) return "approval";
	if (legacyApprovalToolCallIds.has(event.toolCallId)) return "approval";
	if (isWaitRequest(event.suspendPayload)) return "wait";
	if (event.suspendPayload !== void 0) return "interaction";
	return toolCall?.kind === "node" || toolCall?.kind === "workflow" ? "approval" : "interaction";
}
function collectLegacyApprovalToolCallIds(executions) {
	const toolCallIds = /* @__PURE__ */ new Set();
	for (const exec of executions) for (const event of timelineEvents(exec)) if (event.type === "tool-call" && isDeclinedToolOutput(event.output)) toolCallIds.add(event.toolCallId);
	return toolCallIds;
}
function hitlRequestPayload(event, toolCall, requestType) {
	if (requestType === "approval") return event.suspendPayload ?? {
		type: "approval",
		toolName: event.toolName,
		args: event.input ?? toolCall?.input
	};
	if (event.suspendPayload !== void 0 && !isIntegrationActionRequest(event.suspendPayload)) return event.suspendPayload;
	return event.input ?? toolCall?.input ?? event.suspendPayload;
}
function approvalDisplayName(payload) {
	if (!isRecord(payload) || typeof payload.displayName !== "string") return void 0;
	return payload.displayName;
}
function hitlResponseStatus(requestType, response, isLegacyResponse = false) {
	if (requestType === "approval" && isRecord(response) && typeof response.approved === "boolean") return response.approved ? "approved" : "declined";
	if (isDeclinedToolOutput(response)) return "declined";
	if (isLegacyResponse && requestType === "approval") return "approved";
	return "responded";
}
function mergeResumedToolResult(item, event) {
	if (!item || isDeclinedToolOutput(event.output)) return;
	item.toolOutput = event.output;
	item.toolOutcome = toolCallOutcome(event);
	item.toolSuccess = event.endTime === 0 ? void 0 : event.success;
	if (item.kind === "workflow") item.workflowExecutionId = event.workflowExecutionId;
}
function hitlResponseItem(context, executionId, response, timestamp, isLegacyResponse = false) {
	return {
		kind: "hitl-response",
		executionId,
		toolName: context.toolName,
		toolCallId: context.toolCallId,
		hitlRequestType: context.requestType,
		hitlResponse: response,
		hitlResponseStatus: hitlResponseStatus(context.requestType, response, isLegacyResponse),
		hitlToolDisplayName: context.toolDisplayName,
		timestamp,
		endTimestamp: timestamp,
		workflowName: context.toolCall?.workflowName,
		nodeDisplayName: context.toolCall?.nodeDisplayName
	};
}
function flattenExecutionsToTimelineItems(executions) {
	const items = [];
	const initialToolCalls = /* @__PURE__ */ new Map();
	const initialToolItems = /* @__PURE__ */ new Map();
	const hitlContexts = /* @__PURE__ */ new Map();
	const legacyApprovalToolCallIds = collectLegacyApprovalToolCallIds(executions);
	for (const exec of executions) {
		const isResumed = exec.hitlStatus === "resumed";
		let resumedTagUsed = false;
		if (exec.userMessage || exec.attachments?.length) items.push({
			kind: "user",
			executionId: exec.id,
			content: exec.userMessage ?? "",
			timestamp: exec.startedAt ? new Date(exec.startedAt).getTime() : 0,
			...exec.attachments?.length && { attachments: exec.attachments }
		});
		for (const event of timelineEvents(exec)) if (event.type === "text") {
			const showResumed = isResumed && !resumedTagUsed;
			if (showResumed) resumedTagUsed = true;
			const startTs = event.timestamp ?? 0;
			items.push({
				kind: "agent",
				executionId: exec.id,
				content: event.content,
				timestamp: startTs,
				endTimestamp: event.endTime && event.endTime > startTs ? event.endTime : void 0,
				resumed: showResumed
			});
		} else if (event.type === "tool-call") {
			const hitlContext = hitlContexts.get(event.toolCallId);
			if (hitlContext) {
				mergeResumedToolResult(hitlContext.toolItem, event);
				if (!hitlContext.hasExplicitResponse) items.push(hitlResponseItem(hitlContext, exec.id, event.output, event.startTime, true));
				hitlContexts.delete(event.toolCallId);
				continue;
			}
			const isWorkflow = event.kind === "workflow";
			const isNode = event.kind === "node";
			if (event.toolCallId) initialToolCalls.set(event.toolCallId, event);
			const item = {
				kind: isWorkflow ? "workflow" : isNode ? "node" : "tool",
				executionId: exec.id,
				toolName: event.name,
				toolCallId: event.toolCallId,
				toolInput: event.input,
				toolOutput: event.output,
				toolOutcome: toolCallOutcome(event),
				toolSuccess: event.endTime === 0 ? void 0 : event.success,
				timestamp: event.startTime,
				endTimestamp: event.endTime || event.startTime,
				workflowId: isWorkflow ? event.workflowId : void 0,
				workflowName: isWorkflow ? event.workflowName : void 0,
				workflowExecutionId: isWorkflow ? event.workflowExecutionId : void 0,
				workflowTriggerType: isWorkflow ? event.triggerType : void 0,
				nodeType: isNode ? event.nodeType : void 0,
				nodeTypeVersion: isNode ? event.nodeTypeVersion : void 0,
				nodeDisplayName: isNode ? event.nodeDisplayName : void 0,
				nodeParameters: isNode ? event.nodeParameters : void 0
			};
			items.push(item);
			if (event.toolCallId) initialToolItems.set(event.toolCallId, item);
		} else if (event.type === "suspension") {
			const toolCall = initialToolCalls.get(event.toolCallId);
			const requestType = inferHitlRequestType(event, toolCall, legacyApprovalToolCallIds);
			const request = hitlRequestPayload(event, toolCall, requestType);
			const toolDisplayName = approvalDisplayName(request);
			if (event.toolCallId) hitlContexts.set(event.toolCallId, {
				requestType,
				toolName: event.toolName || toolCall?.name || "",
				toolCallId: event.toolCallId,
				toolCall,
				toolItem: initialToolItems.get(event.toolCallId),
				toolDisplayName,
				hasExplicitResponse: false
			});
			items.push({
				kind: "suspension",
				executionId: exec.id,
				toolName: event.toolName,
				toolCallId: event.toolCallId,
				timestamp: event.timestamp ?? 0,
				hitlRequestType: requestType,
				hitlRequest: request,
				hitlToolDisplayName: toolDisplayName,
				workflowName: toolCall?.workflowName,
				nodeDisplayName: toolCall?.nodeDisplayName
			});
		} else if (event.type === "hitl-response") {
			const hitlContext = hitlContexts.get(event.toolCallId);
			if (!hitlContext) continue;
			hitlContext.hasExplicitResponse = true;
			items.push(hitlResponseItem(hitlContext, exec.id, event.response, event.timestamp ?? 0));
		}
		if (exec.status === "error" || exec.status === "interrupted") {
			const terminalTimestamp = exec.stoppedAt ?? exec.startedAt ?? exec.createdAt;
			items.push({
				kind: "execution-error",
				executionId: exec.id,
				executionStatus: exec.status,
				content: exec.error ?? void 0,
				timestamp: terminalTimestamp ? new Date(terminalTimestamp).getTime() : 0
			});
		}
	}
	return items;
}
//#endregion
//#region src/features/agents/session-timeline.styles.ts
function pillColors(kind) {
	switch (kind) {
		case "user": return {
			backgroundColor: "var(--color--blue-200)",
			color: "var(--color--blue-950)"
		};
		case "agent": return {
			backgroundColor: "var(--color--purple-200)",
			color: "var(--color--purple-950)"
		};
		case "subagent": return {
			backgroundColor: "var(--color--mint-200)",
			color: "var(--color--mint-950)"
		};
		case "tool": return {
			backgroundColor: "var(--color--green-200)",
			color: "var(--color--green-950)"
		};
		case "workflow": return {
			backgroundColor: "var(--color--pink-200)",
			color: "var(--color--pink-950)"
		};
		case "node": return {
			backgroundColor: "var(--color--neutral-200)",
			color: "var(--color--neutral-950)"
		};
		case "execution-error": return {
			backgroundColor: "var(--color--red-150)",
			color: "var(--text-color--danger)"
		};
		case "suspension":
		case "idle": return {
			backgroundColor: "var(--color--yellow-200)",
			color: "var(--color--yellow-950)"
		};
		case "hitl-response": return {
			backgroundColor: "var(--color--blue-200)",
			color: "var(--color--blue-950)"
		};
		default: return {
			backgroundColor: "var(--color--neutral-200)",
			color: "var(--color--neutral-950)"
		};
	}
}
/** Chart block colour for a timeline item — sub-agent delegations get a distinct hue. */
function chartBlockStyleForItem(item) {
	return { "--session-timeline-chart-block-color": isSubAgentTimelineItem(item) ? "var(--color--mint-600)" : chartBlockColor(item.kind) };
}
/**
* Background colour for the small filter-dropdown swatch (uses the chart-block
* alpha so the swatch matches the chart's bar treatment).
*/
function swatchBackground(color) {
	return `color-mix(in srgb, ${color} var(--color--session-timeline-block-bg-alpha), transparent)`;
}
//#endregion
//#region src/features/agents/components/SessionTimelinePill.vue?vue&type=script&setup=true&lang.ts
var SessionTimelinePill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionTimelinePill",
	props: {
		kind: {},
		label: { default: "" },
		showLabel: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const icon = computed(() => {
			switch (props.kind) {
				case "user": return "user";
				case "agent":
				case "subagent": return "bot";
				case "tool": return "wrench";
				case "workflow": return "workflow";
				case "node": return "box";
				case "execution-error": return "circle-x";
				case "suspension":
				case "idle": return "clock";
				case "hitl-response": return "message-square";
				default: return "info";
			}
		});
		const iconStyle = computed(() => pillColors(props.kind));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass([_ctx.$style.pill, __props.showLabel && _ctx.$style.withLabel]),
				style: normalizeStyle(iconStyle.value)
			}, [createVNode(unref(N8nIcon_default), {
				icon: icon.value,
				size: "small"
			}, null, 8, ["icon"]), __props.showLabel && __props.label ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.label)
			}, toDisplayString(__props.label), 3)) : createCommentVNode("", true)], 6);
		};
	}
});
//#endregion
//#region src/features/agents/components/SessionTimelinePill.vue?vue&type=style&index=0&lang.module.scss
var pill = "_pill_1qi0v_388";
var withLabel = "_withLabel_1qi0v_398";
var label$1 = "_label_1qi0v_404";
var shimmer$10 = "_shimmer_1qi0v_1";
var spin$10 = "_spin_1qi0v_1";
var opacityPulse$10 = "_opacityPulse_1qi0v_1";
var popoverIn$10 = "_popoverIn_1qi0v_1";
var fadeIn$10 = "_fadeIn_1qi0v_1";
var collapsibleSlideDown$10 = "_collapsibleSlideDown_1qi0v_1";
var collapsibleSlideUp$10 = "_collapsibleSlideUp_1qi0v_1";
var collapsibleSlideDownBlurred$10 = "_collapsibleSlideDownBlurred_1qi0v_1";
var collapsibleSlideUpBlurred$10 = "_collapsibleSlideUpBlurred_1qi0v_1";
var blurSwapIn$10 = "_blurSwapIn_1qi0v_1";
var blurSwapOut$10 = "_blurSwapOut_1qi0v_1";
var pulseGlow$10 = "_pulseGlow_1qi0v_1";
var pulseGlowDelayed$10 = "_pulseGlowDelayed_1qi0v_1";
var fade$10 = "_fade_1qi0v_1";
var fadeInUp$10 = "_fadeInUp_1qi0v_1";
var fadeInDown$10 = "_fadeInDown_1qi0v_1";
var fadeInLeft$10 = "_fadeInLeft_1qi0v_1";
var fadeInRight$10 = "_fadeInRight_1qi0v_1";
var fadeOut$10 = "_fadeOut_1qi0v_1";
var fadeOutDown$10 = "_fadeOutDown_1qi0v_1";
var fadeOutUp$10 = "_fadeOutUp_1qi0v_1";
var fadeOutLeft$10 = "_fadeOutLeft_1qi0v_1";
var fadeOutRight$10 = "_fadeOutRight_1qi0v_1";
var ping$10 = "_ping_1qi0v_1";
var blinkBackground$10 = "_blinkBackground_1qi0v_1";
var typingBlink$10 = "_typingBlink_1qi0v_1";
var SessionTimelinePill_vue_vue_type_style_index_0_lang_module_default = {
	pill,
	withLabel,
	label: label$1,
	shimmer: shimmer$10,
	spin: spin$10,
	"skeleton-pulse": "_skeleton-pulse_1qi0v_1",
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
var SessionTimelinePill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelinePill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelinePill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineChart.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["data-error"];
var _hoisted_2$3 = ["onMouseenter"];
var _hoisted_3$2 = [
	"data-timeline-index",
	"data-error",
	"aria-label",
	"data-selected",
	"onMouseenter",
	"onFocus",
	"onClick"
];
var SCROLL_PADDING$1 = 48;
var INSTANT_MS = 100;
var POPOVER_SHOW_DELAY_MS = 300;
var SessionTimelineChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionTimelineChart",
	props: {
		items: {},
		idleRanges: {},
		sessionStart: {},
		sessionEnd: {},
		visibleKinds: {},
		selectedIndex: {}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const carouselRef = ref(null);
		const chartRef = ref(null);
		const hasOverflow = ref(false);
		const canScrollLeft = ref(false);
		const canScrollRight = ref(false);
		const activePopover = ref(null);
		const popoverOpen = ref(false);
		const activePopoverStatus = computed(() => {
			const segment = activePopover.value?.segment;
			return segment?.kind === "event" ? timelineItemStatus(segment.item) : void 0;
		});
		let showPopoverTimer = null;
		let resizeObserver = null;
		let hoveredPopover = null;
		let focusedPopover = null;
		const segments = computed(() => {
			const out = [];
			const idles = [...props.idleRanges].sort((a, b) => a.start - b.start);
			let idleIdx = 0;
			for (let i = 0; i < props.items.length; i++) {
				const item = props.items[i];
				while (idleIdx < idles.length && idles[idleIdx].start <= item.timestamp) {
					out.push({
						kind: "idle",
						range: idles[idleIdx]
					});
					idleIdx++;
				}
				const duration = item.endTimestamp ? item.endTimestamp - item.timestamp : INSTANT_MS;
				out.push({
					kind: "event",
					item,
					index: i,
					duration
				});
			}
			while (idleIdx < idles.length) {
				out.push({
					kind: "idle",
					range: idles[idleIdx]
				});
				idleIdx++;
			}
			return out;
		});
		function isDimmed(item) {
			return !matchesTimelineFilters(item, props.visibleKinds);
		}
		function cellStyle(seg) {
			if (seg.kind === "idle") return { flex: "0 0 56px" };
			return { flex: `${Math.max(seg.duration, 1)} 1 0` };
		}
		function eventStyle(item) {
			const style = chartBlockStyleForItem(item);
			if (isDimmed(item)) {
				style.opacity = "0.15";
				style.pointerEvents = "none";
			}
			return style;
		}
		function popoverPillKind(item) {
			return isSubAgentTimelineItem(item) ? "subagent" : item.kind;
		}
		function popoverLabel(item) {
			if (isSubAgentTimelineItem(item)) return i18n.baseText("agentSessions.timeline.subAgent");
			switch (item.kind) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "execution-error": return executionErrorLabel(item, i18n);
				case "suspension": return i18n.baseText(hitlRequestLabelKey(item.hitlRequestType));
				case "hitl-response": return i18n.baseText("agentSessions.timeline.hitlResponse");
				default: return "";
			}
		}
		function popoverName(item) {
			if (isSubAgentTimelineItem(item)) return item.subAgentName ?? formatToolNameForDisplay(item.toolName);
			switch (item.kind) {
				case "user":
				case "agent": return truncate(item.content ?? "", 80);
				case "tool": return resolveToolNameForDisplay(item.toolName, i18n);
				case "workflow": return item.workflowName ?? formatToolNameForDisplay(item.toolName);
				case "node": return item.nodeDisplayName ?? formatToolNameForDisplay(item.toolName);
				case "execution-error": return executionErrorMessage(item, i18n);
				case "suspension":
				case "hitl-response": return hitlTimelineName(item, i18n);
				default: return "";
			}
		}
		function statusLabel(item) {
			const status = timelineItemStatus(item);
			return status ? i18n.baseText(status.labelKey) : void 0;
		}
		/**
		* Real-event duration for the popover. Returns empty when the item has no
		* `endTimestamp` greater than `timestamp` — point events (user/agent text,
		* memory, suspension) and incomplete tool calls. The chart's `seg.duration`
		* applies a synthetic `INSTANT_MS` floor so point events get a visible block;
		* we deliberately don't use that here, otherwise every popover would read
		* "100ms".
		*/
		function popoverDuration(item) {
			if (!item.endTimestamp || item.endTimestamp <= item.timestamp) return "";
			return formatDuration(item.endTimestamp - item.timestamp);
		}
		function idleDuration(range) {
			return formatDuration(range.end - range.start);
		}
		function popoverTime(item) {
			if (!item.timestamp) return "";
			return convertToDisplayDate(new Date(item.timestamp).toISOString()).time;
		}
		function blockAriaLabel(item) {
			return [
				popoverLabel(item),
				popoverName(item),
				statusLabel(item)
			].filter((part) => Boolean(part)).join(", ");
		}
		function onClick(index, item) {
			if (isDimmed(item)) return;
			emit("select", index);
		}
		function showPopover(segment, event) {
			if (!(event.currentTarget instanceof HTMLElement)) return;
			const target = {
				segment,
				reference: event.currentTarget
			};
			if (event.type === "focus") focusedPopover = target;
			else hoveredPopover = target;
			clearShowPopoverTimer();
			showPopoverTimer = setTimeout(() => {
				activePopover.value = target;
				popoverOpen.value = true;
			}, POPOVER_SHOW_DELAY_MS);
		}
		function clearShowPopoverTimer() {
			if (!showPopoverTimer) return;
			clearTimeout(showPopoverTimer);
			showPopoverTimer = null;
		}
		function scrollSelectedIntoView() {
			const selectedIndex = props.selectedIndex;
			const chart = chartRef.value;
			if (selectedIndex === null || !chart) return;
			const selectedBlock = chart.querySelector(`[data-timeline-index="${selectedIndex}"]`);
			if (!selectedBlock) return;
			const blockLeft = selectedBlock.offsetLeft;
			const blockRight = blockLeft + selectedBlock.offsetWidth;
			const viewportLeft = chart.scrollLeft;
			const viewportRight = viewportLeft + chart.clientWidth;
			if (blockLeft - SCROLL_PADDING$1 < viewportLeft) chart.scrollLeft = Math.max(0, blockLeft - SCROLL_PADDING$1);
			else if (blockRight + SCROLL_PADDING$1 > viewportRight) chart.scrollLeft = blockRight + SCROLL_PADDING$1 - chart.clientWidth;
		}
		function updateScrollState() {
			const chart = chartRef.value;
			if (!chart) {
				hasOverflow.value = false;
				canScrollLeft.value = false;
				canScrollRight.value = false;
				return;
			}
			const availableWidth = carouselRef.value?.clientWidth ?? chart.clientWidth;
			const maxScrollLeft = Math.max(0, chart.scrollWidth - chart.clientWidth);
			hasOverflow.value = chart.scrollWidth - availableWidth > 1;
			canScrollLeft.value = hasOverflow.value && chart.scrollLeft > 1;
			canScrollRight.value = hasOverflow.value && chart.scrollLeft < maxScrollLeft - 1;
		}
		function scrollChart(direction) {
			const chart = chartRef.value;
			if (!chart) return;
			const distance = Math.max(chart.clientWidth - SCROLL_PADDING$1, SCROLL_PADDING$1);
			const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
			chart.scrollBy({
				left: direction * distance,
				top: 0,
				behavior
			});
		}
		function hidePopover(event) {
			if (event.type === "blur") focusedPopover = null;
			else hoveredPopover = null;
			clearShowPopoverTimer();
			const remainingTarget = focusedPopover ?? hoveredPopover;
			if (remainingTarget) {
				activePopover.value = remainingTarget;
				popoverOpen.value = true;
				return;
			}
			popoverOpen.value = false;
			activePopover.value = null;
		}
		watch(() => props.selectedIndex, () => {
			nextTick(scrollSelectedIntoView);
		});
		watch(segments, () => {
			nextTick(updateScrollState);
		});
		onMounted(() => {
			const chart = chartRef.value;
			if (!chart) return;
			chart.addEventListener("scroll", updateScrollState, { passive: true });
			resizeObserver = new ResizeObserver(updateScrollState);
			resizeObserver.observe(chart);
			if (carouselRef.value) resizeObserver.observe(carouselRef.value);
			updateScrollState();
		});
		onBeforeUnmount(() => {
			clearShowPopoverTimer();
			chartRef.value?.removeEventListener("scroll", updateScrollState);
			resizeObserver?.disconnect();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "carouselRef",
				ref: carouselRef,
				class: normalizeClass(_ctx.$style.carousel)
			}, [
				hasOverflow.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					icon: "chevron-left",
					variant: "ghost",
					size: "small",
					"aria-label": unref(i18n).baseText("agentSessions.timeline.scrollBackward"),
					disabled: !canScrollLeft.value,
					onClick: _cache[0] || (_cache[0] = ($event) => scrollChart(-1))
				}, null, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
				createBaseVNode("div", {
					ref_key: "chartRef",
					ref: chartRef,
					class: normalizeClass(_ctx.$style.chart)
				}, [createVNode(unref(N8nHoverCard_default), {
					open: popoverOpen.value,
					"hide-trigger": "",
					reference: activePopover.value?.reference,
					side: "top",
					align: "center",
					"side-offset": 8,
					"close-delay": 0,
					"max-width": "none",
					"content-class": _ctx.$style.hoverCardContent
				}, {
					content: withCtx(() => [activePopover.value?.segment.kind === "idle" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.popoverInner)
					}, [createVNode(SessionTimelinePill_default, {
						kind: "idle",
						label: unref(i18n).baseText("agentSessions.timeline.idle"),
						"show-label": ""
					}, null, 8, ["label"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.popoverMeta) }, toDisplayString(idleDuration(activePopover.value.segment.range)), 3)], 2)) : activePopover.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.popoverInner)
					}, [
						createVNode(SessionTimelinePill_default, {
							kind: popoverPillKind(activePopover.value.segment.item),
							label: popoverLabel(activePopover.value.segment.item),
							"show-label": ""
						}, null, 8, ["kind", "label"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.popoverName) }, toDisplayString(popoverName(activePopover.value.segment.item)), 3),
						activePopoverStatus.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							theme: activePopoverStatus.value.theme,
							size: "xsmall",
							"data-test-id": activePopoverStatus.value.kind === "hitl-response" ? "timeline-popover-hitl-response-badge" : activePopover.value.segment.item.kind === "execution-error" ? "timeline-popover-execution-error-badge" : "timeline-popover-tool-error-badge"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(activePopoverStatus.value.labelKey)), 1)]),
							_: 1
						}, 8, ["theme", "data-test-id"])) : createCommentVNode("", true),
						popoverDuration(activePopover.value.segment.item) ? (openBlock(), createElementBlock("span", {
							key: 1,
							class: normalizeClass(_ctx.$style.popoverMeta)
						}, toDisplayString(popoverDuration(activePopover.value.segment.item)), 3)) : createCommentVNode("", true),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.popoverMeta) }, toDisplayString(popoverTime(activePopover.value.segment.item)), 3)
					], 2)) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"open",
					"reference",
					"content-class"
				]), (openBlock(true), createElementBlock(Fragment, null, renderList(segments.value, (seg, segIdx) => {
					return openBlock(), createElementBlock("div", {
						key: segIdx,
						"data-test-id": "timeline-cell",
						"data-error": seg.kind === "event" && unref(isErroredTimelineItem)(seg.item) ? "true" : void 0,
						class: normalizeClass(_ctx.$style.cell),
						style: normalizeStyle(cellStyle(seg))
					}, [seg.kind === "idle" ? (openBlock(), createElementBlock("div", {
						key: 0,
						"data-test-id": "timeline-idle",
						class: normalizeClass(_ctx.$style.idle),
						onMouseenter: ($event) => showPopover(seg, $event),
						onMouseleave: _cache[1] || (_cache[1] = ($event) => hidePopover($event))
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.idleFill) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")), 3)], 42, _hoisted_2$3)) : (openBlock(), createElementBlock("button", {
						key: 1,
						type: "button",
						"data-test-id": "timeline-block",
						"data-timeline-index": seg.index,
						"data-error": unref(isErroredTimelineItem)(seg.item) ? "true" : void 0,
						"aria-label": blockAriaLabel(seg.item),
						class: normalizeClass([_ctx.$style.block, props.selectedIndex === seg.index && _ctx.$style.selected]),
						"data-selected": props.selectedIndex === seg.index ? "true" : void 0,
						style: normalizeStyle(eventStyle(seg.item)),
						onMouseenter: ($event) => showPopover(seg, $event),
						onMouseleave: _cache[2] || (_cache[2] = ($event) => hidePopover($event)),
						onFocus: ($event) => showPopover(seg, $event),
						onBlur: _cache[3] || (_cache[3] = ($event) => hidePopover($event)),
						onClick: ($event) => onClick(seg.index, seg.item)
					}, null, 46, _hoisted_3$2))], 14, _hoisted_1$5);
				}), 128))], 2),
				hasOverflow.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 1,
					icon: "chevron-right",
					variant: "ghost",
					size: "small",
					"aria-label": unref(i18n).baseText("agentSessions.timeline.scrollForward"),
					disabled: !canScrollRight.value,
					onClick: _cache[4] || (_cache[4] = ($event) => scrollChart(1))
				}, null, 8, ["aria-label", "disabled"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/SessionTimelineChart.vue?vue&type=style&index=0&lang.module.scss
var carousel = "_carousel_1m5mp_389";
var chart = "_chart_1m5mp_397";
var cell = "_cell_1m5mp_414";
var block = "_block_1m5mp_439";
var selected$1 = "_selected_1m5mp_439";
var idle = "_idle_1m5mp_443";
var idleFill = "_idleFill_1m5mp_454";
var hoverCardContent = "_hoverCardContent_1m5mp_483";
var popoverInner = "_popoverInner_1m5mp_496";
var popoverName = "_popoverName_1m5mp_504";
var popoverMeta = "_popoverMeta_1m5mp_510";
var shimmer$9 = "_shimmer_1m5mp_1";
var spin$9 = "_spin_1m5mp_1";
var opacityPulse$9 = "_opacityPulse_1m5mp_1";
var popoverIn$9 = "_popoverIn_1m5mp_496";
var fadeIn$9 = "_fadeIn_1m5mp_1";
var collapsibleSlideDown$9 = "_collapsibleSlideDown_1m5mp_1";
var collapsibleSlideUp$9 = "_collapsibleSlideUp_1m5mp_1";
var collapsibleSlideDownBlurred$9 = "_collapsibleSlideDownBlurred_1m5mp_1";
var collapsibleSlideUpBlurred$9 = "_collapsibleSlideUpBlurred_1m5mp_1";
var blurSwapIn$9 = "_blurSwapIn_1m5mp_1";
var blurSwapOut$9 = "_blurSwapOut_1m5mp_1";
var pulseGlow$9 = "_pulseGlow_1m5mp_1";
var pulseGlowDelayed$9 = "_pulseGlowDelayed_1m5mp_1";
var fade$9 = "_fade_1m5mp_1";
var fadeInUp$9 = "_fadeInUp_1m5mp_1";
var fadeInDown$9 = "_fadeInDown_1m5mp_1";
var fadeInLeft$9 = "_fadeInLeft_1m5mp_1";
var fadeInRight$9 = "_fadeInRight_1m5mp_1";
var fadeOut$9 = "_fadeOut_1m5mp_1";
var fadeOutDown$9 = "_fadeOutDown_1m5mp_1";
var fadeOutUp$9 = "_fadeOutUp_1m5mp_1";
var fadeOutLeft$9 = "_fadeOutLeft_1m5mp_1";
var fadeOutRight$9 = "_fadeOutRight_1m5mp_1";
var ping$9 = "_ping_1m5mp_1";
var blinkBackground$9 = "_blinkBackground_1m5mp_1";
var typingBlink$9 = "_typingBlink_1m5mp_1";
var SessionTimelineChart_vue_vue_type_style_index_0_lang_module_default = {
	carousel,
	chart,
	cell,
	block,
	selected: selected$1,
	idle,
	idleFill,
	hoverCardContent,
	popoverInner,
	popoverName,
	popoverMeta,
	shimmer: shimmer$9,
	spin: spin$9,
	"skeleton-pulse": "_skeleton-pulse_1m5mp_1",
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
var SessionTimelineChart_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelineChart_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelineChart_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionEventFilter.vue?vue&type=script&setup=true&lang.ts
var RESET_ID = "__reset__";
var EVENTS_HEADER_ID = "__events__";
var STATUS_HEADER_ID = "__status__";
var SessionEventFilter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionEventFilter",
	props: {
		available: {},
		selected: {}
	},
	emits: ["update"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const menuItems = computed(() => {
			const eventOptions = props.available.filter((option) => option.presentation === "swatch");
			const statusOptions = props.available.filter((option) => option.presentation === "badge");
			const items = [];
			if (eventOptions.length > 0) {
				items.push({
					id: EVENTS_HEADER_ID,
					label: i18n.baseText("agentSessions.timeline.events"),
					header: true
				});
				items.push(...eventOptions.map(toMenuItem));
			}
			if (statusOptions.length > 0) {
				items.push({
					id: STATUS_HEADER_ID,
					label: i18n.baseText("agentSessions.timeline.status"),
					header: true
				});
				items.push(...statusOptions.map(toMenuItem));
			}
			items.push({
				id: RESET_ID,
				label: i18n.baseText("generic.reset"),
				divided: true,
				disabled: props.selected.size === 0,
				testId: "filter-clear"
			});
			return items;
		});
		function toMenuItem(option) {
			return {
				id: option.key,
				label: option.label,
				checked: props.selected.has(option.key),
				keepOpen: true,
				testId: `filter-option-${option.key}`,
				data: { option }
			};
		}
		function optionColor(option) {
			if (option.presentation === "swatch") return option.color;
			switch (option.key) {
				case "approved": return "var(--color--green-600)";
				case "error": return "var(--color--red-600)";
				default: return "var(--color--neutral-600)";
			}
		}
		function handleSelect(key) {
			if (key === RESET_ID) {
				emit("update", /* @__PURE__ */ new Set());
				return;
			}
			const next = new Set(props.selected);
			if (next.has(key)) next.delete(key);
			else next.add(key);
			emit("update", next);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				items: menuItems.value,
				placement: "bottom-end",
				onSelect: handleSelect
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					content: unref(i18n).baseText("agentSessions.timeline.events"),
					placement: "top"
				}, {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.trigger) }, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						icon: "funnel",
						"icon-only": "",
						"aria-label": unref(i18n).baseText("agentSessions.timeline.events"),
						"data-test-id": "filter-trigger"
					}, null, 8, ["aria-label"]), props.selected.size > 0 ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.activeIndicator),
						"aria-hidden": "true"
					}, null, 2)) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["content"])]),
				"item-leading": withCtx(({ item, ui }) => [item.data?.option ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([_ctx.$style.swatch, ui.class]),
					style: normalizeStyle({ backgroundColor: unref(swatchBackground)(optionColor(item.data.option)) })
				}, null, 6)) : createCommentVNode("", true)]),
				"item-label": withCtx(({ item, ui }) => [createBaseVNode("span", { class: normalizeClass(ui.class) }, [createTextVNode(toDisplayString(item.label) + " ", 1), item.data?.option ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.count)
				}, toDisplayString(item.data.option.count), 3)) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["items"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/SessionEventFilter.vue?vue&type=style&index=0&lang.module.scss
var trigger = "_trigger_1bsw9_388";
var activeIndicator = "_activeIndicator_1bsw9_393";
var swatch = "_swatch_1bsw9_405";
var count = "_count_1bsw9_411";
var shimmer$8 = "_shimmer_1bsw9_1";
var spin$8 = "_spin_1bsw9_1";
var opacityPulse$8 = "_opacityPulse_1bsw9_1";
var popoverIn$8 = "_popoverIn_1bsw9_1";
var fadeIn$8 = "_fadeIn_1bsw9_1";
var collapsibleSlideDown$8 = "_collapsibleSlideDown_1bsw9_1";
var collapsibleSlideUp$8 = "_collapsibleSlideUp_1bsw9_1";
var collapsibleSlideDownBlurred$8 = "_collapsibleSlideDownBlurred_1bsw9_1";
var collapsibleSlideUpBlurred$8 = "_collapsibleSlideUpBlurred_1bsw9_1";
var blurSwapIn$8 = "_blurSwapIn_1bsw9_1";
var blurSwapOut$8 = "_blurSwapOut_1bsw9_1";
var pulseGlow$8 = "_pulseGlow_1bsw9_1";
var pulseGlowDelayed$8 = "_pulseGlowDelayed_1bsw9_1";
var fade$8 = "_fade_1bsw9_1";
var fadeInUp$8 = "_fadeInUp_1bsw9_1";
var fadeInDown$8 = "_fadeInDown_1bsw9_1";
var fadeInLeft$8 = "_fadeInLeft_1bsw9_1";
var fadeInRight$8 = "_fadeInRight_1bsw9_1";
var fadeOut$8 = "_fadeOut_1bsw9_1";
var fadeOutDown$8 = "_fadeOutDown_1bsw9_1";
var fadeOutUp$8 = "_fadeOutUp_1bsw9_1";
var fadeOutLeft$8 = "_fadeOutLeft_1bsw9_1";
var fadeOutRight$8 = "_fadeOutRight_1bsw9_1";
var ping$8 = "_ping_1bsw9_1";
var blinkBackground$8 = "_blinkBackground_1bsw9_1";
var typingBlink$8 = "_typingBlink_1bsw9_1";
var SessionEventFilter_vue_vue_type_style_index_0_lang_module_default = {
	trigger,
	activeIndicator,
	swatch,
	count,
	shimmer: shimmer$8,
	spin: spin$8,
	"skeleton-pulse": "_skeleton-pulse_1bsw9_1",
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
var SessionEventFilter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionEventFilter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionEventFilter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["href"];
var _hoisted_2$2 = { key: 1 };
var SessionTimelineRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionTimelineRow",
	props: {
		item: {},
		selected: { type: Boolean }
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const router = useRouter();
		const i18n = useI18n();
		const isSubAgent = computed(() => isSubAgentTimelineItem(props.item));
		const pillKind = computed(() => isSubAgent.value ? "subagent" : props.item.kind);
		const time = computed(() => {
			if (!props.item.timestamp) return "";
			return convertToDisplayDate(new Date(props.item.timestamp).toISOString()).time;
		});
		const workflowHref = computed(() => {
			if (props.item.kind !== "workflow" || !props.item.workflowId) return "";
			return router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: props.item.workflowId }
			}).href;
		});
		const infoText = computed(() => {
			const it = props.item;
			switch (it.kind) {
				case "user":
				case "agent": return truncate(it.content ?? "", 500);
				case "tool":
					if (isSubAgent.value) return delegateLabel(i18n, it.subAgentName ?? "");
					return resolveToolNameForDisplay(it.toolName, i18n);
				case "workflow": return it.workflowName ?? formatToolNameForDisplay(it.toolName);
				case "node": return it.nodeDisplayName ?? formatToolNameForDisplay(it.toolName);
				case "execution-error": return executionErrorMessage(it, i18n);
				case "suspension":
				case "hitl-response": return hitlTimelineName(it, i18n);
				default: return "";
			}
		});
		const status = computed(() => timelineItemStatus(props.item));
		const attachmentChip = computed(() => {
			const attachments = props.item.attachments;
			if (!attachments?.length) return null;
			const extra = attachments.length - 1;
			return {
				label: extra > 0 ? `${attachments[0].fileName} +${extra}` : attachments[0].fileName,
				tooltip: attachments.map((attachment) => attachment.fileName).join(", ")
			};
		});
		const label = computed(() => {
			if (isSubAgent.value) return i18n.baseText("agentSessions.timeline.subAgent");
			switch (props.item.kind) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "execution-error": return executionErrorLabel(props.item, i18n);
				case "suspension": return i18n.baseText(hitlRequestLabelKey(props.item.hitlRequestType));
				case "hitl-response": return i18n.baseText("agentSessions.timeline.hitlResponse");
				default: return "";
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.row, __props.selected && _ctx.$style.selected]),
				role: "gridcell",
				onClick: _cache[1] || (_cache[1] = ($event) => emit("select"))
			}, [
				createVNode(unref(N8nTooltip_default), {
					content: label.value,
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(SessionTimelinePill_default, { kind: pillKind.value }, null, 8, ["kind"])]),
					_: 1
				}, 8, ["content"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [
					__props.item.kind === "workflow" && workflowHref.value ? (openBlock(), createElementBlock("a", {
						key: 0,
						href: workflowHref.value,
						target: "_blank",
						rel: "noopener",
						class: normalizeClass(_ctx.$style.workflowLink),
						onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
					}, toDisplayString(infoText.value), 11, _hoisted_1$4)) : (openBlock(), createElementBlock("span", _hoisted_2$2, toDisplayString(infoText.value), 1)),
					status.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 2,
						class: normalizeClass(_ctx.$style.statusBadge),
						theme: status.value.theme,
						size: "xsmall",
						"data-test-id": status.value.kind === "hitl-response" ? "timeline-hitl-response-badge" : __props.item.kind === "execution-error" ? "timeline-execution-error-badge" : "timeline-tool-error-badge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(status.value.labelKey)), 1)]),
						_: 1
					}, 8, [
						"class",
						"theme",
						"data-test-id"
					])) : createCommentVNode("", true),
					attachmentChip.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 3,
						content: attachmentChip.value.tooltip,
						placement: "top"
					}, {
						default: withCtx(() => [createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.attachmentChip),
							"data-testid": "timeline-attachment-chip"
						}, [createVNode(unref(N8nIcon_default), {
							icon: "paperclip",
							size: "xsmall"
						}), createTextVNode(" " + toDisplayString(attachmentChip.value.label), 1)], 2)]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)
				], 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.time) }, toDisplayString(time.value), 3)
			], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/SessionTimelineRow.vue?vue&type=style&index=0&lang.module.scss
var row = "_row_162rq_389";
var selected = "_selected_162rq_404";
var info$1 = "_info_162rq_408";
var statusBadge = "_statusBadge_162rq_419";
var workflowLink = "_workflowLink_162rq_429";
var attachmentChip = "_attachmentChip_162rq_434";
var time = "_time_162rq_451";
var shimmer$7 = "_shimmer_162rq_1";
var spin$7 = "_spin_162rq_1";
var opacityPulse$7 = "_opacityPulse_162rq_1";
var popoverIn$7 = "_popoverIn_162rq_1";
var fadeIn$7 = "_fadeIn_162rq_1";
var collapsibleSlideDown$7 = "_collapsibleSlideDown_162rq_1";
var collapsibleSlideUp$7 = "_collapsibleSlideUp_162rq_1";
var collapsibleSlideDownBlurred$7 = "_collapsibleSlideDownBlurred_162rq_1";
var collapsibleSlideUpBlurred$7 = "_collapsibleSlideUpBlurred_162rq_1";
var blurSwapIn$7 = "_blurSwapIn_162rq_1";
var blurSwapOut$7 = "_blurSwapOut_162rq_1";
var pulseGlow$7 = "_pulseGlow_162rq_1";
var pulseGlowDelayed$7 = "_pulseGlowDelayed_162rq_1";
var fade$7 = "_fade_162rq_1";
var fadeInUp$7 = "_fadeInUp_162rq_1";
var fadeInDown$7 = "_fadeInDown_162rq_1";
var fadeInLeft$7 = "_fadeInLeft_162rq_1";
var fadeInRight$7 = "_fadeInRight_162rq_1";
var fadeOut$7 = "_fadeOut_162rq_1";
var fadeOutDown$7 = "_fadeOutDown_162rq_1";
var fadeOutUp$7 = "_fadeOutUp_162rq_1";
var fadeOutLeft$7 = "_fadeOutLeft_162rq_1";
var fadeOutRight$7 = "_fadeOutRight_162rq_1";
var ping$7 = "_ping_162rq_1";
var blinkBackground$7 = "_blinkBackground_162rq_1";
var typingBlink$7 = "_typingBlink_162rq_1";
var SessionTimelineRow_vue_vue_type_style_index_0_lang_module_default = {
	row,
	selected,
	info: info$1,
	statusBadge,
	workflowLink,
	attachmentChip,
	time,
	shimmer: shimmer$7,
	spin: spin$7,
	"skeleton-pulse": "_skeleton-pulse_162rq_1",
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
var SessionTimelineRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelineRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelineRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["aria-label"];
var _hoisted_2$1 = [
	"data-timeline-row-id",
	"tabindex",
	"aria-selected",
	"onClick",
	"onKeydown"
];
var _hoisted_3$1 = ["data-timeline-row-id"];
var _hoisted_4$1 = [
	"data-timeline-row-id",
	"tabindex",
	"aria-selected",
	"onClick",
	"onKeydown"
];
var _hoisted_5$1 = ["data-timeline-row-id"];
var ROW_HEIGHT = 40;
var SCROLL_PADDING = 24;
var VIRTUALIZE_AFTER_ROWS = 100;
var SessionTimelineTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionTimelineTable",
	props: {
		items: {},
		selectedIndex: {},
		visibleKinds: {},
		searchQuery: {},
		idleRanges: {}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const tableRef = ref(null);
		const canScrollUp = ref(false);
		const canScrollDown = ref(false);
		let scrollContainer = null;
		function labelForKey(key) {
			switch (key) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "execution-error": return i18n.baseText("agentSessions.timeline.executionFailed");
				case "execution-interrupted": return i18n.baseText("agentSessions.timeline.executionInterrupted");
				case "suspension": return i18n.baseText("agentSessions.timeline.hitlRequest");
				case "hitl-response": return i18n.baseText("agentSessions.timeline.hitlResponse");
				case "approval-requested": return i18n.baseText("agentSessions.timeline.approvalRequested");
				case "hitl-requested": return i18n.baseText("agentSessions.timeline.hitlRequested");
				case "wait-requested": return i18n.baseText("agentSessions.timeline.waitRequested");
				case "approved": return i18n.baseText("agentSessions.timeline.approved");
				case "responded": return i18n.baseText("agentSessions.timeline.responseReceived");
				case "declined": return i18n.baseText("agentSessions.timeline.declined");
				case "error": return i18n.baseText("agentSessions.timeline.error");
				default: return key;
			}
		}
		const rows = computed(() => {
			const events = filteredTimelineItemIndexes(props.items, props.visibleKinds, props.searchQuery ?? "", labelForKey).map((index) => ({
				id: `event-${index}`,
				kind: "event",
				item: props.items[index],
				index,
				sortKey: props.items[index].timestamp
			}));
			const idles = (props.idleRanges ?? []).map((range, index) => ({
				id: `idle-${range.start}-${range.end}-${index}`,
				kind: "idle",
				range,
				sortKey: range.start
			}));
			return [...events, ...idles].sort((a, b) => a.sortKey - b.sortKey);
		});
		const shouldVirtualizeRows = computed(() => rows.value.length > VIRTUALIZE_AFTER_ROWS);
		const tabbableEventIndex = computed(() => {
			const selectedRow = rows.value.find((row) => row.kind === "event" && row.index === props.selectedIndex);
			if (selectedRow?.kind === "event") return selectedRow.index;
			const firstEventRow = rows.value.find((row) => row.kind === "event");
			return firstEventRow?.kind === "event" ? firstEventRow.index : null;
		});
		function updateScrollMask() {
			if (!scrollContainer) {
				canScrollUp.value = false;
				canScrollDown.value = false;
				return;
			}
			canScrollUp.value = scrollContainer.scrollTop > 0;
			canScrollDown.value = scrollContainer.scrollTop + scrollContainer.clientHeight < scrollContainer.scrollHeight - 1;
		}
		function bindScrollContainer() {
			const nextScrollContainer = tableRef.value?.querySelector("[data-timeline-scroll-container]") ?? tableRef.value?.querySelector(".recycle-scroller-wrapper");
			if (nextScrollContainer === scrollContainer) return;
			scrollContainer?.removeEventListener("scroll", updateScrollMask);
			scrollContainer = nextScrollContainer ?? null;
			scrollContainer?.addEventListener("scroll", updateScrollMask, { passive: true });
			updateScrollMask();
		}
		function visibleRowElement(rowId) {
			const visibleRows = tableRef.value?.querySelectorAll("[data-timeline-row-id]");
			return Array.from(visibleRows ?? []).find((element) => element.dataset.timelineRowId === rowId);
		}
		function focusVisibleRow(rowId) {
			const rowElement = visibleRowElement(rowId);
			if (!rowElement) return false;
			rowElement.focus();
			return true;
		}
		function scrollVisibleRowIntoView(rowId) {
			if (!scrollContainer) return false;
			const rowElement = visibleRowElement(rowId);
			if (!rowElement) return false;
			const containerRect = scrollContainer.getBoundingClientRect();
			const rowRect = rowElement.getBoundingClientRect();
			if (rowRect.top - SCROLL_PADDING < containerRect.top) scrollContainer.scrollTop -= containerRect.top - rowRect.top + SCROLL_PADDING;
			else if (rowRect.bottom + SCROLL_PADDING > containerRect.bottom) scrollContainer.scrollTop += rowRect.bottom - containerRect.bottom + SCROLL_PADDING;
			return true;
		}
		function scrollRowIntoView(rowId) {
			if (!scrollContainer) return;
			if (scrollVisibleRowIntoView(rowId)) return;
			const rowIndex = rows.value.findIndex((row) => row.id === rowId);
			if (rowIndex === -1) return;
			const rowTop = rowIndex * ROW_HEIGHT;
			const rowBottom = rowTop + ROW_HEIGHT;
			const viewportTop = scrollContainer.scrollTop;
			const viewportBottom = viewportTop + scrollContainer.clientHeight;
			if (rowTop - SCROLL_PADDING < viewportTop) scrollContainer.scrollTop = Math.max(0, rowTop - SCROLL_PADDING);
			else if (rowBottom + SCROLL_PADDING > viewportBottom) scrollContainer.scrollTop = rowBottom + SCROLL_PADDING - scrollContainer.clientHeight;
			nextTick(() => {
				scrollVisibleRowIntoView(rowId);
				updateScrollMask();
			});
		}
		watch(() => rows.value.length, () => {
			nextTick(() => {
				bindScrollContainer();
				updateScrollMask();
			});
		});
		onMounted(() => {
			nextTick(bindScrollContainer);
		});
		onBeforeUnmount(() => {
			scrollContainer?.removeEventListener("scroll", updateScrollMask);
		});
		watch(() => props.selectedIndex, (selectedIndex) => {
			if (selectedIndex === null) return;
			const activeElement = document.activeElement;
			const shouldMoveFocus = activeElement instanceof HTMLElement && tableRef.value?.contains(activeElement) === true && activeElement.closest("[data-timeline-row-id]") !== null;
			const rowId = `event-${selectedIndex}`;
			nextTick(() => {
				scrollRowIntoView(rowId);
				updateScrollMask();
				if (shouldMoveFocus && !focusVisibleRow(rowId)) nextTick(() => focusVisibleRow(rowId));
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "tableRef",
				ref: tableRef,
				class: normalizeClass([
					_ctx.$style.table,
					canScrollUp.value && _ctx.$style.canScrollUp,
					canScrollDown.value && _ctx.$style.canScrollDown
				]),
				role: "grid",
				"aria-label": unref(i18n).baseText("agentSessions.timeline.events")
			}, [rows.value.length > 0 && !shouldVirtualizeRows.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.directRows),
				"data-timeline-scroll-container": "",
				role: "rowgroup"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (row) => {
				return openBlock(), createElementBlock(Fragment, { key: row.id }, [row.kind === "event" ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-test-id": "timeline-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.rowWrapper),
					role: "row",
					tabindex: tabbableEventIndex.value === row.index ? 0 : -1,
					"aria-selected": props.selectedIndex === row.index,
					onClick: ($event) => emit("select", row.index),
					onKeydown: [withKeys(withModifiers(($event) => emit("select", row.index), ["self", "prevent"]), ["enter"]), withKeys(withModifiers(($event) => emit("select", row.index), ["self", "prevent"]), ["space"])]
				}, [createVNode(SessionTimelineRow_default, {
					item: row.item,
					selected: props.selectedIndex === row.index
				}, null, 8, ["item", "selected"])], 42, _hoisted_2$1)) : (openBlock(), createElementBlock("div", {
					key: 1,
					"data-test-id": "timeline-idle-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.idleRow),
					role: "row"
				}, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.idlePill),
					role: "gridcell"
				}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")) + " · " + toDisplayString(unref(formatDuration)(row.range.end - row.range.start)), 3)], 10, _hoisted_3$1))], 64);
			}), 128))], 2)) : rows.value.length > 0 ? (openBlock(), createBlock(unref(N8nRecycleScroller_default), {
				key: 1,
				items: rows.value,
				"item-size": ROW_HEIGHT,
				"item-key": "id",
				role: "rowgroup"
			}, {
				default: withCtx(({ item: row }) => [row.kind === "event" ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-test-id": "timeline-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.rowWrapper),
					role: "row",
					tabindex: tabbableEventIndex.value === row.index ? 0 : -1,
					"aria-selected": props.selectedIndex === row.index,
					onClick: ($event) => emit("select", row.index),
					onKeydown: [withKeys(withModifiers(($event) => emit("select", row.index), ["self", "prevent"]), ["enter"]), withKeys(withModifiers(($event) => emit("select", row.index), ["self", "prevent"]), ["space"])]
				}, [createVNode(SessionTimelineRow_default, {
					item: row.item,
					selected: props.selectedIndex === row.index
				}, null, 8, ["item", "selected"])], 42, _hoisted_4$1)) : (openBlock(), createElementBlock("div", {
					key: 1,
					"data-test-id": "timeline-idle-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.idleRow),
					role: "row"
				}, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.idlePill),
					role: "gridcell"
				}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")) + " · " + toDisplayString(unref(formatDuration)(row.range.end - row.range.start)), 3)], 10, _hoisted_5$1))]),
				_: 1
			}, 8, ["items"])) : (openBlock(), createElementBlock("div", {
				key: 2,
				"data-test-id": "timeline-empty",
				class: normalizeClass(_ctx.$style.empty)
			}, toDisplayString(unref(i18n).baseText("executionsLandingPage.noResults")), 3))], 10, _hoisted_1$3);
		};
	}
});
//#endregion
//#region src/features/agents/components/SessionTimelineTable.vue?vue&type=style&index=0&lang.module.scss
var table = "_table_9hxn6_389";
var rowWrapper = "_rowWrapper_9hxn6_395";
var empty$1 = "_empty_9hxn6_399";
var directRows = "_directRows_9hxn6_416";
var canScrollDown = "_canScrollDown_9hxn6_426";
var canScrollUp = "_canScrollUp_9hxn6_430";
var idleRow = "_idleRow_9hxn6_450";
var idlePill = "_idlePill_9hxn6_464";
var shimmer$6 = "_shimmer_9hxn6_1";
var spin$6 = "_spin_9hxn6_1";
var opacityPulse$6 = "_opacityPulse_9hxn6_1";
var popoverIn$6 = "_popoverIn_9hxn6_1";
var fadeIn$6 = "_fadeIn_9hxn6_1";
var collapsibleSlideDown$6 = "_collapsibleSlideDown_9hxn6_1";
var collapsibleSlideUp$6 = "_collapsibleSlideUp_9hxn6_1";
var collapsibleSlideDownBlurred$6 = "_collapsibleSlideDownBlurred_9hxn6_1";
var collapsibleSlideUpBlurred$6 = "_collapsibleSlideUpBlurred_9hxn6_1";
var blurSwapIn$6 = "_blurSwapIn_9hxn6_1";
var blurSwapOut$6 = "_blurSwapOut_9hxn6_1";
var pulseGlow$6 = "_pulseGlow_9hxn6_1";
var pulseGlowDelayed$6 = "_pulseGlowDelayed_9hxn6_1";
var fade$6 = "_fade_9hxn6_1";
var fadeInUp$6 = "_fadeInUp_9hxn6_1";
var fadeInDown$6 = "_fadeInDown_9hxn6_1";
var fadeInLeft$6 = "_fadeInLeft_9hxn6_1";
var fadeInRight$6 = "_fadeInRight_9hxn6_1";
var fadeOut$6 = "_fadeOut_9hxn6_1";
var fadeOutDown$6 = "_fadeOutDown_9hxn6_1";
var fadeOutUp$6 = "_fadeOutUp_9hxn6_1";
var fadeOutLeft$6 = "_fadeOutLeft_9hxn6_1";
var fadeOutRight$6 = "_fadeOutRight_9hxn6_1";
var ping$6 = "_ping_9hxn6_1";
var blinkBackground$6 = "_blinkBackground_9hxn6_1";
var typingBlink$6 = "_typingBlink_9hxn6_1";
var SessionTimelineTable_vue_vue_type_style_index_0_lang_module_default = {
	table,
	rowWrapper,
	empty: empty$1,
	directRows,
	canScrollDown,
	canScrollUp,
	idleRow,
	idlePill,
	shimmer: shimmer$6,
	spin: spin$6,
	"skeleton-pulse": "_skeleton-pulse_9hxn6_1",
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
var SessionTimelineTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelineTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelineTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/RichInteractionCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["src", "alt"];
var RichInteractionCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RichInteractionCard",
	props: {
		input: {},
		output: {}
	},
	setup(__props) {
		const props = __props;
		const parsed = computed(() => {
			return {
				input: props.input ?? {},
				output: props.output ?? {}
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.card) }, [
				parsed.value.input.title ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.title)
				}, toDisplayString(parsed.value.input.title), 3)) : createCommentVNode("", true),
				parsed.value.input.message ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.message)
				}, toDisplayString(parsed.value.input.message), 3)) : createCommentVNode("", true),
				parsed.value.input.components ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(parsed.value.input.components, (comp, idx) => {
					return openBlock(), createElementBlock(Fragment, { key: idx }, [comp.type === "section" && comp.text ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.section)
					}, toDisplayString(comp.text), 3)) : comp.type === "divider" ? (openBlock(), createElementBlock("hr", {
						key: 1,
						class: normalizeClass(_ctx.$style.divider)
					}, null, 2)) : comp.type === "button" ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.button)
					}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.buttonPill, parsed.value.output.type === "button" && parsed.value.output.value === comp.value && _ctx.$style.buttonSelected]) }, toDisplayString(comp.label ?? comp.value), 3)], 2)) : comp.type === "select" || comp.type === "radio_select" ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.selectGroup)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.selectLabel) }, toDisplayString(comp.label), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(comp.options, (opt) => {
						return openBlock(), createElementBlock("div", {
							key: opt.value,
							class: normalizeClass(_ctx.$style.selectOption)
						}, [
							createBaseVNode("span", { class: normalizeClass([_ctx.$style.optionDot, parsed.value.output.type === "select" && parsed.value.output.value === opt.value && _ctx.$style.optionSelected]) }, null, 2),
							createBaseVNode("span", null, toDisplayString(opt.label), 1),
							opt.description ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.optionDesc)
							}, toDisplayString(opt.description), 3)) : createCommentVNode("", true)
						], 2);
					}), 128))], 2)) : comp.type === "fields" ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.fieldsGroup)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(comp.fields ?? comp.items, (f) => {
						return openBlock(), createElementBlock("div", {
							key: f.label,
							class: normalizeClass(_ctx.$style.fieldRow)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.fieldLabel) }, toDisplayString(f.label), 3), createBaseVNode("span", null, toDisplayString(f.value), 1)], 2);
					}), 128))], 2)) : comp.type === "image" && comp.url ? (openBlock(), createElementBlock("img", {
						key: 5,
						src: comp.url,
						alt: comp.alt ?? comp.altText ?? "",
						class: normalizeClass(_ctx.$style.image)
					}, null, 10, _hoisted_1$2)) : createCommentVNode("", true)], 64);
				}), 128)) : createCommentVNode("", true),
				parsed.value.output.value && !parsed.value.output.displayOnly ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.response)
				}, [_cache[0] || (_cache[0] = createTextVNode(" User selected: ", -1)), createBaseVNode("strong", null, toDisplayString(parsed.value.output.value), 1)], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/RichInteractionCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_vxwm2_388";
var title = "_title_vxwm2_393";
var message = "_message_vxwm2_398";
var section = "_section_vxwm2_403";
var divider = "_divider_vxwm2_407";
var button = "_button_vxwm2_413";
var buttonPill = "_buttonPill_vxwm2_419";
var buttonSelected = "_buttonSelected_vxwm2_428";
var selectGroup = "_selectGroup_vxwm2_434";
var selectLabel = "_selectLabel_vxwm2_438";
var selectOption = "_selectOption_vxwm2_443";
var optionDot = "_optionDot_vxwm2_450";
var optionSelected = "_optionSelected_vxwm2_458";
var optionDesc = "_optionDesc_vxwm2_463";
var fieldsGroup = "_fieldsGroup_vxwm2_468";
var fieldRow = "_fieldRow_vxwm2_472";
var fieldLabel = "_fieldLabel_vxwm2_478";
var image = "_image_vxwm2_483";
var response = "_response_vxwm2_489";
var shimmer$5 = "_shimmer_vxwm2_1";
var spin$5 = "_spin_vxwm2_1";
var opacityPulse$5 = "_opacityPulse_vxwm2_1";
var popoverIn$5 = "_popoverIn_vxwm2_1";
var fadeIn$5 = "_fadeIn_vxwm2_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_vxwm2_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_vxwm2_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_vxwm2_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_vxwm2_1";
var blurSwapIn$5 = "_blurSwapIn_vxwm2_1";
var blurSwapOut$5 = "_blurSwapOut_vxwm2_1";
var pulseGlow$5 = "_pulseGlow_vxwm2_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_vxwm2_1";
var fade$5 = "_fade_vxwm2_1";
var fadeInUp$5 = "_fadeInUp_vxwm2_1";
var fadeInDown$5 = "_fadeInDown_vxwm2_1";
var fadeInLeft$5 = "_fadeInLeft_vxwm2_1";
var fadeInRight$5 = "_fadeInRight_vxwm2_1";
var fadeOut$5 = "_fadeOut_vxwm2_1";
var fadeOutDown$5 = "_fadeOutDown_vxwm2_1";
var fadeOutUp$5 = "_fadeOutUp_vxwm2_1";
var fadeOutLeft$5 = "_fadeOutLeft_vxwm2_1";
var fadeOutRight$5 = "_fadeOutRight_vxwm2_1";
var ping$5 = "_ping_vxwm2_1";
var blinkBackground$5 = "_blinkBackground_vxwm2_1";
var typingBlink$5 = "_typingBlink_vxwm2_1";
var RichInteractionCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	title,
	message,
	section,
	divider,
	button,
	buttonPill,
	buttonSelected,
	selectGroup,
	selectLabel,
	selectOption,
	optionDot,
	optionSelected,
	optionDesc,
	fieldsGroup,
	fieldRow,
	fieldLabel,
	image,
	response,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_vxwm2_1",
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
var RichInteractionCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RichInteractionCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RichInteractionCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ndv/runData/standaloneRunData.ts
var StandaloneRunDataHostKey = Symbol("StandaloneRunDataHost");
//#endregion
//#region src/features/ndv/runData/components/StandaloneRunData.vue
var StandaloneRunData_default = /* @__PURE__ */ defineComponent({
	__name: "StandaloneRunData",
	props: {
		workflowObject: {},
		workflowExecution: { default: void 0 },
		runIndex: {},
		paneType: {},
		node: { default: null },
		overrideOutputs: { default: void 0 }
	},
	setup(__props) {
		if (!inject(StandaloneRunDataHostKey, false)) throw new UnexpectedError("StandaloneRunData must be rendered inside StandaloneRunDataHost");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(RunData_default, {
				node: __props.node,
				"run-index": __props.runIndex,
				"override-outputs": __props.overrideOutputs,
				"workflow-object": __props.workflowObject,
				"workflow-execution": __props.workflowExecution,
				"pane-type": __props.paneType,
				"display-mode": "schema",
				"disable-display-mode-selection": true,
				"disable-run-index-selection": true,
				compact: true,
				"show-actions-on-hover": true,
				"disable-pin": true,
				"disable-edit": true,
				"disable-hover-highlight": true,
				"disable-settings-hint": true,
				"collapsing-table-column-name": null,
				"table-header-bg-color": "light",
				"executing-message": "",
				"no-data-in-branch-message": ""
			}, null, 8, [
				"node",
				"run-index",
				"override-outputs",
				"workflow-object",
				"workflow-execution",
				"pane-type"
			]);
		};
	}
});
//#endregion
//#region src/features/ndv/runData/components/StandaloneRunDataHost.vue?vue&type=script&setup=true&lang.ts
var StandaloneRunDataHost_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "StandaloneRunDataHost",
	props: { execution: {} },
	emits: ["setupError"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const nodeTypesStore = useNodeTypesStore();
		const { normalizeWorkflowData } = useWorkflowNormalization();
		const hostId = encodeURIComponent(useId());
		const documentStore = shallowRef(null);
		const workflowObject = shallowRef(null);
		const workflowExecution = shallowRef();
		const ready = computed(() => documentStore.value !== null && workflowObject.value !== null);
		provide(WorkflowIdKey, computed(() => documentStore.value?.workflowId ?? props.execution?.workflowData.id ?? ""));
		provide(WorkflowDocumentStoreKey, documentStore);
		provide(ChatSymbol, null);
		provide(StandaloneRunDataHostKey, true);
		let ownedScope = null;
		let generation = 0;
		let latestSetupRequest = 0;
		let unmounted = false;
		function disposeOwnedScope() {
			if (!ownedScope) return;
			disposeNDVStore(ownedScope.ndvStore);
			disposeWorkflowExecutionStateStore(ownedScope.executionStateStore);
			disposeExecutionDataStore(ownedScope.executionDataStore);
			disposeWorkflowDocumentStore(ownedScope.documentStore);
			ownedScope = null;
			documentStore.value = null;
			workflowObject.value = null;
			workflowExecution.value = void 0;
		}
		function installExecution(execution) {
			const documentVersion = `standalone-run-data/${hostId}/${++generation}`;
			const documentId = createWorkflowDocumentId(execution.workflowData.id, documentVersion);
			const scopedDocumentStore = useWorkflowDocumentStore(documentId);
			const scopedExecutionStateStore = useWorkflowExecutionStateStore(documentId);
			const scopedExecutionDataStore = useExecutionDataStore(createExecutionDataId(`${documentId}/execution`));
			ownedScope = {
				documentStore: scopedDocumentStore,
				executionStateStore: scopedExecutionStateStore,
				executionDataStore: scopedExecutionDataStore,
				ndvStore: useNDVStore(documentId)
			};
			const { nodes, connections } = normalizeWorkflowData(execution.workflowData);
			scopedDocumentStore.hydrate({
				...execution.workflowData,
				nodes,
				connections,
				versionId: documentVersion
			});
			const executionSnapshot = deepCopy(execution);
			scopedExecutionDataStore.setExecution(executionSnapshot);
			scopedExecutionStateStore.setDisplayedExecutionId(scopedExecutionDataStore.executionId);
			documentStore.value = scopedDocumentStore;
			workflowObject.value = scopedDocumentStore.getWorkflowObjectAccessorSnapshot();
			workflowExecution.value = executionSnapshot.data;
		}
		async function replaceExecution(execution) {
			const setupRequest = ++latestSetupRequest;
			documentStore.value = null;
			workflowObject.value = null;
			workflowExecution.value = void 0;
			await nextTick();
			disposeOwnedScope();
			if (!execution || unmounted || setupRequest !== latestSetupRequest) return;
			try {
				await nodeTypesStore.loadNodeTypesIfNotLoaded();
				if (unmounted || setupRequest !== latestSetupRequest) return;
				installExecution(execution);
			} catch (error) {
				if (unmounted || setupRequest !== latestSetupRequest) return;
				disposeOwnedScope();
				emit("setupError", error);
			}
		}
		watch(() => props.execution, (execution) => replaceExecution(execution), { immediate: true });
		onBeforeUnmount(() => {
			unmounted = true;
			latestSetupRequest += 1;
			documentStore.value = null;
			workflowObject.value = null;
			workflowExecution.value = void 0;
		});
		onUnmounted(() => {
			disposeOwnedScope();
		});
		return (_ctx, _cache) => {
			return ready.value && workflowObject.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.root)
			}, [renderSlot(_ctx.$slots, "default", {
				workflowObject: workflowObject.value,
				workflowExecution: workflowExecution.value
			})], 2)) : createCommentVNode("", true);
		};
	}
});
var StandaloneRunDataHost_vue_vue_type_style_index_0_lang_module_default = { root: "_root_1dd6a_2" };
var StandaloneRunDataHost_default = /* @__PURE__ */ _plugin_vue_export_helper_default(StandaloneRunDataHost_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": StandaloneRunDataHost_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/WorkflowExecutionLogViewer.vue?vue&type=script&setup=true&lang.ts
var WorkflowExecutionLogViewer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionLogViewer",
	props: {
		workflowId: {},
		workflowExecutionId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const executionsStore = useExecutionsStore();
		const workflowHelpers = useWorkflowHelpers();
		const nodeTypesStore = useNodeTypesStore();
		const loading = ref(true);
		const errorMessage = ref(null);
		const execution = ref(null);
		const expanded = ref({});
		const selected = ref(null);
		const workflow = computed(() => {
			if (!execution.value?.workflowData) return null;
			try {
				return new Workflow({
					...execution.value.workflowData,
					nodeTypes: workflowHelpers.getNodeTypes()
				});
			} catch {
				return null;
			}
		});
		const entries = computed(() => {
			if (!workflow.value || !execution.value) return [];
			return createLogTree(workflow.value, execution.value);
		});
		const flatEntries = computed(() => flattenLogEntries(entries.value, expanded.value));
		const latestNodeInfo = computed(() => {
			const map = {};
			if (!workflow.value) return map;
			for (const node of Object.values(workflow.value.nodes ?? {})) map[node.id] = {
				deleted: false,
				disabled: !!node.disabled,
				name: node.name
			};
			return map;
		});
		const shouldShowTokenCountColumn = computed(() => entries.value.some((entry) => getSubtreeTotalConsumedTokens(entry, true).totalTokens > 0));
		const statusBanner = computed(() => {
			const s = execution.value?.status;
			if (s === "running" || s === "new") return i18n.baseText("agentSessions.workflowLog.stillRunning");
			if (s === "waiting") return i18n.baseText("agentSessions.workflowLog.waiting");
			return "";
		});
		function toggleExpanded(entry) {
			expanded.value = {
				...expanded.value,
				[entry.id]: !expanded.value[entry.id]
			};
		}
		function toggleSelected(entry) {
			selected.value = selected.value?.id === entry.id ? null : entry;
		}
		function handleRunDataSetupError() {
			errorMessage.value = i18n.baseText("agentSessions.workflowLog.unavailable");
		}
		const selectedNode = computed(() => selected.value?.type === "node" ? selected.value : null);
		function getLatestInfo(entry) {
			return isNodeLog(entry) ? latestNodeInfo.value[entry.node.id] : void 0;
		}
		const isTriggerSelected = computed(() => {
			const node = selectedNode.value?.node;
			if (!node) return false;
			return nodeTypesStore.getNodeType(node.type, node.typeVersion)?.group?.includes("trigger") ?? false;
		});
		const inputBinding = computed(() => {
			const entry = selectedNode.value;
			if (!entry) return null;
			const source = entry.runData?.source?.[0];
			if (!source) return null;
			const prevNode = entry.workflow.getNode(source.previousNode);
			if (!prevNode) return null;
			return {
				node: {
					...prevNode,
					disabled: false
				},
				runIndex: source.previousNodeRun ?? 0,
				overrideOutputs: [source.previousNodeOutput ?? 0]
			};
		});
		const selectedError = computed(() => {
			const err = selectedNode.value?.runData?.error;
			if (!err || typeof err !== "object") return null;
			return err;
		});
		let unmounted = false;
		onMounted(async () => {
			try {
				const result = await executionsStore.fetchExecution(props.workflowExecutionId);
				if (unmounted) return;
				if (!result) errorMessage.value = i18n.baseText("agentSessions.workflowLog.unavailable");
				else {
					execution.value = result;
					const first = flatEntries.value[0];
					if (first) selected.value = first;
				}
			} catch {
				if (unmounted) return;
				errorMessage.value = i18n.baseText("agentSessions.workflowLog.unavailable");
			} finally {
				if (!unmounted) loading.value = false;
			}
		});
		onBeforeUnmount(() => {
			unmounted = true;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [loading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.loading)
			}, toDisplayString(unref(i18n).baseText("agentSessions.workflowLog.loading")), 3)) : errorMessage.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.errorBanner)
			}, toDisplayString(errorMessage.value), 3)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
				statusBanner.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.banner)
				}, toDisplayString(statusBanner.value), 3)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.rows) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(flatEntries.value, (entry) => {
					return openBlock(), createBlock(LogsOverviewRow_default, {
						key: entry.id,
						"data-test-id": "log-node-row",
						data: entry,
						"is-selected": selected.value?.id === entry.id,
						"is-read-only": true,
						"should-show-token-count-column": shouldShowTokenCountColumn.value,
						"is-compact": true,
						"latest-info": getLatestInfo(entry),
						expanded: !!expanded.value[entry.id],
						"can-open-ndv": false,
						onToggleExpanded: ($event) => toggleExpanded(entry),
						onToggleSelected: ($event) => toggleSelected(entry)
					}, null, 8, [
						"data",
						"is-selected",
						"should-show-token-count-column",
						"latest-info",
						"expanded",
						"onToggleExpanded",
						"onToggleSelected"
					]);
				}), 128))], 2),
				selectedNode.value && execution.value ? (openBlock(), createBlock(StandaloneRunDataHost_default, {
					key: 1,
					execution: execution.value,
					onSetupError: handleRunDataSetupError
				}, {
					default: withCtx(({ workflowObject, workflowExecution }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.detail) }, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.detailHeader) }, toDisplayString(selectedNode.value.node.name), 3),
						!isTriggerSelected.value && inputBinding.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.pane),
							"data-test-id": "agent-session-run-data-input"
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), (openBlock(), createBlock(StandaloneRunData_default, {
							key: `input-${selectedNode.value.id}`,
							node: inputBinding.value.node,
							"run-index": inputBinding.value.runIndex,
							"override-outputs": inputBinding.value.overrideOutputs,
							"workflow-object": workflowObject,
							"workflow-execution": workflowExecution,
							"pane-type": "input"
						}, null, 8, [
							"node",
							"run-index",
							"override-outputs",
							"workflow-object",
							"workflow-execution"
						]))], 2)) : createCommentVNode("", true),
						createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.pane),
							"data-test-id": "agent-session-run-data-output"
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), selectedError.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.errorPaneBody),
							"data-test-id": "node-error-card"
						}, [createVNode(NodeErrorView_default, {
							error: selectedError.value,
							compact: true,
							"show-details": ""
						}, null, 8, ["error"])], 2)) : (openBlock(), createBlock(StandaloneRunData_default, {
							key: `output-${selectedNode.value.id}`,
							node: selectedNode.value.node,
							"run-index": selectedNode.value.runIndex,
							"workflow-object": workflowObject,
							"workflow-execution": workflowExecution,
							"pane-type": "output"
						}, null, 8, [
							"node",
							"run-index",
							"workflow-object",
							"workflow-execution"
						]))], 2)
					], 2)]),
					_: 1
				}, 8, ["execution"])) : createCommentVNode("", true)
			], 64))], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/WorkflowExecutionLogViewer.vue?vue&type=style&index=0&lang.module.scss
var root$1 = "_root_fiu15_389";
var loading$1 = "_loading_fiu15_395";
var banner = "_banner_fiu15_400";
var errorBanner$1 = "_errorBanner_fiu15_408";
var rows = "_rows_fiu15_416";
var detail = "_detail_fiu15_421";
var detailHeader = "_detailHeader_fiu15_429";
var pane$1 = "_pane_fiu15_434";
var paneTitle$1 = "_paneTitle_fiu15_444";
var errorPaneBody = "_errorPaneBody_fiu15_461";
var openButton = "_openButton_fiu15_479";
var shimmer$4 = "_shimmer_fiu15_1";
var spin$4 = "_spin_fiu15_1";
var opacityPulse$4 = "_opacityPulse_fiu15_1";
var popoverIn$4 = "_popoverIn_fiu15_1";
var fadeIn$4 = "_fadeIn_fiu15_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_fiu15_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_fiu15_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_fiu15_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_fiu15_1";
var blurSwapIn$4 = "_blurSwapIn_fiu15_1";
var blurSwapOut$4 = "_blurSwapOut_fiu15_1";
var pulseGlow$4 = "_pulseGlow_fiu15_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_fiu15_1";
var fade$4 = "_fade_fiu15_1";
var fadeInUp$4 = "_fadeInUp_fiu15_1";
var fadeInDown$4 = "_fadeInDown_fiu15_1";
var fadeInLeft$4 = "_fadeInLeft_fiu15_1";
var fadeInRight$4 = "_fadeInRight_fiu15_1";
var fadeOut$4 = "_fadeOut_fiu15_1";
var fadeOutDown$4 = "_fadeOutDown_fiu15_1";
var fadeOutUp$4 = "_fadeOutUp_fiu15_1";
var fadeOutLeft$4 = "_fadeOutLeft_fiu15_1";
var fadeOutRight$4 = "_fadeOutRight_fiu15_1";
var ping$4 = "_ping_fiu15_1";
var blinkBackground$4 = "_blinkBackground_fiu15_1";
var typingBlink$4 = "_typingBlink_fiu15_1";
var WorkflowExecutionLogViewer_vue_vue_type_style_index_0_lang_module_default = {
	root: root$1,
	loading: loading$1,
	banner,
	errorBanner: errorBanner$1,
	rows,
	detail,
	detailHeader,
	pane: pane$1,
	paneTitle: paneTitle$1,
	errorPaneBody,
	openButton,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_fiu15_1",
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
var WorkflowExecutionLogViewer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionLogViewer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionLogViewer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/ToolIoView.vue?vue&type=script&setup=true&lang.ts
/**
* Renders input/output for a single tool/node call using the same RunData
* schema view that the workflow log viewer uses for node I/O — but without
* the surrounding node list, since a tool call is always one logical node.
*
* Synthesizes a fake two-node workflow (an input source + the tool node) so
* RunData's input pane has a previous node to walk back to. The standalone
* host owns the isolated stores needed to render that execution.
*/
var SYNTHETIC_ID = "__tool_io__";
var INPUT_NODE_NAME = "__tool_io_input__";
var ToolIoView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolIoView",
	props: {
		name: {},
		input: {},
		output: {},
		nodeParameters: {},
		success: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		function wrap(value) {
			if (value === void 0 || value === null) return [{ json: {} }];
			if (Array.isArray(value)) return value.map((v) => typeof v === "object" && v !== null ? { json: v } : { json: { value: v } });
			if (typeof value === "object") return [{ json: value }];
			return [{ json: { value } }];
		}
		const synthExecution = computed(() => {
			const inputItems = wrap(props.nodeParameters && Object.keys(props.nodeParameters).length > 0 ? props.nodeParameters : props.input);
			const outputItems = wrap(props.output);
			const workflowData = {
				id: SYNTHETIC_ID,
				name: SYNTHETIC_ID,
				active: false,
				isArchived: false,
				nodes: [{
					id: INPUT_NODE_NAME,
					name: INPUT_NODE_NAME,
					type: "n8n-nodes-base.set",
					typeVersion: 1,
					position: [0, 0],
					parameters: {}
				}, {
					id: props.name,
					name: props.name,
					type: "n8n-nodes-base.set",
					typeVersion: 1,
					position: [220, 0],
					parameters: props.nodeParameters ?? {}
				}],
				connections: { [INPUT_NODE_NAME]: { main: [[{
					node: props.name,
					type: "main",
					index: 0
				}]] } },
				settings: {},
				pinData: {},
				versionId: "",
				usedCredentials: [],
				sharedWithProjects: [],
				homeProject: void 0,
				scopes: [],
				tags: [],
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			const runData = {
				[INPUT_NODE_NAME]: [{
					startTime: 0,
					executionIndex: 0,
					executionTime: 0,
					executionStatus: "success",
					source: [],
					data: { main: [inputItems] }
				}],
				[props.name]: [{
					startTime: 0,
					executionIndex: 0,
					executionTime: 0,
					executionStatus: props.success ? "success" : "error",
					source: [{
						previousNode: INPUT_NODE_NAME,
						previousNodeOutput: 0,
						previousNodeRun: 0
					}],
					data: { main: [outputItems] },
					inputOverride: { main: [inputItems] }
				}]
			};
			const now = /* @__PURE__ */ new Date();
			return {
				id: SYNTHETIC_ID,
				finished: true,
				mode: "manual",
				status: "success",
				startedAt: now,
				createdAt: now,
				stoppedAt: now,
				workflowId: SYNTHETIC_ID,
				workflowData,
				data: {
					startData: {},
					resultData: { runData },
					executionData: {
						contextData: {},
						nodeExecutionStack: [],
						metadata: {},
						waitingExecution: {},
						waitingExecutionSource: {}
					}
				}
			};
		});
		const toolNodeUi = computed(() => {
			return synthExecution.value.workflowData.nodes.find((node) => node.name === props.name) ?? null;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(StandaloneRunDataHost_default, { execution: synthExecution.value }, {
				default: withCtx(({ workflowObject, workflowExecution }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.root) }, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.pane),
					"data-test-id": "agent-session-run-data-input"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), (openBlock(), createBlock(StandaloneRunData_default, {
					key: `tool-input-${__props.name}`,
					node: toolNodeUi.value,
					"run-index": 0,
					"workflow-object": workflowObject,
					"workflow-execution": workflowExecution,
					"pane-type": "input"
				}, null, 8, [
					"node",
					"workflow-object",
					"workflow-execution"
				]))], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.pane),
					"data-test-id": "agent-session-run-data-output"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), (openBlock(), createBlock(StandaloneRunData_default, {
					key: `tool-output-${__props.name}`,
					node: toolNodeUi.value,
					"run-index": 0,
					"workflow-object": workflowObject,
					"workflow-execution": workflowExecution,
					"pane-type": "output"
				}, null, 8, [
					"node",
					"workflow-object",
					"workflow-execution"
				]))], 2)], 2)]),
				_: 1
			}, 8, ["execution"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/ToolIoView.vue?vue&type=style&index=0&lang.module.scss
var root = "_root_9a39i_388";
var pane = "_pane_9a39i_394";
var paneTitle = "_paneTitle_9a39i_404";
var shimmer$3 = "_shimmer_9a39i_1";
var spin$3 = "_spin_9a39i_1";
var opacityPulse$3 = "_opacityPulse_9a39i_1";
var popoverIn$3 = "_popoverIn_9a39i_1";
var fadeIn$3 = "_fadeIn_9a39i_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_9a39i_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_9a39i_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_9a39i_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_9a39i_1";
var blurSwapIn$3 = "_blurSwapIn_9a39i_1";
var blurSwapOut$3 = "_blurSwapOut_9a39i_1";
var pulseGlow$3 = "_pulseGlow_9a39i_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_9a39i_1";
var fade$3 = "_fade_9a39i_1";
var fadeInUp$3 = "_fadeInUp_9a39i_1";
var fadeInDown$3 = "_fadeInDown_9a39i_1";
var fadeInLeft$3 = "_fadeInLeft_9a39i_1";
var fadeInRight$3 = "_fadeInRight_9a39i_1";
var fadeOut$3 = "_fadeOut_9a39i_1";
var fadeOutDown$3 = "_fadeOutDown_9a39i_1";
var fadeOutUp$3 = "_fadeOutUp_9a39i_1";
var fadeOutLeft$3 = "_fadeOutLeft_9a39i_1";
var fadeOutRight$3 = "_fadeOutRight_9a39i_1";
var ping$3 = "_ping_9a39i_1";
var blinkBackground$3 = "_blinkBackground_9a39i_1";
var typingBlink$3 = "_typingBlink_9a39i_1";
var ToolIoView_vue_vue_type_style_index_0_lang_module_default = {
	root,
	pane,
	paneTitle,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_9a39i_1",
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
var ToolIoView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolIoView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolIoView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionDetailPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = {
	key: 1,
	"data-test-id": "hitl-request-details"
};
var _hoisted_2 = {
	key: 2,
	"data-test-id": "hitl-response-details"
};
var _hoisted_3 = ["href"];
var _hoisted_4 = {
	key: 3,
	"data-test-id": "workflow-input"
};
var _hoisted_5 = { key: 0 };
var SessionDetailPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionDetailPanel",
	props: {
		item: {},
		projectId: {},
		agentId: {}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const router = useRouter();
		const props = __props;
		const userAttachments = computed(() => {
			if (props.item?.kind !== "user" || !props.item.attachments) return [];
			return props.item.attachments.map((attachment) => ({
				fileId: attachment.id,
				fileName: attachment.fileName,
				mimeType: attachment.mimeType,
				sizeBytes: attachment.sizeBytes
			}));
		});
		const fullExecutionHref = computed(() => {
			if (props.item?.kind !== "workflow" || !props.item.workflowId || !props.item.workflowExecutionId) return "";
			return router.resolve({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId: props.item.workflowId,
					executionId: props.item.workflowExecutionId
				}
			}).href;
		});
		function openFullExecution() {
			if (fullExecutionHref.value) window.open(fullExecutionHref.value, "_blank", "noopener");
		}
		const emit = __emit;
		function formatTimestamp(ts) {
			if (!ts) return "";
			const { date, time } = convertToDisplayDate(new Date(ts).toISOString());
			return `${date} ${time}`;
		}
		/**
		* Card carried by an integration action tool call (any `<platform>_action`),
		* rendered as the interaction preview instead of raw input/output JSON.
		*/
		const actionCard = computed(() => props.item?.kind === "tool" ? parseIntegrationActionCard(ensureParsed(props.item.toolInput))?.card : void 0);
		function ensureParsed(value) {
			if (typeof value === "string") try {
				return JSON.parse(value);
			} catch {
				return value;
			}
			return value;
		}
		function stringifyJson(value) {
			const parsed = ensureParsed(value);
			if (typeof parsed === "string") return parsed;
			return JSON.stringify(parsed, null, 2) ?? String(parsed);
		}
		function stringField(value, key) {
			const parsed = ensureParsed(value);
			if (!isRecord(parsed)) return "";
			const field = parsed[key];
			return typeof field === "string" ? field : "";
		}
		const toolDisplayName = computed(() => {
			if (!props.item || props.item.kind !== "tool" && props.item.kind !== "suspension" && props.item.kind !== "hitl-response") return "";
			return resolveToolNameForDisplay(props.item.toolName, i18n);
		});
		const linkedToolName = computed(() => {
			const item = props.item;
			return item ? linkedToolDisplayName(item, i18n) : "";
		});
		const hitlRequestContent = computed(() => {
			const item = props.item;
			if (!item || item.kind !== "suspension") return void 0;
			const request = ensureParsed(item.hitlRequest);
			if (item.hitlRequestType === "approval" && request !== null && typeof request === "object" && "args" in request) return request.args;
			return request;
		});
		const isSubAgent = computed(() => props.item ? isSubAgentTimelineItem(props.item) : false);
		const subAgentSessionHref = computed(() => {
			if (!isSubAgent.value || !props.projectId || !props.agentId || !props.item) return "";
			const threadId = stringField(props.item.toolOutput, "threadId");
			const requestedAgentId = stringField(props.item.toolInput, "subAgentId");
			if (!threadId || !requestedAgentId) return "";
			return router.resolve({
				name: AGENT_SESSION_DETAIL_VIEW,
				params: {
					projectId: props.projectId,
					agentId: requestedAgentId === "inline" ? props.agentId : requestedAgentId,
					threadId
				}
			}).href;
		});
		const status = computed(() => props.item ? timelineItemStatus(props.item) : void 0);
		/**
		* For an agent (assistant) message the persisted content is the raw response
		* text. When that text is a JSON object/array — i.e. the agent produced
		* structured output — parse it so it can be pretty-printed instead of shown as
		* a raw one-line string. Plain-text answers return `undefined` and keep their
		* markdown rendering.
		*/
		const agentStructuredContent = computed(() => {
			const item = props.item;
			if (!item || item.kind !== "agent") return void 0;
			const content = item.content?.trim();
			if (!content || !content.startsWith("{") && !content.startsWith("[")) return void 0;
			try {
				const parsed = JSON.parse(content);
				return parsed !== null && typeof parsed === "object" ? parsed : void 0;
			} catch {
				return;
			}
		});
		const headerTitle = computed(() => {
			const item = props.item;
			if (!item) return "";
			if (isSubAgent.value) return delegateLabel(i18n, item.subAgentName ?? "");
			if (item.kind === "workflow") return item.workflowName ?? formatToolNameForDisplay(item.toolName);
			if (item.kind === "tool") return toolDisplayName.value;
			if (item.kind === "node") return item.nodeDisplayName ?? formatToolNameForDisplay(item.toolName);
			if (item.kind === "user") return i18n.baseText("agentSessions.timeline.user");
			if (item.kind === "agent") return i18n.baseText("agentSessions.timeline.agent");
			if (item.kind === "execution-error") return executionErrorLabel(item, i18n);
			if (item.kind === "suspension") return item.hitlRequestType === "approval" ? hitlTimelineName(item, i18n) : i18n.baseText(hitlRequestLabelKey(item.hitlRequestType));
			return item.hitlRequestType === "approval" ? hitlTimelineName(item, i18n) : i18n.baseText("agentSessions.timeline.hitlResponse");
		});
		const headerIcon = computed(() => {
			const item = props.item;
			if (!item) return "info";
			if (isSubAgent.value) return "bot";
			if (item.kind === "workflow") return "workflow";
			if (item.kind === "tool") return "wrench";
			if (item.kind === "node") return "box";
			if (item.kind === "user") return "user";
			if (item.kind === "agent") return "bot";
			if (item.kind === "execution-error") return "circle-x";
			if (item.kind === "hitl-response") return "message-square";
			return "clock";
		});
		const isFailed = computed(() => props.item ? isErroredToolCallTimelineItem(props.item) : false);
		/**
		* Error message for a failed tool/workflow/node call. It surfaces a string,
		* nested `toolOutput.error.message`, or MCP `structuredContent.error` / text
		* content when available. Soft-failure payloads are detected in
		* `isErroredToolCallTimelineItem`.
		*/
		const errorMessage = computed(() => {
			const item = props.item;
			if (!item || !isFailed.value) return "";
			const prefix = i18n.baseText("agentSessions.timeline.toolError");
			const message = timelineItemErrorMessage(item);
			return message ? `${prefix}: ${message}` : prefix;
		});
		const workflowFormOutput = computed(() => {
			const o = props.item?.toolOutput;
			if (typeof o !== "object" || o === null) return null;
			const rec = o;
			if (typeof rec.formUrl !== "string") return null;
			return {
				formUrl: rec.formUrl,
				message: typeof rec.message === "string" ? rec.message : ""
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.panel) }, [__props.item ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitle) }, [
				createVNode(unref(N8nIcon_default), {
					icon: headerIcon.value,
					size: 16
				}, null, 8, ["icon"]),
				createVNode(unref(N8nText_default), {
					bold: "",
					class: normalizeClass(_ctx.$style.headerTitleText)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(headerTitle.value), 1)]),
					_: 1
				}, 8, ["class"]),
				subAgentSessionHref.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("agentSessions.subAgent.openSession"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "external-link",
						variant: "ghost",
						size: "small",
						href: subAgentSessionHref.value,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": unref(i18n).baseText("agentSessions.subAgent.openSession"),
						"data-test-id": "open-sub-agent-session"
					}, null, 8, ["href", "aria-label"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true),
				status.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 1,
					theme: status.value.theme,
					size: "xsmall",
					"data-test-id": status.value.kind === "hitl-response" ? "detail-hitl-response-badge" : __props.item.kind === "execution-error" ? "detail-execution-error-badge" : "detail-tool-error-badge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(status.value.labelKey)), 1)]),
					_: 1
				}, 8, ["theme", "data-test-id"])) : createCommentVNode("", true)
			], 2), createVNode(unref(N8nIconButton_default), {
				icon: "x",
				variant: "ghost",
				"data-test-id": "detail-close",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nCard_default), null, {
				default: withCtx(() => [
					__props.item.timestamp ? (openBlock(), createElementBlock("dl", {
						key: 0,
						class: normalizeClass(_ctx.$style.infoRow)
					}, [createBaseVNode("dt", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.created")), 3), createBaseVNode("dd", { class: normalizeClass(_ctx.$style.value) }, toDisplayString(formatTimestamp(__props.item.timestamp)), 3)], 2)) : createCommentVNode("", true),
					__props.item.kind === "suspension" || __props.item.kind === "hitl-response" ? (openBlock(), createElementBlock("dl", {
						key: 1,
						class: normalizeClass(_ctx.$style.infoRow)
					}, [createBaseVNode("dt", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.tool")), 3), createBaseVNode("dd", { class: normalizeClass(_ctx.$style.value) }, toDisplayString(linkedToolName.value), 3)], 2)) : createCommentVNode("", true),
					fullExecutionHref.value ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.executionButton)
					}, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						label: unref(i18n).baseText("agentSessions.workflowLog.openFull"),
						"data-test-id": "open-full-execution",
						onClick: openFullExecution
					}, null, 8, ["label"])], 2)) : createCommentVNode("", true)
				]),
				_: 1
			}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.output) }, [__props.item.kind === "execution-error" ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "danger",
				"data-testid": "execution-error-callout"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(executionErrorMessage)(__props.item, unref(i18n))), 1)]),
				_: 1
			})) : __props.item.kind === "suspension" ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.requestDetails")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(hitlRequestContent.value),
				language: "json"
			}, null, 8, ["code"])])) : __props.item.kind === "hitl-response" ? (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.response")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.hitlResponse),
				language: "json"
			}, null, 8, ["code"])])) : __props.item.kind === "workflow" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [isFailed.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "danger",
				"data-test-id": "workflow-error-callout",
				class: normalizeClass(_ctx.$style.errorCallout)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true), __props.item.workflowExecutionId && __props.item.workflowId ? (openBlock(), createBlock(WorkflowExecutionLogViewer_default, {
				key: `${__props.item.workflowId}:${__props.item.workflowExecutionId}`,
				"workflow-id": __props.item.workflowId,
				"workflow-execution-id": __props.item.workflowExecutionId
			}, null, 8, ["workflow-id", "workflow-execution-id"])) : __props.item.workflowTriggerType === "form" && workflowFormOutput.value ? (openBlock(), createElementBlock("div", {
				key: 2,
				"data-test-id": "wf-form-card",
				class: normalizeClass(_ctx.$style.formCard)
			}, [createBaseVNode("p", null, toDisplayString(workflowFormOutput.value.message), 1), createBaseVNode("a", {
				href: workflowFormOutput.value.formUrl,
				target: "_blank",
				rel: "noopener",
				class: normalizeClass(_ctx.$style.formLink)
			}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.openForm")), 11, _hoisted_3)], 2)) : __props.item.toolSuccess === void 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolInput),
				language: "json",
				copyable: false
			}, null, 8, ["code"])])) : (openBlock(), createElementBlock("div", {
				key: 4,
				"data-test-id": "wf-error-fallback",
				class: normalizeClass(_ctx.$style.errorFallback)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorBanner) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.workflowError")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolOutput),
				language: "json"
			}, null, 8, ["code"])], 2))], 64)) : __props.item.kind === "tool" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [isFailed.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "danger",
				"data-test-id": "tool-error-callout",
				class: normalizeClass(_ctx.$style.errorCallout)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true), actionCard.value ? (openBlock(), createBlock(RichInteractionCard_default, {
				key: 1,
				input: actionCard.value,
				output: ensureParsed(__props.item.toolOutput)
			}, null, 8, ["input", "output"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolInput),
				language: "json"
			}, null, 8, ["code"])]), __props.item.toolOutput !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolOutput),
				language: "json"
			}, null, 8, ["code"])])) : createCommentVNode("", true)], 64))], 64)) : __props.item.kind === "node" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [errorMessage.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "danger",
				"data-test-id": "node-error-callout"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
				_: 1
			})) : createCommentVNode("", true), createVNode(ToolIoView_default, {
				name: (__props.item.nodeDisplayName ?? unref(formatToolNameForDisplay)(__props.item.toolName)) || "node",
				input: __props.item.toolInput,
				output: __props.item.toolOutput,
				"node-parameters": __props.item.nodeParameters,
				success: __props.item.toolOutcome ? __props.item.toolOutcome !== "error" : __props.item.toolSuccess
			}, null, 8, [
				"name",
				"input",
				"output",
				"node-parameters",
				"success"
			])], 64)) : __props.item.kind === "agent" && agentStructuredContent.value !== void 0 ? (openBlock(), createBlock(unref(CodeBlock_default), {
				key: 6,
				code: stringifyJson(agentStructuredContent.value),
				language: "json"
			}, null, 8, ["code"])) : __props.item.kind === "user" || __props.item.kind === "agent" ? (openBlock(), createElementBlock(Fragment, { key: 7 }, [userAttachments.value.length > 0 && __props.projectId && __props.agentId ? (openBlock(), createBlock(AgentChatMessageAttachments_default, {
				key: 0,
				attachments: userAttachments.value,
				"project-id": __props.projectId,
				"agent-id": __props.agentId
			}, null, 8, [
				"attachments",
				"project-id",
				"agent-id"
			])) : createCommentVNode("", true), createVNode(unref(VueMarkdown), {
				source: __props.item.content ?? "",
				class: normalizeClass(_ctx.$style.markdown)
			}, null, 8, ["source", "class"])], 64)) : createCommentVNode("", true)], 2)], 2)], 64)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.selectItem")), 3))], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/SessionDetailPanel.vue?vue&type=style&index=0&lang.module.scss
var panel$1 = "_panel_1bdk6_388";
var header$1 = "_header_1bdk6_395";
var headerTitle = "_headerTitle_1bdk6_407";
var headerTitleText = "_headerTitleText_1bdk6_415";
var errorCallout = "_errorCallout_1bdk6_422";
var container = "_container_1bdk6_426";
var output = "_output_1bdk6_438";
var info = "_info_1bdk6_444";
var infoRow = "_infoRow_1bdk6_452";
var label = "_label_1bdk6_459";
var value = "_value_1bdk6_464";
var executionButton = "_executionButton_1bdk6_470";
var formCard = "_formCard_1bdk6_476";
var formLink = "_formLink_1bdk6_482";
var errorFallback = "_errorFallback_1bdk6_487";
var errorBanner = "_errorBanner_1bdk6_493";
var empty = "_empty_1bdk6_501";
var markdown = "_markdown_1bdk6_507";
var shimmer$2 = "_shimmer_1bdk6_1";
var spin$2 = "_spin_1bdk6_1";
var opacityPulse$2 = "_opacityPulse_1bdk6_1";
var popoverIn$2 = "_popoverIn_1bdk6_1";
var fadeIn$2 = "_fadeIn_1bdk6_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1bdk6_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1bdk6_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1bdk6_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1bdk6_1";
var blurSwapIn$2 = "_blurSwapIn_1bdk6_1";
var blurSwapOut$2 = "_blurSwapOut_1bdk6_1";
var pulseGlow$2 = "_pulseGlow_1bdk6_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1bdk6_1";
var fade$2 = "_fade_1bdk6_1";
var fadeInUp$2 = "_fadeInUp_1bdk6_1";
var fadeInDown$2 = "_fadeInDown_1bdk6_1";
var fadeInLeft$2 = "_fadeInLeft_1bdk6_1";
var fadeInRight$2 = "_fadeInRight_1bdk6_1";
var fadeOut$2 = "_fadeOut_1bdk6_1";
var fadeOutDown$2 = "_fadeOutDown_1bdk6_1";
var fadeOutUp$2 = "_fadeOutUp_1bdk6_1";
var fadeOutLeft$2 = "_fadeOutLeft_1bdk6_1";
var fadeOutRight$2 = "_fadeOutRight_1bdk6_1";
var ping$2 = "_ping_1bdk6_1";
var blinkBackground$2 = "_blinkBackground_1bdk6_1";
var typingBlink$2 = "_typingBlink_1bdk6_1";
var SessionDetailPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: panel$1,
	header: header$1,
	headerTitle,
	headerTitleText,
	errorCallout,
	container,
	output,
	info,
	infoRow,
	label,
	value,
	executionButton,
	formCard,
	formLink,
	errorFallback,
	errorBanner,
	empty,
	markdown,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1bdk6_1",
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
var SessionDetailPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionDetailPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionDetailPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentSessionTimelinePanel.vue?vue&type=script&setup=true&lang.ts
var AgentSessionTimelinePanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelinePanel",
	props: {
		projectId: {},
		agentId: {},
		threadId: {}
	},
	emits: ["loaded"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const sessionsStore = useAgentSessionsStore();
		const pushStore = usePushConnectionStore();
		const activeElement = useActiveElement();
		const panel = useTemplateRef("panel");
		const documentVisibility = useDocumentVisibility();
		const projectId = computed(() => props.projectId);
		const executions = ref([]);
		const loading = ref(true);
		const selectedIndex = ref(null);
		const highlightedIndex = ref(null);
		const selectedFilters = ref(/* @__PURE__ */ new Set());
		const searchQuery = ref("");
		let threadDetailRequestId = 0;
		let refreshPending = false;
		let removePushListener;
		let activeRequest;
		const baseItems = computed(() => flattenExecutionsToTimelineItems(executions.value));
		const { subAgentNameById } = useSubAgentNames(projectId, () => baseItems.value.some(isSubAgentTimelineItem));
		const items = computed(() => baseItems.value.map((item) => {
			if (!isSubAgentTimelineItem(item)) return item;
			const name = resolveSubAgentName(item.toolInput, subAgentNameById.value);
			return name ? {
				...item,
				subAgentName: name
			} : item;
		}));
		const idleRanges = computed(() => computeIdleRanges(items.value));
		const bounds = computed(() => sessionBounds(items.value));
		function labelForKey(key) {
			switch (key) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "execution-error": return i18n.baseText("agentSessions.timeline.executionFailed");
				case "execution-interrupted": return i18n.baseText("agentSessions.timeline.executionInterrupted");
				case "suspension": return i18n.baseText("agentSessions.timeline.hitlRequest");
				case "hitl-response": return i18n.baseText("agentSessions.timeline.hitlResponse");
				case "approval-requested": return i18n.baseText("agentSessions.timeline.approvalRequested");
				case "hitl-requested": return i18n.baseText("agentSessions.timeline.hitlRequested");
				case "wait-requested": return i18n.baseText("agentSessions.timeline.waitRequested");
				case "approved": return i18n.baseText("agentSessions.timeline.approved");
				case "responded": return i18n.baseText("agentSessions.timeline.responseReceived");
				case "declined": return i18n.baseText("agentSessions.timeline.declined");
				case "error": return i18n.baseText("agentSessions.timeline.error");
				default: return key;
			}
		}
		const STATUS_FILTER_OPTIONS = [
			{
				key: "approved",
				badgeTheme: "success"
			},
			{
				key: "declined",
				badgeTheme: "default"
			},
			{
				key: "error",
				badgeTheme: "danger"
			}
		];
		const filterOptions = computed(() => {
			const kindCounts = /* @__PURE__ */ new Map();
			const statusCounts = /* @__PURE__ */ new Map();
			for (const item of items.value) {
				if (item.kind !== "execution-error") kindCounts.set(item.kind, (kindCounts.get(item.kind) ?? 0) + 1);
				const statusKey = itemStatusFilterKey(item);
				if (statusKey) statusCounts.set(statusKey, (statusCounts.get(statusKey) ?? 0) + 1);
			}
			return [...Array.from(kindCounts.entries()).map(([key, count]) => ({
				key,
				label: labelForKey(key),
				presentation: "swatch",
				color: chartBlockColor(key),
				count
			})), ...STATUS_FILTER_OPTIONS.flatMap(({ key, badgeTheme }) => {
				const count = statusCounts.get(key);
				if (!count) return [];
				return [{
					key,
					label: labelForKey(key),
					presentation: "badge",
					badgeTheme,
					count
				}];
			})];
		});
		const selectedItem = computed(() => selectedIndex.value !== null ? items.value[selectedIndex.value] ?? null : null);
		const visibleItemIndexes = computed(() => filteredTimelineItemIndexes(items.value, selectedFilters.value, searchQuery.value, labelForKey));
		function moveSelectedIndex(direction) {
			const indexes = visibleItemIndexes.value;
			if (indexes.length === 0) return;
			if (highlightedIndex.value === null || !indexes.includes(highlightedIndex.value)) {
				highlightedIndex.value = direction === 1 ? indexes[0] : indexes[indexes.length - 1];
				return;
			}
			const nextVisibleIndex = indexes.indexOf(highlightedIndex.value) + direction;
			if (nextVisibleIndex < 0 || nextVisibleIndex >= indexes.length) return;
			highlightedIndex.value = indexes[nextVisibleIndex];
		}
		function moveSelectedIndexToBoundary(direction) {
			const indexes = visibleItemIndexes.value;
			if (indexes.length === 0) return;
			highlightedIndex.value = direction === 1 ? indexes[indexes.length - 1] : indexes[0];
		}
		function selectTimelineItem(index) {
			selectedIndex.value = index;
			highlightedIndex.value = index;
		}
		function shouldHandleShortcut() {
			const element = activeElement.value;
			if (!(element instanceof Element)) return false;
			return panel.value?.contains(element) === true && !shouldIgnoreCanvasShortcut(element);
		}
		function timelineItemKey(item) {
			return `${item.executionId}:${item.kind}:${item.toolCallId ?? item.timestamp}`;
		}
		function onKeyDown(event) {
			if (!shouldHandleShortcut()) return;
			if (event.key === "Escape") {
				if (selectedIndex.value !== null || highlightedIndex.value !== null) {
					event.preventDefault();
					selectTimelineItem(null);
				}
				return;
			}
			if (event.key === "ArrowDown") {
				event.preventDefault();
				if (event.metaKey) moveSelectedIndexToBoundary(1);
				else moveSelectedIndex(1);
			} else if (event.key === "ArrowUp") {
				event.preventDefault();
				if (event.metaKey) moveSelectedIndexToBoundary(-1);
				else moveSelectedIndex(-1);
			}
		}
		useEventListener(document, "keydown", onKeyDown);
		function onKeyUp(event) {
			if (!shouldHandleShortcut()) return;
			if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
			if (highlightedIndex.value === selectedIndex.value) return;
			event.preventDefault();
			selectTimelineItem(highlightedIndex.value);
		}
		useEventListener(document, "keyup", onKeyUp);
		function loadThreadDetail() {
			executions.value = [];
			selectedFilters.value = /* @__PURE__ */ new Set();
			searchQuery.value = "";
			selectTimelineItem(null);
			loading.value = true;
			emit("loaded", null);
			refreshPending = false;
			startThreadDetailRequest(true);
		}
		function threadIdentity() {
			return `${props.projectId}:${props.agentId}:${props.threadId}`;
		}
		async function fetchThreadDetail(initial) {
			const currentProjectId = props.projectId;
			const currentAgentId = props.agentId;
			const currentThreadId = props.threadId;
			const identity = threadIdentity();
			const requestId = ++threadDetailRequestId;
			try {
				const result = await sessionsStore.getThreadDetail(currentProjectId, currentAgentId, currentThreadId);
				if (requestId !== threadDetailRequestId || identity !== threadIdentity()) return;
				const selectedKey = !initial && selectedItem.value ? timelineItemKey(selectedItem.value) : null;
				executions.value = result.executions;
				if (selectedKey) {
					const nextIndex = items.value.findIndex((item) => timelineItemKey(item) === selectedKey);
					selectTimelineItem(nextIndex >= 0 ? nextIndex : null);
				}
				emit("loaded", result);
			} catch (error) {
				if (requestId !== threadDetailRequestId) return;
				if (initial) toast.showError(error, i18n.baseText("agentSessions.showError.load"));
			} finally {
				if (initial && requestId === threadDetailRequestId) loading.value = false;
			}
		}
		function startThreadDetailRequest(initial) {
			const identity = threadIdentity();
			const request = {
				identity,
				promise: fetchThreadDetail(initial)
			};
			activeRequest = request;
			request.promise.finally(() => {
				if (activeRequest !== request) return;
				activeRequest = void 0;
				if (refreshPending && identity === threadIdentity()) {
					refreshPending = false;
					refreshThreadDetail();
				}
			});
		}
		function refreshThreadDetail() {
			if (activeRequest?.identity === threadIdentity()) {
				refreshPending = true;
				return;
			}
			startThreadDetailRequest(false);
		}
		function onPushMessage(event) {
			if (event.type === "agentExecutionUpdated" && event.data.projectId === props.projectId && event.data.agentId === props.agentId && event.data.threadId === props.threadId) refreshThreadDetail();
		}
		watch(documentVisibility, (visibility) => {
			if (visibility === "visible") refreshThreadDetail();
		});
		watch(() => pushStore.isConnected, (isConnected, wasConnected) => {
			if (isConnected && !wasConnected) refreshThreadDetail();
		});
		onMounted(() => {
			pushStore.pushConnect();
			removePushListener = pushStore.addEventListener(onPushMessage);
		});
		onBeforeUnmount(() => {
			threadDetailRequestId++;
			refreshPending = false;
			removePushListener?.();
			pushStore.pushDisconnect();
		});
		watch([
			() => props.projectId,
			() => props.agentId,
			() => props.threadId
		], loadThreadDetail, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "panel",
				ref: panel,
				class: normalizeClass(_ctx.$style.panel)
			}, [
				!loading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.subHeader)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.search) }, [createVNode(unref(Input_default), {
					modelValue: searchQuery.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
					size: "medium",
					placeholder: unref(i18n).baseText("agentSessions.timeline.searchPlaceholder"),
					clearable: ""
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "search",
						size: 12
					})]),
					_: 1
				}, 8, ["modelValue", "placeholder"])], 2), createVNode(SessionEventFilter_default, {
					available: filterOptions.value,
					selected: selectedFilters.value,
					onUpdate: _cache[1] || (_cache[1] = (next) => selectedFilters.value = next)
				}, null, 8, ["available", "selected"])], 2)) : createCommentVNode("", true),
				!loading.value && items.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.chartRow)
				}, [createVNode(SessionTimelineChart_default, {
					items: items.value,
					"idle-ranges": idleRanges.value,
					"session-start": bounds.value.start,
					"session-end": bounds.value.end,
					"visible-kinds": selectedFilters.value,
					"selected-index": highlightedIndex.value,
					onSelect: selectTimelineItem
				}, null, 8, [
					"items",
					"idle-ranges",
					"session-start",
					"session-end",
					"visible-kinds",
					"selected-index"
				])], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.panels) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tablePanel) }, [loading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, toDisplayString(unref(i18n).baseText("generic.loadingEllipsis")), 3)) : (openBlock(), createBlock(SessionTimelineTable_default, {
					key: 1,
					items: items.value,
					"idle-ranges": idleRanges.value,
					"selected-index": highlightedIndex.value,
					"visible-kinds": selectedFilters.value,
					"search-query": searchQuery.value,
					onSelect: selectTimelineItem
				}, null, 8, [
					"items",
					"idle-ranges",
					"selected-index",
					"visible-kinds",
					"search-query"
				]))], 2), createVNode(Transition, { name: "session-detail-panel" }, {
					default: withCtx(() => [selectedItem.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.detailPanel)
					}, [createVNode(SessionDetailPanel_default, {
						item: selectedItem.value,
						"project-id": props.projectId,
						"agent-id": props.agentId,
						onClose: _cache[2] || (_cache[2] = ($event) => selectTimelineItem(null))
					}, null, 8, [
						"item",
						"project-id",
						"agent-id"
					])], 2)) : createCommentVNode("", true)]),
					_: 1
				})], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentSessionTimelinePanel.vue?vue&type=style&index=0&lang.module.scss
var panel = "_panel_yi2it_401";
var subHeader = "_subHeader_yi2it_410";
var search = "_search_yi2it_420";
var chartRow = "_chartRow_yi2it_425";
var panels = "_panels_yi2it_432";
var tablePanel = "_tablePanel_yi2it_438";
var detailPanel = "_detailPanel_yi2it_446";
var loading = "_loading_yi2it_483";
var shimmer$1 = "_shimmer_yi2it_1";
var spin$1 = "_spin_yi2it_1";
var opacityPulse$1 = "_opacityPulse_yi2it_1";
var popoverIn$1 = "_popoverIn_yi2it_1";
var fadeIn$1 = "_fadeIn_yi2it_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_yi2it_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_yi2it_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_yi2it_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_yi2it_1";
var blurSwapIn$1 = "_blurSwapIn_yi2it_1";
var blurSwapOut$1 = "_blurSwapOut_yi2it_1";
var pulseGlow$1 = "_pulseGlow_yi2it_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_yi2it_1";
var fade$1 = "_fade_yi2it_1";
var fadeInUp$1 = "_fadeInUp_yi2it_1";
var fadeInDown$1 = "_fadeInDown_yi2it_1";
var fadeInLeft$1 = "_fadeInLeft_yi2it_1";
var fadeInRight$1 = "_fadeInRight_yi2it_1";
var fadeOut$1 = "_fadeOut_yi2it_1";
var fadeOutDown$1 = "_fadeOutDown_yi2it_1";
var fadeOutUp$1 = "_fadeOutUp_yi2it_1";
var fadeOutLeft$1 = "_fadeOutLeft_yi2it_1";
var fadeOutRight$1 = "_fadeOutRight_yi2it_1";
var ping$1 = "_ping_yi2it_1";
var blinkBackground$1 = "_blinkBackground_yi2it_1";
var typingBlink$1 = "_typingBlink_yi2it_1";
var AgentSessionTimelinePanel_vue_vue_type_style_index_0_lang_module_default = {
	panel,
	subHeader,
	search,
	chartRow,
	panels,
	tablePanel,
	detailPanel,
	loading,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_yi2it_1",
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
var AgentSessionTimelinePanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionTimelinePanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionTimelinePanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentPreviewDock.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"aria-label",
	"aria-hidden",
	"inert",
	"data-preview-layout"
];
var PreviewLayout = /* @__PURE__ */ function(PreviewLayout) {
	PreviewLayout["Docked"] = "docked";
	PreviewLayout["Fullpage"] = "fullpage";
	return PreviewLayout;
}(PreviewLayout || {});
var OPEN_IN_NEW_TAB = "open-in-new-tab";
var AgentPreviewDock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPreviewDock",
	props: {
		sessionTitle: {},
		sessionOptions: {},
		hasSession: { type: Boolean },
		initialized: { type: Boolean },
		projectId: {},
		agentId: {},
		agent: {},
		localConfig: {},
		connectedTriggers: {},
		isOpen: { type: Boolean },
		effectiveSessionId: {},
		initialPrompt: {},
		canSendToAssistant: { type: Boolean },
		beforeSend: { type: Function }
	},
	emits: [
		"view-trace",
		"new-session",
		"session-select",
		"close",
		"continue-loaded",
		"open-build",
		"send-to-assistant"
	],
	setup(__props, { emit: __emit }) {
		const dockView = ref("chat");
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const dock = useTemplateRef("dock");
		const { isEnabled: isLangSmithExportEnabled, isExporting, sendSession } = useAgentSessionLangSmithExport();
		const previewChatPage = useTemplateRef("previewChatPage");
		const storedLayout = useStorage("N8N_AGENT_PREVIEW_LAYOUT", PreviewLayout.Docked);
		const layout = computed(() => storedLayout.value === PreviewLayout.Fullpage ? PreviewLayout.Fullpage : PreviewLayout.Docked);
		const sessionDropdownOptions = computed(() => props.sessionOptions.map((option) => ({
			id: option.id,
			label: option.label ?? option.title,
			disabled: option.disabled,
			data: { when: option.when }
		})));
		const layoutOptions = computed(() => [
			{
				id: PreviewLayout.Docked,
				label: i18n.baseText("agents.builder.preview.layout.docked"),
				checked: layout.value === PreviewLayout.Docked,
				icon: {
					type: "icon",
					value: "panel-right"
				}
			},
			{
				id: PreviewLayout.Fullpage,
				label: i18n.baseText("agents.builder.preview.layout.fullpage"),
				checked: layout.value === PreviewLayout.Fullpage,
				icon: {
					type: "icon",
					value: "maximize-2"
				}
			},
			{
				id: OPEN_IN_NEW_TAB,
				label: i18n.baseText("agents.builder.preview.layout.openInNewTab"),
				icon: {
					type: "icon",
					value: "external-link"
				},
				divided: true
			}
		]);
		function getLayoutIcon() {
			return layout.value === PreviewLayout.Fullpage ? "maximize-2" : "panel-right";
		}
		function getLayoutAriaLabel() {
			if (layout.value === PreviewLayout.Fullpage) return i18n.baseText("agents.builder.preview.layout.fullpage.ariaLabel");
			return i18n.baseText("agents.builder.preview.layout.docked.ariaLabel");
		}
		function viewTrace() {
			if (!props.hasSession || !props.effectiveSessionId) return;
			if (layout.value === PreviewLayout.Fullpage) {
				dockView.value = "timeline";
				return;
			}
			emit("view-trace");
		}
		function showChat() {
			dockView.value = "chat";
		}
		function exportSession() {
			if (!props.hasSession || !props.effectiveSessionId) return;
			sendSession({
				projectId: props.projectId,
				agentId: props.agentId,
				threadId: props.effectiveSessionId
			});
		}
		function createNewSession() {
			showChat();
			emit("new-session");
		}
		function close() {
			emit("close");
		}
		function setLayout(nextLayout) {
			if (nextLayout === OPEN_IN_NEW_TAB) {
				const route = router.resolve({
					name: AGENT_PREVIEW_VIEW,
					params: {
						projectId: props.projectId,
						agentId: props.agentId
					},
					query: { [CONTINUE_SESSION_ID_PARAM]: props.effectiveSessionId }
				});
				window.open(route.href, "_blank", "noopener");
			} else if (nextLayout === PreviewLayout.Docked || nextLayout === PreviewLayout.Fullpage) storedLayout.value = nextLayout;
		}
		function isFocusWithinDock() {
			return dock.value?.contains(document.activeElement) === true;
		}
		watch([
			layout,
			() => props.isOpen,
			() => props.hasSession
		], function resetDockView([nextLayout, isOpen, hasSession]) {
			if (nextLayout !== PreviewLayout.Fullpage || !isOpen || !hasSession) showChat();
		});
		watch([
			() => props.isOpen,
			() => props.initialized,
			() => props.effectiveSessionId
		], async function focusPreviewInput([isOpen, initialized, sessionId]) {
			if (!isOpen || !initialized || !sessionId) return;
			await nextTick();
			/** preventScroll makes sure that the content doesn't jump when transitioning */
			previewChatPage.value?.focusInput({ preventScroll: true });
		}, { flush: "post" });
		useKeybindings({
			"ctrl+shift+;": createNewSession,
			Escape: {
				disabled: () => !isFocusWithinDock(),
				run: close
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				ref_key: "dock",
				ref: dock,
				class: normalizeClass([_ctx.$style.dock, { [_ctx.$style.open]: props.isOpen }]),
				"aria-label": unref(i18n).baseText("agents.builder.preview.button"),
				"aria-hidden": !props.isOpen,
				inert: !props.isOpen,
				"data-preview-layout": layout.value,
				"data-testid": "agent-preview-dock"
			}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.dockInner, { [_ctx.$style.fullpage]: layout.value === PreviewLayout.Fullpage }]) }, [
				createBaseVNode("header", {
					class: normalizeClass(_ctx.$style.header),
					"data-testid": "agent-preview-dock-header"
				}, [createVNode(unref(DropdownMenu_default), {
					items: sessionDropdownOptions.value,
					placement: "bottom-start",
					"extra-popper-class": _ctx.$style.sessionDropdownMenu,
					"data-testid": "agent-preview-session-switcher",
					onSelect: _cache[0] || (_cache[0] = ($event) => emit("session-select", $event))
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						class: normalizeClass(_ctx.$style.sessionTitle),
						"aria-label": unref(i18n).baseText("agentSessions.sessionName"),
						"data-testid": "agent-preview-session-title"
					}, {
						default: withCtx(() => [
							createVNode(AgentPersonalisationIcon_default, {
								personalisation: props.localConfig?.personalisation ?? props.agent?.schema?.personalisation,
								size: 20
							}, null, 8, ["personalisation"]),
							createBaseVNode("span", { class: normalizeClass(_ctx.$style.sessionTitleLabel) }, toDisplayString(props.sessionTitle), 3),
							createVNode(unref(N8nIcon_default), {
								icon: "chevron-down",
								color: "text-light",
								size: 12
							})
						]),
						_: 1
					}, 8, ["class", "aria-label"])]),
					"item-label": withCtx(({ item }) => [createVNode(unref(N8nText_default), {
						bold: "",
						class: normalizeClass(_ctx.$style.sessionDropdownName)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
						_: 2
					}, 1032, ["class"])]),
					"item-trailing": withCtx(({ item }) => [item.data?.when ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.sessionDropdownDate)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.data.when), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["items", "extra-popper-class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
					props.hasSession && props.effectiveSessionId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText(dockView.value === "chat" ? "agents.builder.preview.viewSession" : "agents.builder.preview.showChat"),
						placement: "bottom",
						"show-after": unref(500),
						"data-testid": "agent-preview-view-session-tooltip"
					}, {
						default: withCtx(() => [dockView.value === "chat" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 0,
							icon: "list-tree",
							variant: "ghost",
							size: "small",
							"icon-size": "large",
							"aria-label": unref(i18n).baseText("agents.builder.preview.viewSession"),
							"data-testid": "agent-preview-view-session-btn",
							onClick: viewTrace
						}, null, 8, ["aria-label"])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 1,
							icon: "message-circle",
							variant: "ghost",
							size: "small",
							"icon-size": "large",
							"aria-label": unref(i18n).baseText("agents.builder.preview.showChat"),
							"data-testid": "agent-preview-show-chat-btn",
							onClick: showChat
						}, null, 8, ["aria-label"]))]),
						_: 1
					}, 8, ["content", "show-after"])) : createCommentVNode("", true),
					unref(isLangSmithExportEnabled) && props.hasSession && props.effectiveSessionId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						content: unref(i18n).baseText("agentSessions.langsmithExport.button"),
						placement: "bottom",
						"show-after": unref(500),
						"data-testid": "agent-preview-langsmith-export-tooltip"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "bug",
							variant: "ghost",
							size: "small",
							"icon-size": "large",
							loading: unref(isExporting),
							"aria-label": unref(i18n).baseText("agentSessions.langsmithExport.button"),
							"data-testid": "agent-preview-langsmith-export-btn",
							onClick: exportSession
						}, null, 8, ["loading", "aria-label"])]),
						_: 1
					}, 8, ["content", "show-after"])) : createCommentVNode("", true),
					createVNode(KeyboardShortcutTooltip_default, {
						placement: "bottom",
						label: unref(i18n).baseText("agents.builder.chat.newChat.label"),
						shortcut: {
							metaKey: true,
							shiftKey: true,
							keys: [";"]
						}
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "message-circle-plus",
							variant: "ghost",
							size: "small",
							"icon-size": "large",
							"aria-label": unref(i18n).baseText("agents.builder.chat.newChat.label"),
							"data-testid": "agent-preview-new-chat-btn",
							onClick: createNewSession
						}, null, 8, ["aria-label"])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nTooltip_default), {
						placement: "bottom",
						content: unref(i18n).baseText("agents.builder.preview.layout.change")
					}, {
						default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
							items: layoutOptions.value,
							placement: "bottom-end",
							onSelect: setLayout
						}, {
							trigger: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								icon: getLayoutIcon(),
								variant: "ghost",
								size: "small",
								"icon-size": "large",
								"aria-label": getLayoutAriaLabel(),
								"data-testid": "agent-preview-layout-btn"
							}, null, 8, ["icon", "aria-label"])]),
							_: 1
						}, 8, ["items"])]),
						_: 1
					}, 8, ["content"])
				], 2)], 2),
				withDirectives(createVNode(AgentPreviewChatPage_default, {
					ref_key: "previewChatPage",
					ref: previewChatPage,
					initialized: props.initialized,
					"project-id": props.projectId,
					"agent-id": props.agentId,
					agent: props.agent,
					"local-config": props.localConfig,
					"connected-triggers": props.connectedTriggers,
					"effective-session-id": props.effectiveSessionId,
					"initial-prompt": props.initialPrompt,
					"can-send-to-assistant": props.canSendToAssistant,
					"before-send": props.beforeSend,
					layout: "dock",
					onContinueLoaded: _cache[1] || (_cache[1] = ($event) => emit("continue-loaded", $event)),
					onOpenBuild: _cache[2] || (_cache[2] = ($event) => emit("open-build")),
					onSendToAssistant: _cache[3] || (_cache[3] = ($event) => emit("send-to-assistant", $event))
				}, null, 8, [
					"initialized",
					"project-id",
					"agent-id",
					"agent",
					"local-config",
					"connected-triggers",
					"effective-session-id",
					"initial-prompt",
					"can-send-to-assistant",
					"before-send"
				]), [[vShow, dockView.value === "chat"]]),
				dockView.value === "timeline" && props.effectiveSessionId ? (openBlock(), createBlock(AgentSessionTimelinePanel_default, {
					key: 0,
					"project-id": props.projectId,
					"agent-id": props.agentId,
					"thread-id": props.effectiveSessionId,
					"data-testid": "agent-preview-session-timeline"
				}, null, 8, [
					"project-id",
					"agent-id",
					"thread-id"
				])) : createCommentVNode("", true)
			], 2)], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentPreviewDock.vue?vue&type=style&index=0&lang.module.scss
var dock = "_dock_hm7x0_388";
var fullpage = "_fullpage_hm7x0_400";
var dockInner = "_dockInner_hm7x0_404";
var open = "_open_hm7x0_417";
var header = "_header_hm7x0_433";
var sessionTitle = "_sessionTitle_hm7x0_441";
var sessionTitleLabel = "_sessionTitleLabel_hm7x0_448";
var sessionDropdownName = "_sessionDropdownName_hm7x0_449";
var sessionDropdownMenu = "_sessionDropdownMenu_hm7x0_457";
var sessionDropdownDate = "_sessionDropdownDate_hm7x0_465";
var actions = "_actions_hm7x0_473";
var shimmer = "_shimmer_hm7x0_1";
var spin = "_spin_hm7x0_1";
var opacityPulse = "_opacityPulse_hm7x0_1";
var popoverIn = "_popoverIn_hm7x0_1";
var fadeIn = "_fadeIn_hm7x0_1";
var collapsibleSlideDown = "_collapsibleSlideDown_hm7x0_1";
var collapsibleSlideUp = "_collapsibleSlideUp_hm7x0_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_hm7x0_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_hm7x0_1";
var blurSwapIn = "_blurSwapIn_hm7x0_1";
var blurSwapOut = "_blurSwapOut_hm7x0_1";
var pulseGlow = "_pulseGlow_hm7x0_1";
var pulseGlowDelayed = "_pulseGlowDelayed_hm7x0_1";
var fade = "_fade_hm7x0_1";
var fadeInUp = "_fadeInUp_hm7x0_1";
var fadeInDown = "_fadeInDown_hm7x0_1";
var fadeInLeft = "_fadeInLeft_hm7x0_1";
var fadeInRight = "_fadeInRight_hm7x0_1";
var fadeOut = "_fadeOut_hm7x0_1";
var fadeOutDown = "_fadeOutDown_hm7x0_1";
var fadeOutUp = "_fadeOutUp_hm7x0_1";
var fadeOutLeft = "_fadeOutLeft_hm7x0_1";
var fadeOutRight = "_fadeOutRight_hm7x0_1";
var ping = "_ping_hm7x0_1";
var blinkBackground = "_blinkBackground_hm7x0_1";
var typingBlink = "_typingBlink_hm7x0_1";
var AgentPreviewDock_vue_vue_type_style_index_0_lang_module_default = {
	dock,
	fullpage,
	dockInner,
	open,
	header,
	sessionTitle,
	sessionTitleLabel,
	sessionDropdownName,
	sessionDropdownMenu,
	sessionDropdownDate,
	actions,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_hm7x0_1",
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
var AgentPreviewDock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPreviewDock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPreviewDock_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AiThinkingBlock_default as a, useAgentBuilderSession as c, deriveAgentStatus as d, AiActivityStep_default as f, AiActivityStepButton_default as h, AgentPreviewChatPage_default as i, useRelativeTimestamp as l, AiActivityStepChevron_default as m, AgentSessionTimelinePanel_default as n, AgentChatToolSteps_default as o, AiActivityStepResultSection_default as p, useAgentSessionLangSmithExport as r, AiReasoningBlock_default as s, AgentPreviewDock_default as t, buildAgentConfigFingerprint as u };
