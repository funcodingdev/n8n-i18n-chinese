import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Ft as readonly, Gt as unref, It as ref, K as onBeforeMount, N as defineComponent, O as createSlots, R as inject, S as computed, T as createCommentVNode, U as mergeProps, Ut as toValue, W as nextTick, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, c as useCssModule, gt as watch, h as withModifiers, j as createVNode, jt as isRef, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-xmGSq23Y.js";
import { t as useI18n$1 } from "./useI18n-B6I8WRBF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { d as useDocumentVisibility, y as useLocalStorage } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { n as DropdownMenuItem_default } from "./DropdownMenu-Dut73qNY.js";
import { i as DialogDescription_default, r as DialogHeader_default, t as DialogTitle_default } from "./DialogTitle-vvfpWO6w.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nPopover_default } from "./N8nPopover-C7WJvH2j.js";
import { t as N8nInlineTextEdit_default } from "./N8nInlineTextEdit-CPP1fNIO.js";
import { t as N8nHoverCard_default } from "./N8nHoverCard-fYCOl2x2.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { a as useWorkflowSaveStore, c as useWorkflowHistoryStore, r as useWorkflowSaving } from "./builder.store-C5-hGNyx.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { t as N8nActionDropdown_default } from "./N8nActionDropdown-DC_W9Qy-.js";
import { n as AVATAR_SIZES, t as N8nAvatar_default } from "./N8nAvatar-BN7Hde99.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-BmYlbe2o.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as N8nTag_default } from "./N8nTag-BOt_Vn3b.js";
import { Hn as N8nSegmentControl_default } from "./expressions-D0CrLSIZ.js";
import { D as injectWorkflowDocumentStore, Hn as getActivatableTriggerNodes, T as createWorkflowDocumentId, V as useNodeTypesStore, bn as ProjectTypes, en as useWorkflowId, k as useWorkflowDocumentStore, ln as injectNDVStoreIfProvided, nn as useTagsStore, pn as ResourceType, t as useWorkflowsStore, vn as useProjectsStore, yn as useSourceControlStore } from "./workflows.store-Bo6ZgF_O.js";
import { t as N8nSpinner_default } from "./N8nSpinner-Bv5yOPi4.js";
import { t as N8nSwitch_default } from "./N8nSwitch-B0sTLFRo.js";
import { t as N8nScrollArea_default } from "./N8nScrollArea-EbE2ruUr.js";
import { t as N8nUserInfo_default } from "./N8nUserInfo-CeS-_dpV.js";
import { t as N8nUserSelect_default } from "./N8nUserSelect-DypL4SNl.js";
import { Si as jsonParse, va as getResourcePermissions } from "./src-C3aqUyDp.js";
import { t as Dialog_default } from "./Dialog-DrlytcGB.js";
import { t as DialogFooter_default } from "./DialogFooter-AKzGUZKF.js";
import { Yn as ResponseError, fr as defineStore, t as useRootStore } from "./useRootStore-Bapf3biO.js";
import { t as useSettingsStore } from "./settings.store-1Fkv1cxl.js";
import { t as useUsersStore } from "./users.store-DKz7Lfdh.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import { Ci as WORKFLOW_SHARE_MODAL_KEY, E as TIME_SAVED_DOCS_URL, Jr as DUPLICATE_MODAL_KEY, Qi as LOCAL_STORAGE_WORKFLOW_REVIEW_SUBMITTED_DIALOG_HIDDEN, Rr as MAIN_HEADER_TABS, Si as WORKFLOW_SETTINGS_MODAL_KEY, Xi as LOCAL_STORAGE_WORKFLOW_REVIEW_PUBLISH_CHOICE_HIDDEN, Zi as LOCAL_STORAGE_WORKFLOW_REVIEW_REQUIRED_BY_WORKFLOW, _ as ERROR_WORKFLOW_DOCS_URL, bi as WORKFLOW_HISTORY_VERSION_UNPUBLISH, ei as IMPORT_WORKFLOW_URL_MODAL_KEY, ha as WorkflowDocumentStoreKey, lo as WORKFLOW_MENU_ACTIONS, mi as WORKFLOW_DESCRIPTION_MODAL_KEY, no as EnterpriseEditionFeature, pi as WORKFLOW_ACTIVE_MODAL_KEY, t as AutoSaveState, v as EVALUATIONS_DOCS_URL, vi as WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY, xi as WORKFLOW_PUBLISH_MODAL_KEY, zr as WORKFLOW_HISTORY_PUBLISH_TIMELINE_TAB } from "./constants-DPRLSskW.js";
import { n as useFavoritesStore, t as useWorkflowsListStore } from "./workflowsList.store-AYTNm4a5.js";
import { n as useUIStore } from "./ui.store-BhVgRazX.js";
import { t as hasPermission } from "./permissions-DkZpSVVu.js";
import { t as useEvaluationStore } from "./evaluation.store-Ilr0RB0T.js";
import { n as useDocumentTitle } from "./useDocumentTitle-GktmjxG4.js";
import { t as require_FileSaver_min } from "./FileSaver.min-EXdbaoeR.js";
import { t as nodeViewEventBus } from "./event-bus-a2R-CWx4.js";
import { t as useExecutionsStore } from "./executions.store-FAve0q-3.js";
import { t as usePushConnectionStore } from "./pushConnection.store-j5b4GGy-.js";
import { t as useDocumentVisibility$1 } from "./useDocumentVisibility-oMVAC2C1.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-DhMrSyt3.js";
import { t as useCollaborationStore } from "./collaboration.store-BQBCGWmm.js";
import { t as TimeAgo_default } from "./TimeAgo-DdOhC6Ae.js";
import { t as useFoldersStore } from "./folders.store-DAcMs2ra.js";
import { n as CharacterCount_default, r as useMoveResourceToProjectToast, t as WorkflowVersionForm_default } from "./WorkflowVersionForm-UskpQrXc.js";
import { n as telemetry } from "./telemetry-Cy6THkXB.js";
import { i as getLastPublishedVersion, o as getVersionLabel, r as generateVersionLabelFromId } from "./utils-WJZUWuRp.js";
import { t as router } from "./router-D_gZGXDQ.js";
import { t as useKeybindings } from "./useKeybindings-u3L03Pvp.js";
import { t as useWorkflowActivate } from "./useWorkflowActivate-BMDC-jQT.js";
import { l as MCP_SETTINGS_VIEW, o as MCP_DOCS_PAGE_URL } from "./mcp.constants-DyvBgGQm.js";
import { t as useWorkflowReviewsFeature } from "./useWorkflowReviewsFeature-CDZD5zMX.js";
import { r as WORKFLOW_REVIEW_REQUESTS_VIEW, t as REVIEW_INBOX_QUERY_PARAM } from "./constants-552-xuTF.js";
import { t as usePushConnection } from "./usePushConnection-B215qWQz.js";
import { n as FolderBreadcrumbs_default, t as useLatestFetch } from "./useLatestFetch-BMnKiwqv.js";
import { t as ConnectionTracker_default } from "./ConnectionTracker-Y6GuhRCw.js";
import { t as useWorkflowEvaluationState } from "./useWorkflowEvaluationState-BDwCUz8E.js";
import { a as createWorkflowReviewRequest, f as fetchWorkflowReviewRequests, n as formatUserDisplayName, p as updateWorkflowReviewRequestVersion, s as fetchEligibleReviewers } from "./workflowReviews.utils-DTsGe9Ld.js";
import "./usePushConnection-BGrInR2F.js";
//#region ../@n8n/design-system/src/components/N8nSuggestedActions/SuggestedActions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["data-action-id", "onClick"];
var _hoisted_2$2 = { key: 0 };
var SuggestedActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSuggestedActions",
	__name: "SuggestedActions",
	props: {
		title: {},
		actions: {},
		open: { type: Boolean },
		popoverAlignment: { default: void 0 },
		popoverSideOffset: { default: void 0 },
		notice: { default: void 0 },
		hideTrigger: { type: Boolean }
	},
	emits: ["action-click", "update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { t } = useI18n$1();
		const completedCount = computed(() => props.actions.filter((action) => action.completed).length);
		const handleActionClick = (action) => {
			if (!action.completed) emit("action-click", action.id);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: __props.open,
				width: "360px",
				"max-height": "500px",
				align: __props.popoverAlignment,
				"side-offset": __props.popoverSideOffset,
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => _ctx.$emit("update:open", $event))
			}, {
				trigger: withCtx(() => [__props.hideTrigger ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.hiddenTrigger)
				}, null, 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([_ctx.$style.triggerContainer, __props.open ? _ctx.$style.activeTrigger : ""]),
					"data-test-id": "suggested-action-count"
				}, [createVNode(unref(N8nTag_default), { text: `${completedCount.value} / ${__props.actions.length}` }, null, 8, ["text"])], 2))]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popoverContent) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), { tag: "h4" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
						_: 1
					}), createVNode(unref(N8nLink_default), {
						theme: "text",
						title: unref(t)("generic.close"),
						"data-test-id": "suggested-actions-close",
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("update:open", false), ["prevent", "stop"]))
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "x",
							size: "large"
						})]),
						_: 1
					}, 8, ["title"])], 2),
					__props.notice ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 0,
						theme: "warning"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.notice), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(__props.actions, (action) => {
						return openBlock(), createElementBlock("div", {
							key: action.id,
							class: normalizeClass([{
								[_ctx.$style.actionItem]: true,
								[_ctx.$style.actionable]: !action.completed
							}]),
							"data-test-id": "suggested-action-item",
							"data-action-id": action.id,
							onClick: withModifiers(() => handleActionClick(action), ["prevent", "stop"])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxContainer) }, [action.completed ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "circle-check",
							color: "success"
						})) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "circle",
							color: "foreground-dark"
						}))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionItemBody) }, [createBaseVNode("div", { class: normalizeClass([action.completed ? "" : "mb-3xs", _ctx.$style.actionHeader]) }, [createVNode(unref(N8nText_default), {
							size: "medium",
							bold: true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(action.title), 1)]),
							_: 2
						}, 1024)], 2), !action.completed ? (openBlock(), createElementBlock("div", _hoisted_2$2, [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-base"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(action.description) + " ", 1), action.moreInfoLink ? (openBlock(), createBlock(unref(N8nLink_default), {
								key: 0,
								to: action.moreInfoLink,
								size: "small",
								theme: "text",
								"new-window": "",
								underline: "",
								onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("generic.moreInfo")), 1)]),
								_: 1
							}, 8, ["to"])) : createCommentVNode("", true)]),
							_: 2
						}, 1024)])) : createCommentVNode("", true)], 2)], 10, _hoisted_1$4);
					}), 128))
				], 2)]),
				_: 1
			}, 8, [
				"open",
				"align",
				"side-offset"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSuggestedActions/SuggestedActions.vue?vue&type=style&index=0&lang.module.scss
var triggerContainer = "_triggerContainer_12um7_388";
var hiddenTrigger = "_hiddenTrigger_12um7_394";
var activeTrigger = "_activeTrigger_12um7_400";
var popoverContent = "_popoverContent_12um7_405";
var header = "_header_12um7_412";
var actionItem = "_actionItem_12um7_419";
var actionable = "_actionable_12um7_427";
var actionHeader = "_actionHeader_12um7_430";
var actionItemBody = "_actionItemBody_12um7_437";
var checkboxContainer = "_checkboxContainer_12um7_444";
var shimmer$12 = "_shimmer_12um7_1";
var spin$12 = "_spin_12um7_1";
var opacityPulse$12 = "_opacityPulse_12um7_1";
var popoverIn$12 = "_popoverIn_12um7_1";
var fadeIn$12 = "_fadeIn_12um7_1";
var collapsibleSlideDown$12 = "_collapsibleSlideDown_12um7_1";
var collapsibleSlideUp$12 = "_collapsibleSlideUp_12um7_1";
var collapsibleSlideDownBlurred$12 = "_collapsibleSlideDownBlurred_12um7_1";
var collapsibleSlideUpBlurred$12 = "_collapsibleSlideUpBlurred_12um7_1";
var blurSwapIn$12 = "_blurSwapIn_12um7_1";
var blurSwapOut$12 = "_blurSwapOut_12um7_1";
var pulseGlow$12 = "_pulseGlow_12um7_1";
var pulseGlowDelayed$12 = "_pulseGlowDelayed_12um7_1";
var fade$12 = "_fade_12um7_1";
var fadeInUp$12 = "_fadeInUp_12um7_1";
var fadeInDown$12 = "_fadeInDown_12um7_1";
var fadeInLeft$12 = "_fadeInLeft_12um7_1";
var fadeInRight$12 = "_fadeInRight_12um7_1";
var fadeOut$12 = "_fadeOut_12um7_1";
var fadeOutDown$12 = "_fadeOutDown_12um7_1";
var fadeOutUp$12 = "_fadeOutUp_12um7_1";
var fadeOutLeft$12 = "_fadeOutLeft_12um7_1";
var fadeOutRight$12 = "_fadeOutRight_12um7_1";
var ping$12 = "_ping_12um7_1";
var blinkBackground$12 = "_blinkBackground_12um7_1";
var typingBlink$12 = "_typingBlink_12um7_1";
var SuggestedActions_vue_vue_type_style_index_0_lang_module_default = {
	triggerContainer,
	hiddenTrigger,
	activeTrigger,
	popoverContent,
	header,
	actionItem,
	actionable,
	actionHeader,
	actionItemBody,
	checkboxContainer,
	shimmer: shimmer$12,
	spin: spin$12,
	"skeleton-pulse": "_skeleton-pulse_12um7_1",
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
var SuggestedActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SuggestedActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SuggestedActions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nUserStack/UserStack.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = {
	class: "user-stack",
	"data-test-id": "user-stack-container"
};
var _hoisted_2$1 = ["data-test-id"];
var UserStack_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "UserStack",
	props: {
		users: {},
		currentUserEmail: { default: "" },
		maxAvatars: { default: 2 },
		size: { default: "small" }
	},
	setup(__props) {
		const props = __props;
		const badgeSize = computed(() => `${AVATAR_SIZES[props.size]}px`);
		const nonEmptyGroups = computed(() => {
			const users = {};
			for (const groupName in props.users) if (props.users[groupName].length > 0) users[groupName] = props.users[groupName];
			return users;
		});
		const groupCount = computed(() => {
			return Object.keys(nonEmptyGroups.value).length;
		});
		const flatUserList = computed(() => {
			const users = [];
			for (const groupName in props.users) users.push(...props.users[groupName]);
			return users;
		});
		const visibleAvatarCount = computed(() => {
			return flatUserList.value.length >= props.maxAvatars ? props.maxAvatars : flatUserList.value.length;
		});
		const hiddenUsersCount = computed(() => {
			return flatUserList.value.length - visibleAvatarCount.value;
		});
		const menuHeight = computed(() => {
			return groupCount.value > 1 ? 220 : 190;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(unref(N8nHoverCard_default), {
				"open-delay": 150,
				"close-delay": 150,
				"side-offset": 8,
				"show-arrow": ""
			}, {
				trigger: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.avatars),
					"data-test-id": "user-stack-avatars"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(flatUserList.value.slice(0, visibleAvatarCount.value), (user) => {
					return openBlock(), createBlock(unref(N8nAvatar_default), {
						key: user.id,
						"first-name": user.firstName,
						"last-name": user.lastName,
						class: normalizeClass(_ctx.$style.avatar),
						"data-test-id": `user-stack-avatar-${user.id}`,
						size: __props.size
					}, null, 8, [
						"first-name",
						"last-name",
						"class",
						"data-test-id",
						"size"
					]);
				}), 128)), hiddenUsersCount.value > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.hiddenBadge),
					style: normalizeStyle({
						width: badgeSize.value,
						height: badgeSize.value
					})
				}, " +" + toDisplayString(hiddenUsersCount.value), 7)) : createCommentVNode("", true)], 2)]),
				content: withCtx(() => [createVNode(unref(N8nScrollArea_default), {
					type: "auto",
					"max-height": `${menuHeight.value}px`
				}, {
					default: withCtx(() => [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.userList),
						"data-test-id": "user-stack-list"
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(nonEmptyGroups.value, (groupUsers, groupName) => {
						return openBlock(), createElementBlock("div", {
							key: groupName,
							class: normalizeClass(_ctx.$style.groupContainer)
						}, [groupCount.value > 1 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.groupName)
						}, toDisplayString(groupName), 3)) : createCommentVNode("", true), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.groupUsers) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(groupUsers, (user) => {
							return openBlock(), createElementBlock("li", {
								key: user.id,
								"data-test-id": `user-stack-info-${user.id}`,
								class: normalizeClass(_ctx.$style.userInfoContainer)
							}, [createVNode(unref(N8nUserInfo_default), mergeProps({ ref_for: true }, user, { "is-current-user": user.email === props.currentUserEmail }), null, 16, ["is-current-user"])], 10, _hoisted_2$1);
						}), 128))], 2)], 2);
					}), 128))], 2)]),
					_: 1
				}, 8, ["max-height"])]),
				_: 1
			})]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nUserStack/UserStack.vue?vue&type=style&index=0&lang.module.scss
