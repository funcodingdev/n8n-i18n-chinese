import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, K as onBeforeMount, N as defineComponent, P as getCurrentInstance, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bt as withCtx, j as createVNode, ot as resolveDirective, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { n as ElRow, t as ElCol } from "./col-ryvmp7CX.js";
import { t as ElSwitch } from "./switch-VgJfpBOv.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-BgeouQMM.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
import { t as N8nNotice_default } from "./N8nNotice-7yTs7YRW.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as N8nInfoTip_default } from "./N8nInfoTip-BB_z6D-l.js";
import { D as injectWorkflowDocumentStore, wt as useCredentialsStore } from "./workflows.store-QD0eo9S6.js";
import { Bn as defaultMessageEventBusDestinationOptions, oa as v4, vi as deepCopy } from "./src-DAIlllTg.js";
import { t as assert } from "./assert-BgZvUjbv.js";
import { t as useSettingsStore } from "./settings.store-BikmCGla.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-Dx1UCP52.js";
import { no as EnterpriseEditionFeature, ti as LOG_STREAM_MODAL_KEY } from "./constants-DxozP3cY.js";
import { n as useUIStore } from "./ui.store-Bnte4owf.js";
import { t as hasPermission } from "./permissions-CL97eZ0v.js";
import { n as useDocumentTitle } from "./useDocumentTitle-DIC12kgr.js";
import { t as useLogStreamingStore } from "./logStreaming.store-DutnIXIc.js";
//#region src/features/integrations/logStreaming.ee/components/EventDestinationCard.vue?vue&type=script&setup=true&lang.ts
var EventDestinationCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EventDestinationCard",
	props: {
		eventBus: {},
		destination: { default: () => deepCopy(defaultMessageEventBusDestinationOptions) },
		readonly: { type: Boolean }
	},
	emits: ["edit", "remove"],
	setup(__props, { emit: __emit }) {
		const DESTINATION_LIST_ITEM_ACTIONS = {
			OPEN: "open",
			DELETE: "delete"
		};
		const { confirm } = useMessage();
		const i18n = useI18n();
		const logStreamingStore = useLogStreamingStore();
		const nodeParameters = ref({});
		const cardActions = ref(null);
		const props = __props;
		const emit = __emit;
		onMounted(() => {
			nodeParameters.value = Object.assign(deepCopy(defaultMessageEventBusDestinationOptions), props.destination);
			props.eventBus?.on("destinationWasSaved", onDestinationWasSaved);
		});
		onBeforeMount(() => {
			props.eventBus?.off("destinationWasSaved", onDestinationWasSaved);
		});
		const actions = computed(() => {
			const actionList = [{
				label: i18n.baseText("workflows.item.open"),
				value: DESTINATION_LIST_ITEM_ACTIONS.OPEN
			}];
			if (!props.readonly) actionList.push({
				label: i18n.baseText("workflows.item.delete"),
				value: DESTINATION_LIST_ITEM_ACTIONS.DELETE
			});
			return actionList;
		});
		const typeLabelName = computed(() => {
			return `settings.log-streaming.${props.destination.__type}`;
		});
		function onDestinationWasSaved() {
			assert(props.destination.id);
			if (logStreamingStore.getDestination(props.destination.id)) nodeParameters.value = Object.assign(deepCopy(defaultMessageEventBusDestinationOptions), props.destination);
		}
		async function onClick(event) {
			const target = event.target;
			if (cardActions.value === target || cardActions.value?.contains(target) || target?.contains(cardActions.value)) return;
			emit("edit", props.destination.id);
		}
		function onEnabledSwitched(state) {
			const boolValue = typeof state === "boolean" ? state : Boolean(state);
			nodeParameters.value.enabled = boolValue;
			saveDestination();
		}
		async function saveDestination() {
			await logStreamingStore.saveDestination(nodeParameters.value);
		}
		async function onAction(action) {
			if (action === DESTINATION_LIST_ITEM_ACTIONS.OPEN) emit("edit", props.destination.id);
			else if (action === DESTINATION_LIST_ITEM_ACTIONS.DELETE) {
				if (await confirm(i18n.baseText("settings.log-streaming.destinationDelete.message", { interpolate: { destinationName: props.destination.label ?? "" } }), i18n.baseText("settings.log-streaming.destinationDelete.headline"), {
					type: "warning",
					confirmButtonText: i18n.baseText("settings.log-streaming.destinationDelete.confirmButtonText"),
					cancelButtonText: i18n.baseText("settings.log-streaming.destinationDelete.cancelButtonText")
				}) !== "confirm") return;
				emit("remove", props.destination.id);
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.cardLink),
				"data-test-id": "destination-card",
				onClick
			}, {
				header: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					bold: "",
					class: normalizeClass(_ctx.$style.cardHeading)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.destination.label), 1)]),
					_: 1
				}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "small"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(typeLabelName.value)), 1)]),
					_: 1
				})], 2)])]),
				append: withCtx(() => [createBaseVNode("div", {
					ref_key: "cardActions",
					ref: cardActions,
					class: normalizeClass(_ctx.$style.cardActions)
				}, [
					createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.activeStatusText),
						"data-test-id": "destination-activator-status"
					}, [nodeParameters.value.enabled ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "success",
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.active")), 1)]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-base",
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.inactive")), 1)]),
						_: 1
					}))], 2),
					createVNode(unref(ElSwitch), {
						class: "mr-s",
						disabled: __props.readonly,
						"model-value": nodeParameters.value.enabled,
						title: nodeParameters.value.enabled ? unref(i18n).baseText("workflowActivator.deactivateWorkflow") : unref(i18n).baseText("workflowActivator.activateWorkflow"),
						"active-color": "#13ce66",
						"inactive-color": "#8899AA",
						"data-test-id": "workflow-activate-switch",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => onEnabledSwitched($event))
					}, null, 8, [
						"disabled",
						"model-value",
						"title"
					]),
					createVNode(unref(N8nActionToggle_default), {
						actions: actions.value,
						theme: "dark",
						onAction
					}, null, 8, ["actions"])
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/features/integrations/logStreaming.ee/components/EventDestinationCard.vue?vue&type=style&index=0&lang.module.scss
var cardLink = "_cardLink_15e4j_388";
var activeStatusText = "_activeStatusText_15e4j_398";
var cardHeading = "_cardHeading_15e4j_406";
var cardDescription = "_cardDescription_15e4j_412";
var cardActions = "_cardActions_15e4j_419";
var shimmer$1 = "_shimmer_15e4j_1";
var spin$1 = "_spin_15e4j_1";
var opacityPulse$1 = "_opacityPulse_15e4j_1";
var popoverIn$1 = "_popoverIn_15e4j_1";
var fadeIn$1 = "_fadeIn_15e4j_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_15e4j_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_15e4j_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_15e4j_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_15e4j_1";
var blurSwapIn$1 = "_blurSwapIn_15e4j_1";
var blurSwapOut$1 = "_blurSwapOut_15e4j_1";
var pulseGlow$1 = "_pulseGlow_15e4j_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_15e4j_1";
var fade$1 = "_fade_15e4j_1";
var fadeInUp$1 = "_fadeInUp_15e4j_1";
var fadeInDown$1 = "_fadeInDown_15e4j_1";
var fadeInLeft$1 = "_fadeInLeft_15e4j_1";
var fadeInRight$1 = "_fadeInRight_15e4j_1";
var fadeOut$1 = "_fadeOut_15e4j_1";
var fadeOutDown$1 = "_fadeOutDown_15e4j_1";
var fadeOutUp$1 = "_fadeOutUp_15e4j_1";
var fadeOutLeft$1 = "_fadeOutLeft_15e4j_1";
var fadeOutRight$1 = "_fadeOutRight_15e4j_1";
var ping$1 = "_ping_15e4j_1";
var blinkBackground$1 = "_blinkBackground_15e4j_1";
var typingBlink$1 = "_typingBlink_15e4j_1";
var EventDestinationCard_vue_vue_type_style_index_0_lang_module_default = {
	cardLink,
	activeStatusText,
	cardHeading,
	cardDescription,
	cardActions,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_15e4j_1",
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
var EventDestinationCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EventDestinationCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EventDestinationCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/integrations/logStreaming.ee/views/SettingsLogStreamingView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "mb-2xl" };
var _hoisted_2 = { class: "ml-m" };
var _hoisted_3 = { class: "mb-l" };
var _hoisted_4 = {
	key: 0,
	class: "mt-m text-right"
};
var _hoisted_5 = {
	key: 2,
	"data-test-id": "action-box-licensed"
};
var _hoisted_6 = {
	key: 0,
	class: "mb-l"
};
var _hoisted_7 = { "data-test-id": "action-box-unlicensed" };
var SettingsLogStreamingView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsLogStreamingView",
	setup(__props) {
		const environment = "production";
		const settingsStore = useSettingsStore();
		const logStreamingStore = useLogStreamingStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const uiStore = useUIStore();
		const credentialsStore = useCredentialsStore();
		const documentTitle = useDocumentTitle();
		const i18n = useI18n();
		const pageRedirectHelper = usePageRedirectionHelper();
		const eventBus = createEventBus();
		const disableLicense = ref(false);
		const allDestinations = ref([]);
		const sortedItemKeysByLabel = computed(() => {
			const sortedKeys = [];
			for (const [key, value] of Object.entries(logStreamingStore.items)) sortedKeys.push({
				key,
				label: value.destination?.label ?? "Destination"
			});
			return sortedKeys.sort((a, b) => a.label.localeCompare(b.label));
		});
		const isLicensed = computed(() => {
			if (disableLicense.value) return false;
			return settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.LogStreaming];
		});
		const canManageLogStreaming = computed(() => {
			return hasPermission(["rbac"], { rbac: { scope: "logStreaming:manage" } });
		});
		const isManagedByEnv = computed(() => {
			return settingsStore.settings.logStreaming?.managedByEnv ?? false;
		});
		const isReadonly = computed(() => isManagedByEnv.value || !canManageLogStreaming.value);
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.log-streaming.heading"));
			if (!isLicensed.value) return;
			await credentialsStore.fetchCredentialTypes(false);
			await credentialsStore.fetchAllCredentials();
			uiStore.nodeViewInitialized = false;
			await getDestinationDataFromBackend();
			logStreamingStore.$onAction(({ name, after }) => {
				if (name === "removeDestination" || name === "updateDestination") after(async () => {
					forceUpdateInstance();
				});
			});
			eventBus.on("destinationWasSaved", onDestinationWasSaved);
			eventBus.on("remove", onRemove);
			eventBus.on("closing", onBusClosing);
		});
		onBeforeMount(() => {
			eventBus.off("destinationWasSaved", onDestinationWasSaved);
			eventBus.off("remove", onRemove);
			eventBus.off("closing", onBusClosing);
		});
		function onDestinationWasSaved() {
			forceUpdateInstance();
		}
		function forceUpdateInstance() {
			getCurrentInstance()?.proxy?.$forceUpdate();
		}
		function onBusClosing() {
			workflowDocumentStore.value.removeAllNodes();
			uiStore.markStateClean();
		}
		async function getDestinationDataFromBackend() {
			logStreamingStore.clearEventNames();
			logStreamingStore.clearDestinations();
			allDestinations.value = [];
			const eventNamesData = await logStreamingStore.fetchEventNames();
			if (eventNamesData) for (const eventName of eventNamesData) logStreamingStore.addEventName(eventName);
			const destinationData = await logStreamingStore.fetchDestinations();
			if (destinationData) for (const destination of destinationData) {
				logStreamingStore.addDestination(destination);
				allDestinations.value.push(destination);
			}
			forceUpdateInstance();
		}
		function goToUpgrade() {
			pageRedirectHelper.goToUpgrade("log-streaming", "upgrade-log-streaming");
		}
		function storeHasItems() {
			return logStreamingStore.items && Object.keys(logStreamingStore.items).length > 0;
		}
		async function addDestination() {
			const newDestination = deepCopy(defaultMessageEventBusDestinationOptions);
			newDestination.id = v4();
			logStreamingStore.addDestination(newDestination);
			await nextTick();
			uiStore.openModalWithData({
				name: LOG_STREAM_MODAL_KEY,
				data: {
					destination: newDestination,
					isNew: true,
					eventBus
				}
			});
		}
		async function onRemove(destinationId) {
			if (!destinationId) return;
			await logStreamingStore.deleteDestination(destinationId);
			const foundNode = workflowDocumentStore.value.getNodeByName(destinationId);
			if (foundNode) workflowDocumentStore.value.removeNode(foundNode);
		}
		async function onEdit(destinationId) {
			if (!destinationId) return;
			const editDestination = logStreamingStore.getDestination(destinationId);
			if (editDestination) uiStore.openModalWithData({
				name: LOG_STREAM_MODAL_KEY,
				data: {
					destination: editDestination,
					isNew: false,
					eventBus
				}
			});
		}
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.log-streaming.heading`)), 1)]),
				_: 1
			}), unref(environment) !== "production" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", _hoisted_2, "Disable License (" + toDisplayString(unref(environment)) + ")\xA0", 1), createVNode(unref(ElSwitch), {
				modelValue: disableLicense.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => disableLicense.value = $event),
				size: "large",
				"data-test-id": "disable-license-toggle"
			}, null, 8, ["modelValue"])], 64)) : createCommentVNode("", true)])], 2), isLicensed.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				createBaseVNode("div", _hoisted_3, [createVNode(unref(N8nInfoTip_default), {
					theme: "info",
					type: "note"
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.infoText")]])]),
					_: 1
				})]),
				isManagedByEnv.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
					key: 0,
					class: "mb-l",
					content: unref(i18n).baseText("settings.log-streaming.managedByEnv"),
					"data-test-id": "log-streaming-managed-by-env"
				}, null, 8, ["content"])) : createCommentVNode("", true),
				storeHasItems() ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedItemKeysByLabel.value, (item) => {
					return openBlock(), createBlock(unref(ElRow), {
						key: item.key,
						gutter: 10,
						class: normalizeClass(_ctx.$style.destinationItem)
					}, {
						default: withCtx(() => [unref(logStreamingStore).items[item.key]?.destination ? (openBlock(), createBlock(unref(ElCol), { key: 0 }, {
							default: withCtx(() => [createVNode(EventDestinationCard_default, {
								destination: unref(logStreamingStore).items[item.key]?.destination,
								"event-bus": unref(eventBus),
								readonly: isReadonly.value,
								onRemove: ($event) => onRemove(unref(logStreamingStore).items[item.key]?.destination?.id),
								onEdit: ($event) => onEdit(unref(logStreamingStore).items[item.key]?.destination?.id)
							}, null, 8, [
								"destination",
								"event-bus",
								"readonly",
								"onRemove",
								"onEdit"
							])]),
							_: 2
						}, 1024)) : createCommentVNode("", true)]),
						_: 2
					}, 1032, ["class"]);
				}), 128)), !isReadonly.value ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(N8nButton_default), {
					size: "large",
					onClick: addDestination
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.log-streaming.add`)), 1)]),
					_: 1
				})])) : createCommentVNode("", true)], 64)) : !isManagedByEnv.value ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(N8nEmptyState_default), {
					"button-text": unref(i18n).baseText(`settings.log-streaming.add`),
					"onClick:button": addDestination
				}, {
					heading: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText(`settings.log-streaming.addFirstTitle`)]])]),
					_: 1
				}, 8, ["button-text"])])) : createCommentVNode("", true)
			], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(i18n).baseText("settings.log-streaming.infoText") ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(unref(N8nInfoTip_default), {
				theme: "info",
				type: "note"
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.infoText")]])]),
				_: 1
			})])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_7, [createVNode(unref(N8nEmptyState_default), {
				description: unref(i18n).baseText("settings.log-streaming.actionBox.description"),
				"button-text": unref(i18n).baseText("settings.log-streaming.actionBox.button"),
				"onClick:button": goToUpgrade
			}, {
				heading: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("settings.log-streaming.actionBox.title")]])]),
				_: 1
			}, 8, ["description", "button-text"])])], 64))]);
		};
	}
});
//#endregion
//#region src/features/integrations/logStreaming.ee/views/SettingsLogStreamingView.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_q6uyv_388";
var destinationItem = "_destinationItem_q6uyv_398";
var shimmer = "_shimmer_q6uyv_1";
var spin = "_spin_q6uyv_1";
var opacityPulse = "_opacityPulse_q6uyv_1";
var popoverIn = "_popoverIn_q6uyv_1";
var fadeIn = "_fadeIn_q6uyv_1";
var collapsibleSlideDown = "_collapsibleSlideDown_q6uyv_1";
var collapsibleSlideUp = "_collapsibleSlideUp_q6uyv_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_q6uyv_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_q6uyv_1";
var blurSwapIn = "_blurSwapIn_q6uyv_1";
var blurSwapOut = "_blurSwapOut_q6uyv_1";
var pulseGlow = "_pulseGlow_q6uyv_1";
var pulseGlowDelayed = "_pulseGlowDelayed_q6uyv_1";
var fade = "_fade_q6uyv_1";
var fadeInUp = "_fadeInUp_q6uyv_1";
var fadeInDown = "_fadeInDown_q6uyv_1";
var fadeInLeft = "_fadeInLeft_q6uyv_1";
var fadeInRight = "_fadeInRight_q6uyv_1";
var fadeOut = "_fadeOut_q6uyv_1";
var fadeOutDown = "_fadeOutDown_q6uyv_1";
var fadeOutUp = "_fadeOutUp_q6uyv_1";
var fadeOutLeft = "_fadeOutLeft_q6uyv_1";
var fadeOutRight = "_fadeOutRight_q6uyv_1";
var ping = "_ping_q6uyv_1";
var blinkBackground = "_blinkBackground_q6uyv_1";
var typingBlink = "_typingBlink_q6uyv_1";
var SettingsLogStreamingView_vue_vue_type_style_index_0_lang_module_default = {
	header,
	destinationItem,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_q6uyv_1",
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
var SettingsLogStreamingView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsLogStreamingView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsLogStreamingView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsLogStreamingView_default as default };
