import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, at as resolveComponent, bt as withCtx, c as useCssModule, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { v as useIntersectionObserver } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { n as ElDropdownItem, r as ElDropdownMenu, t as ElDropdown } from "./dropdown-D0HKKN-a.js";
import { n as ElSkeletonItem } from "./skeleton-CXSk42nF.js";
import { t as TableBase_default } from "./TableBase-BhnVYm7H.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { D as injectWorkflowDocumentStore, o as executionRetryMessage, wi as checkExhaustive } from "./workflows.store-qP-dtzSs.js";
import { Ea as getResourcePermissions, fa as WAIT_INDEFINITELY } from "./src-B255AdRt.js";
import { ur as storeToRefs } from "./useRootStore-CLEJA2KF.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjOArG71.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { no as EnterpriseEditionFeature } from "./constants-CMdL1Kzl.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-y-0nsqzo.js";
import { n as useDocumentTitle } from "./useDocumentTitle-C48umTvY.js";
import { t as useExternalHooks } from "./useExternalHooks-DrK-vwAp.js";
import { t as useExecutionsStore } from "./executions.store-C_bv7G2S.js";
import { t as convertToDisplayDate } from "./dateFormatter-CW32wdc_.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-DfCMMI3B.js";
import { t as PrivateCredentialIcon_default } from "./PrivateCredentialIcon-DvU9tIXp.js";
import { i as useProjectPages } from "./readyToRun.store-BjW1hyJA.js";
import { t as AnimatedSpinner_default } from "./AnimatedSpinner-BmTkcizu.js";
import { t as ResourcesListEmptyState_default } from "./ResourcesListEmptyState-Ci5qEhs7.js";
import { r as ResourcesListLoadingState_default, t as useWorkflowsEmptyState } from "./useWorkflowsEmptyState-C8sIjvbU.js";
import { t as PageViewLayout_default } from "./PageViewLayout-BIzriqO9.js";
import { t as ProjectHeader_default } from "./ProjectHeader-CObcN8Yo.js";
import { t as useInsightsStore } from "./insights.store-Dav_RGlI.js";
import { t as InsightsSummary_default } from "./InsightsSummary-VpZm9BYD.js";
import "./insights-CovcRVjB.js";
import { t as SelectedItemsInfo_default } from "./SelectedItemsInfo-DCkADASt.js";
import { i as ConcurrentExecutionsHeader_default, n as ExecutionStopAllText_default, r as ExecutionsFilter_default, t as ExecutionsTime_default } from "./ExecutionsTime-BnpxHBM6.js";
//#region src/features/execution/executions/components/global/GlobalExecutionsListItemQueuedTooltip.vue?vue&type=script&setup=true&lang.ts
var GlobalExecutionsListItemQueuedTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GlobalExecutionsListItemQueuedTooltip",
	props: {
		status: {},
		concurrencyCap: {},
		isCloudDeployment: { type: Boolean }
	},
	emits: ["goToUpgrade"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), { placement: "top" }, {
				content: withCtx(() => [props.status === "waiting" ? (openBlock(), createBlock(unref(I18nT), {
					key: 0,
					keypath: "executionsList.statusTooltipText.theWorkflowIsWaitingIndefinitely",
					scope: "global"
				})) : createCommentVNode("", true), props.status === "new" ? (openBlock(), createBlock(unref(I18nT), {
					key: 1,
					keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity",
					scope: "global"
				}, {
					instance: withCtx(() => [props.isCloudDeployment ? (openBlock(), createBlock(unref(I18nT), {
						key: 0,
						keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity.cloud",
						scope: "global"
					}, {
						concurrencyCap: withCtx(() => [createTextVNode(toDisplayString(props.concurrencyCap), 1)]),
						link: withCtx(() => [createVNode(unref(N8nLink_default), {
							bold: "",
							size: "small",
							class: normalizeClass(_ctx.$style.link),
							onClick: _cache[0] || (_cache[0] = ($event) => emit("goToUpgrade"))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgradeNow")), 1)]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					})) : (openBlock(), createBlock(unref(I18nT), {
						key: 1,
						keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity.self",
						scope: "global"
					}, {
						concurrencyCap: withCtx(() => [createTextVNode(toDisplayString(props.concurrencyCap), 1)]),
						link: withCtx(() => [createVNode(unref(N8nLink_default), {
							class: normalizeClass(_ctx.$style.link),
							href: unref(i18n).baseText("executions.concurrency.docsLink"),
							target: "_blank"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.viewDocs")), 1)]),
							_: 1
						}, 8, ["class", "href"])]),
						_: 1
					}))]),
					_: 1
				})) : createCommentVNode("", true)]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			});
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/global/GlobalExecutionsListItemQueuedTooltip.vue?vue&type=style&index=0&lang.module.scss
var link = "_link_1i562_388";
var shimmer$2 = "_shimmer_1i562_1";
var spin$2 = "_spin_1i562_1";
var opacityPulse$2 = "_opacityPulse_1i562_1";
var popoverIn$2 = "_popoverIn_1i562_1";
var fadeIn$2 = "_fadeIn_1i562_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1i562_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1i562_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1i562_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1i562_1";
var blurSwapIn$2 = "_blurSwapIn_1i562_1";
var blurSwapOut$2 = "_blurSwapOut_1i562_1";
var pulseGlow$2 = "_pulseGlow_1i562_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1i562_1";
var fade$2 = "_fade_1i562_1";
var fadeInUp$2 = "_fadeInUp_1i562_1";
var fadeInDown$2 = "_fadeInDown_1i562_1";
var fadeInLeft$2 = "_fadeInLeft_1i562_1";
var fadeInRight$2 = "_fadeInRight_1i562_1";
var fadeOut$2 = "_fadeOut_1i562_1";
var fadeOutDown$2 = "_fadeOutDown_1i562_1";
var fadeOutUp$2 = "_fadeOutUp_1i562_1";
var fadeOutLeft$2 = "_fadeOutLeft_1i562_1";
var fadeOutRight$2 = "_fadeOutRight_1i562_1";
var ping$2 = "_ping_1i562_1";
var blinkBackground$2 = "_blinkBackground_1i562_1";
var typingBlink$2 = "_typingBlink_1i562_1";
var GlobalExecutionsListItemQueuedTooltip_vue_vue_type_style_index_0_lang_module_default = {
	link,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1i562_1",
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
var GlobalExecutionsListItemQueuedTooltip_default = /* @__PURE__ */ _plugin_vue_export_helper_default(GlobalExecutionsListItemQueuedTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GlobalExecutionsListItemQueuedTooltip_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/components/global/GlobalExecutionsListItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "execution-status" };
var _hoisted_2$1 = { "data-test-id": "execution-time" };
var _hoisted_3$1 = { key: 0 };
var _hoisted_4$1 = { key: 1 };
var _hoisted_5$1 = { key: 2 };
var GlobalExecutionsListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GlobalExecutionsListItem",
	props: {
		execution: {},
		selected: {
			type: Boolean,
			default: false
		},
		workflowName: { default: "" },
		workflowPermissions: {},
		concurrencyCap: {},
		isCloudDeployment: { type: Boolean }
	},
	emits: [
		"stop",
		"select",
		"retrySaved",
		"retryOriginal",
		"delete",
		"goToUpgrade"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const style = useCssModule();
		const locale = useI18n();
		const executionHelpers = useExecutionHelpers();
		const isStopping = ref(false);
		const isRunning = computed(() => props.execution.status === "running");
		const isWaitTillIndefinite = computed(() => {
			if (!props.execution.waitTill) return false;
			return new Date(props.execution.waitTill).getTime() === WAIT_INDEFINITELY.getTime();
		});
		const isRetriable = computed(() => executionHelpers.isExecutionRetriable(props.execution));
		const EXECUTION_STATUS = {
			CRASHED: "crashed",
			ERROR: "error",
			WAITING: "waiting",
			SUCCESS: "success",
			NEW: "new",
			RUNNING: "running",
			UNKNOWN: "unknown",
			CANCELED: "canceled"
		};
		const executionIconStatusDictionary = {
			[EXECUTION_STATUS.CRASHED]: {
				icon: "status-error",
				color: "danger"
			},
			[EXECUTION_STATUS.ERROR]: {
				icon: "status-error",
				color: "danger"
			},
			[EXECUTION_STATUS.WAITING]: {
				icon: "status-waiting",
				color: "secondary"
			},
			[EXECUTION_STATUS.SUCCESS]: {
				icon: "status-completed",
				color: "success"
			},
			[EXECUTION_STATUS.NEW]: {
				icon: "status-new",
				color: "foreground-xdark"
			},
			[EXECUTION_STATUS.RUNNING]: {
				icon: "spinner",
				color: "secondary"
			},
			[EXECUTION_STATUS.UNKNOWN]: {
				icon: "status-unknown",
				color: "foreground-xdark"
			},
			[EXECUTION_STATUS.CANCELED]: {
				icon: "status-canceled",
				color: "foreground-xdark"
			}
		};
		const errorStatuses = [EXECUTION_STATUS.ERROR, EXECUTION_STATUS.CRASHED];
		const classes = computed(() => {
			return { [style.dangerBg]: errorStatuses.includes(props.execution.status) };
		});
		const formattedStartedAtDate = computed(() => {
			return props.execution.startedAt ? formatDate(props.execution.startedAt) : locale.baseText("executionsList.startingSoon");
		});
		const formattedWaitTillDate = computed(() => {
			return props.execution.waitTill ? formatDate(props.execution.waitTill) : "";
		});
		const formattedStoppedAtDate = computed(() => {
			return props.execution.stoppedAt ? locale.displayTimer(new Date(props.execution.stoppedAt).getTime() - new Date(props.execution.startedAt ?? props.execution.createdAt).getTime(), true) : "";
		});
		function getStatusLabel(status) {
			if (status === EXECUTION_STATUS.CRASHED) return locale.baseText("executionsList.error");
			return locale.baseText(`executionsList.${status}`);
		}
		const statusRender = computed(() => {
			return {
				...executionIconStatusDictionary[props.execution.status],
				label: getStatusLabel(props.execution.status)
			};
		});
		function formatDate(fullDate) {
			const { date, time } = convertToDisplayDate(fullDate);
			return locale.baseText("executionsList.started", { interpolate: {
				time,
				date
			} });
		}
		function onStopExecution() {
			isStopping.value = true;
			emit("stop", props.execution);
		}
		function onSelect() {
			emit("select", props.execution);
		}
		async function handleActionItemClick(commandData) {
			switch (commandData) {
				case "retrySaved":
					emit("retrySaved", props.execution);
					break;
				case "retryOriginal":
					emit("retryOriginal", props.execution);
					break;
				case "delete":
					emit("delete", props.execution);
					break;
				default: checkExhaustive(commandData);
			}
		}
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("tr", { class: normalizeClass(classes.value) }, [
				createBaseVNode("td", null, [createVNode(unref(Checkbox_default), {
					"model-value": __props.selected,
					"data-test-id": "select-execution-checkbox",
					disabled: !Boolean(__props.execution.id && __props.execution.stoppedAt),
					class: "mb-0",
					style: { marginTop: "-3px" },
					"onUpdate:modelValue": onSelect
				}, null, 8, ["model-value", "disabled"])]),
				createBaseVNode("td", null, [createVNode(unref(N8nTooltip_default), {
					content: __props.execution.workflowName || __props.workflowName,
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(_component_RouterLink, {
						to: {
							name: unref(VIEWS).EXECUTION_PREVIEW,
							params: {
								workflowId: __props.execution.workflowId,
								executionId: __props.execution.id
							}
						},
						class: normalizeClass(_ctx.$style.workflowName),
						target: "_blank"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.execution.workflowName || __props.workflowName), 1)]),
						_: 1
					}, 8, ["to", "class"])]),
					_: 1
				}, 8, ["content"])]),
				createBaseVNode("td", _hoisted_1$1, [isWaitTillIndefinite.value || __props.execution.status === EXECUTION_STATUS.NEW ? (openBlock(), createBlock(GlobalExecutionsListItemQueuedTooltip_default, {
					key: 0,
					status: props.execution.status,
					"concurrency-cap": props.concurrencyCap,
					"is-cloud-deployment": props.isCloudDeployment,
					onGoToUpgrade: _cache[0] || (_cache[0] = ($event) => emit("goToUpgrade"))
				}, {
					default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nIcon_default), {
						icon: statusRender.value.icon,
						color: statusRender.value.color,
						class: "mr-2xs"
					}, null, 8, ["icon", "color"]), createTextVNode(" " + toDisplayString(statusRender.value.label), 1)])]),
					_: 1
				}, 8, [
					"status",
					"concurrency-cap",
					"is-cloud-deployment"
				])) : (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					disabled: __props.execution.status !== EXECUTION_STATUS.WAITING,
					content: unref(locale).baseText("executionsList.statusWaiting", { interpolate: {
						status: __props.execution.status,
						time: formattedWaitTillDate.value
					} })
				}, {
					default: withCtx(() => [createBaseVNode("div", null, [__props.execution.status === EXECUTION_STATUS.RUNNING ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "secondary",
						class: "mr-2xs"
					}, {
						default: withCtx(() => [createVNode(AnimatedSpinner_default)]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						size: "medium",
						icon: statusRender.value.icon,
						color: statusRender.value.color,
						class: "mr-2xs"
					}, null, 8, ["icon", "color"])), createTextVNode(" " + toDisplayString(statusRender.value.label), 1)])]),
					_: 1
				}, 8, ["disabled", "content"]))]),
				createBaseVNode("td", null, toDisplayString(formattedStartedAtDate.value), 1),
				createBaseVNode("td", _hoisted_2$1, [formattedStoppedAtDate.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(formattedStoppedAtDate.value), 1)], 64)) : (openBlock(), createBlock(ExecutionsTime_default, {
					key: 1,
					"start-time": __props.execution.startedAt ?? __props.execution.createdAt
				}, null, 8, ["start-time"]))]),
				createBaseVNode("td", null, [__props.execution.id ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(__props.execution.id), 1)) : createCommentVNode("", true), __props.execution.retryOf ? (openBlock(), createElementBlock("span", _hoisted_4$1, [_cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)), createBaseVNode("small", null, " (" + toDisplayString(unref(locale).baseText("executionsList.retryOf")) + " " + toDisplayString(__props.execution.retryOf) + ") ", 1)])) : __props.execution.retrySuccessId ? (openBlock(), createElementBlock("span", _hoisted_5$1, [_cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)), createBaseVNode("small", null, " (" + toDisplayString(unref(locale).baseText("executionsList.successRetry")) + " " + toDisplayString(__props.execution.retrySuccessId) + ") ", 1)])) : createCommentVNode("", true)]),
				createBaseVNode("td", { class: normalizeClass(_ctx.$style.modeCell) }, [__props.execution.mode === "manual" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: "Manual Execution",
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "flask-conical" })]),
					_: 1
				})) : __props.execution.mode === "chat" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					content: "Chat Execution",
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "messages-square" })]),
					_: 1
				})) : createCommentVNode("", true), __props.execution.usedPrivateCredentials ? (openBlock(), createBlock(PrivateCredentialIcon_default, {
					key: 2,
					"data-test-id": "global-execution-private-credential",
					"tooltip-text": unref(locale).baseText("executions.privateCredential.tooltip")
				}, null, 8, ["tooltip-text"])) : createCommentVNode("", true)], 2),
				createBaseVNode("td", null, [!__props.execution.stoppedAt || __props.execution.waitTill ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "ghost",
					"data-test-id": "stop-execution-button",
					loading: isStopping.value,
					disabled: isStopping.value,
					onClick: withModifiers(onStopExecution, ["stop"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stop")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])) : createCommentVNode("", true)]),
				createBaseVNode("td", null, [!isRunning.value ? (openBlock(), createBlock(unref(ElDropdown), {
					key: 0,
					trigger: "click",
					onCommand: handleActionItemClick
				}, {
					dropdown: withCtx(() => [createVNode(unref(ElDropdownMenu), { class: normalizeClass({
						[_ctx.$style.actions]: true,
						[_ctx.$style.deleteOnly]: !isRetriable.value
					}) }, {
						default: withCtx(() => [
							isRetriable.value ? (openBlock(), createBlock(unref(ElDropdownItem), {
								key: 0,
								"data-test-id": "execution-retry-saved-dropdown-item",
								class: normalizeClass(_ctx.$style.retryAction),
								command: "retrySaved",
								disabled: !__props.workflowPermissions.execute
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithCurrentlySavedWorkflow")), 1)]),
								_: 1
							}, 8, ["class", "disabled"])) : createCommentVNode("", true),
							isRetriable.value ? (openBlock(), createBlock(unref(ElDropdownItem), {
								key: 1,
								"data-test-id": "execution-retry-original-dropdown-item",
								class: normalizeClass(_ctx.$style.retryAction),
								command: "retryOriginal",
								disabled: !__props.workflowPermissions.execute
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithOriginalWorkflow")), 1)]),
								_: 1
							}, 8, ["class", "disabled"])) : createCommentVNode("", true),
							createVNode(unref(ElDropdownItem), {
								"data-test-id": "execution-delete-dropdown-item",
								class: normalizeClass(_ctx.$style.deleteAction),
								command: "delete",
								disabled: !__props.workflowPermissions.update
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.delete")), 1)]),
								_: 1
							}, 8, ["class", "disabled"])
						]),
						_: 1
					}, 8, ["class"])]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						icon: "ellipsis-vertical"
					})]),
					_: 1
				})) : createCommentVNode("", true)])
			], 2);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/global/GlobalExecutionsListItem.vue?vue&type=style&index=0&lang.module.scss