var avatars = "_avatars_1g818_388";
var avatar = "_avatar_1g818_388";
var hiddenBadge = "_hiddenBadge_1g818_397";
var userList = "_userList_1g818_410";
var groupContainer = "_groupContainer_1g818_417";
var groupName = "_groupName_1g818_423";
var groupUsers = "_groupUsers_1g818_430";
var userInfoContainer = "_userInfoContainer_1g818_439";
var shimmer$11 = "_shimmer_1g818_1";
var spin$11 = "_spin_1g818_1";
var opacityPulse$11 = "_opacityPulse_1g818_1";
var popoverIn$11 = "_popoverIn_1g818_1";
var fadeIn$11 = "_fadeIn_1g818_1";
var collapsibleSlideDown$11 = "_collapsibleSlideDown_1g818_1";
var collapsibleSlideUp$11 = "_collapsibleSlideUp_1g818_1";
var collapsibleSlideDownBlurred$11 = "_collapsibleSlideDownBlurred_1g818_1";
var collapsibleSlideUpBlurred$11 = "_collapsibleSlideUpBlurred_1g818_1";
var blurSwapIn$11 = "_blurSwapIn_1g818_1";
var blurSwapOut$11 = "_blurSwapOut_1g818_1";
var pulseGlow$11 = "_pulseGlow_1g818_1";
var pulseGlowDelayed$11 = "_pulseGlowDelayed_1g818_1";
var fade$11 = "_fade_1g818_1";
var fadeInUp$11 = "_fadeInUp_1g818_1";
var fadeInDown$11 = "_fadeInDown_1g818_1";
var fadeInLeft$11 = "_fadeInLeft_1g818_1";
var fadeInRight$11 = "_fadeInRight_1g818_1";
var fadeOut$11 = "_fadeOut_1g818_1";
var fadeOutDown$11 = "_fadeOutDown_1g818_1";
var fadeOutUp$11 = "_fadeOutUp_1g818_1";
var fadeOutLeft$11 = "_fadeOutLeft_1g818_1";
var fadeOutRight$11 = "_fadeOutRight_1g818_1";
var ping$11 = "_ping_1g818_1";
var blinkBackground$11 = "_blinkBackground_1g818_1";
var typingBlink$11 = "_typingBlink_1g818_1";
var UserStack_vue_vue_type_style_index_0_lang_module_default = {
	avatars,
	avatar,
	hiddenBadge,
	userList,
	groupContainer,
	groupName,
	groupUsers,
	userInfoContainer,
	shimmer: shimmer$11,
	spin: spin$11,
	"skeleton-pulse": "_skeleton-pulse_1g818_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nUserStack/index.ts
var N8nUserStack_default = /* @__PURE__ */ _plugin_vue_export_helper_default(UserStack_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": UserStack_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/MainHeader/TabBar.vue?vue&type=script&setup=true&lang.ts
var TabBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TabBar",
	props: {
		items: {},
		modelValue: { default: MAIN_HEADER_TABS.WORKFLOW },
		floating: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		function onUpdateModelValue(tab, event) {
			emit("update:modelValue", tab, event);
		}
		return (_ctx, _cache) => {
			return __props.items ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass({
					[_ctx.$style.container]: true,
					[_ctx.$style.floating]: __props.floating,
					["tab-bar-container"]: true
				})
			}, [createVNode(unref(N8nSegmentControl_default), {
				"model-value": __props.modelValue,
				options: __props.items,
				"onUpdate:modelValue": onUpdateModelValue
			}, null, 8, ["model-value", "options"])], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/app/components/MainHeader/TabBar.vue?vue&type=style&index=0&lang.module.scss
var container$4 = "_container_kdubg_388";
var floating = "_floating_kdubg_399";
var shimmer$10 = "_shimmer_kdubg_1";
var spin$10 = "_spin_kdubg_1";
var opacityPulse$10 = "_opacityPulse_kdubg_1";
var popoverIn$10 = "_popoverIn_kdubg_1";
var fadeIn$10 = "_fadeIn_kdubg_1";
var collapsibleSlideDown$10 = "_collapsibleSlideDown_kdubg_1";
var collapsibleSlideUp$10 = "_collapsibleSlideUp_kdubg_1";
var collapsibleSlideDownBlurred$10 = "_collapsibleSlideDownBlurred_kdubg_1";
var collapsibleSlideUpBlurred$10 = "_collapsibleSlideUpBlurred_kdubg_1";
var blurSwapIn$10 = "_blurSwapIn_kdubg_1";
var blurSwapOut$10 = "_blurSwapOut_kdubg_1";
var pulseGlow$10 = "_pulseGlow_kdubg_1";
var pulseGlowDelayed$10 = "_pulseGlowDelayed_kdubg_1";
var fade$10 = "_fade_kdubg_1";
var fadeInUp$10 = "_fadeInUp_kdubg_1";
var fadeInDown$10 = "_fadeInDown_kdubg_1";
var fadeInLeft$10 = "_fadeInLeft_kdubg_1";
var fadeInRight$10 = "_fadeInRight_kdubg_1";
var fadeOut$10 = "_fadeOut_kdubg_1";
var fadeOutDown$10 = "_fadeOutDown_kdubg_1";
var fadeOutUp$10 = "_fadeOutUp_kdubg_1";
var fadeOutLeft$10 = "_fadeOutLeft_kdubg_1";
var fadeOutRight$10 = "_fadeOutRight_kdubg_1";
var ping$10 = "_ping_kdubg_1";
var blinkBackground$10 = "_blinkBackground_kdubg_1";
var typingBlink$10 = "_typingBlink_kdubg_1";
var TabBar_vue_vue_type_style_index_0_lang_module_default = {
	container: container$4,
	floating,
	shimmer: shimmer$10,
	spin: spin$10,
	"skeleton-pulse": "_skeleton-pulse_kdubg_1",
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
var TabBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TabBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TabBar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/plugins/cache.ts
async function indexedDbCache(dbName, storeName) {
	let cache = {};
	await loadCache();
	async function loadCache() {
		await transaction("readonly", async (store, db) => {
			return await new Promise((resolve, reject) => {
				const request = store.openCursor();
				request.onsuccess = (event) => {
					const cursor = event.target.result;
					if (cursor) {
						cache[cursor.key] = cursor.value.value;
						cursor.continue();
					} else {
						db.close();
						resolve();
					}
				};
				request.onerror = (event) => {
					db.close();
					reject(event);
				};
			});
		});
	}
	async function openDb() {
		return await new Promise((resolve, reject) => {
			const request = indexedDB.open(dbName, 1);
			request.onupgradeneeded = () => {
				request.result.createObjectStore(storeName, { keyPath: "key" });
			};
			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}
	function setItem(key, value) {
		cache[key] = value;
		persistToIndexedDB(key, value);
	}
	function getItem(key) {
		return cache[key] ?? null;
	}
	function removeItem(key) {
		delete cache[key];
		deleteFromIndexedDB(key);
	}
	function clear() {
		cache = {};
		clearIndexedDB();
	}
	async function getAllWithPrefix(prefix) {
		const keyRange = IDBKeyRange.bound(prefix, prefix + "￿", false, false);
		const results = {};
		return await transaction("readonly", async (store) => {
			return await new Promise((resolve, reject) => {
				const request = store.openCursor(keyRange);
				request.onsuccess = (event) => {
					const cursor = event.target.result;
					if (cursor) {
						results[cursor.key] = cursor.value.value;
						cursor.continue();
					} else resolve(results);
				};
				request.onerror = () => {
					reject(request.error);
				};
			});
		});
	}
	async function transaction(mode, action) {
		const db = await openDb();
		const tx = db.transaction(storeName, mode);
		const result = await action(tx.objectStore(storeName), db);
		return await new Promise((resolve, reject) => {
			tx.oncomplete = () => {
				db.close();
				resolve(result);
			};
			tx.onerror = () => {
				db.close();
				reject(tx.error);
			};
		});
	}
	async function persistToIndexedDB(key, value) {
		await transaction("readwrite", (store) => {
			store.put({
				key,
				value
			});
		});
	}
	async function deleteFromIndexedDB(key) {
		await transaction("readwrite", (store) => {
			store.delete(key);
		});
	}
	async function clearIndexedDB() {
		await transaction("readwrite", (store) => {
			store.clear();
		});
	}
	return {
		getItem,
		removeItem,
		setItem,
		clear,
		getAllWithPrefix
	};
}
//#endregion
//#region src/app/composables/useWorkflowsCache.ts
function useWorkflowSettingsCache() {
	const isCacheLoading = ref(true);
	const cachePromise = ref(indexedDbCache("n8n-local", "workflows").finally(() => {
		isCacheLoading.value = false;
	}));
	async function getWorkflowsCache() {
		return await cachePromise.value;
	}
	async function getWorkflowSettings(workflowId) {
		return jsonParse((await getWorkflowsCache()).getItem(workflowId) ?? "", { fallbackValue: {} });
	}
	async function upsertWorkflowSettings(workflowId, updates) {
		const cache = await getWorkflowsCache();
		const updatedSettings = {
			...await getWorkflowSettings(workflowId),
			...updates
		};
		cache.setItem(workflowId, JSON.stringify(updatedSettings));
	}
	async function updateFirstActivatedAt(workflowId) {
		if (!(await getWorkflowSettings(workflowId))?.firstActivatedAt) await upsertWorkflowSettings(workflowId, { firstActivatedAt: Date.now() });
	}
	async function getEvaluationPreferences(workflowId) {
		return (await getWorkflowSettings(workflowId))?.evaluationRuns ?? {
			order: [],
			visibility: {}
		};
	}
	async function saveEvaluationPreferences(workflowId, evaluationRuns) {
		await upsertWorkflowSettings(workflowId, { evaluationRuns });
	}
	return {
		getWorkflowSettings,
		upsertWorkflowSettings,
		updateFirstActivatedAt,
		getEvaluationPreferences,
		saveEvaluationPreferences,
		isCacheLoading
	};
}
//#endregion
//#region src/app/components/WorkflowProductionChecklist.vue
var WorkflowProductionChecklist_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowProductionChecklist",
	props: { hideTrigger: { type: Boolean } },
	setup(__props, { expose: __expose }) {
		const i18n = useI18n();
		const router = useRouter();
		const evaluationStore = useEvaluationStore();
		const evaluationState = useWorkflowEvaluationState();
		const nodeTypesStore = useNodeTypesStore();
		const workflowsCache = useWorkflowSettingsCache();
		const uiStore = useUIStore();
		const telemetry = useTelemetry();
		const sourceControlStore = useSourceControlStore();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const workflowDocumentStore = inject(WorkflowDocumentStoreKey, null);
		const isPopoverOpen = ref(false);
		const cachedSettings = ref(null);
		const nodes = computed(() => workflowDocumentStore?.value?.allNodes ?? []);
		const hasAINode = computed(() => {
			return nodes.value.some((node) => {
				return nodeTypesStore.getNodeType(node.type, node.typeVersion)?.codex?.categories?.includes("AI");
			});
		});
		const hasEvaluationSetOutputsNode = computed(() => {
			return evaluationState.evaluationSetOutputsNodeExist.value;
		});
		const hasErrorWorkflow = computed(() => {
			return !!workflowDocumentStore?.value?.settings?.errorWorkflow;
		});
		const isErrorWorkflow = computed(() => {
			return nodes.value.some((node) => node.type === "n8n-nodes-base.errorTrigger" && node.disabled !== true);
		});
		const hasSavedTimeNodes = computed(() => {
			return nodes.value.some((node) => node.type === "n8n-nodes-base.timeSaved" && node.disabled !== true);
		});
		const hasTimeSaved = computed(() => {
			return workflowDocumentStore?.value?.settings?.timeSavedPerExecution !== void 0 || hasSavedTimeNodes.value;
		});
		const isActivationModalOpen = computed(() => {
			return uiStore.isModalActiveById[WORKFLOW_ACTIVE_MODAL_KEY];
		});
		const isAnyModalOpen = computed(() => uiStore.isAnyModalOpen);
		const isProtectedEnvironment = computed(() => {
			return sourceControlStore.preferences.branchReadOnly;
		});
		const isOwner = computed(() => usersStore.isInstanceOwner);
		const isAdmin = computed(() => usersStore.isAdmin);
		const isMcpModuleEnabled = computed(() => {
			return settingsStore.isModuleActive("mcp");
		});
		const isMcpAccessEnabled = computed(() => {
			return settingsStore.moduleSettings.mcp?.mcpAccessEnabled ?? false;
		});
		const canToggleInstanceMCPAccess = computed(() => isOwner.value || isAdmin.value);
		const availableActions = computed(() => {
			if (workflowsCache.isCacheLoading.value) return [];
			const hasPublishedVersion = !!workflowDocumentStore?.value?.activeVersionId;
			const actions = [];
			if (hasPublishedVersion && !isErrorWorkflow.value) actions.push({
				id: "errorWorkflow",
				title: i18n.baseText("workflowProductionChecklist.errorWorkflow.title"),
				description: i18n.baseText("workflowProductionChecklist.errorWorkflow.description"),
				moreInfoLink: ERROR_WORKFLOW_DOCS_URL,
				completed: hasErrorWorkflow.value
			});
			if (hasPublishedVersion && hasAINode.value && evaluationStore.isEvaluationEnabled) actions.push({
				id: "evaluations",
				title: i18n.baseText("workflowProductionChecklist.evaluations.title"),
				description: i18n.baseText("workflowProductionChecklist.evaluations.description"),
				moreInfoLink: EVALUATIONS_DOCS_URL,
				completed: hasEvaluationSetOutputsNode.value
			});
			if (hasPublishedVersion) actions.push({
				id: "timeSaved",
				title: i18n.baseText("workflowProductionChecklist.timeSaved.title"),
				description: i18n.baseText("workflowProductionChecklist.timeSaved.description"),
				moreInfoLink: TIME_SAVED_DOCS_URL,
				completed: hasTimeSaved.value
			});
			const mcpAction = getMcpAction();
			if (mcpAction) actions.push(mcpAction);
			return actions;
			function getMcpAction() {
				if (!isMcpModuleEnabled.value) return null;
				const baseAction = {
					title: i18n.baseText("mcp.productionChecklist.title"),
					moreInfoLink: MCP_DOCS_PAGE_URL
				};
				if (!isMcpAccessEnabled.value) {
					if (!canToggleInstanceMCPAccess.value) return null;
					return {
						...baseAction,
						id: "instance-mcp-access",
						description: i18n.baseText("mcp.productionChecklist.instance.description"),
						completed: false
					};
				}
				return {
					...baseAction,
					id: "workflow-mcp-access",
					description: i18n.baseText("mcp.productionChecklist.workflow.description"),
					completed: workflowDocumentStore?.value?.settings?.availableInMCP ?? false
				};
			}
		});
		async function loadWorkflowSettings() {
			if (workflowDocumentStore?.value?.workflowId) cachedSettings.value = await workflowsCache.getWorkflowSettings(workflowDocumentStore?.value.workflowId);
		}
		async function handleActionClick(actionId) {
			switch (actionId) {
				case "evaluations":
					await router.push({
						name: VIEWS.EVALUATION_EDIT,
						params: { workflowId: workflowDocumentStore?.value?.workflowId }
					});
					break;
				case "errorWorkflow":
				case "timeSaved":
				case "workflow-mcp-access":
					uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
					break;
				case "instance-mcp-access":
					await router.push({ name: MCP_SETTINGS_VIEW });
					break;
				default: break;
			}
			isPopoverOpen.value = false;
		}
		function openSuggestedActions() {
			isPopoverOpen.value = true;
		}
		function onPopoverOpened() {
			telemetry.track("user opened suggested actions checklist");
		}
		function handlePopoverOpenChange(open) {
			if (open) {
				isPopoverOpen.value = true;
				onPopoverOpened();
			} else if (!isActivationModalOpen.value) isPopoverOpen.value = false;
		}
		watch(() => !!workflowDocumentStore?.value?.activeVersionId, async (isActive, wasActive) => {
			if (isActive && !wasActive) {
				if (!cachedSettings.value?.firstActivatedAt) if (isAnyModalOpen.value) {
					const stop = watch(isAnyModalOpen, (isOpen) => {
						if (!isOpen) {
							stop();
							openSuggestedActions();
						}
					});
				} else setTimeout(() => {
					openSuggestedActions();
				}, 0);
				await workflowsCache.updateFirstActivatedAt(workflowDocumentStore?.value?.workflowId ?? "");
			}
		});
		onMounted(async () => {
			await loadWorkflowSettings();
		});
		__expose({
			open: openSuggestedActions,
			hasActions: computed(() => availableActions.value.length > 0)
		});
		return (_ctx, _cache) => {
			return availableActions.value.length > 0 ? (openBlock(), createBlock(unref(SuggestedActions_default), {
				key: 0,
				open: isPopoverOpen.value,
				"hide-trigger": __props.hideTrigger,
				title: unref(i18n).baseText("workflowProductionChecklist.title"),
				actions: availableActions.value,
				notice: isProtectedEnvironment.value ? unref(i18n).baseText("workflowProductionChecklist.readOnlyNotice") : "",
				"popover-alignment": "start",
				"popover-side-offset": 0,
				onActionClick: handleActionClick,
				"onUpdate:open": handlePopoverOpenChange
			}, null, 8, [
				"open",
				"hide-trigger",
				"title",
				"actions",
				"notice"
			])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region ../../@n8n/utils/src/files/sanitize-filename.ts
var INVALID_CHARS_REGEX = /[<>:"/\\|?*\u0000-\u001F\u007F-\u009F]/g;
var ZERO_WIDTH_CHARS_REGEX = /[\u200B-\u200D\u2060\uFEFF]/g;
var UNICODE_SPACES_REGEX = /[\u00A0\u2000-\u200A]/g;
var LEADING_TRAILING_DOTS_SPACES_REGEX = /^[\s.]+|[\s.]+$/g;
var WINDOWS_RESERVED_NAMES = new Set([
	"CON",
	"PRN",
	"AUX",
	"NUL",
	"COM1",
	"COM2",
	"COM3",
	"COM4",
	"COM5",
	"COM6",
	"COM7",
	"COM8",
	"COM9",
	"LPT1",
	"LPT2",
	"LPT3",
	"LPT4",
	"LPT5",
	"LPT6",
	"LPT7",
	"LPT8",
	"LPT9"
]);
var DEFAULT_FALLBACK_NAME = "untitled";
var MAX_FILENAME_LENGTH = 200;
/**
* Sanitizes a filename to be compatible with Mac, Linux, and Windows file systems
*
* Main features:
* - Replace invalid characters (e.g. ":" in hello:world)
* - Handle Windows reserved names
* - Limit filename length
* - Normalize Unicode characters
*
* @param filename - The filename to sanitize (without extension)
* @param maxLength - Maximum filename length (default: 200)
* @returns A sanitized filename (without extension)
*
* @example
* sanitizeFilename('hello:world') // returns 'hello_world'
* sanitizeFilename('CON') // returns '_CON'
* sanitizeFilename('') // returns 'untitled'
*/
var sanitizeFilename = (filename, maxLength = MAX_FILENAME_LENGTH) => {
	if (!filename) return DEFAULT_FALLBACK_NAME;
	let baseName = filename.trim().replace(INVALID_CHARS_REGEX, "_").replace(ZERO_WIDTH_CHARS_REGEX, "").replace(UNICODE_SPACES_REGEX, " ").replace(LEADING_TRAILING_DOTS_SPACES_REGEX, "");
	if (!baseName) baseName = DEFAULT_FALLBACK_NAME;
	if (WINDOWS_RESERVED_NAMES.has(baseName.toUpperCase())) baseName = `_${baseName}`;
	if (baseName.length > maxLength) baseName = baseName.slice(0, maxLength);
	return baseName;
};
//#endregion
//#region src/app/components/MainHeader/utils.ts
var getWorkflowId = (propId, routeName) => {
	return propId ?? (typeof routeName === "string" ? routeName : void 0);
};
//#endregion
//#region src/app/components/MainHeader/ActionsDropdownMenu.vue?vue&type=script&setup=true&lang.ts
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min(), 1);
var ActionsDropdownMenu_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ActionsDropdownMenu",
	props: {
		workflowPermissions: {},
		isNewWorkflow: { type: Boolean },
		isArchived: { type: Boolean },
		id: {},
		name: {},
		tags: {},
		currentFolder: {}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const importFileRef = ref();
		const productionChecklistRef = useTemplateRef("productionChecklist");
		const toast = useToast();
		const locale = useI18n();
		const route = useRoute();
		const projectsStore = useProjectsStore();
		const sourceControlStore = useSourceControlStore();
		const collaborationStore = useCollaborationStore();
		const workflowsListStore = useWorkflowsListStore();
		const uiStore = useUIStore();
		const $style = useCssModule();
		const rootStore = useRootStore();
		const tagsStore = useTagsStore();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const moveWorkflowEventBus = createEventBus();
		const { showMoveToProjectToast } = useMoveResourceToProjectToast();
		const workflowTelemetry = useTelemetry();
		const favoritesStore = useFavoritesStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const onExecutionsTab = computed(() => {
			return [
				VIEWS.EXECUTION_HOME.toString(),
				VIEWS.WORKFLOW_EXECUTIONS.toString(),
				VIEWS.EXECUTION_PREVIEW
			].includes(route.name || "");
		});
		const collaborationReadOnly = computed(() => collaborationStore.shouldBeReadOnly);
		const isSharingEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing]);
		function handleFileImport() {
			const inputRef = importFileRef.value;
			if (inputRef?.files && inputRef.files.length !== 0) {
				const reader = new FileReader();
				reader.onload = () => {
					let workflowData;
					try {
						workflowData = JSON.parse(reader.result);
					} catch (error) {
						toast.showMessage({
							title: locale.baseText("mainSidebar.showMessage.handleFileImport.title"),
							message: locale.baseText("mainSidebar.showMessage.handleFileImport.message"),
							type: "error"
						});
						return;
					} finally {
						reader.onload = null;
						inputRef.value = "";
					}
					nodeViewEventBus.emit("importWorkflowData", { data: workflowData });
				};
				reader.readAsText(inputRef.files[0]);
			}
		}
		const workflowMenuItems = computed(() => {
			const canEdit = props.workflowPermissions.update === true && !collaborationReadOnly.value && !props.isArchived && !sourceControlStore.preferences.branchReadOnly || props.isNewWorkflow;
			const nameAndMetadata = [];
			if (!collaborationReadOnly.value && !props.isArchived && !sourceControlStore.preferences.branchReadOnly) nameAndMetadata.push({
				id: WORKFLOW_MENU_ACTIONS.RENAME,
				label: locale.baseText("generic.rename"),
				disabled: props.workflowPermissions.update !== true
			});
			if (canEdit) nameAndMetadata.push({
				id: WORKFLOW_MENU_ACTIONS.EDIT_DESCRIPTION,
				label: locale.baseText("menuActions.editDescriptionAndTags"),
				disabled: !props.id
			});
			nameAndMetadata.push({
				id: WORKFLOW_MENU_ACTIONS.FAVORITE,
				label: favoritesStore.isFavorite(props.id, "workflow") ? locale.baseText("favorites.remove") : locale.baseText("favorites.add"),
				disabled: props.isNewWorkflow
			});
			const organization = [];
			if (props.workflowPermissions.move && projectsStore.isTeamProjectFeatureEnabled) organization.push({
				id: WORKFLOW_MENU_ACTIONS.CHANGE_OWNER,
				label: locale.baseText("workflows.item.changeOwner"),
				disabled: props.isNewWorkflow
			});
			if (canEdit) organization.push({
				id: WORKFLOW_MENU_ACTIONS.DUPLICATE,
				label: locale.baseText("menuActions.duplicate"),
				disabled: !props.id
			});
			if (isSharingEnabled.value && props.workflowPermissions.share) organization.push({
				id: WORKFLOW_MENU_ACTIONS.SHARE,
				label: locale.baseText("workflowDetails.share")
			});
			const importExport = [{
				id: WORKFLOW_MENU_ACTIONS.DOWNLOAD,
				label: locale.baseText("menuActions.exportJson")
			}];
			if (canEdit) importExport.push({
				id: WORKFLOW_MENU_ACTIONS.IMPORT,
				label: locale.baseText("menuActions.import"),
				disabled: onExecutionsTab.value,
				children: [{
					id: WORKFLOW_MENU_ACTIONS.IMPORT_FROM_URL,
					label: locale.baseText("menuActions.importFromUrl"),
					disabled: onExecutionsTab.value
				}, {
					id: WORKFLOW_MENU_ACTIONS.IMPORT_FROM_FILE,
					label: locale.baseText("menuActions.importFromFile"),
					disabled: onExecutionsTab.value
				}]
			});
			if (hasPermission(["rbac"], { rbac: { scope: "sourceControl:push" } })) importExport.push({
				id: WORKFLOW_MENU_ACTIONS.PUSH,
				label: locale.baseText("menuActions.push"),
				disabled: !sourceControlStore.isEnterpriseSourceControlEnabled || onExecutionsTab.value || sourceControlStore.preferences.branchReadOnly
			});
			const workflowTools = [{
				id: WORKFLOW_MENU_ACTIONS.VERSION_HISTORY,
				label: locale.baseText("menuActions.versionHistory"),
				disabled: props.isNewWorkflow
			}, {
				id: WORKFLOW_MENU_ACTIONS.SETTINGS,
				label: locale.baseText("generic.settings"),
				disabled: props.isNewWorkflow
			}];
			if (!props.isNewWorkflow && productionChecklistRef.value?.hasActions) workflowTools.push({
				id: WORKFLOW_MENU_ACTIONS.PRODUCTION_CHECKLIST,
				label: locale.baseText("menuActions.productionChecklist")
			});
			const lifecycle = [];
			if (props.workflowPermissions.delete === true && !collaborationReadOnly.value && !sourceControlStore.preferences.branchReadOnly || props.isNewWorkflow) if (props.isArchived) {
				lifecycle.push({
					id: WORKFLOW_MENU_ACTIONS.UNARCHIVE,
					label: locale.baseText("menuActions.unarchive"),
					disabled: props.isNewWorkflow
				});
				lifecycle.push({
					id: WORKFLOW_MENU_ACTIONS.DELETE,
					label: locale.baseText("menuActions.delete"),
					disabled: props.isNewWorkflow,
					customClass: $style.deleteItem
				});
			} else lifecycle.push({
				id: WORKFLOW_MENU_ACTIONS.ARCHIVE,
				label: locale.baseText("menuActions.archive"),
				disabled: props.isNewWorkflow,
				customClass: $style.deleteItem
			});
			return [
				nameAndMetadata,
				organization,
				importExport,
				workflowTools,
				lifecycle
			].filter((group) => group.length > 0).flatMap((group, index) => index === 0 ? group : group.map((item, i) => i === 0 ? {
				...item,
				divided: true
			} : item));
		});
		function openDescriptionAndTagsModal() {
			const workflowId = getWorkflowId(props.id, route.params.workflowId);
			if (!workflowId) return;
			const workflowDescription = workflowDocumentStore?.value?.description ?? workflowsListStore.getWorkflowById(workflowId)?.description;
			uiStore.openModalWithData({
				name: WORKFLOW_DESCRIPTION_MODAL_KEY,
				data: {
					workflowId,
					workflowName: props.name,
					workflowDescription,
					workflowTags: [...props.tags],
					isNewWorkflow: props.isNewWorkflow
				}
			});
		}
		async function onWorkflowMenuSelect(action) {
			switch (action) {
				case WORKFLOW_MENU_ACTIONS.EDIT_DESCRIPTION:
					openDescriptionAndTagsModal();
					break;
				case WORKFLOW_MENU_ACTIONS.DUPLICATE:
					uiStore.openModalWithData({
						name: DUPLICATE_MODAL_KEY,
						data: {
							id: props.id,
							name: props.name,
							tags: props.tags,
							parentFolderId: props.currentFolder?.id
						}
					});
					break;
				case WORKFLOW_MENU_ACTIONS.RENAME:
					nodeViewEventBus.emit("renameWorkflow");
					break;
				case WORKFLOW_MENU_ACTIONS.PRODUCTION_CHECKLIST:
					setTimeout(() => productionChecklistRef.value?.open(), 0);
					break;
				case WORKFLOW_MENU_ACTIONS.VERSION_HISTORY:
					router.push({
						name: VIEWS.WORKFLOW_HISTORY,
						params: { workflowId: props.id }
					});
					break;
				case WORKFLOW_MENU_ACTIONS.DOWNLOAD: {
					if (!workflowDocumentStore?.value) throw new Error("Cannot download workflow: workflow document store is unavailable");
					const workflowData = workflowDocumentStore.value.serialize();
					const { tags, ...data } = workflowData;
					const exportData = {
						...data,
						meta: {
							...data.meta,
							instanceId: rootStore.instanceId
						},
						tags: (tags ?? []).map((tagId) => {
							const { usageCount, ...tag } = tagsStore.tagsById[tagId];
							return tag;
						})
					};
					const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json;charset=utf-8" });
					let name = props.name || "unsaved_workflow";
					name = sanitizeFilename(name);
					telemetry.track("User exported workflow", { workflow_id: workflowData.id });
					(0, import_FileSaver_min.default)(blob, name + ".json");
					break;
				}
				case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_URL:
					uiStore.openModal(IMPORT_WORKFLOW_URL_MODAL_KEY);
					break;
				case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_FILE:
					nodeViewEventBus.emit("importWorkflowFromFile");
					break;
				case WORKFLOW_MENU_ACTIONS.PUSH:
					try {
						router.push({ query: {
							...route.query,
							sourceControl: "push"
						} });
					} catch (error) {
						switch (error.message) {
							case "source_control_not_connected":
								toast.showError({
									...error,
									message: ""
								}, locale.baseText("settings.sourceControl.error.not.connected.title"), { message: locale.baseText("settings.sourceControl.error.not.connected.message") });
								break;
							default: toast.showError(error, locale.baseText("error"));
						}
					}
					break;
				case WORKFLOW_MENU_ACTIONS.SETTINGS:
					uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
					break;
				case WORKFLOW_MENU_ACTIONS.SHARE:
					uiStore.openModalWithData({
						name: WORKFLOW_SHARE_MODAL_KEY,
						data: { id: props.id }
					});
					workflowTelemetry.track("User opened sharing modal", {
						workflow_id: props.id,
						user_id_sharer: usersStore.currentUser?.id,
						sub_view: route.name === VIEWS.WORKFLOWS ? "Workflows listing" : "Workflow editor"
					});
					break;
				case WORKFLOW_MENU_ACTIONS.ARCHIVE:
					nodeViewEventBus.emit("archiveWorkflow");
					break;
				case WORKFLOW_MENU_ACTIONS.UNARCHIVE:
					nodeViewEventBus.emit("unarchiveWorkflow");
					break;
				case WORKFLOW_MENU_ACTIONS.DELETE:
					nodeViewEventBus.emit("deleteWorkflow");
					break;
				case WORKFLOW_MENU_ACTIONS.FAVORITE:
					await favoritesStore.toggleFavorite(props.id, "workflow");
					break;
				case WORKFLOW_MENU_ACTIONS.CHANGE_OWNER: {
					const workflowId = getWorkflowId(props.id, route.params.workflowId);
					if (!workflowId) return;
					const workflow = workflowsListStore.workflowsById[workflowId];
					const navigateAway = async () => await router.push({ name: VIEWS.WORKFLOWS });
					moveWorkflowEventBus.once("workflow-transferred", async (event) => {
						await navigateAway();
						showMoveToProjectToast({
							resourceType: ResourceType.Workflow,
							resourceTypeLabel: locale.baseText("generic.workflow").toLowerCase(),
							resourceName: event.source.workflow.name,
							targetProject: event.toast.targetProject,
							targetProjectName: event.toast.targetProjectName,
							destinationFolderId: event.destination.parentFolder.id,
							shareUsedCredentials: event.toast.shareUsedCredentials,
							areAllUsedCredentialsShareable: event.toast.areAllUsedCredentialsShareable
						});
					});
					uiStore.openMoveToFolderModal("workflow", {
						id: workflow.id,
						name: workflow.name,
						parentFolderId: props.currentFolder?.id,
						sharedWithProjects: workflow.sharedWithProjects,
						homeProjectId: workflow.homeProject?.id
					}, moveWorkflowEventBus);
					break;
				}
				default: break;
			}
		}
		onMounted(() => {
			nodeViewEventBus.on("addTag", openDescriptionAndTagsModal);
		});
		onBeforeUnmount(() => {
			nodeViewEventBus.off("addTag", openDescriptionAndTagsModal);
		});
		__expose({ importFileRef });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([unref($style).group]) }, [
				createBaseVNode("input", {
					ref_key: "importFileRef",
					ref: importFileRef,
					class: normalizeClass(unref($style).hiddenInput),
					type: "file",
					"data-test-id": "workflow-import-input",
					onChange: _cache[0] || (_cache[0] = ($event) => handleFileImport())
				}, null, 34),
				createBaseVNode("span", { class: normalizeClass(unref($style).checklistAnchor) }, [!__props.isNewWorkflow ? (openBlock(), createBlock(WorkflowProductionChecklist_default, {
					key: 0,
					ref: "productionChecklist",
					"hide-trigger": ""
				}, null, 512)) : createCommentVNode("", true)], 2),
				createVNode(unref(N8nActionDropdown_default), {
					items: workflowMenuItems.value,
					"data-test-id": "workflow-menu",
					placement: "bottom-start",
					"activator-icon-size": "large",
					"max-height": "var(--reka-dropdown-menu-content-available-height)",
					onSelect: onWorkflowMenuSelect
				}, null, 8, ["items"])
			], 2);
		};
	}
});
//#endregion
//#region src/app/components/MainHeader/ActionsDropdownMenu.vue?vue&type=style&index=0&lang.module.scss
var deleteItem = "_deleteItem_1b00f_388";
var group = "_group_1b00f_392";
var checklistAnchor = "_checklistAnchor_1b00f_396";
var hiddenInput = "_hiddenInput_1b00f_402";
var shimmer$9 = "_shimmer_1b00f_1";
var spin$9 = "_spin_1b00f_1";
var opacityPulse$9 = "_opacityPulse_1b00f_1";
var popoverIn$9 = "_popoverIn_1b00f_1";
var fadeIn$9 = "_fadeIn_1b00f_1";
var collapsibleSlideDown$9 = "_collapsibleSlideDown_1b00f_1";
var collapsibleSlideUp$9 = "_collapsibleSlideUp_1b00f_1";
var collapsibleSlideDownBlurred$9 = "_collapsibleSlideDownBlurred_1b00f_1";
var collapsibleSlideUpBlurred$9 = "_collapsibleSlideUpBlurred_1b00f_1";
var blurSwapIn$9 = "_blurSwapIn_1b00f_1";
var blurSwapOut$9 = "_blurSwapOut_1b00f_1";
var pulseGlow$9 = "_pulseGlow_1b00f_1";
var pulseGlowDelayed$9 = "_pulseGlowDelayed_1b00f_1";
var fade$9 = "_fade_1b00f_1";
var fadeInUp$9 = "_fadeInUp_1b00f_1";
var fadeInDown$9 = "_fadeInDown_1b00f_1";
var fadeInLeft$9 = "_fadeInLeft_1b00f_1";
var fadeInRight$9 = "_fadeInRight_1b00f_1";
var fadeOut$9 = "_fadeOut_1b00f_1";
var fadeOutDown$9 = "_fadeOutDown_1b00f_1";
var fadeOutUp$9 = "_fadeOutUp_1b00f_1";
var fadeOutLeft$9 = "_fadeOutLeft_1b00f_1";
var fadeOutRight$9 = "_fadeOutRight_1b00f_1";
var ping$9 = "_ping_1b00f_1";
var blinkBackground$9 = "_blinkBackground_1b00f_1";
var typingBlink$9 = "_typingBlink_1b00f_1";
var ActionsDropdownMenu_vue_vue_type_style_index_0_lang_module_default = {
	deleteItem,
	group,
	checklistAnchor,
	hiddenInput,
	shimmer: shimmer$9,
	spin: spin$9,
	"skeleton-pulse": "_skeleton-pulse_1b00f_1",
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
var ActionsDropdownMenu_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ActionsDropdownMenu_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ActionsDropdownMenu_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/collaboration/collaboration/components/CollaborationPane.vue?vue&type=script&setup=true&lang.ts
var CollaborationPane_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CollaborationPane",
	setup(__props) {
		const collaborationStore = useCollaborationStore();
		const usersStore = useUsersStore();
		const workflowId = useWorkflowId();
		watch(useDocumentVisibility(), (visibilityState) => {
			if (visibilityState === "hidden") collaborationStore.stopHeartbeat();
			else collaborationStore.startHeartbeat();
		});
		const showUserStack = computed(() => collaborationStore.collaborators.length > 1);
		const collaboratorsSorted = computed(() => {
			const users = collaborationStore.collaborators.map(({ user }) => user);
			const index = users.findIndex((user) => user.id === usersStore.currentUser?.id);
			if (index < 1) return { defaultGroup: users };
			const [currentUser] = users.splice(index, 1);
			return { defaultGroup: [currentUser, ...users] };
		});
		const currentUserEmail = computed(() => usersStore.currentUser?.email);
		onMounted(() => {
			collaborationStore.initialize(workflowId.value);
		});
		onBeforeUnmount(() => {
			collaborationStore.terminate();
		});
		return (_ctx, _cache) => {
			return showUserStack.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(`collaboration-pane-container ${_ctx.$style.container}`),
				"data-test-id": "collaboration-pane"
			}, [createVNode(unref(N8nUserStack_default), {
				users: collaboratorsSorted.value,
				"current-user-email": currentUserEmail.value
			}, null, 8, ["users", "current-user-email"])], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/collaboration/collaboration/components/CollaborationPane.vue?vue&type=style&index=0&lang.module.scss
var container$3 = "_container_axdgo_388";
var shimmer$8 = "_shimmer_axdgo_1";
var spin$8 = "_spin_axdgo_1";
var opacityPulse$8 = "_opacityPulse_axdgo_1";
var popoverIn$8 = "_popoverIn_axdgo_1";
var fadeIn$8 = "_fadeIn_axdgo_1";
var collapsibleSlideDown$8 = "_collapsibleSlideDown_axdgo_1";
var collapsibleSlideUp$8 = "_collapsibleSlideUp_axdgo_1";
var collapsibleSlideDownBlurred$8 = "_collapsibleSlideDownBlurred_axdgo_1";
var collapsibleSlideUpBlurred$8 = "_collapsibleSlideUpBlurred_axdgo_1";
var blurSwapIn$8 = "_blurSwapIn_axdgo_1";
var blurSwapOut$8 = "_blurSwapOut_axdgo_1";
var pulseGlow$8 = "_pulseGlow_axdgo_1";
var pulseGlowDelayed$8 = "_pulseGlowDelayed_axdgo_1";
var fade$8 = "_fade_axdgo_1";
var fadeInUp$8 = "_fadeInUp_axdgo_1";
var fadeInDown$8 = "_fadeInDown_axdgo_1";
var fadeInLeft$8 = "_fadeInLeft_axdgo_1";
var fadeInRight$8 = "_fadeInRight_axdgo_1";
var fadeOut$8 = "_fadeOut_axdgo_1";
var fadeOutDown$8 = "_fadeOutDown_axdgo_1";
var fadeOutUp$8 = "_fadeOutUp_axdgo_1";
var fadeOutLeft$8 = "_fadeOutLeft_axdgo_1";
var fadeOutRight$8 = "_fadeOutRight_axdgo_1";
var ping$8 = "_ping_axdgo_1";
var blinkBackground$8 = "_blinkBackground_axdgo_1";
var typingBlink$8 = "_typingBlink_axdgo_1";
var CollaborationPane_vue_vue_type_style_index_0_lang_module_default = {
	container: container$3,
	shimmer: shimmer$8,
	spin: spin$8,
	"skeleton-pulse": "_skeleton-pulse_axdgo_1",
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
var CollaborationPane_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CollaborationPane_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CollaborationPane_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/composables/useWorkflowPublicationStatusSync.ts
/** Tunable: delay before re-checking the status API while still publishing. */
var PUBLICATION_STATUS_POLL_INTERVAL_MS = 8e3;
var API_TO_LIFECYCLE = {
	in_progress: "publishing",
	published: "published",
	partial: "partial",
	failed: "failed",
	not_published: "idle"
};
function useWorkflowPublicationStatusSync(documentId) {
	const settingsStore = useSettingsStore();
	const workflowsStore = useWorkflowsStore();
	const { onDocumentVisible } = useDocumentVisibility$1();
	let timer;
	let disposed = false;
	function armPoll() {
		if (disposed) return;
		clearTimeout(timer);
		timer = setTimeout(() => {
			refetch();
		}, PUBLICATION_STATUS_POLL_INTERVAL_MS);
	}
	async function refetch() {
		if (disposed || !settingsStore.isWorkflowPublicationServiceEnabled) return;
		const workflowDocumentStore = useWorkflowDocumentStore(toValue(documentId));
		const workflowId = workflowDocumentStore.workflowId;
		if (!workflowId) return;
		clearTimeout(timer);
		try {
			const result = await workflowsStore.fetchPublicationStatus(workflowId);
			if (disposed) return;
			workflowDocumentStore.setPublicationStatus({
				status: API_TO_LIFECYCLE[result.status] ?? "idle",
				failures: result.triggers.filter((t) => t.status === "failed").map((t) => ({
					nodeId: t.nodeId,
					nodeName: workflowDocumentStore.getNodeById(t.nodeId)?.name ?? t.nodeId,
					errorMessage: t.errorMessage ?? ""
				})).sort((a, b) => a.nodeName.localeCompare(b.nodeName))
			});
			if (result.status === "in_progress") armPoll();
		} catch {
			if (!disposed && workflowDocumentStore.publicationStatus === "publishing") armPoll();
		}
	}
	watch(() => toValue(documentId), () => {
		refetch();
	});
	watch(() => useWorkflowDocumentStore(toValue(documentId)).publicationStatus, (status) => {
		if (status === "publishing") armPoll();
	});
	onMounted(() => {
		refetch();
	});
	onDocumentVisible(() => {
		refetch();
	});
	onBeforeUnmount(() => {
		disposed = true;
		clearTimeout(timer);
	});
	return { refetch };
}
//#endregion
//#region src/features/workflow-reviews/reviewRequired.store.ts
var useReviewRequiredStore = defineStore("workflowReviewRequired", () => {
	const storage = useLocalStorage(LOCAL_STORAGE_WORKFLOW_REVIEW_REQUIRED_BY_WORKFLOW(useUsersStore().currentUserId ?? "anonymous"), {}, {
		deep: true,
		flush: "sync"
	});
	const isReviewRequired = (workflowId) => storage.value[workflowId] ?? false;
	const setReviewRequired = (workflowId, value) => {
		storage.value[workflowId] = value;
	};
	return {
		isReviewRequired,
		setReviewRequired
	};
});
//#endregion
//#region src/features/workflow-reviews/reviewStatus.store.ts
/**
* Authoritative state of a workflow's *latest* review — one request serves both
* the open-review gate and the canvas banner, which also needs the last approved
* review. `null` means "fetched, no review"; a missing key means "not fetched yet".
*/
var useWorkflowReviewStatusStore = defineStore("workflowReviewStatus", () => {
	const rootStore = useRootStore();
	const latestReviewByWorkflowId = ref({});
	const latestSequenceByWorkflowId = {};
	const latestReviewRequest = (workflowId) => {
		return latestReviewByWorkflowId.value[workflowId] ?? null;
	};
	/**
	* The latest review only while it is still open. There is at most one open
	* review per workflow, so the latest request is the only candidate.
	*/
	const openReviewRequest = (workflowId) => {
		const review = latestReviewRequest(workflowId);
		return review?.state === "open" ? review : null;
	};
	/** The single client-side seam deriving "this workflow has an open review". */
	const hasOpenReview = (workflowId) => {
		return openReviewRequest(workflowId) !== null;
	};
	/** True when a newer fetch has started since this one. */
	const isStale = (workflowId, sequence) => sequence !== latestSequenceByWorkflowId[workflowId];
	const fetchStatus = async (workflowId) => {
		const sequence = (latestSequenceByWorkflowId[workflowId] ?? 0) + 1;
		latestSequenceByWorkflowId[workflowId] = sequence;
		try {
			const { data } = await fetchWorkflowReviewRequests(rootStore.restApiContext, {
				workflowId,
				take: 1
			});
			if (isStale(workflowId, sequence)) return;
			latestReviewByWorkflowId.value[workflowId] = data[0] ?? null;
		} catch (error) {
			if (isStale(workflowId, sequence)) return;
			if (error instanceof ResponseError && (error.httpStatusCode === 404 || error.httpStatusCode === 403)) {
				delete latestReviewByWorkflowId.value[workflowId];
				return;
			}
		}
	};
	/**
	* Adopt a freshly opened review as the latest one, without waiting for a
	* refetch. Mutation responses carry the minimal summary: a brand-new review is
	* pending, so neither derived field applies yet. The pinned version's name
	* comes from the caller for the same reason — the summary omits it, and
	* without it the banner would label the version the caller just named by id.
	*/
	const setOpenReview = (workflowId, review, description = null, workflowVersionName = null) => {
		latestSequenceByWorkflowId[workflowId] = (latestSequenceByWorkflowId[workflowId] ?? 0) + 1;
		latestReviewByWorkflowId.value[workflowId] = {
			...review,
			description,
			workflowVersionName,
			decisionBy: null,
			viewerCanOpen: true
		};
	};
	return {
		latestReviewByWorkflowId: readonly(latestReviewByWorkflowId),
		latestReviewRequest,
		openReviewRequest,
		hasOpenReview,
		fetchStatus,
		setOpenReview
	};
});
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewRequiredToggle.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewRequiredToggle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewRequiredToggle",
	props: { workflowId: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const reviewRequiredStore = useReviewRequiredStore();
		const reviewStatusStore = useWorkflowReviewStatusStore();
		const hasOpenReview = computed(() => reviewStatusStore.hasOpenReview(props.workflowId));
		const reviewRequired = computed({
			get: () => hasOpenReview.value || reviewRequiredStore.isReviewRequired(props.workflowId),
			set: (value) => {
				if (hasOpenReview.value) return;
				reviewRequiredStore.setReviewRequired(props.workflowId, value);
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(DropdownMenuItem_default), {
				id: "review-required",
				label: unref(i18n).baseText("workflowReviews.reviewRequired.title"),
				checked: reviewRequired.value,
				checkbox: "",
				"close-on-select": false,
				disabled: hasOpenReview.value,
				divided: "",
				"test-id": "workflow-review-required-toggle",
				onSelect: _cache[0] || (_cache[0] = ($event) => reviewRequired.value = !reviewRequired.value)
			}, {
				"item-label": withCtx(({ ui }) => [createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(ui.class)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.reviewRequired.title")), 1)]),
					_: 1
				}, 8, ["class"])]),
				"item-trailing": withCtx(({ ui }) => [createVNode(unref(N8nSwitch_default), {
					"model-value": reviewRequired.value,
					disabled: hasOpenReview.value,
					"aria-hidden": "true",
					tabindex: "-1",
					"data-test-id": "workflow-review-required-switch",
					class: normalizeClass([ui.class, _ctx.$style.switch])
				}, null, 8, [
					"model-value",
					"disabled",
					"class"
				])]),
				_: 1
			}, 8, [
				"label",
				"checked",
				"disabled"
			]), createVNode(unref(N8nText_default), {
				tag: "p",
				size: "xsmall",
				color: "text-base",
				class: normalizeClass(_ctx.$style.description)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(hasOpenReview.value ? unref(i18n).baseText("workflowReviews.reviewRequired.lockedDescription") : unref(i18n).baseText("workflowReviews.reviewRequired.description")), 1)]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
var WorkflowReviewRequiredToggle_vue_vue_type_style_index_0_lang_module_default = {
	footer: "_footer_1bx3p_2",
	description: "_description_1bx3p_6",
	"switch": "_switch_1bx3p_10"
};
var WorkflowReviewRequiredToggle_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewRequiredToggle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewRequiredToggle_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/composables/useWorkflowReviewDialogPreferences.ts
var useWorkflowReviewDialogPreferences = () => {
	const userId = useUsersStore().currentUserId;
	if (!userId) return {
		publishChoiceDismissed: ref(false),
		submittedDialogDismissed: ref(false)
	};
	return {
		publishChoiceDismissed: useLocalStorage(LOCAL_STORAGE_WORKFLOW_REVIEW_PUBLISH_CHOICE_HIDDEN(userId), false, { writeDefaults: false }),
		submittedDialogDismissed: useLocalStorage(LOCAL_STORAGE_WORKFLOW_REVIEW_SUBMITTED_DIALOG_HIDDEN(userId), false, { writeDefaults: false })
	};
};
//#endregion
//#region src/features/workflow-reviews/components/WorkflowPublishChoiceDialog.vue?vue&type=script&setup=true&lang.ts
var WorkflowPublishChoiceDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowPublishChoiceDialog",
	props: { open: { type: Boolean } },
	emits: [
		"update:open",
		"publish",
		"submit-for-review"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const { publishChoiceDismissed } = useWorkflowReviewDialogPreferences();
		const choosePublish = () => {
			emit("update:open", false);
			emit("publish");
		};
		const chooseReview = () => {
			emit("update:open", false);
			emit("submit-for-review");
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				header: unref(i18n).baseText("workflowReviews.publishChoice.title"),
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [createVNode(unref(DialogDescription_default), { class: normalizeClass(_ctx.$style.description) }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.publishChoice.description")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(DialogFooter_default), {
					"data-test-id": "workflow-publish-choice-dialog",
					class: normalizeClass(_ctx.$style.footer)
				}, {
					default: withCtx(() => [createVNode(unref(Checkbox_default), {
						modelValue: unref(publishChoiceDismissed),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(publishChoiceDismissed) ? publishChoiceDismissed.value = $event : null),
						"data-test-id": "workflow-publish-choice-dont-show-again",
						class: normalizeClass(_ctx.$style.dontShowAgain)
					}, {
						label: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.dontShowAgain")), 1)]),
						_: 1
					}, 8, ["modelValue", "class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						"data-test-id": "workflow-submit-for-review-choice-button",
						onClick: chooseReview
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.publishChoice.submitForReview")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						"data-test-id": "workflow-publish-choice-button",
						onClick: choosePublish
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.publishChoice.publish")), 1)]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["open", "header"]);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/WorkflowPublishChoiceDialog.vue?vue&type=style&index=0&lang.module.scss
var description$2 = "_description_wnnfi_388";
var footer$1 = "_footer_wnnfi_393";
var actions$1 = "_actions_wnnfi_398";
var dontShowAgain$1 = "_dontShowAgain_wnnfi_403";
var shimmer$7 = "_shimmer_wnnfi_1";
var spin$7 = "_spin_wnnfi_1";
var opacityPulse$7 = "_opacityPulse_wnnfi_1";
var popoverIn$7 = "_popoverIn_wnnfi_1";
var fadeIn$7 = "_fadeIn_wnnfi_1";
var collapsibleSlideDown$7 = "_collapsibleSlideDown_wnnfi_1";
var collapsibleSlideUp$7 = "_collapsibleSlideUp_wnnfi_1";
var collapsibleSlideDownBlurred$7 = "_collapsibleSlideDownBlurred_wnnfi_1";
var collapsibleSlideUpBlurred$7 = "_collapsibleSlideUpBlurred_wnnfi_1";
var blurSwapIn$7 = "_blurSwapIn_wnnfi_1";
var blurSwapOut$7 = "_blurSwapOut_wnnfi_1";
var pulseGlow$7 = "_pulseGlow_wnnfi_1";
var pulseGlowDelayed$7 = "_pulseGlowDelayed_wnnfi_1";
var fade$7 = "_fade_wnnfi_1";
var fadeInUp$7 = "_fadeInUp_wnnfi_1";
var fadeInDown$7 = "_fadeInDown_wnnfi_1";
var fadeInLeft$7 = "_fadeInLeft_wnnfi_1";
var fadeInRight$7 = "_fadeInRight_wnnfi_1";
var fadeOut$7 = "_fadeOut_wnnfi_1";
var fadeOutDown$7 = "_fadeOutDown_wnnfi_1";
var fadeOutUp$7 = "_fadeOutUp_wnnfi_1";
var fadeOutLeft$7 = "_fadeOutLeft_wnnfi_1";
var fadeOutRight$7 = "_fadeOutRight_wnnfi_1";
var ping$7 = "_ping_wnnfi_1";
var blinkBackground$7 = "_blinkBackground_wnnfi_1";
var typingBlink$7 = "_typingBlink_wnnfi_1";
var WorkflowPublishChoiceDialog_vue_vue_type_style_index_0_lang_module_default = {
	description: description$2,
	footer: footer$1,
	actions: actions$1,
	dontShowAgain: dontShowAgain$1,
	shimmer: shimmer$7,
	spin: spin$7,
	"skeleton-pulse": "_skeleton-pulse_wnnfi_1",
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
var WorkflowPublishChoiceDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowPublishChoiceDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowPublishChoiceDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/composables/useReviewVersionName.ts
/**
* Shared by the submit-for-review and update-review dialogs, which both prefill
* the current version's name and description and write the submitted ones back
* to the editor.
*/
var useReviewVersionName = () => {
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const versionName = ref("");
	const versionDescription = ref("");
	const prefilledVersionDescription = ref("");
	/**
	* Every path into either dialog is gated on a saved workflow, so the document
	* store's version is the one `flushSave()` will return.
	* Falsy rather than nullish: the publish endpoints accept `name: ""`.
	*/
	const prefillVersionName = () => {
		versionName.value = workflowDocumentStore.value.versionData?.name || generateVersionLabelFromId(workflowDocumentStore.value.versionId);
		versionDescription.value = workflowDocumentStore.value.versionData?.description ?? "";
		prefilledVersionDescription.value = versionDescription.value;
	};
	const submittedVersionDescription = () => {
		const trimmed = versionDescription.value.trim();
		return trimmed === prefilledVersionDescription.value.trim() ? void 0 : trimmed;
	};
	/**
	* Mirror the persisted name and description into the editor so version
	* history and the publish modal's prefill reflect them without a refetch.
	*/
	const applyVersionMetadata = (workflowVersionId, name, description) => {
		const store = workflowDocumentStore.value;
		if (store.versionId !== workflowVersionId) return;
		store.setVersionData({
			versionId: workflowVersionId,
			name,
			description: description === void 0 ? store.versionData?.description ?? null : description.trim() || null
		});
	};
	return {
		versionName,
		versionDescription,
		prefillVersionName,
		submittedVersionDescription,
		applyVersionMetadata
	};
};
//#endregion
//#region src/features/workflow-reviews/components/WorkflowSubmitForReviewDialog.vue?vue&type=script&setup=true&lang.ts
var REVIEW_TITLE_MAX_LENGTH = 128;
var REVIEW_DESCRIPTION_MAX_LENGTH$1 = 512;
var WorkflowSubmitForReviewDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowSubmitForReviewDialog",
	props: {
		open: { type: Boolean },
		workflowId: {},
		flushSave: { type: Function }
	},
	emits: [
		"update:open",
		"submitted",
		"conflict"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const toast = useToast();
		const reviewRequiredStore = useReviewRequiredStore();
		const reviewStatusStore = useWorkflowReviewStatusStore();
		const { versionName, versionDescription, prefillVersionName, submittedVersionDescription, applyVersionMetadata } = useReviewVersionName();
		const step = ref(1);
		const reviewTitle = ref("");
		const description = ref("");
		const isSubmitting = ref(false);
		const selectedReviewerId = ref("");
		const eligibleReviewers = ref([]);
		const isLoadingReviewers = ref(false);
		const titleInput = useTemplateRef("titleInput");
		const versionForm = useTemplateRef("versionForm");
		const stepLabel = computed(() => i18n.baseText("workflowReviews.submitForReview.step", { interpolate: {
			step: step.value,
			total: 2
		} }));
		const isNextDisabled = computed(() => versionName.value.trim().length === 0);
		const isSubmitDisabled = computed(() => isSubmitting.value || reviewTitle.value.trim().length === 0 || selectedReviewerId.value.length === 0);
		const reviewerOptions = computed(() => eligibleReviewers.value.map((reviewer) => ({
			...reviewer,
			fullName: formatUserDisplayName(reviewer) || void 0
		})));
		let loadReviewersSequence = 0;
		const loadEligibleReviewers = async () => {
			const sequence = ++loadReviewersSequence;
			isLoadingReviewers.value = true;
			try {
				const { data } = await fetchEligibleReviewers(rootStore.restApiContext, { workflowId: props.workflowId });
				if (sequence !== loadReviewersSequence) return;
				eligibleReviewers.value = data;
			} catch {
				if (sequence !== loadReviewersSequence) return;
				eligibleReviewers.value = [];
			} finally {
				if (sequence === loadReviewersSequence) isLoadingReviewers.value = false;
			}
		};
		watch(() => props.open, (isOpen) => {
			if (!isOpen) return;
			step.value = 1;
			reviewTitle.value = "";
			description.value = "";
			selectedReviewerId.value = "";
			eligibleReviewers.value = [];
			prefillVersionName();
			loadEligibleReviewers();
		});
		const close = () => {
			if (isSubmitting.value) return;
			emit("update:open", false);
		};
		const handleOpenAutoFocus = (event) => {
			event.preventDefault();
			nextTick(() => versionForm.value?.focusInput());
		};
		const goToReviewStep = () => {
			if (isNextDisabled.value) return;
			step.value = 2;
			nextTick(() => titleInput.value?.focus());
		};
		const goBack = () => {
			if (isSubmitting.value) return;
			step.value = 1;
		};
		const handleFormSubmit = () => {
			if (step.value === 1) goToReviewStep();
			else submit();
		};
		const submit = async () => {
			if (isSubmitDisabled.value || versionName.value.trim().length === 0) return;
			const workflowId = props.workflowId;
			const trimmedVersionName = versionName.value.trim();
			const trimmedVersionDescription = submittedVersionDescription();
			const trimmedTitle = reviewTitle.value.trim();
			const trimmedDescription = description.value.trim();
			const reviewerId = selectedReviewerId.value;
			isSubmitting.value = true;
			try {
				const workflowVersionId = await props.flushSave();
				if (props.workflowId !== workflowId) return;
				if (!workflowVersionId) {
					toast.showError(new Error(i18n.baseText("workflowReviews.submitForReview.error.save")), i18n.baseText("workflowReviews.submitForReview.error.title"));
					return;
				}
				const reviewRequest = await createWorkflowReviewRequest(rootStore.restApiContext, {
					title: trimmedTitle,
					description: trimmedDescription || void 0,
					workflows: [{
						workflowId,
						workflowVersionId,
						workflowVersionName: trimmedVersionName,
						workflowVersionDescription: trimmedVersionDescription
					}],
					reviewerUserIds: [reviewerId]
				});
				if (props.workflowId !== workflowId) return;
				applyVersionMetadata(workflowVersionId, trimmedVersionName, trimmedVersionDescription);
				reviewStatusStore.setOpenReview(workflowId, reviewRequest, trimmedDescription || null, trimmedVersionName);
				reviewRequiredStore.setReviewRequired(workflowId, false);
				emit("update:open", false);
				emit("submitted", reviewRequest.id);
			} catch (error) {
				if (error instanceof ResponseError && error.httpStatusCode === 409) {
					reviewStatusStore.fetchStatus(workflowId);
					if (props.workflowId !== workflowId) return;
					emit("update:open", false);
					emit("conflict");
					return;
				}
				toast.showError(error, i18n.baseText("workflowReviews.submitForReview.error.title"));
			} finally {
				isSubmitting.value = false;
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"aria-description": unref(i18n).baseText("workflowReviews.submitForReview.ariaDescription"),
				onOpenAutoFocus: handleOpenAutoFocus,
				"onUpdate:open": close
			}, {
				default: withCtx(() => [createVNode(unref(DialogHeader_default), null, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.step),
						size: "xsmall",
						color: "text-light",
						bold: "",
						tag: "p",
						"data-test-id": "workflow-review-dialog-step"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(stepLabel.value), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(DialogTitle_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.submitForReview.title")), 1)]),
						_: 1
					})]),
					_: 1
				}), createBaseVNode("form", {
					"data-test-id": "workflow-submit-for-review-dialog",
					class: normalizeClass(_ctx.$style.form),
					onSubmit: withModifiers(handleFormSubmit, ["prevent"])
				}, [step.value === 1 ? (openBlock(), createBlock(WorkflowVersionForm_default, {
					key: 0,
					ref_key: "versionForm",
					ref: versionForm,
					"version-name": unref(versionName),
					"onUpdate:versionName": _cache[0] || (_cache[0] = ($event) => isRef(versionName) ? versionName.value = $event : null),
					description: unref(versionDescription),
					"onUpdate:description": _cache[1] || (_cache[1] = ($event) => isRef(versionDescription) ? versionDescription.value = $event : null),
					"version-name-test-id": "workflow-review-version-name-input",
					"description-test-id": "workflow-review-version-description-input",
					onSubmit: goToReviewStep
				}, null, 8, ["version-name", "description"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "workflow-review-title",
						label: unref(i18n).baseText("workflowReviews.submitForReview.reviewTitle.label"),
						required: ""
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "workflow-review-title",
							ref_key: "titleInput",
							ref: titleInput,
							modelValue: reviewTitle.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => reviewTitle.value = $event),
							maxlength: REVIEW_TITLE_MAX_LENGTH,
							disabled: isSubmitting.value,
							"data-test-id": "workflow-review-title-input"
						}, null, 8, ["modelValue", "disabled"]), createVNode(CharacterCount_default, {
							value: reviewTitle.value,
							max: REVIEW_TITLE_MAX_LENGTH,
							"data-test-id": "workflow-review-title-character-count"
						}, null, 8, ["value"])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "workflow-review-description",
						label: unref(i18n).baseText("workflowReviews.submitForReview.description.label")
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "workflow-review-description",
							modelValue: description.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => description.value = $event),
							type: "textarea",
							rows: 3,
							maxlength: REVIEW_DESCRIPTION_MAX_LENGTH$1,
							disabled: isSubmitting.value,
							"data-test-id": "workflow-review-description-input"
						}, null, 8, ["modelValue", "disabled"]), createVNode(CharacterCount_default, {
							value: description.value,
							max: REVIEW_DESCRIPTION_MAX_LENGTH$1,
							"data-test-id": "workflow-review-description-character-count"
						}, null, 8, ["value"])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "workflow-review-reviewer",
						label: unref(i18n).baseText("workflowReviews.submitForReview.reviewer.label"),
						required: ""
					}, {
						default: withCtx(() => [createVNode(unref(N8nUserSelect_default), {
							id: "workflow-review-reviewer",
							modelValue: selectedReviewerId.value,
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedReviewerId.value = $event),
							users: reviewerOptions.value,
							loading: isLoadingReviewers.value,
							placeholder: unref(i18n).baseText("workflowReviews.submitForReview.reviewer.placeholder"),
							teleported: false,
							disabled: isSubmitting.value,
							clearable: "",
							"data-test-id": "workflow-review-reviewer-select"
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, [
							"modelValue",
							"users",
							"loading",
							"placeholder",
							"disabled"
						])]),
						_: 1
					}, 8, ["label"])
				], 64)), createVNode(unref(DialogFooter_default), null, {
					default: withCtx(() => [step.value === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nButton_default), {
						type: "button",
						variant: "outline",
						disabled: isSubmitting.value,
						"data-test-id": "workflow-review-cancel-button",
						onClick: close
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						type: "submit",
						disabled: isNextDisabled.value,
						"data-test-id": "workflow-review-next-button"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.next")), 1)]),
						_: 1
					}, 8, ["disabled"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nButton_default), {
						type: "button",
						variant: "outline",
						disabled: isSubmitting.value,
						"data-test-id": "workflow-review-back-button",
						onClick: goBack
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.back")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						type: "submit",
						loading: isSubmitting.value,
						disabled: isSubmitDisabled.value,
						"data-test-id": "workflow-review-submit-button"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.submitForReview.submit")), 1)]),
						_: 1
					}, 8, ["loading", "disabled"])], 64))]),
					_: 1
				})], 34)]),
				_: 1
			}, 8, ["open", "aria-description"]);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/WorkflowSubmitForReviewDialog.vue?vue&type=style&index=0&lang.module.scss
var form$1 = "_form_1d3w0_388";
var step$1 = "_step_1d3w0_395";
var shimmer$6 = "_shimmer_1d3w0_1";
var spin$6 = "_spin_1d3w0_1";
var opacityPulse$6 = "_opacityPulse_1d3w0_1";
var popoverIn$6 = "_popoverIn_1d3w0_1";
var fadeIn$6 = "_fadeIn_1d3w0_1";
var collapsibleSlideDown$6 = "_collapsibleSlideDown_1d3w0_1";
var collapsibleSlideUp$6 = "_collapsibleSlideUp_1d3w0_1";
var collapsibleSlideDownBlurred$6 = "_collapsibleSlideDownBlurred_1d3w0_1";
var collapsibleSlideUpBlurred$6 = "_collapsibleSlideUpBlurred_1d3w0_1";
var blurSwapIn$6 = "_blurSwapIn_1d3w0_1";
var blurSwapOut$6 = "_blurSwapOut_1d3w0_1";
var pulseGlow$6 = "_pulseGlow_1d3w0_1";
var pulseGlowDelayed$6 = "_pulseGlowDelayed_1d3w0_1";
var fade$6 = "_fade_1d3w0_1";
var fadeInUp$6 = "_fadeInUp_1d3w0_1";
var fadeInDown$6 = "_fadeInDown_1d3w0_1";
var fadeInLeft$6 = "_fadeInLeft_1d3w0_1";
var fadeInRight$6 = "_fadeInRight_1d3w0_1";
var fadeOut$6 = "_fadeOut_1d3w0_1";
var fadeOutDown$6 = "_fadeOutDown_1d3w0_1";
var fadeOutUp$6 = "_fadeOutUp_1d3w0_1";
var fadeOutLeft$6 = "_fadeOutLeft_1d3w0_1";
var fadeOutRight$6 = "_fadeOutRight_1d3w0_1";
var ping$6 = "_ping_1d3w0_1";
var blinkBackground$6 = "_blinkBackground_1d3w0_1";
var typingBlink$6 = "_typingBlink_1d3w0_1";
var WorkflowSubmitForReviewDialog_vue_vue_type_style_index_0_lang_module_default = {
	form: form$1,
	step: step$1,
	shimmer: shimmer$6,
	spin: spin$6,
	"skeleton-pulse": "_skeleton-pulse_1d3w0_1",
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
var WorkflowSubmitForReviewDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowSubmitForReviewDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowSubmitForReviewDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewSubmittedDialog.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewSubmittedDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewSubmittedDialog",
	props: {
		open: { type: Boolean },
		workflowReviewRequestId: {}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const { submittedDialogDismissed } = useWorkflowReviewDialogPreferences();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				header: unref(i18n).baseText("workflowReviews.submitted.title"),
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [createVNode(unref(DialogDescription_default), {
					"data-test-id": "workflow-review-submitted-dialog",
					class: normalizeClass(_ctx.$style.description)
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "workflowReviews.submitted.description",
						tag: "span",
						scope: "global"
					}, {
						submission: withCtx(() => [createVNode(unref(N8nLink_default), { to: {
							name: unref(WORKFLOW_REVIEW_REQUESTS_VIEW),
							params: { reviewRequestId: __props.workflowReviewRequestId }
						} }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.submitted.description.submission")), 1)]),
							_: 1
						}, 8, ["to"])]),
						_: 1
					})]),
					_: 1
				}, 8, ["class"]), createVNode(unref(DialogFooter_default), { class: normalizeClass(_ctx.$style.footer) }, {
					default: withCtx(() => [createVNode(unref(Checkbox_default), {
						modelValue: unref(submittedDialogDismissed),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(submittedDialogDismissed) ? submittedDialogDismissed.value = $event : null),
						"data-test-id": "workflow-review-submitted-dont-show-again",
						class: normalizeClass(_ctx.$style.dontShowAgain)
					}, {
						label: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.dontShowAgain")), 1)]),
						_: 1
					}, 8, ["modelValue", "class"]), createVNode(unref(N8nButton_default), {
						"data-test-id": "workflow-review-submitted-got-it-button",
						onClick: _cache[1] || (_cache[1] = ($event) => emit("update:open", false))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.submitted.gotIt")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["open", "header"]);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewSubmittedDialog.vue?vue&type=style&index=0&lang.module.scss
var description$1 = "_description_1ogir_388";
var footer = "_footer_1ogir_393";
var dontShowAgain = "_dontShowAgain_1ogir_398";
var shimmer$5 = "_shimmer_1ogir_1";
var spin$5 = "_spin_1ogir_1";
var opacityPulse$5 = "_opacityPulse_1ogir_1";
var popoverIn$5 = "_popoverIn_1ogir_1";
var fadeIn$5 = "_fadeIn_1ogir_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_1ogir_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_1ogir_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_1ogir_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_1ogir_1";
var blurSwapIn$5 = "_blurSwapIn_1ogir_1";
var blurSwapOut$5 = "_blurSwapOut_1ogir_1";
var pulseGlow$5 = "_pulseGlow_1ogir_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_1ogir_1";
var fade$5 = "_fade_1ogir_1";
var fadeInUp$5 = "_fadeInUp_1ogir_1";
var fadeInDown$5 = "_fadeInDown_1ogir_1";
var fadeInLeft$5 = "_fadeInLeft_1ogir_1";
var fadeInRight$5 = "_fadeInRight_1ogir_1";
var fadeOut$5 = "_fadeOut_1ogir_1";
var fadeOutDown$5 = "_fadeOutDown_1ogir_1";
var fadeOutUp$5 = "_fadeOutUp_1ogir_1";
var fadeOutLeft$5 = "_fadeOutLeft_1ogir_1";
var fadeOutRight$5 = "_fadeOutRight_1ogir_1";
var ping$5 = "_ping_1ogir_1";
var blinkBackground$5 = "_blinkBackground_1ogir_1";
var typingBlink$5 = "_typingBlink_1ogir_1";
var WorkflowReviewSubmittedDialog_vue_vue_type_style_index_0_lang_module_default = {
	description: description$1,
	footer,
	dontShowAgain,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_1ogir_1",
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
var WorkflowReviewSubmittedDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewSubmittedDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewSubmittedDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowUpdateReviewDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { key: 1 };
var REVIEW_DESCRIPTION_MAX_LENGTH = 512;
var WorkflowUpdateReviewDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowUpdateReviewDialog",
	props: {
		open: { type: Boolean },
		workflowId: {},
		flushSave: {},
		canSubmit: {
			type: Boolean,
			default: true
		}
	},
	emits: ["update:open", "updated"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const toast = useToast();
		const reviewStatusStore = useWorkflowReviewStatusStore();
		const { versionName, versionDescription, prefillVersionName, submittedVersionDescription, applyVersionMetadata } = useReviewVersionName();
		const step = ref(1);
		const reviewDescription = ref("");
		const prefilledReviewDescription = ref("");
		const loadedReview = ref(null);
		const isLoadingReviewDescription = ref(false);
		const isSubmitting = ref(false);
		const workflowReviewRequestId = computed(() => loadedReview.value?.id ?? reviewStatusStore.openReviewRequest(props.workflowId)?.id);
		const stepLabel = computed(() => i18n.baseText("workflowReviews.submitForReview.step", { interpolate: {
			step: step.value,
			total: 2
		} }));
		const hasInvalidVersion = computed(() => !props.canSubmit || versionName.value.trim().length === 0);
		const isNextDisabled = computed(() => hasInvalidVersion.value || isLoadingReviewDescription.value);
		const isSubmitDisabled = computed(() => isSubmitting.value || hasInvalidVersion.value);
		const close = () => {
			if (isSubmitting.value) return;
			emit("update:open", false);
		};
		/** The open review may have been closed elsewhere in the meantime — refetch once before giving up. */
		const resolveOpenReviewRequest = async (workflowId) => {
			let request = reviewStatusStore.openReviewRequest(workflowId);
			if (!request) {
				await reviewStatusStore.fetchStatus(workflowId);
				request = reviewStatusStore.openReviewRequest(workflowId);
			}
			return request;
		};
		const { next: nextReviewLoad } = useLatestFetch();
		const loadReviewDescription = async (workflowId) => {
			const isCurrent = nextReviewLoad();
			isLoadingReviewDescription.value = true;
			try {
				const openReviewRequest = await resolveOpenReviewRequest(workflowId);
				if (!isCurrent() || props.workflowId !== workflowId) return;
				if (!openReviewRequest) return;
				loadedReview.value = openReviewRequest;
				reviewDescription.value = openReviewRequest.description ?? "";
				prefilledReviewDescription.value = reviewDescription.value;
			} catch (error) {
				if (!isCurrent() || props.workflowId !== workflowId) return;
				toast.showError(error, i18n.baseText("workflowReviews.updateReview.error.title"));
			} finally {
				if (isCurrent()) isLoadingReviewDescription.value = false;
			}
		};
		watch(() => [props.open, props.workflowId], ([isOpen, workflowId]) => {
			if (!isOpen) {
				nextReviewLoad();
				loadedReview.value = null;
				isLoadingReviewDescription.value = false;
				return;
			}
			step.value = 1;
			loadedReview.value = null;
			reviewDescription.value = "";
			prefilledReviewDescription.value = "";
			prefillVersionName();
			loadReviewDescription(workflowId);
		});
		const goToReviewStep = () => {
			if (isNextDisabled.value) return;
			step.value = 2;
		};
		const goBack = () => {
			if (isSubmitting.value) return;
			step.value = 1;
		};
		const submittedReviewDescription = () => {
			const trimmed = reviewDescription.value.trim();
			return trimmed === prefilledReviewDescription.value.trim() ? void 0 : trimmed;
		};
		const handleFormSubmit = () => {
			if (step.value === 1) goToReviewStep();
			else submit();
		};
		const submit = async () => {
			if (isSubmitDisabled.value) return;
			const workflowId = props.workflowId;
			const trimmedVersionName = versionName.value.trim();
			const trimmedVersionDescription = submittedVersionDescription();
			const trimmedReviewDescription = submittedReviewDescription();
			isSubmitting.value = true;
			try {
				const workflowVersionId = await props.flushSave();
				if (props.workflowId !== workflowId) return;
				if (!workflowVersionId) {
					toast.showError(new Error(i18n.baseText("workflowReviews.submitForReview.error.save")), i18n.baseText("workflowReviews.updateReview.error.title"));
					return;
				}
				const reviewRequest = await resolveOpenReviewRequest(workflowId);
				if (props.workflowId !== workflowId) return;
				if (!reviewRequest) {
					toast.showError(new Error(i18n.baseText("workflowReviews.updateReview.error.noOpenReview")), i18n.baseText("workflowReviews.updateReview.error.title"));
					emit("update:open", false);
					return;
				}
				loadedReview.value = reviewRequest;
				if (reviewRequest.workflowVersionId === workflowVersionId && trimmedReviewDescription === void 0) {
					emit("update:open", false);
					return;
				}
				await updateWorkflowReviewRequestVersion(rootStore.restApiContext, reviewRequest.id, {
					workflowId,
					workflowVersionId,
					workflowVersionName: trimmedVersionName,
					workflowVersionDescription: trimmedVersionDescription,
					description: trimmedReviewDescription
				});
				if (props.workflowId !== workflowId) return;
				applyVersionMetadata(workflowVersionId, trimmedVersionName, trimmedVersionDescription);
				reviewStatusStore.fetchStatus(workflowId);
				emit("update:open", false);
				emit("updated", reviewRequest.id);
			} catch (error) {
				await reviewStatusStore.fetchStatus(workflowId);
				if (props.workflowId === workflowId) loadedReview.value = reviewStatusStore.openReviewRequest(workflowId);
				toast.showError(error, i18n.baseText("workflowReviews.updateReview.error.title"));
			} finally {
				isSubmitting.value = false;
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"onUpdate:open": close
			}, {
				default: withCtx(() => [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(unref(N8nText_default), {
							class: normalizeClass(_ctx.$style.step),
							size: "xsmall",
							color: "text-light",
							bold: "",
							tag: "p",
							"data-test-id": "workflow-update-review-dialog-step"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(stepLabel.value), 1)]),
							_: 1
						}, 8, ["class"]), createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.updateReview.title")), 1)]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(unref(DialogDescription_default), { class: normalizeClass(_ctx.$style.description) }, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "workflowReviews.updateReview.description",
							tag: "span",
							scope: "global"
						}, {
							review: withCtx(() => [workflowReviewRequestId.value ? (openBlock(), createBlock(unref(N8nLink_default), {
								key: 0,
								to: {
									name: unref(WORKFLOW_REVIEW_REQUESTS_VIEW),
									params: { reviewRequestId: workflowReviewRequestId.value }
								}
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.updateReview.description.review")), 1)]),
								_: 1
							}, 8, ["to"])) : (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(unref(i18n).baseText("workflowReviews.updateReview.description.review")), 1))]),
							_: 1
						})]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("form", {
						class: normalizeClass(_ctx.$style.form),
						"data-test-id": "workflow-update-review-dialog",
						onSubmit: withModifiers(handleFormSubmit, ["prevent"])
					}, [step.value === 1 ? (openBlock(), createBlock(WorkflowVersionForm_default, {
						key: 0,
						"version-name": unref(versionName),
						"onUpdate:versionName": _cache[0] || (_cache[0] = ($event) => isRef(versionName) ? versionName.value = $event : null),
						description: unref(versionDescription),
						"onUpdate:description": _cache[1] || (_cache[1] = ($event) => isRef(versionDescription) ? versionDescription.value = $event : null),
						disabled: isSubmitting.value,
						"version-name-test-id": "workflow-update-review-version-name-input",
						"description-test-id": "workflow-update-review-version-description-input",
						onSubmit: goToReviewStep
					}, null, 8, [
						"version-name",
						"description",
						"disabled"
					])) : (openBlock(), createBlock(unref(N8nInputLabel_default), {
						key: 1,
						"input-name": "workflow-update-review-description",
						label: unref(i18n).baseText("workflowReviews.submitForReview.description.label")
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "workflow-update-review-description",
							modelValue: reviewDescription.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => reviewDescription.value = $event),
							type: "textarea",
							rows: 3,
							maxlength: REVIEW_DESCRIPTION_MAX_LENGTH,
							disabled: isSubmitting.value,
							"data-test-id": "workflow-update-review-description-input"
						}, null, 8, ["modelValue", "disabled"]), createVNode(CharacterCount_default, {
							value: reviewDescription.value,
							max: REVIEW_DESCRIPTION_MAX_LENGTH,
							"data-test-id": "workflow-update-review-description-character-count"
						}, null, 8, ["value"])]),
						_: 1
					}, 8, ["label"])), createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [step.value === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nButton_default), {
							type: "button",
							variant: "outline",
							disabled: isSubmitting.value,
							"data-test-id": "workflow-update-review-cancel-button",
							onClick: close
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
							_: 1
						}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
							type: "submit",
							loading: isLoadingReviewDescription.value,
							disabled: isNextDisabled.value,
							"data-test-id": "workflow-update-review-next-button"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.next")), 1)]),
							_: 1
						}, 8, ["loading", "disabled"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nButton_default), {
							type: "button",
							variant: "outline",
							disabled: isSubmitting.value,
							"data-test-id": "workflow-update-review-back-button",
							onClick: goBack
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.back")), 1)]),
							_: 1
						}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
							type: "submit",
							loading: isSubmitting.value,
							disabled: isSubmitDisabled.value,
							"data-test-id": "workflow-update-review-submit-button"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.updateReview.submit")), 1)]),
							_: 1
						}, 8, ["loading", "disabled"])], 64))]),
						_: 1
					})], 34)
				]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/WorkflowUpdateReviewDialog.vue?vue&type=style&index=0&lang.module.scss