var modeCell = "_modeCell_zaa2a_388";
var dangerBg = "_dangerBg_zaa2a_400";
var workflowName = "_workflowName_zaa2a_404";
var shimmer$1 = "_shimmer_zaa2a_1";
var spin$1 = "_spin_zaa2a_1";
var opacityPulse$1 = "_opacityPulse_zaa2a_1";
var popoverIn$1 = "_popoverIn_zaa2a_1";
var fadeIn$1 = "_fadeIn_zaa2a_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_zaa2a_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_zaa2a_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_zaa2a_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_zaa2a_1";
var blurSwapIn$1 = "_blurSwapIn_zaa2a_1";
var blurSwapOut$1 = "_blurSwapOut_zaa2a_1";
var pulseGlow$1 = "_pulseGlow_zaa2a_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_zaa2a_1";
var fade$1 = "_fade_zaa2a_1";
var fadeInUp$1 = "_fadeInUp_zaa2a_1";
var fadeInDown$1 = "_fadeInDown_zaa2a_1";
var fadeInLeft$1 = "_fadeInLeft_zaa2a_1";
var fadeInRight$1 = "_fadeInRight_zaa2a_1";
var fadeOut$1 = "_fadeOut_zaa2a_1";
var fadeOutDown$1 = "_fadeOutDown_zaa2a_1";
var fadeOutUp$1 = "_fadeOutUp_zaa2a_1";
var fadeOutLeft$1 = "_fadeOutLeft_zaa2a_1";
var fadeOutRight$1 = "_fadeOutRight_zaa2a_1";
var ping$1 = "_ping_zaa2a_1";
var blinkBackground$1 = "_blinkBackground_zaa2a_1";
var typingBlink$1 = "_typingBlink_zaa2a_1";
var GlobalExecutionsListItem_vue_vue_type_style_index_0_lang_module_default = {
	modeCell,
	dangerBg,
	workflowName,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_zaa2a_1",
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
var GlobalExecutionsListItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(GlobalExecutionsListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GlobalExecutionsListItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/components/global/GlobalExecutionsList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { style: { "width": "50px" } };
var _hoisted_3 = { colspan: "8" };
var _hoisted_4 = { style: { "width": "50px" } };
var _hoisted_5 = {
	colspan: "9",
	style: { "text-align": "center" }
};
var _hoisted_6 = {
	key: 0,
	"data-test-id": "execution-list-empty"
};
var GlobalExecutionsList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GlobalExecutionsList",
	props: {
		executions: {},
		filters: {},
		total: { default: 0 },
		concurrentTotal: { default: 0 }
	},
	emits: ["update:filters", "execution:stop"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const workflowsListStore = useWorkflowsListStore();
		const executionsStore = useExecutionsStore();
		const settingsStore = useSettingsStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const autoRefresh = computed({
			get: () => executionsStore.autoRefresh,
			set: (value) => {
				executionsStore.autoRefresh = value;
			}
		});
		const allVisibleSelected = ref(false);
		const allExistingSelected = ref(false);
		const selectedItems = ref({});
		const isInitialLoad = ref(true);
		const message = useMessage();
		const toast = useToast();
		const selectedCount = computed(() => {
			if (allExistingSelected.value) return props.total;
			return Object.keys(selectedItems.value).length;
		});
		const workflows = computed(() => {
			return [{
				id: "all",
				name: i18n.baseText("executionsList.allWorkflows")
			}, ...workflowsListStore.allWorkflows];
		});
		const isAnnotationEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
		const showConcurrencyHeader = computed(() => settingsStore.isConcurrencyEnabled && !settingsStore.isQueueModeEnabled);
		watch(() => props.executions, () => {
			if (props.executions.length === 0) handleClearSelection();
			adjustSelectionAfterMoreItemsLoaded();
		});
		watch(() => executionsStore.loading, (isLoading, wasLoading) => {
			if (wasLoading && !isLoading) isInitialLoad.value = false;
		});
		function handleCheckAllExistingChange() {
			allExistingSelected.value = !allExistingSelected.value;
			allVisibleSelected.value = !allExistingSelected.value;
			handleCheckAllVisibleChange();
		}
		function handleCheckAllVisibleChange() {
			allVisibleSelected.value = !allVisibleSelected.value;
			if (!allVisibleSelected.value) {
				allExistingSelected.value = false;
				selectedItems.value = {};
			} else selectAllVisibleExecutions();
		}
		function toggleSelectExecution(execution) {
			const executionId = execution.id;
			if (selectedItems.value[executionId]) {
				const { [executionId]: removedSelectedItem, ...rest } = selectedItems.value;
				selectedItems.value = rest;
			} else selectedItems.value = {
				...selectedItems.value,
				[executionId]: true
			};
			allVisibleSelected.value = Object.keys(selectedItems.value).length === props.executions.length;
			allExistingSelected.value = Object.keys(selectedItems.value).length === props.total;
		}
		async function handleDeleteSelected() {
			const confirmationText = [isAnnotationEnabled.value && i18n.baseText("executionsList.confirmMessage.annotationsNote"), i18n.baseText("executionsList.confirmMessage.message", { interpolate: { count: selectedCount.value.toString() } })].filter(Boolean).join(" ");
			if (await message.confirm(confirmationText, i18n.baseText("executionsList.confirmMessage.headline"), {
				type: "warning",
				confirmButtonText: i18n.baseText("executionsList.confirmMessage.confirmButtonText"),
				cancelButtonText: i18n.baseText("executionsList.confirmMessage.cancelButtonText")
			}) !== "confirm") return;
			try {
				await executionsStore.deleteExecutions({
					filters: executionsStore.executionsFilters,
					...allExistingSelected.value ? { deleteBefore: /* @__PURE__ */ new Date() } : { ids: Object.keys(selectedItems.value) }
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
				return;
			}
			toast.showMessage({
				title: i18n.baseText("executionsList.showMessage.handleDeleteSelected.title"),
				type: "success"
			});
			handleClearSelection();
		}
		function handleClearSelection() {
			allVisibleSelected.value = false;
			allExistingSelected.value = false;
			selectedItems.value = {};
		}
		async function onFilterChanged(filters) {
			emit("update:filters", filters);
			handleClearSelection();
		}
		function getExecutionWorkflowName(execution) {
			return getWorkflowName(execution.workflowId ?? "") ?? i18n.baseText("executionsList.unsavedWorkflow");
		}
		function getExecutionWorkflowPermissions(execution) {
			return getResourcePermissions(execution.scopes).workflow;
		}
		function getWorkflowName(workflowId) {
			return workflows.value.find((data) => data.id === workflowId)?.name;
		}
		useIntersectionObserver(useTemplateRef("loadMoreButton"), ([entry]) => {
			if (!entry?.isIntersecting) return;
			loadMore();
		});
		async function loadMore() {
			if (executionsStore.filters.status === "running") return;
			const lastItem = props.executions.at(-1);
			try {
				await executionsStore.fetchExecutions(executionsStore.executionsFilters, lastItem?.id);
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.loadMore.title"));
			}
		}
		function selectAllVisibleExecutions() {
			props.executions.forEach((execution) => {
				selectedItems.value[execution.id] = true;
			});
		}
		function adjustSelectionAfterMoreItemsLoaded() {
			if (allExistingSelected.value) {
				allVisibleSelected.value = true;
				selectAllVisibleExecutions();
			}
		}
		async function retrySavedExecution(execution) {
			await retryExecution(execution, true);
		}
		async function retryOriginalExecution(execution) {
			await retryExecution(execution, false);
		}
		async function retryExecution(execution, loadWorkflow) {
			try {
				const retryMessage = executionRetryMessage((await executionsStore.retryExecution(execution.id, loadWorkflow)).status);
				if (retryMessage) toast.showMessage(retryMessage);
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.retryExecution.title"));
			}
			telemetry.track("User clicked retry execution button", {
				workflow_id: "",
				execution_id: execution.id,
				retry_type: loadWorkflow ? "current" : "original"
			});
		}
		async function stopExecution(execution) {
			try {
				await executionsStore.stopCurrentExecution(execution.id);
				toast.showMessage({
					title: i18n.baseText("executionsList.showMessage.stopExecution.title"),
					message: i18n.baseText("executionsList.showMessage.stopExecution.message", { interpolate: { activeExecutionId: execution.id } }),
					type: "success"
				});
				emit("execution:stop");
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.stopExecution.title"));
			}
		}
		async function deleteExecution(execution) {
			if (!!execution.annotation && (execution.annotation.vote || execution.annotation.tags.length > 0)) {
				if (await message.confirm(i18n.baseText("executionsList.confirmMessage.annotatedExecutionMessage"), i18n.baseText("executionDetails.confirmMessage.headline"), {
					type: "warning",
					confirmButtonText: i18n.baseText("executionDetails.confirmMessage.confirmButtonText"),
					cancelButtonText: ""
				}) !== "confirm") return;
			}
			try {
				await executionsStore.deleteExecutions({ ids: [execution.id] });
				if (allVisibleSelected.value) {
					const { [execution.id]: _, ...rest } = selectedItems.value;
					selectedItems.value = rest;
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
			}
		}
		async function onAutoRefreshToggle(value) {
			if (value) await executionsStore.startAutoRefreshInterval();
			else executionsStore.stopAutoRefreshInterval();
		}
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("concurrency", "upgrade-concurrency");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.execListWrapper) }, [
				renderSlot(_ctx.$slots, "default"),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.execListHeaderControls) }, [showConcurrencyHeader.value ? (openBlock(), createBlock(ConcurrentExecutionsHeader_default, {
					key: 0,
					"running-executions-count": __props.concurrentTotal,
					"concurrency-cap": unref(settingsStore).concurrency,
					"is-cloud-deployment": unref(settingsStore).isCloudDeployment,
					executions: props.executions,
					"is-initial-load": !unref(executionsStore).initialLoadComplete,
					onGoToUpgrade: goToUpgrade
				}, null, 8, [
					"running-executions-count",
					"concurrency-cap",
					"is-cloud-deployment",
					"executions",
					"is-initial-load"
				])) : (openBlock(), createBlock(unref(Checkbox_default), {
					key: 1,
					modelValue: autoRefresh.value,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => autoRefresh.value = $event), onAutoRefreshToggle],
					"data-test-id": "execution-auto-refresh-checkbox",
					label: unref(i18n).baseText("executionsList.autoRefresh")
				}, null, 8, ["modelValue", "label"])), createBaseVNode("div", { class: normalizeClass(_ctx.$style.execHeaderRight) }, [createVNode(ExecutionStopAllText_default, { executions: props.executions }, null, 8, ["executions"]), createVNode(ExecutionsFilter_default, {
					workflows: workflows.value,
					class: "execFilter",
					onFilterChanged
				}, null, 8, ["workflows"])], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.execList) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.execTable) }, [createVNode(unref(TableBase_default), null, {
					default: withCtx(() => [createBaseVNode("thead", null, [allVisibleSelected.value && __props.total > 0 ? (openBlock(), createElementBlock("tr", _hoisted_1, [createBaseVNode("th", _hoisted_2, [createVNode(unref(Checkbox_default), {
						"model-value": allExistingSelected.value,
						"data-test-id": "select-all-executions-checkbox",
						class: "mb-0",
						"onUpdate:modelValue": handleCheckAllExistingChange
					}, null, 8, ["model-value"])]), createBaseVNode("th", _hoisted_3, toDisplayString(unref(i18n).baseText("executionsList.selectAll", {
						adjustToNumber: __props.total,
						interpolate: { count: `${__props.total}` }
					})), 1)])) : createCommentVNode("", true), createBaseVNode("tr", null, [
						createBaseVNode("th", _hoisted_4, [createVNode(unref(Checkbox_default), {
							"model-value": allVisibleSelected.value,
							disabled: __props.total < 1,
							"data-test-id": "select-visible-executions-checkbox",
							class: "mb-0",
							"onUpdate:modelValue": handleCheckAllVisibleChange
						}, null, 8, ["model-value", "disabled"])]),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("generic.workflow")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.status")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.startedAt")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.runTime")), 1),
						createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.id")), 1),
						_cache[2] || (_cache[2] = createBaseVNode("th", null, null, -1)),
						_cache[3] || (_cache[3] = createBaseVNode("th", { style: { "width": "69px" } }, null, -1)),
						_cache[4] || (_cache[4] = createBaseVNode("th", { style: { "width": "50px" } }, null, -1))
					])]), createBaseVNode("tbody", null, [
						(openBlock(true), createElementBlock(Fragment, null, renderList(__props.executions, (execution) => {
							return openBlock(), createBlock(GlobalExecutionsListItem_default, {
								key: execution.id,
								execution,
								"workflow-name": getExecutionWorkflowName(execution),
								"workflow-permissions": getExecutionWorkflowPermissions(execution),
								selected: selectedItems.value[execution.id] || allExistingSelected.value,
								"concurrency-cap": unref(settingsStore).concurrency,
								"is-cloud-deployment": unref(settingsStore).isCloudDeployment,
								"data-test-id": "global-execution-list-item",
								onStop: stopExecution,
								onDelete: deleteExecution,
								onSelect: toggleSelectExecution,
								onRetrySaved: retrySavedExecution,
								onRetryOriginal: retryOriginalExecution,
								onGoToUpgrade: goToUpgrade
							}, null, 8, [
								"execution",
								"workflow-name",
								"workflow-permissions",
								"selected",
								"concurrency-cap",
								"is-cloud-deployment"
							]);
						}), 128)),
						isInitialLoad.value && unref(executionsStore).loading && !__props.executions.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(executionsStore).itemsPerPage, (item) => {
							return openBlock(), createElementBlock("tr", { key: item }, [(openBlock(), createElementBlock(Fragment, null, renderList(9, (col) => {
								return createBaseVNode("td", { key: col }, [createVNode(unref(ElSkeletonItem))]);
							}), 64))]);
						}), 128)) : createCommentVNode("", true),
						createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_5, [!__props.executions.length ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(unref(i18n).baseText("executionsList.empty")), 1)) : unref(executionsStore).hasMoreExecutions ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							ref: "loadMoreButton",
							icon: "refresh-cw",
							title: unref(i18n).baseText("executionsList.loadMore"),
							label: unref(i18n).baseText("executionsList.loadMore"),
							loading: unref(executionsStore).loading,
							"data-test-id": "load-more-button",
							onClick: _cache[1] || (_cache[1] = ($event) => loadMore())
						}, null, 8, [
							"title",
							"label",
							"loading"
						])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(i18n).baseText("executionsList.loadedAll")), 1)], 64))])])
					])]),
					_: 1
				})], 2), createVNode(SelectedItemsInfo_default, {
					"selected-count": selectedCount.value,
					onDeleteSelected: handleDeleteSelected,
					onClearSelection: handleClearSelection
				}, null, 8, ["selected-count"])], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/global/GlobalExecutionsList.vue?vue&type=style&index=0&lang.module.scss