var description = "_description_1g9h2_388";
var form = "_form_1g9h2_393";
var step = "_step_1g9h2_400";
var shimmer$4 = "_shimmer_1g9h2_1";
var spin$4 = "_spin_1g9h2_1";
var opacityPulse$4 = "_opacityPulse_1g9h2_1";
var popoverIn$4 = "_popoverIn_1g9h2_1";
var fadeIn$4 = "_fadeIn_1g9h2_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_1g9h2_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_1g9h2_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_1g9h2_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_1g9h2_1";
var blurSwapIn$4 = "_blurSwapIn_1g9h2_1";
var blurSwapOut$4 = "_blurSwapOut_1g9h2_1";
var pulseGlow$4 = "_pulseGlow_1g9h2_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_1g9h2_1";
var fade$4 = "_fade_1g9h2_1";
var fadeInUp$4 = "_fadeInUp_1g9h2_1";
var fadeInDown$4 = "_fadeInDown_1g9h2_1";
var fadeInLeft$4 = "_fadeInLeft_1g9h2_1";
var fadeInRight$4 = "_fadeInRight_1g9h2_1";
var fadeOut$4 = "_fadeOut_1g9h2_1";
var fadeOutDown$4 = "_fadeOutDown_1g9h2_1";
var fadeOutUp$4 = "_fadeOutUp_1g9h2_1";
var fadeOutLeft$4 = "_fadeOutLeft_1g9h2_1";
var fadeOutRight$4 = "_fadeOutRight_1g9h2_1";
var ping$4 = "_ping_1g9h2_1";
var blinkBackground$4 = "_blinkBackground_1g9h2_1";
var typingBlink$4 = "_typingBlink_1g9h2_1";
var WorkflowUpdateReviewDialog_vue_vue_type_style_index_0_lang_module_default = {
	description,
	form,
	step,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_1g9h2_1",
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
var WorkflowUpdateReviewDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowUpdateReviewDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowUpdateReviewDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewStatusBanner.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewStatusBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewStatusBanner",
	props: {
		review: {},
		savedVersionId: {},
		canSubmitChanges: { type: Boolean },
		submitBlockedReason: {},
		canOpenReview: { type: Boolean }
	},
	emits: ["open-review", "submit-changes"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const isOpen = ref(false);
		const pinnedVersionLabel = computed(() => {
			const review = props.review;
			if (!review?.workflowVersionId) return "";
			return getVersionLabel({ workflowHistory: {
				versionId: review.workflowVersionId,
				name: review.workflowVersionName
			} });
		});
		const actorName = computed(() => {
			const actor = props.review?.decisionBy;
			if (!actor) return null;
			return formatUserDisplayName(actor);
		});
		/**
		* Whether the working copy has moved past the reviewed version. An unknown saved
		* version reads as "in sync": submitting a version we cannot identify would be
		* worse than waiting for the next status sync.
		*/
		const hasDivergentVersion = computed(() => {
			const pinned = props.review?.workflowVersionId;
			if (!pinned || !props.savedVersionId) return false;
			return props.savedVersionId !== pinned;
		});
		const status = computed(() => {
			const review = props.review;
			if (!review?.workflowVersionId) return null;
			const version = pinnedVersionLabel.value;
			if (review.state === "open") {
				if (review.decision === "changes_requested") {
					const actor = actorName.value;
					return {
						pill: hasDivergentVersion.value ? i18n.baseText("workflowReviews.editorBanner.pendingStale.pill") : i18n.baseText("workflowReviews.editorBanner.changesRequested.pill"),
						title: i18n.baseText("workflowReviews.editorBanner.changesRequested.title"),
						body: actor ? i18n.baseText("workflowReviews.editorBanner.changesRequested.body", { interpolate: {
							actor,
							version
						} }) : i18n.baseText("workflowReviews.editorBanner.changesRequested.bodyWithoutActor", { interpolate: { version } }),
						support: i18n.baseText("workflowReviews.editorBanner.changesRequested.support"),
						tone: "warning",
						action: "submit-changes"
					};
				}
				if (hasDivergentVersion.value) return {
					pill: i18n.baseText("workflowReviews.editorBanner.pendingStale.pill"),
					title: i18n.baseText("workflowReviews.editorBanner.pendingStale.title"),
					body: i18n.baseText("workflowReviews.editorBanner.pendingStale.body"),
					support: i18n.baseText("workflowReviews.editorBanner.pendingStale.support"),
					tone: "warning",
					action: "submit-changes"
				};
				return {
					pill: i18n.baseText("workflowReviews.editorBanner.pending.pill"),
					title: i18n.baseText("workflowReviews.editorBanner.pending.title"),
					body: i18n.baseText("workflowReviews.editorBanner.pending.body", { interpolate: { version } }),
					support: i18n.baseText("workflowReviews.editorBanner.pending.support"),
					tone: "info",
					action: null
				};
			}
			return null;
		});
		/** Nothing to submit while the review already covers the saved version. */
		const isSubmitChangesEnabled = computed(() => props.canSubmitChanges && hasDivergentVersion.value);
		const submitChangesHint = computed(() => {
			if (props.submitBlockedReason) return props.submitBlockedReason;
			return props.canSubmitChanges && !hasDivergentVersion.value ? i18n.baseText("workflowReviews.editorBanner.submitChanges.savedVersionHint") : "";
		});
		/** A popover with no action left is still worth showing for its copy. */
		const hasActions = computed(() => props.canOpenReview || !!status.value?.action);
		/** Acting on the review always dismisses the popover first. */
		const onOpenReview = () => {
			isOpen.value = false;
			emit("open-review");
		};
		const onSubmitChanges = () => {
			isOpen.value = false;
			emit("submit-changes");
		};
		return (_ctx, _cache) => {
			return status.value ? (openBlock(), createBlock(unref(N8nPopover_default), {
				key: 0,
				open: isOpen.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isOpen.value = $event),
				side: "bottom",
				align: "end",
				width: "360px",
				"enable-scrolling": false,
				"content-class": _ctx.$style.popover
			}, {
				trigger: withCtx(() => [createBaseVNode("button", {
					type: "button",
					class: normalizeClass([_ctx.$style.pill, _ctx.$style[status.value.tone]]),
					"data-test-id": "workflow-review-status-pill"
				}, toDisplayString(status.value.pill), 3)]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "workflow-review-status-popover"
				}, [
					createVNode(unref(N8nHeading_default), {
						tag: "h3",
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(status.value.title), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(status.value.body), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(status.value.support), 1)]),
						_: 1
					}),
					hasActions.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.actions)
					}, [__props.canOpenReview ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "outline",
						size: "small",
						"data-test-id": "workflow-review-open-review-button",
						onClick: onOpenReview
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.editorBanner.openReview")), 1)]),
						_: 1
					})) : createCommentVNode("", true), status.value.action === "submit-changes" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						disabled: !submitChangesHint.value,
						content: submitChangesHint.value,
						"show-after": 300
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							size: "small",
							disabled: !isSubmitChangesEnabled.value,
							"data-test-id": "workflow-review-submit-changes-button",
							onClick: onSubmitChanges
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.editorBanner.submitChanges")), 1)]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["disabled", "content"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["open", "content-class"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewStatusBanner.vue?vue&type=style&index=0&lang.module.scss
var pill = "_pill_i33h8_388";
var info = "_info_i33h8_404";
var warning = "_warning_i33h8_412";
var popover = "_popover_i33h8_420";
var content = "_content_i33h8_424";
var actions = "_actions_i33h8_430";
var shimmer$3 = "_shimmer_i33h8_1";
var spin$3 = "_spin_i33h8_1";
var opacityPulse$3 = "_opacityPulse_i33h8_1";
var popoverIn$3 = "_popoverIn_i33h8_1";
var fadeIn$3 = "_fadeIn_i33h8_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_i33h8_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_i33h8_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_i33h8_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_i33h8_1";
var blurSwapIn$3 = "_blurSwapIn_i33h8_1";
var blurSwapOut$3 = "_blurSwapOut_i33h8_1";
var pulseGlow$3 = "_pulseGlow_i33h8_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_i33h8_1";
var fade$3 = "_fade_i33h8_1";
var fadeInUp$3 = "_fadeInUp_i33h8_1";
var fadeInDown$3 = "_fadeInDown_i33h8_1";
var fadeInLeft$3 = "_fadeInLeft_i33h8_1";
var fadeInRight$3 = "_fadeInRight_i33h8_1";
var fadeOut$3 = "_fadeOut_i33h8_1";
var fadeOutDown$3 = "_fadeOutDown_i33h8_1";
var fadeOutUp$3 = "_fadeOutUp_i33h8_1";
var fadeOutLeft$3 = "_fadeOutLeft_i33h8_1";
var fadeOutRight$3 = "_fadeOutRight_i33h8_1";
var ping$3 = "_ping_i33h8_1";
var blinkBackground$3 = "_blinkBackground_i33h8_1";
var typingBlink$3 = "_typingBlink_i33h8_1";
var WorkflowReviewStatusBanner_vue_vue_type_style_index_0_lang_module_default = {
	pill,
	info,
	warning,
	popover,
	content,
	actions,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_i33h8_1",
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
var WorkflowReviewStatusBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewStatusBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewStatusBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/composables/useWorkflowReviewStatusSync.ts
/**
* Keeps the review-status store in sync with the backend for the given
* workflow. Push messages are treated purely as invalidation signals.
*/
function useWorkflowReviewStatusSync(workflowId) {
	const pushStore = usePushConnectionStore();
	const reviewStatusStore = useWorkflowReviewStatusStore();
	const { isWorkflowReviewsEnabled } = useWorkflowReviewsFeature();
	const { onDocumentVisible } = useDocumentVisibility$1();
	async function refetch() {
		if (!isWorkflowReviewsEnabled.value) return;
		const id = toValue(workflowId);
		if (!id) return;
		await reviewStatusStore.fetchStatus(id);
	}
	function onPushMessage(event) {
		if (event.type === "workflowReviewStateChanged" && event.data.workflowId === toValue(workflowId)) refetch();
	}
	const removePushListener = pushStore.addEventListener(onPushMessage);
	watch(() => toValue(workflowId), () => {
		refetch();
	});
	watch(() => pushStore.isConnected, (isConnected, wasConnected) => {
		if (isConnected && !wasConnected) refetch();
	});
	onMounted(() => {
		refetch();
	});
	onDocumentVisible(() => {
		refetch();
	});
	onBeforeUnmount(() => removePushListener());
	return { refetch };
}
//#endregion
//#region src/app/components/MainHeader/WorkflowHeaderDraftPublishActions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "workflow-active-version-info" };
var VERSION_ACTIONS = /* @__PURE__ */ function(VERSION_ACTIONS) {
	VERSION_ACTIONS["PUBLISH"] = "publish";
	VERSION_ACTIONS["NAME_VERSION"] = "name-version";
	VERSION_ACTIONS["PUBLISH_TIMELINE"] = "publish-timeline";
	VERSION_ACTIONS["UNPUBLISH"] = "unpublish";
	return VERSION_ACTIONS;
}(VERSION_ACTIONS || {});
var WorkflowHeaderDraftPublishActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowHeaderDraftPublishActions",
	props: {
		id: {},
		isArchived: { type: Boolean },
		isNewWorkflow: { type: Boolean },
		workflowPermissions: {}
	},
	setup(__props) {
		const props = __props;
		const uiStore = useUIStore();
		const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(props.id)));
		useWorkflowPublicationStatusSync(() => workflowDocumentStore.value.documentId);
		const { refetch: refetchReviewStatus } = useWorkflowReviewStatusSync(() => props.isNewWorkflow ? void 0 : props.id);
		const collaborationStore = useCollaborationStore();
		const projectStore = useProjectsStore();
		const workflowHistoryStore = useWorkflowHistoryStore();
		const settingsStore = useSettingsStore();
		const i18n = useI18n();
		const router = useRouter();
		const toast = useToast();
		const saveStore = useWorkflowSaveStore();
		const { saveCurrentWorkflow, cancelAutoSave } = useWorkflowSaving({ router });
		const workflowActivate = useWorkflowActivate();
		const { isWorkflowReviewsEnabled } = useWorkflowReviewsFeature();
		const reviewRequiredStore = useReviewRequiredStore();
		const reviewStatusStore = useWorkflowReviewStatusStore();
		const { publishChoiceDismissed, submittedDialogDismissed } = useWorkflowReviewDialogPreferences();
		const effectiveReviewRequired = computed(() => reviewStatusStore.hasOpenReview(props.id) || reviewRequiredStore.isReviewRequired(props.id));
		const isNamedVersionsEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.NamedVersions]);
		const showWorkflowReviewControls = computed(() => isWorkflowReviewsEnabled.value && !props.isNewWorkflow);
		const latestReviewRequest = computed(() => reviewStatusStore.latestReviewRequest(props.id));
		const openReviewRequest = computed(() => reviewStatusStore.openReviewRequest(props.id));
		/** Saved version of the working copy — what a review is pinned to, or diverges from. */
		const savedVersionId = computed(() => workflowDocumentStore.value.versionId || void 0);
		/** Whether the open review already contains the current saved workflow version. */
		const reviewContainsSavedVersion = computed(() => {
			const reviewVersionId = openReviewRequest.value?.workflowVersionId;
			return !!reviewVersionId && reviewVersionId === savedVersionId.value;
		});
		/** Unsaved workflow edits can still produce a new version when Publish saves first. */
		const isReviewUpdateBlocked = computed(() => reviewContainsSavedVersion.value && !uiStore.hasUnsavedWorkflowChanges);
		const autoSaveForPublish = ref(false);
		const isSaving = ref(false);
		const showPublishChoiceDialog = ref(false);
		const showSubmitForReviewDialog = ref(false);
		const showReviewSubmittedDialog = ref(false);
		const submittedReviewRequestId = ref();
		const showUpdateReviewDialog = ref(false);
		watch(() => props.id, () => {
			showPublishChoiceDialog.value = false;
			showSubmitForReviewDialog.value = false;
			showReviewSubmittedDialog.value = false;
			submittedReviewRequestId.value = void 0;
			showUpdateReviewDialog.value = false;
			uiStore.closeModal(WORKFLOW_PUBLISH_MODAL_KEY);
		});
		const showSaveButton = computed(() => !settingsStore.isAutosaveEnabled);
		const onSaveButtonClick = async () => {
			isSaving.value = true;
			try {
				await saveCurrentWorkflow({});
			} finally {
				isSaving.value = false;
			}
		};
		const foundTriggers = computed(() => getActivatableTriggerNodes(workflowDocumentStore.value.workflowTriggerNodes));
		const containsTrigger = computed(() => {
			return foundTriggers.value.length > 0;
		});
		const nodesWithValidationIssues = computed(() => workflowDocumentStore.value.nodesWithValidationIssues);
		const hasNodeIssues = computed(() => workflowDocumentStore.value.hasPublishBlockingIssues);
		const isWorkflowPublishable = computed(() => containsTrigger.value && !hasNodeIssues.value);
		/** Why publishing is blocked, or '' when it is not. Same copy as the Publish tooltip. */
		const publishBlockedReason = computed(() => {
			if (isWorkflowPublishable.value) return "";
			return !containsTrigger.value ? i18n.baseText("workflows.publishModal.noTriggerMessage") : i18n.baseText("workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.title", {
				interpolate: { count: nodesWithValidationIssues.value.length },
				adjustToNumber: nodesWithValidationIssues.value.length
			});
		});
		const publicationStatus = computed(() => workflowDocumentStore.value.publicationStatus);
		const publicationFailures = computed(() => workflowDocumentStore.value.publicationFailures);
		const publicationServiceEnabled = computed(() => settingsStore.isWorkflowPublicationServiceEnabled);
		const workflowPublishState = computed(() => {
			if (publicationServiceEnabled.value) {
				if (publicationStatus.value === "publishing") return "publishing";
				if (publicationStatus.value === "partial") return "publication-partial";
				if (publicationStatus.value === "failed") return "publication-failed";
			}
			const hasBeenPublished = !!activeVersion.value;
			const hasChanges = workflowDocumentStore.value.versionId !== activeVersion.value?.versionId || uiStore.hasUnsavedWorkflowChanges;
			if (!hasBeenPublished) return isWorkflowPublishable.value ? "not-published-eligible" : "not-published-not-eligible";
			if (!containsTrigger.value) return "published-invalid-trigger";
			if (hasNodeIssues.value) return "published-node-issues";
			return hasChanges ? "published-with-changes" : "published-no-changes";
		});
		const collaborationReadOnly = computed(() => collaborationStore.shouldBeReadOnly);
		const hasUpdatePermission = computed(() => props.workflowPermissions.update);
		const hasPublishPermission = computed(() => props.workflowPermissions.publish);
		const hasUnpublishPermission = computed(() => props.workflowPermissions.unpublish);
		const isPersonalSpace = computed(() => projectStore.currentProject?.type === ProjectTypes.Personal);
		/**
		* Submitting changes needs publish rights and write access. An archived workflow
		* keeps the status readable but rejects writes. It also clears the same
		* publishability bar as the Publish button, so the two cannot drift apart.
		*/
		const canActOnReview = computed(() => !!hasPublishPermission.value && !collaborationReadOnly.value && !props.isArchived && isWorkflowPublishable.value);
		const canOpenReview = computed(() => latestReviewRequest.value?.viewerCanOpen ?? false);
		/**
		* Cancel autosave if scheduled or wait for it to finish if in progress
		* Save immediately if autosave idle or cancelled
		*/
		const saveBeforePublish = async () => {
			let saved = false;
			if (saveStore.autoSaveState === AutoSaveState.InProgress && saveStore.pendingSave) {
				autoSaveForPublish.value = true;
				try {
					await saveStore.pendingSave;
					saved = true;
				} catch {} finally {
					autoSaveForPublish.value = false;
				}
			} else if (saveStore.autoSaveState === AutoSaveState.Scheduled) cancelAutoSave();
			if (!saved || uiStore.stateIsDirty || props.isNewWorkflow) {
				autoSaveForPublish.value = true;
				saved = await saveCurrentWorkflow({}, true);
				autoSaveForPublish.value = false;
			}
			return saved;
		};
		const ensureWorkflowSaved = async () => {
			if (!uiStore.stateIsDirty && !props.isNewWorkflow) return true;
			return await saveBeforePublish();
		};
		const openPublishModal = () => {
			uiStore.openModalWithData({
				name: WORKFLOW_PUBLISH_MODAL_KEY,
				data: {}
			});
		};
		const flushSaveForReview = async () => {
			if (!await ensureWorkflowSaved()) return void 0;
			return workflowDocumentStore.value.versionId || void 0;
		};
		const showReviewToast = (titleKey, reviewRequestId) => {
			const reviewRoute = {
				name: WORKFLOW_REVIEW_REQUESTS_VIEW,
				params: { reviewRequestId }
			};
			const reviewUrl = router.resolve(reviewRoute).href;
			toast.showToast({
				type: "success",
				title: i18n.baseText(titleKey),
				message: `<a href="${reviewUrl}">${i18n.baseText("workflowReviews.editorBanner.openReview")}</a>`,
				onClick: (event) => {
					if (!(event?.target instanceof HTMLAnchorElement)) return;
					if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
					event.preventDefault();
					router.push(reviewRoute);
				}
			});
		};
		const onReviewSubmitted = (workflowReviewRequestId) => {
			submittedReviewRequestId.value = workflowReviewRequestId;
			showReviewToast("workflowReviews.submitted.title", workflowReviewRequestId);
			if (!submittedDialogDismissed.value) showReviewSubmittedDialog.value = true;
		};
		const onReviewUpdated = (workflowReviewRequestId) => {
			showReviewToast("workflowReviews.updateReview.toast", workflowReviewRequestId);
		};
		/** The submit dialog hit a 409: an open review exists, so offer updating it instead. */
		const onReviewConflict = () => {
			showUpdateReviewDialog.value = true;
		};
		/**
		* Save before opening. The dialog prefills the version name from the current
		* `versionId`, but submitting flushes a dirty editor into a *new* version, so
		* opening dirty would name the new version after the old one.
		*/
		const onSubmitChangesFromBanner = async () => {
			if (!await ensureWorkflowSaved()) return;
			if (reviewContainsSavedVersion.value) return;
			showUpdateReviewDialog.value = true;
		};
		const onOpenReviewFromBanner = async () => {
			const review = latestReviewRequest.value;
			if (!review) return;
			await router.push({
				name: WORKFLOW_REVIEW_REQUESTS_VIEW,
				params: { reviewRequestId: review.id },
				query: review.state === "closed" ? { [REVIEW_INBOX_QUERY_PARAM.state]: review.state } : void 0
			});
		};
		const onPublishButtonClick = async () => {
			if (!await ensureWorkflowSaved()) return;
			if (isWorkflowReviewsEnabled.value) {
				if (reviewStatusStore.hasOpenReview(props.id)) {
					if (reviewContainsSavedVersion.value) return;
					showUpdateReviewDialog.value = true;
					return;
				}
				if (effectiveReviewRequired.value) {
					showSubmitForReviewDialog.value = true;
					return;
				}
				if (!publishChoiceDismissed.value) {
					showPublishChoiceDialog.value = true;
					return;
				}
			}
			openPublishModal();
		};
		const publishButtonConfig = computed(() => {
			if (!hasPublishPermission.value) {
				const defaultConfigForNoPermission = {
					text: i18n.baseText("workflows.publish"),
					enabled: false,
					loading: false,
					showIndicator: false,
					indicatorClass: "",
					tooltip: isPersonalSpace.value ? i18n.baseText("workflows.publish.personalSpaceRestricted") : i18n.baseText("workflows.publish.permissionDenied"),
					showVersionInfo: false
				};
				if (!!activeVersion.value) return {
					...defaultConfigForNoPermission,
					showIndicator: true,
					showVersionInfo: true,
					indicatorClass: "published"
				};
				else return defaultConfigForNoPermission;
			}
			if (props.isNewWorkflow) return {
				text: i18n.baseText("workflows.publish"),
				enabled: isWorkflowPublishable.value,
				loading: false,
				showIndicator: false,
				indicatorClass: "",
				tooltip: !containsTrigger.value ? i18n.baseText("workflows.publishModal.noTriggerMessage") : hasNodeIssues.value ? i18n.baseText("workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.title", {
					interpolate: { count: nodesWithValidationIssues.value.length },
					adjustToNumber: nodesWithValidationIssues.value.length
				}) : "",
				showVersionInfo: false
			};
			return {
				"not-published-not-eligible": {
					text: i18n.baseText("workflows.publish"),
					enabled: false,
					loading: false,
					showIndicator: false,
					indicatorClass: "",
					tooltip: !containsTrigger.value ? i18n.baseText("workflows.publishModal.noTriggerMessage") : i18n.baseText("workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.title", {
						interpolate: { count: nodesWithValidationIssues.value.length },
						adjustToNumber: nodesWithValidationIssues.value.length
					}),
					showVersionInfo: false
				},
				"not-published-eligible": {
					text: i18n.baseText("workflows.publish"),
					enabled: true,
					loading: false,
					showIndicator: false,
					indicatorClass: "",
					tooltip: "",
					showVersionInfo: false
				},
				"published-no-changes": {
					text: i18n.baseText("generic.published"),
					enabled: false,
					loading: false,
					showIndicator: true,
					indicatorClass: "published",
					tooltip: "",
					showVersionInfo: true
				},
				"published-with-changes": {
					text: i18n.baseText("workflows.publish"),
					enabled: true,
					loading: false,
					showIndicator: true,
					indicatorClass: "changes",
					tooltip: i18n.baseText("workflows.publishModal.changes"),
					showVersionInfo: false
				},
				"published-node-issues": {
					text: i18n.baseText("workflows.publish"),
					enabled: false,
					loading: false,
					showIndicator: true,
					indicatorClass: "error",
					tooltip: i18n.baseText("workflowActivator.showMessage.activeChangedNodesIssuesExistTrue.title", {
						interpolate: { count: nodesWithValidationIssues.value.length },
						adjustToNumber: nodesWithValidationIssues.value.length
					}),
					showVersionInfo: true
				},
				"published-invalid-trigger": {
					text: i18n.baseText("workflows.publish"),
					enabled: false,
					loading: false,
					showIndicator: true,
					indicatorClass: "changes",
					tooltip: i18n.baseText("workflows.publishModal.noTriggerMessage"),
					showVersionInfo: true
				},
				publishing: {
					text: i18n.baseText("workflows.publish.publishing"),
					enabled: false,
					loading: true,
					showIndicator: false,
					indicatorClass: "",
					tooltip: i18n.baseText("workflows.publish.publishing.tooltip"),
					showVersionInfo: false
				},
				"publication-partial": {
					text: i18n.baseText("workflows.publish"),
					enabled: isWorkflowPublishable.value,
					loading: false,
					showIndicator: true,
					indicatorClass: "partial",
					tooltip: i18n.baseText("workflows.publish.partial.tooltip"),
					showVersionInfo: false
				},
				"publication-failed": {
					text: i18n.baseText("workflows.publish"),
					enabled: isWorkflowPublishable.value,
					loading: false,
					showIndicator: true,
					indicatorClass: "error",
					tooltip: i18n.baseText("workflows.publish.failed.tooltip"),
					showVersionInfo: false
				}
			}[workflowPublishState.value];
		});
		const shouldHidePublishButton = computed(() => {
			if (props.isNewWorkflow) return false;
			return props.isArchived || !hasUpdatePermission.value && !hasPublishPermission.value;
		});
		const shouldDisablePublishButton = computed(() => {
			return props.isNewWorkflow || collaborationReadOnly.value || !publishButtonConfig.value.enabled || !hasPublishPermission.value || isWorkflowReviewsEnabled.value && isReviewUpdateBlocked.value;
		});
		const activeVersion = computed(() => workflowDocumentStore.value.activeVersion ?? null);
		/**
		* The approved-but-unpublished banner is derived from publish history, so any
		* publish or unpublish — from this canvas, another surface, or a push — has to
		* re-resolve it. Watching the active version keeps publication code free of
		* review concerns. The header only renders once the workflow is hydrated, so
		* this never duplicates the sync's on-mount fetch.
		*/
		watch(() => ({
			workflowId: props.id,
			activeVersionId: activeVersion.value?.versionId ?? null
		}), (current, previous) => {
			if (current.workflowId !== previous.workflowId) return;
			if (current.activeVersionId === previous.activeVersionId) return;
			refetchReviewStatus();
		});
		const activeVersionName = computed(() => {
			if (!activeVersion.value) return "";
			return activeVersion.value.name ?? generateVersionLabelFromId(activeVersion.value.versionId);
		});
		const latestPublishDate = computed(() => {
			return getLastPublishedVersion(activeVersion.value?.workflowPublishHistory ?? [])?.createdAt;
		});
		const versionMenuActions = computed(() => {
			const actions = [{
				id: VERSION_ACTIONS.PUBLISH,
				label: i18n.baseText("workflows.publish"),
				shortcut: {
					shiftKey: true,
					keys: ["P"]
				},
				disabled: shouldDisablePublishButton.value
			}];
			if (isNamedVersionsEnabled.value) actions.push({
				id: VERSION_ACTIONS.NAME_VERSION,
				label: i18n.baseText("generic.nameVersion"),
				shortcut: {
					metaKey: true,
					keys: ["S"]
				},
				disabled: !hasUpdatePermission.value || !workflowDocumentStore.value.versionId
			});
			actions.push({
				id: VERSION_ACTIONS.PUBLISH_TIMELINE,
				label: i18n.baseText("workflowHistory.action.viewTimeline"),
				disabled: props.isNewWorkflow
			});
			actions.push({
				id: VERSION_ACTIONS.UNPUBLISH,
				label: i18n.baseText("workflows.unpublish"),
				disabled: !activeVersion.value || collaborationReadOnly.value || !hasUnpublishPermission.value,
				divided: true,
				shortcut: {
					metaKey: true,
					keys: ["U"]
				}
			});
			return actions;
		});
		const shouldDisableActionDropdown = computed(() => {
			if (activeVersion.value) return false;
			return versionMenuActions.value.every((action) => action.disabled);
		});
		const onNameVersion = async () => {
			if (!await ensureWorkflowSaved()) return;
			const currentVersionId = workflowDocumentStore.value.versionId ?? "";
			const currentVersionData = workflowDocumentStore.value.versionData;
			const nameVersionEventBus = createEventBus();
			const modalData = ref({
				versionId: currentVersionId,
				versionName: currentVersionData?.name ?? void 0,
				description: currentVersionData?.description ?? void 0,
				modalTitle: i18n.baseText("workflowHistory.nameVersionModal.title"),
				submitButtonLabel: i18n.baseText("workflowHistory.nameVersionModal.confirmButton"),
				submitting: false,
				eventBus: nameVersionEventBus
			});
			nameVersionEventBus.once("submit", async (submitData) => {
				modalData.value.submitting = true;
				try {
					await workflowHistoryStore.updateWorkflowHistoryVersion(props.id, currentVersionId, {
						name: submitData.name,
						description: submitData.description
					});
					workflowDocumentStore.value.setVersionData({
						versionId: currentVersionId,
						name: submitData.name,
						description: submitData.description
					});
					toast.showMessage({
						title: i18n.baseText("workflowHistory.action.nameVersion.success.title"),
						type: "success"
					});
					uiStore.closeModal(WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY);
				} catch (error) {
					toast.showError(error, i18n.baseText("workflowHistory.action.nameVersion.error.title"));
				} finally {
					modalData.value.submitting = false;
				}
			});
			uiStore.openModalWithData({
				name: WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY,
				data: modalData.value
			});
		};
		const onUnpublish = () => {
			if (!activeVersion.value) {
				toast.showMessage({
					title: i18n.baseText("workflowHistory.action.unpublish.notAvailable"),
					type: "warning"
				});
				return;
			}
			const unpublishEventBus = createEventBus();
			unpublishEventBus.once("unpublish", async () => {
				const success = await workflowActivate.unpublishWorkflowFromHistory(props.id);
				uiStore.closeModal(WORKFLOW_HISTORY_VERSION_UNPUBLISH);
				if (success) toast.showMessage({
					title: i18n.baseText("workflowHistory.action.unpublish.success.title"),
					type: "success"
				});
			});
			uiStore.openModalWithData({
				name: WORKFLOW_HISTORY_VERSION_UNPUBLISH,
				data: {
					versionName: activeVersion.value.name,
					eventBus: unpublishEventBus
				}
			});
		};
		const onDropdownMenuSelect = async (action) => {
			switch (action) {
				case VERSION_ACTIONS.PUBLISH:
					await onPublishButtonClick();
					break;
				case VERSION_ACTIONS.NAME_VERSION:
					await onNameVersion();
					break;
				case VERSION_ACTIONS.PUBLISH_TIMELINE:
					await router.push({
						name: VIEWS.WORKFLOW_HISTORY,
						params: { workflowId: props.id },
						query: { tab: WORKFLOW_HISTORY_PUBLISH_TIMELINE_TAB }
					});
					break;
				case VERSION_ACTIONS.UNPUBLISH:
					onUnpublish();
					break;
				default: break;
			}
		};
		useKeybindings({
			shift_p: {
				disabled: () => shouldDisablePublishButton.value,
				run: async () => {
					await onPublishButtonClick();
				}
			},
			"ctrl+s": {
				disabled: () => !isNamedVersionsEnabled.value || !hasUpdatePermission.value || !workflowDocumentStore.value.versionId,
				run: async () => {
					await onNameVersion();
				}
			},
			"ctrl+u": {
				disabled: () => !activeVersion.value || !hasUnpublishPermission.value || collaborationReadOnly.value,
				run: onUnpublish
			}
		});
		onMounted(() => {
			nodeViewEventBus.on("publishWorkflow", onPublishButtonClick);
			nodeViewEventBus.on("unpublishWorkflow", onUnpublish);
		});
		onBeforeUnmount(() => {
			nodeViewEventBus.off("publishWorkflow", onPublishButtonClick);
			nodeViewEventBus.off("unpublishWorkflow", onUnpublish);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				!__props.isNewWorkflow ? (openBlock(), createBlock(CollaborationPane_default, { key: 0 })) : createCommentVNode("", true),
				showSaveButton.value && !__props.isArchived && __props.workflowPermissions.update ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					loading: isSaving.value,
					disabled: !unref(uiStore).stateIsDirty || collaborationReadOnly.value,
					"data-test-id": "workflow-save-button",
					onClick: onSaveButtonClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(uiStore).stateIsDirty ? unref(i18n).baseText("saveButton.save") : unref(i18n).baseText("saveButton.saved")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])) : createCommentVNode("", true),
				showWorkflowReviewControls.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.reviewStatusBannerSlot)
				}, [createVNode(WorkflowReviewStatusBanner_default, {
					review: latestReviewRequest.value,
					"saved-version-id": savedVersionId.value,
					"can-submit-changes": canActOnReview.value,
					"submit-blocked-reason": publishBlockedReason.value,
					"can-open-review": canOpenReview.value,
					onOpenReview: onOpenReviewFromBanner,
					onSubmitChanges: onSubmitChangesFromBanner
				}, null, 8, [
					"review",
					"saved-version-id",
					"can-submit-changes",
					"submit-blocked-reason",
					"can-open-review"
				])], 2)) : createCommentVNode("", true),
				!shouldHidePublishButton.value ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.publishButtonWrapper)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttonGroup) }, [createVNode(unref(N8nTooltip_default), {
					disabled: workflowPublishState.value === "not-published-eligible" && props.workflowPermissions.publish || !publishButtonConfig.value.tooltip && !(publishButtonConfig.value.showVersionInfo && activeVersion.value),
					"show-after": 300,
					offset: 15
				}, {
					content: withCtx(() => [createBaseVNode("div", null, [
						publishButtonConfig.value.tooltip ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(publishButtonConfig.value.tooltip) + " ", 1), _cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1))], 64)) : createCommentVNode("", true),
						activeVersion.value && publishButtonConfig.value.showVersionInfo ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
							createBaseVNode("span", _hoisted_1$1, toDisplayString(activeVersionName.value), 1),
							_cache[6] || (_cache[6] = createBaseVNode("br", null, null, -1)),
							createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.item.active")) + " ", 1),
							latestPublishDate.value ? (openBlock(), createBlock(TimeAgo_default, {
								key: 0,
								date: latestPublishDate.value
							}, null, 8, ["date"])) : createCommentVNode("", true)
						], 64)) : createCommentVNode("", true),
						publicationFailures.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
							_cache[8] || (_cache[8] = createBaseVNode("br", null, null, -1)),
							createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflows.publish.failures.label")), 1),
							_cache[9] || (_cache[9] = createBaseVNode("br", null, null, -1)),
							(openBlock(true), createElementBlock(Fragment, null, renderList(publicationFailures.value, (failure) => {
								return openBlock(), createElementBlock("span", { key: failure.nodeId }, [createTextVNode(toDisplayString(failure.nodeName), 1), _cache[7] || (_cache[7] = createBaseVNode("br", null, null, -1))]);
							}), 128))
						], 64)) : createCommentVNode("", true)
					])]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						class: normalizeClass(_ctx.$style.groupButtonLeft),
						loading: autoSaveForPublish.value,
						disabled: !publishButtonConfig.value.enabled || shouldDisablePublishButton.value,
						variant: "ghost",
						"data-test-id": "workflow-open-publish-modal-button",
						onClick: onPublishButtonClick
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.flex]) }, [
							publishButtonConfig.value.showIndicator ? (openBlock(), createElementBlock("span", {
								key: 0,
								"data-test-id": "workflow-active-version-indicator",
								class: normalizeClass({
									[_ctx.$style.indicatorDot]: true,
									[_ctx.$style.indicatorPublished]: publishButtonConfig.value.indicatorClass === "published",
									[_ctx.$style.indicatorChanges]: publishButtonConfig.value.indicatorClass === "changes",
									[_ctx.$style.indicatorIssues]: publishButtonConfig.value.indicatorClass === "error",
									[_ctx.$style.indicatorPartial]: publishButtonConfig.value.indicatorClass === "partial"
								})
							}, null, 2)) : createCommentVNode("", true),
							publishButtonConfig.value.loading ? (openBlock(), createBlock(unref(N8nSpinner_default), {
								key: 1,
								class: normalizeClass(_ctx.$style.publishingSpinner),
								size: "xsmall",
								"data-test-id": "publishing-spinner"
							}, null, 8, ["class"])) : createCommentVNode("", true),
							createBaseVNode("span", { class: normalizeClass([workflowPublishState.value === "published-no-changes" && _ctx.$style.indicatorPublishedText]) }, toDisplayString(publishButtonConfig.value.text), 3)
						], 2)]),
						_: 1
					}, 8, [
						"class",
						"loading",
						"disabled"
					])]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nActionDropdown_default), {
					items: versionMenuActions.value,
					width: showWorkflowReviewControls.value ? "230px" : void 0,
					placement: "bottom-end",
					"data-test-id": "version-menu",
					onSelect: onDropdownMenuSelect
				}, createSlots({
					activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						class: normalizeClass(_ctx.$style.groupButtonRight),
						variant: "ghost",
						icon: "chevron-down",
						disabled: shouldDisableActionDropdown.value,
						"aria-label": unref(i18n).baseText("node.moreActions"),
						"data-test-id": "version-menu-button"
					}, null, 8, [
						"class",
						"disabled",
						"aria-label"
					])]),
					_: 2
				}, [showWorkflowReviewControls.value ? {
					name: "footer",
					fn: withCtx(() => [createVNode(WorkflowReviewRequiredToggle_default, { "workflow-id": props.id }, null, 8, ["workflow-id"])]),
					key: "0"
				} : void 0]), 1032, ["items", "width"])], 2)], 2)) : createCommentVNode("", true),
				unref(isWorkflowReviewsEnabled) ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
					createVNode(WorkflowPublishChoiceDialog_default, {
						open: showPublishChoiceDialog.value,
						"onUpdate:open": _cache[0] || (_cache[0] = ($event) => showPublishChoiceDialog.value = $event),
						onPublish: openPublishModal,
						onSubmitForReview: _cache[1] || (_cache[1] = ($event) => showSubmitForReviewDialog.value = true)
					}, null, 8, ["open"]),
					createVNode(WorkflowSubmitForReviewDialog_default, {
						open: showSubmitForReviewDialog.value,
						"onUpdate:open": _cache[2] || (_cache[2] = ($event) => showSubmitForReviewDialog.value = $event),
						"workflow-id": props.id,
						"flush-save": flushSaveForReview,
						onSubmitted: onReviewSubmitted,
						onConflict: onReviewConflict
					}, null, 8, ["open", "workflow-id"]),
					submittedReviewRequestId.value ? (openBlock(), createBlock(WorkflowReviewSubmittedDialog_default, {
						key: 0,
						open: showReviewSubmittedDialog.value,
						"onUpdate:open": _cache[3] || (_cache[3] = ($event) => showReviewSubmittedDialog.value = $event),
						"workflow-review-request-id": submittedReviewRequestId.value
					}, null, 8, ["open", "workflow-review-request-id"])) : createCommentVNode("", true),
					createVNode(WorkflowUpdateReviewDialog_default, {
						open: showUpdateReviewDialog.value,
						"onUpdate:open": _cache[4] || (_cache[4] = ($event) => showUpdateReviewDialog.value = $event),
						"workflow-id": props.id,
						"flush-save": flushSaveForReview,
						"can-submit": !isReviewUpdateBlocked.value,
						onUpdated: onReviewUpdated
					}, null, 8, [
						"open",
						"workflow-id",
						"can-submit"
					])
				], 64)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/app/components/MainHeader/WorkflowHeaderDraftPublishActions.vue?vue&type=style&index=0&lang.module.scss
var container$2 = "_container_cyjqx_389";
var activeVersionIndicator = "_activeVersionIndicator_cyjqx_393";
var icon = "_icon_cyjqx_397";
var reviewStatusBannerSlot = "_reviewStatusBannerSlot_cyjqx_407";
var publishButtonWrapper = "_publishButtonWrapper_cyjqx_413";
var buttonGroup = "_buttonGroup_cyjqx_418";
var groupButtonLeft = "_groupButtonLeft_cyjqx_424";
var groupButtonRight = "_groupButtonRight_cyjqx_436";
var indicatorDot = "_indicatorDot_cyjqx_446";
var publishingSpinner = "_publishingSpinner_cyjqx_454";
var indicatorPublished = "_indicatorPublished_cyjqx_458";
var indicatorPublishedText = "_indicatorPublishedText_cyjqx_462";
var indicatorChanges = "_indicatorChanges_cyjqx_466";
var indicatorIssues = "_indicatorIssues_cyjqx_470";
var indicatorPartial = "_indicatorPartial_cyjqx_474";
var flex = "_flex_cyjqx_478";
var shimmer$2 = "_shimmer_cyjqx_1";
var spin$2 = "_spin_cyjqx_1";
var opacityPulse$2 = "_opacityPulse_cyjqx_1";
var popoverIn$2 = "_popoverIn_cyjqx_1";
var fadeIn$2 = "_fadeIn_cyjqx_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_cyjqx_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_cyjqx_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_cyjqx_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_cyjqx_1";
var blurSwapIn$2 = "_blurSwapIn_cyjqx_1";
var blurSwapOut$2 = "_blurSwapOut_cyjqx_1";
var pulseGlow$2 = "_pulseGlow_cyjqx_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_cyjqx_1";
var fade$2 = "_fade_cyjqx_1";
var fadeInUp$2 = "_fadeInUp_cyjqx_1";
var fadeInDown$2 = "_fadeInDown_cyjqx_1";
var fadeInLeft$2 = "_fadeInLeft_cyjqx_1";
var fadeInRight$2 = "_fadeInRight_cyjqx_1";
var fadeOut$2 = "_fadeOut_cyjqx_1";
var fadeOutDown$2 = "_fadeOutDown_cyjqx_1";
var fadeOutUp$2 = "_fadeOutUp_cyjqx_1";
var fadeOutLeft$2 = "_fadeOutLeft_cyjqx_1";
var fadeOutRight$2 = "_fadeOutRight_cyjqx_1";
var ping$2 = "_ping_cyjqx_1";
var blinkBackground$2 = "_blinkBackground_cyjqx_1";
var typingBlink$2 = "_typingBlink_cyjqx_1";
var WorkflowHeaderDraftPublishActions_vue_vue_type_style_index_0_lang_module_default = {
	container: container$2,
	activeVersionIndicator,
	icon,
	reviewStatusBannerSlot,
	publishButtonWrapper,
	buttonGroup,
	groupButtonLeft,
	groupButtonRight,
	indicatorDot,
	publishingSpinner,
	indicatorPublished,
	indicatorPublishedText,
	indicatorChanges,
	indicatorIssues,
	indicatorPartial,
	flex,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_cyjqx_1",
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
var WorkflowHeaderDraftPublishActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowHeaderDraftPublishActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowHeaderDraftPublishActions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/MainHeader/WorkflowDetails.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	class: "name-container",
	"data-test-id": "canvas-breadcrumbs"
};
var _hoisted_2 = { class: "spacer" };
var WorkflowDetails_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowDetails",
	props: {
		id: {},
		tags: {},
		name: {},
		currentFolder: {},
		isArchived: { type: Boolean },
		description: {}
	},
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const uiStore = useUIStore();
		const workflowsStore = useWorkflowsStore();
		const workflowsListStore = useWorkflowsListStore();
		const projectsStore = useProjectsStore();
		const collaborationStore = useCollaborationStore();
		const sourceControlStore = useSourceControlStore();
		const foldersStore = useFoldersStore();
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const locale = useI18n();
		const message = useMessage();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const workflowId = useInjectWorkflowId();
		const workflowDocumentStore = inject(WorkflowDocumentStoreKey, null);
		const actionsMenuRef = useTemplateRef("actionsMenu");
		const isNewWorkflow = computed(() => {
			return !workflowsStore.isWorkflowSaved[props.id];
		});
		const workflowPermissions = computed(() => getResourcePermissions(workflowDocumentStore?.value?.scopes).workflow);
		const readOnly = computed(() => sourceControlStore.preferences.branchReadOnly || collaborationStore.shouldBeReadOnly);
		const readOnlyActions = computed(() => {
			if (isNewWorkflow.value) return readOnly.value;
			return readOnly.value || props.isArchived || !workflowPermissions.value.update;
		});
		const currentFolderForBreadcrumbs = computed(() => {
			if (!isNewWorkflow.value && props.currentFolder) return props.currentFolder;
			const folderId = route.query.parentFolderId;
			if (folderId) return foldersStore.getCachedFolder(folderId);
			return null;
		});
		watch(() => props.id, () => {
			renameInput.value?.forceCancel();
		});
		const renameInput = useTemplateRef("renameInput");
		function onNameToggle() {
			if (renameInput.value?.forceFocus) renameInput.value.forceFocus();
		}
		function onNameSubmit(name) {
			const newName = name.trim();
			if (!newName) {
				toast.showMessage({
					title: locale.baseText("renameAction.emptyName.title"),
					message: locale.baseText("renameAction.emptyName.message"),
					type: "error"
				});
				renameInput.value?.forceCancel();
				return;
			}
			if (newName === props.name) {
				renameInput.value?.forceCancel();
				return;
			}
			workflowDocumentStore?.value?.setName(newName);
			uiStore.markStateDirty("metadata");
			documentTitle.setDocumentTitle(newName, "IDLE");
			renameInput.value?.forceCancel();
		}
		async function handleArchiveWorkflow() {
			if (workflowDocumentStore?.value?.active) {
				if (await message.confirm(locale.baseText("mainSidebar.confirmMessage.workflowArchive.message", { interpolate: { workflowName: props.name } }), locale.baseText("mainSidebar.confirmMessage.workflowArchive.headline"), {
					type: "warning",
					confirmButtonText: locale.baseText("mainSidebar.confirmMessage.workflowArchive.confirmButtonText"),
					cancelButtonText: locale.baseText("mainSidebar.confirmMessage.workflowArchive.cancelButtonText")
				}) !== "confirm") return;
			}
			try {
				const expectedChecksum = props.id === workflowId.value ? workflowDocumentStore?.value?.checksum : void 0;
				await workflowsStore.archiveWorkflow(props.id, expectedChecksum);
				workflowDocumentStore?.value?.setActiveState({
					activeVersionId: null,
					activeVersion: null
				});
			} catch (error) {
				toast.showError(error, locale.baseText("generic.archiveWorkflowError"));
				return;
			}
			uiStore.markStateClean();
			const archivedWorkflowId = props.id;
			const archivedWorkflowName = props.name;
			const archiveToast = toast.showToast({
				title: locale.baseText("mainSidebar.showMessage.handleArchive.title", { interpolate: { workflowName: archivedWorkflowName } }),
				message: `<a href="#" data-test-id="archive-toast-delete-permanently-link">${locale.baseText("mainSidebar.showMessage.handleArchive.message")}</a>`,
				onClick: (event) => {
					if (event?.target instanceof HTMLAnchorElement) {
						event.preventDefault();
						deleteArchivedWorkflow(archivedWorkflowId, archivedWorkflowName, archiveToast);
					}
				},
				type: "success"
			});
			const homeProject = workflowDocumentStore?.value?.homeProject;
			if (homeProject) await router.push({
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: homeProject.id }
			});
			else await router.push({ name: VIEWS.WORKFLOWS });
		}
		async function deleteArchivedWorkflow(id, name, archiveToast) {
			if (await message.confirm(locale.baseText("mainSidebar.confirmMessage.workflowDelete.message", { interpolate: { workflowName: name } }), locale.baseText("mainSidebar.confirmMessage.workflowDelete.headline"), {
				type: "warning",
				confirmButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.confirmButtonText"),
				cancelButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.cancelButtonText")
			}) !== "confirm") return;
			try {
				await workflowsListStore.deleteWorkflow(id);
			} catch (error) {
				toast.showError(error, locale.baseText("generic.deleteWorkflowError"));
				return;
			}
			archiveToast.close();
			toast.showMessage({
				title: locale.baseText("mainSidebar.showMessage.handleSelect1.title", { interpolate: { workflowName: name } }),
				type: "success"
			});
		}
		async function handleUnarchiveWorkflow() {
			await workflowsStore.unarchiveWorkflow(props.id);
			toast.showMessage({
				title: locale.baseText("mainSidebar.showMessage.handleUnarchive.title", { interpolate: { workflowName: props.name } }),
				type: "success"
			});
		}
		async function handleDeleteWorkflow() {
			if (await message.confirm(locale.baseText("mainSidebar.confirmMessage.workflowDelete.message", { interpolate: { workflowName: props.name } }), locale.baseText("mainSidebar.confirmMessage.workflowDelete.headline"), {
				type: "warning",
				confirmButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.confirmButtonText"),
				cancelButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.cancelButtonText")
			}) !== "confirm") return;
			const homeProject = workflowDocumentStore?.value?.homeProject;
			try {
				await workflowsListStore.deleteWorkflow(props.id);
			} catch (error) {
				toast.showError(error, locale.baseText("generic.deleteWorkflowError"));
				return;
			}
			uiStore.markStateClean();
			documentTitle.reset();
			toast.showMessage({
				title: locale.baseText("mainSidebar.showMessage.handleSelect1.title", { interpolate: { workflowName: props.name } }),
				type: "success"
			});
			if (homeProject) await router.push({
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: homeProject.id }
			});
			else await router.push({ name: VIEWS.WORKFLOWS });
		}
		const onBreadcrumbsItemSelected = (item) => {
			if (item.href) router.push(item.href).catch((error) => {
				toast.showError(error, i18n.baseText("folders.open.error.title"));
			});
		};
		const handleImportWorkflowFromFile = () => {
			if (actionsMenuRef.value?.importFileRef) actionsMenuRef.value.importFileRef.click();
		};
		onMounted(() => {
			nodeViewEventBus.on("importWorkflowFromFile", handleImportWorkflowFromFile);
			nodeViewEventBus.on("archiveWorkflow", handleArchiveWorkflow);
			nodeViewEventBus.on("unarchiveWorkflow", handleUnarchiveWorkflow);
			nodeViewEventBus.on("deleteWorkflow", handleDeleteWorkflow);
			nodeViewEventBus.on("renameWorkflow", onNameToggle);
		});
		onBeforeUnmount(() => {
			nodeViewEventBus.off("importWorkflowFromFile", handleImportWorkflowFromFile);
			nodeViewEventBus.off("archiveWorkflow", handleArchiveWorkflow);
			nodeViewEventBus.off("unarchiveWorkflow", handleUnarchiveWorkflow);
			nodeViewEventBus.off("deleteWorkflow", handleDeleteWorkflow);
			nodeViewEventBus.off("renameWorkflow", onNameToggle);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref($style).container) }, [
				createBaseVNode("div", _hoisted_1, [createVNode(FolderBreadcrumbs_default, {
					"current-folder": currentFolderForBreadcrumbs.value,
					"current-folder-as-link": true,
					onItemSelected: onBreadcrumbsItemSelected
				}, {
					append: withCtx(() => [unref(projectsStore).currentProject ?? unref(projectsStore).personalProject ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(unref($style)["path-separator"])
					}, "/", 2)) : createCommentVNode("", true), (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
						ref_key: "renameInput",
						ref: renameInput,
						key: __props.id,
						placeholder: "Workflow name",
						"data-test-id": "workflow-name-input",
						class: "name",
						"model-value": __props.name,
						"max-length": unref(128),
						"max-width": "100%",
						"read-only": readOnlyActions.value,
						disabled: readOnlyActions.value,
						"onUpdate:modelValue": onNameSubmit
					}, null, 8, [
						"model-value",
						"max-length",
						"read-only",
						"disabled"
					]))]),
					_: 1
				}, 8, ["current-folder"])]),
				createVNode(ActionsDropdownMenu_default, {
					id: __props.id,
					ref: "actionsMenu",
					"workflow-permissions": workflowPermissions.value,
					"is-new-workflow": isNewWorkflow.value,
					"is-archived": __props.isArchived,
					name: __props.name,
					tags: __props.tags,
					"current-folder": currentFolderForBreadcrumbs.value ?? void 0
				}, null, 8, [
					"id",
					"workflow-permissions",
					"is-new-workflow",
					"is-archived",
					"name",
					"tags",
					"current-folder"
				]),
				createBaseVNode("span", _hoisted_2, [createBaseVNode("span", { class: normalizeClass(unref($style)["header-controls"]) }, [__props.isArchived ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 0,
					class: "ml-3xs",
					theme: "tertiary",
					bold: "",
					"data-test-id": "workflow-archived-tag"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.archived")), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2)]),
				createVNode(ConnectionTracker_default, { class: "actions" }, {
					default: withCtx(() => [createVNode(WorkflowHeaderDraftPublishActions_default, {
						id: __props.id,
						"is-archived": __props.isArchived,
						"is-new-workflow": isNewWorkflow.value,
						"workflow-permissions": workflowPermissions.value
					}, null, 8, [
						"id",
						"is-archived",
						"is-new-workflow",
						"workflow-permissions"
					])]),
					_: 1
				})
			], 2);
		};
	}
});
//#endregion
//#region src/app/components/MainHeader/WorkflowDetails.vue?vue&type=style&index=1&lang.module.scss
var container$1 = "_container_24ym0_388";
var closeNodeViewDiscovery = "_closeNodeViewDiscovery_24ym0_414";
var shimmer$1 = "_shimmer_24ym0_1";
var spin$1 = "_spin_24ym0_1";
var opacityPulse$1 = "_opacityPulse_24ym0_1";
var popoverIn$1 = "_popoverIn_24ym0_1";
var fadeIn$1 = "_fadeIn_24ym0_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_24ym0_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_24ym0_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_24ym0_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_24ym0_1";
var blurSwapIn$1 = "_blurSwapIn_24ym0_1";
var blurSwapOut$1 = "_blurSwapOut_24ym0_1";
var pulseGlow$1 = "_pulseGlow_24ym0_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_24ym0_1";
var fade$1 = "_fade_24ym0_1";
var fadeInUp$1 = "_fadeInUp_24ym0_1";
var fadeInDown$1 = "_fadeInDown_24ym0_1";
var fadeInLeft$1 = "_fadeInLeft_24ym0_1";
var fadeInRight$1 = "_fadeInRight_24ym0_1";
var fadeOut$1 = "_fadeOut_24ym0_1";
var fadeOutDown$1 = "_fadeOutDown_24ym0_1";
var fadeOutUp$1 = "_fadeOutUp_24ym0_1";
var fadeOutLeft$1 = "_fadeOutLeft_24ym0_1";
var fadeOutRight$1 = "_fadeOutRight_24ym0_1";
var ping$1 = "_ping_24ym0_1";
var blinkBackground$1 = "_blinkBackground_24ym0_1";
var typingBlink$1 = "_typingBlink_24ym0_1";
var WorkflowDetails_vue_vue_type_style_index_1_lang_module_default = {
	container: container$1,
	"path-separator": "_path-separator_24ym0_399",
	closeNodeViewDiscovery,
	"header-controls": "_header-controls_24ym0_421",
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_24ym0_1",
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
var WorkflowDetails_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowDetails_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowDetails_vue_vue_type_style_index_1_lang_module_default }], ["__scopeId", "data-v-2c6da6d2"]]);
//#endregion
//#region src/app/components/MainHeader/MainHeader.vue?vue&type=script&setup=true&lang.ts
var MainHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainHeader",
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const locale = useI18n();
		const pushConnection = usePushConnection({ router });
		const toast = useToast();
		const ndvStore = injectNDVStoreIfProvided();
		const uiStore = useUIStore();
		const workflowsListStore = useWorkflowsListStore();
		const executionsStore = useExecutionsStore();
		const settingsStore = useSettingsStore();
		const activeHeaderTab = ref(MAIN_HEADER_TABS.WORKFLOW);
		const workflowToReturnTo = ref("");
		const executionToReturnTo = ref("");
		const dirtyState = ref(false);
		const evaluationRoutes = [VIEWS.EVALUATION_EDIT, VIEWS.EVALUATION_RUNS_DETAIL];
		const workflowRoutes = [
			VIEWS.WORKFLOW,
			VIEWS.NEW_WORKFLOW,
			VIEWS.EXECUTION_DEBUG
		];
		const executionRoutes = [
			VIEWS.EXECUTION_HOME,
			VIEWS.WORKFLOW_EXECUTIONS,
			VIEWS.EXECUTION_PREVIEW
		];
		const tabBarItems = computed(() => {
			return [
				{
					value: MAIN_HEADER_TABS.WORKFLOW,
					label: locale.baseText("generic.editor")
				},
				{
					value: MAIN_HEADER_TABS.EXECUTIONS,
					label: locale.baseText("generic.executions")
				},
				{
					value: MAIN_HEADER_TABS.EVALUATION,
					label: locale.baseText("generic.tests")
				}
			];
		});
		const activeNode = computed(() => ndvStore.value?.activeNode ?? null);
		const hideMenuBar = computed(() => Boolean(activeNode.value && activeNode.value.type !== "n8n-nodes-base.stickyNote"));
		const workflowId = useInjectWorkflowId();
		const workflowDocumentStore = inject(WorkflowDocumentStoreKey, null);
		const workflowName = computed(() => workflowDocumentStore?.value?.name ?? "");
		const workflowTags = computed(() => workflowDocumentStore?.value?.tags ?? []);
		const workflowIsArchived = computed(() => workflowDocumentStore?.value?.isArchived ?? false);
		const workflowDescription = computed(() => workflowDocumentStore?.value?.description ?? "");
		const onWorkflowPage = computed(() => !!(route.meta.nodeView || route.meta.keepWorkflowAlive));
		const parentFolderForBreadcrumbs = computed(() => {
			const folder = workflowDocumentStore?.value?.parentFolder;
			if (!folder) return void 0;
			return {
				id: folder.id,
				name: folder.name,
				parentFolder: folder.parentFolderId ?? void 0
			};
		});
		watch(route, (to, from) => {
			syncTabsWithRoute(to, from);
		});
		onBeforeMount(() => {
			pushConnection.initialize();
		});
		onBeforeUnmount(() => {
			pushConnection.terminate();
		});
		onMounted(async () => {
			dirtyState.value = uiStore.stateIsDirty;
			syncTabsWithRoute(route);
		});
		function isViewRoute(name) {
			return typeof name === "string" && [
				evaluationRoutes,
				workflowRoutes,
				executionRoutes
			].flat().includes(name);
		}
		function syncTabsWithRoute(to, from) {
			const routeTabMapping = [
				{
					routes: evaluationRoutes,
					tab: MAIN_HEADER_TABS.EVALUATION
				},
				{
					routes: executionRoutes,
					tab: MAIN_HEADER_TABS.EXECUTIONS
				},
				{
					routes: workflowRoutes,
					tab: MAIN_HEADER_TABS.WORKFLOW
				}
			];
			if (to.name && isViewRoute(to.name)) {
				const matchingTab = routeTabMapping.find(({ routes }) => routes.includes(to.name));
				if (matchingTab) activeHeaderTab.value = matchingTab.tab;
			}
			if (typeof to.params.workflowId === "string") workflowToReturnTo.value = to.params.workflowId;
			if (from?.name === VIEWS.EXECUTION_PREVIEW && to.params.workflowId === from.params.workflowId && typeof from.params.executionId === "string") executionToReturnTo.value = from.params.executionId;
		}
		function onTabSelected(tab, event) {
			const openInNewTab = event.ctrlKey || event.metaKey;
			switch (tab) {
				case MAIN_HEADER_TABS.WORKFLOW:
					navigateToWorkflowView(openInNewTab);
					break;
				case MAIN_HEADER_TABS.EXECUTIONS:
					navigateToExecutionsView(openInNewTab);
					break;
				case MAIN_HEADER_TABS.EVALUATION:
					navigateToEvaluationsView(openInNewTab);
					break;
				default: break;
			}
		}
		async function navigateToWorkflowView(openInNewTab) {
			let routeToNavigateTo;
			if (workflowToReturnTo.value && workflowToReturnTo.value !== "") routeToNavigateTo = {
				name: VIEWS.WORKFLOW,
				params: { workflowId: workflowToReturnTo.value },
				query: route.query
			};
			else routeToNavigateTo = {
				name: VIEWS.NEW_WORKFLOW,
				query: route.query
			};
			if (openInNewTab) {
				const { href } = router.resolve(routeToNavigateTo);
				window.open(href, "_blank");
			} else if (route.name !== routeToNavigateTo.name) {
				if (route.name === VIEWS.NEW_WORKFLOW) if (dirtyState.value) uiStore.markStateDirty();
				else uiStore.markStateClean();
				activeHeaderTab.value = MAIN_HEADER_TABS.WORKFLOW;
				await router.push(routeToNavigateTo);
			}
		}
		async function navigateToExecutionsView(openInNewTab) {
			const executionToReturnToValue = executionsStore.activeExecution?.id || executionToReturnTo.value;
			const routeToNavigateTo = executionToReturnToValue ? {
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId: workflowId.value,
					executionId: executionToReturnToValue
				},
				query: route.query
			} : {
				name: VIEWS.EXECUTION_HOME,
				params: { workflowId: workflowId.value },
				query: route.query
			};
			if (openInNewTab) {
				const { href } = router.resolve(routeToNavigateTo);
				window.open(href, "_blank");
			} else if (route.name !== routeToNavigateTo.name) {
				dirtyState.value = uiStore.stateIsDirty;
				workflowToReturnTo.value = workflowId.value;
				activeHeaderTab.value = MAIN_HEADER_TABS.EXECUTIONS;
				await router.push(routeToNavigateTo);
			}
		}
		async function navigateToEvaluationsView(openInNewTab) {
			const routeToNavigateTo = {
				name: VIEWS.EVALUATION_EDIT,
				params: { workflowId: workflowId.value },
				query: route.query
			};
			if (openInNewTab) {
				const { href } = router.resolve(routeToNavigateTo);
				window.open(href, "_blank");
			} else if (route.name !== routeToNavigateTo.name) {
				dirtyState.value = uiStore.stateIsDirty;
				workflowToReturnTo.value = workflowId.value;
				activeHeaderTab.value = MAIN_HEADER_TABS.EVALUATION;
				await router.push(routeToNavigateTo);
			}
		}
		async function onWorkflowDeactivated() {
			if (settingsStore.isModuleActive("mcp") && workflowDocumentStore?.value?.settings?.availableInMCP) try {
				const updatedWorkflow = await workflowsListStore.fetchWorkflow(workflowId.value);
				workflowDocumentStore?.value?.hydrate(updatedWorkflow);
				toast.showToast({
					title: locale.baseText("mcp.workflowDeactivated.title"),
					message: locale.baseText("mcp.workflowDeactivated.message"),
					type: "info"
				});
			} catch (error) {
				toast.showError(error, locale.baseText("workflowSettings.showError.fetchSettings.title"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass({
				[_ctx.$style["main-header"]]: true,
				[_ctx.$style.expanded]: !unref(uiStore).sidebarMenuCollapsed,
				[_ctx.$style["canvas-only"]]: unref(settingsStore).isCanvasOnly
			}) }, [!unref(settingsStore).isCanvasOnly ? withDirectives((openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style["top-menu"])
			}, [workflowName.value ? (openBlock(), createBlock(WorkflowDetails_default, {
				key: 0,
				id: unref(workflowId),
				tags: workflowTags.value,
				name: workflowName.value,
				"current-folder": parentFolderForBreadcrumbs.value,
				"is-archived": workflowIsArchived.value,
				description: workflowDescription.value,
				"onWorkflow:deactivated": onWorkflowDeactivated
			}, null, 8, [
				"id",
				"tags",
				"name",
				"current-folder",
				"is-archived",
				"description"
			])) : createCommentVNode("", true)], 2)), [[vShow, !hideMenuBar.value]]) : createCommentVNode("", true), onWorkflowPage.value ? (openBlock(), createBlock(TabBar_default, {
				key: 1,
				items: tabBarItems.value,
				"model-value": activeHeaderTab.value,
				floating: unref(settingsStore).isCanvasOnly,
				"onUpdate:modelValue": onTabSelected
			}, null, 8, [
				"items",
				"model-value",
				"floating"
			])) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
//#endregion
//#region src/app/components/MainHeader/MainHeader.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_r7qsq_388";
var shimmer = "_shimmer_r7qsq_1";
var spin = "_spin_r7qsq_1";
var opacityPulse = "_opacityPulse_r7qsq_1";
var popoverIn = "_popoverIn_r7qsq_1";
var fadeIn = "_fadeIn_r7qsq_1";
var collapsibleSlideDown = "_collapsibleSlideDown_r7qsq_1";
var collapsibleSlideUp = "_collapsibleSlideUp_r7qsq_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_r7qsq_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_r7qsq_1";
var blurSwapIn = "_blurSwapIn_r7qsq_1";
var blurSwapOut = "_blurSwapOut_r7qsq_1";
var pulseGlow = "_pulseGlow_r7qsq_1";
var pulseGlowDelayed = "_pulseGlowDelayed_r7qsq_1";
var fade = "_fade_r7qsq_1";
var fadeInUp = "_fadeInUp_r7qsq_1";
var fadeInDown = "_fadeInDown_r7qsq_1";
var fadeInLeft = "_fadeInLeft_r7qsq_1";
var fadeInRight = "_fadeInRight_r7qsq_1";
var fadeOut = "_fadeOut_r7qsq_1";
var fadeOutDown = "_fadeOutDown_r7qsq_1";
var fadeOutUp = "_fadeOutUp_r7qsq_1";
var fadeOutLeft = "_fadeOutLeft_r7qsq_1";
var fadeOutRight = "_fadeOutRight_r7qsq_1";
var ping = "_ping_r7qsq_1";
var blinkBackground = "_blinkBackground_r7qsq_1";
var typingBlink = "_typingBlink_r7qsq_1";
var MainHeader_vue_vue_type_style_index_0_lang_module_default = {
	container,
	"main-header": "_main-header_r7qsq_395",
	"canvas-only": "_canvas-only_r7qsq_403",
	"top-menu": "_top-menu_r7qsq_409",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_r7qsq_1",
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
var MainHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MainHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { MainHeader_default as t };