var execListWrapper = "_execListWrapper_1afin_388";
var execList = "_execList_1afin_388";
var execListHeaderControls = "_execListHeaderControls_1afin_403";
var execTable = "_execTable_1afin_410";
var execHeaderRight = "_execHeaderRight_1afin_415";
var shimmer = "_shimmer_1afin_1";
var spin = "_spin_1afin_1";
var opacityPulse = "_opacityPulse_1afin_1";
var popoverIn = "_popoverIn_1afin_1";
var fadeIn = "_fadeIn_1afin_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1afin_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1afin_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1afin_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1afin_1";
var blurSwapIn = "_blurSwapIn_1afin_1";
var blurSwapOut = "_blurSwapOut_1afin_1";
var pulseGlow = "_pulseGlow_1afin_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1afin_1";
var fade = "_fade_1afin_1";
var fadeInUp = "_fadeInUp_1afin_1";
var fadeInDown = "_fadeInDown_1afin_1";
var fadeInLeft = "_fadeInLeft_1afin_1";
var fadeInRight = "_fadeInRight_1afin_1";
var fadeOut = "_fadeOut_1afin_1";
var fadeOutDown = "_fadeOutDown_1afin_1";
var fadeOutUp = "_fadeOutUp_1afin_1";
var fadeOutLeft = "_fadeOutLeft_1afin_1";
var fadeOutRight = "_fadeOutRight_1afin_1";
var ping = "_ping_1afin_1";
var blinkBackground = "_blinkBackground_1afin_1";
var typingBlink = "_typingBlink_1afin_1";
var GlobalExecutionsList_vue_vue_type_style_index_0_lang_module_default = {
	execListWrapper,
	execList,
	execListHeaderControls,
	execTable,
	execHeaderRight,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1afin_1",
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
var GlobalExecutionsList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(GlobalExecutionsList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GlobalExecutionsList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/views/ExecutionsView.vue
var ExecutionsView_default = /* @__PURE__ */ defineComponent({
	__name: "ExecutionsView",
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const externalHooks = useExternalHooks();
		const workflowsListStore = useWorkflowsListStore();
		const executionsStore = useExecutionsStore();
		const insightsStore = useInsightsStore();
		const documentTitle = useDocumentTitle();
		const toast = useToast();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const overview = useProjectPages();
		const { readOnlyEnv, projectPermissions } = useWorkflowsEmptyState();
		const { executionsCount, concurrentExecutionsCount, filters, allExecutions } = storeToRefs(executionsStore);
		const workflowsFetchSettled = ref(false);
		const projectId = computed(() => {
			const value = route.params?.projectId;
			return typeof value === "string" ? value : void 0;
		});
		const workflowCount = computed(() => workflowsListStore.allWorkflows.length);
		const hasFetchedWorkflowsForProject = computed(() => workflowsListStore.hasFetchedAllWorkflows(projectId.value));
		const hasNoWorkflows = computed(() => hasFetchedWorkflowsForProject.value && workflowCount.value === 0);
		const resolvingWorkflowsEmptiness = computed(() => !workflowsFetchSettled.value && !hasFetchedWorkflowsForProject.value);
		const goToCreateWorkflow = () => {
			router.push({
				name: VIEWS.NEW_WORKFLOW,
				query: { projectId: projectId.value }
			});
		};
		async function loadWorkflowsForCurrentProject() {
			workflowsFetchSettled.value = false;
			try {
				await loadWorkflows();
			} finally {
				workflowsFetchSettled.value = true;
			}
		}
		onBeforeMount(async () => {
			await loadWorkflowsForCurrentProject();
			externalHooks.run("executionsList.openDialog");
			telemetry.track("User opened Executions log", { workflow_id: workflowDocumentStore.value.workflowId });
		});
		watch(projectId, async () => {
			await loadWorkflowsForCurrentProject();
		});
		onMounted(async () => {
			documentTitle.set(i18n.baseText("executionsList.workflowExecutions"));
			document.addEventListener("visibilitychange", onDocumentVisibilityChange);
			await executionsStore.initialize();
		});
		onBeforeUnmount(() => {
			executionsStore.reset();
			document.removeEventListener("visibilitychange", onDocumentVisibilityChange);
		});
		async function loadWorkflows() {
			try {
				await workflowsListStore.fetchAllWorkflows(projectId.value);
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.loadWorkflows.title"));
			}
		}
		function onDocumentVisibilityChange() {
			if (document.visibilityState === "hidden") executionsStore.stopAutoRefreshInterval();
			else executionsStore.startAutoRefreshInterval();
		}
		async function onRefreshData() {
			try {
				await executionsStore.fetchExecutions();
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.refreshData.title"));
			}
		}
		async function onUpdateFilters(newFilters) {
			executionsStore.reset();
			executionsStore.setFilters(newFilters);
			await executionsStore.initialize();
		}
		async function onExecutionStop() {
			await onRefreshData();
		}
		return (_ctx, _cache) => {
			return resolvingWorkflowsEmptiness.value ? (openBlock(), createBlock(ResourcesListLoadingState_default, {
				key: 0,
				"data-test-id": "executions-loading-state"
			})) : hasNoWorkflows.value ? (openBlock(), createBlock(PageViewLayout_default, { key: 1 }, {
				header: withCtx(() => [createVNode(ProjectHeader_default, null, {
					default: withCtx(() => [unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(unref(InsightsSummary_default), {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("div", null, [createVNode(ResourcesListEmptyState_default, {
					"resource-key": "executions",
					"button-disabled": unref(readOnlyEnv) || !unref(projectPermissions).workflow.create,
					"disabled-tooltip-text": unref(readOnlyEnv) ? unref(i18n).baseText("readOnlyEnv.cantAdd.workflow") : void 0,
					"onClick:button": goToCreateWorkflow
				}, null, 8, ["button-disabled", "disabled-tooltip-text"])])]),
				_: 1
			})) : (openBlock(), createBlock(GlobalExecutionsList_default, {
				key: 2,
				executions: unref(allExecutions),
				filters: unref(filters),
				total: unref(executionsCount),
				"concurrent-total": unref(concurrentExecutionsCount),
				"onExecution:stop": onExecutionStop,
				"onUpdate:filters": onUpdateFilters
			}, {
				default: withCtx(() => [createVNode(ProjectHeader_default, null, {
					default: withCtx(() => [unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(unref(InsightsSummary_default), {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"executions",
				"filters",
				"total",
				"concurrent-total"
			]));
		};
	}
});
//#endregion
export { ExecutionsView_default as default };
