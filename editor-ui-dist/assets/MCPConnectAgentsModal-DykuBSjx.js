import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, c as useCssModule, dt as useModel, j as createVNode, m as withKeys, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { t as N8nNotice_default } from "./N8nNotice-7yTs7YRW.js";
import { Ei as sleep } from "./src-C3aqUyDp.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import { a as TELEMETRY_EVENT } from "./src-CZRYnvxl.js";
import { t as Modal_default } from "./Modal-BrJJYGMr.js";
import { i as MCP_CONNECT_AGENTS_MODAL_KEY } from "./mcp.constants-DyvBgGQm.js";
import { t as useMCPStore } from "./mcp.store-Bn07AaYQ.js";
//#region src/features/ai/mcpAccess/components/MCPAgentsSelect.vue?vue&type=script&setup=true&lang.ts
var MCPAgentsSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPAgentsSelect",
	props: /* @__PURE__ */ mergeModels({
		placeholder: {},
		disabled: { type: Boolean }
	}, {
		"modelValue": { default: () => [] },
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["ready", "confirm"], ["update:modelValue"]),
	setup(__props, { expose: __expose, emit: __emit }) {
		const i18n = useI18n();
		const toast = useToast();
		const modelValue = useModel(__props, "modelValue");
		const emit = __emit;
		const mcpStore = useMCPStore();
		const isLoading = ref(false);
		const hasFetched = ref(false);
		const isDropdownVisible = ref(false);
		const selectRef = ref();
		const agentOptions = ref([]);
		let loadingTimeoutId = null;
		const showEmptyState = computed(() => {
			return !isLoading.value && hasFetched.value && agentOptions.value.length === 0;
		});
		const $style = useCssModule();
		const popperClass = computed(() => [isLoading.value ? $style["mcp-agents-select-loading"] : "", showEmptyState.value ? $style["mcp-agents-select-empty"] : ""].filter(Boolean).join(" "));
		const projectName = (agent) => agent.project?.type === "personal" ? i18n.baseText("projects.menu.personal") : agent.project?.name ?? "";
		async function searchAgents(query) {
			if (loadingTimeoutId) {
				clearTimeout(loadingTimeoutId);
				loadingTimeoutId = null;
			}
			isLoading.value = true;
			hasFetched.value = false;
			try {
				agentOptions.value = (await mcpStore.getMcpEligibleAgents({
					take: 10,
					query: query ?? void 0
				}))?.data ?? [];
			} catch (e) {
				toast.showError(e, i18n.baseText("settings.mcp.connectAgents.error"));
			} finally {
				await sleep(200);
				isLoading.value = false;
				hasFetched.value = true;
			}
		}
		function focusOnInput() {
			selectRef.value?.focusOnInput();
		}
		function onVisibleChange(visible) {
			isDropdownVisible.value = visible;
		}
		function onKeydownCapture(event) {
			if (event.key === "Enter" && !isDropdownVisible.value && modelValue.value.length > 0) {
				event.preventDefault();
				event.stopPropagation();
				emit("confirm");
			}
		}
		onMounted(async () => {
			await searchAgents();
			emit("ready");
		});
		__expose({ focusOnInput });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { onKeydownCapture: withKeys(onKeydownCapture, ["enter"]) }, [createVNode(unref(N8nSelect_default), {
				ref_key: "selectRef",
				ref: selectRef,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				"data-test-id": "mcp-agents-select",
				placeholder: __props.placeholder,
				disabled: __props.disabled,
				loading: isLoading.value,
				multiple: true,
				filterable: true,
				remote: true,
				"remote-method": searchAgents,
				size: "medium",
				"popper-class": popperClass.value,
				onVisibleChange
			}, {
				default: withCtx(() => [showEmptyState.value ? (openBlock(), createBlock(unref(N8nOption_default), {
					key: 0,
					value: "",
					disabled: "",
					class: normalizeClass(unref($style)["empty-option"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.connectAgents.emptyState")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(agentOptions.value, (agent) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: agent.id,
						value: agent.id,
						label: agent.name
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref($style).option) }, [
							createVNode(unref(N8nText_default), { class: normalizeClass(unref($style).truncate) }, {
								default: withCtx(() => [createTextVNode(toDisplayString(projectName(agent)), 1)]),
								_: 2
							}, 1032, ["class"]),
							createBaseVNode("span", { class: normalizeClass(unref($style).separator) }, "/", 2),
							createVNode(unref(N8nText_default), {
								class: normalizeClass(unref($style).truncate),
								color: "text-dark"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(agent.name), 1)]),
								_: 2
							}, 1032, ["class"])
						], 2)]),
						_: 2
					}, 1032, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, [
				"modelValue",
				"placeholder",
				"disabled",
				"loading",
				"popper-class"
			])], 32);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/MCPAgentsSelect.vue?vue&type=style&index=0&lang.module.scss
var option = "_option_14xdk_401";
var separator = "_separator_14xdk_409";
var truncate = "_truncate_14xdk_414";
var shimmer$1 = "_shimmer_14xdk_1";
var spin$1 = "_spin_14xdk_1";
var opacityPulse$1 = "_opacityPulse_14xdk_1";
var popoverIn$1 = "_popoverIn_14xdk_1";
var fadeIn$1 = "_fadeIn_14xdk_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_14xdk_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_14xdk_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_14xdk_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_14xdk_1";
var blurSwapIn$1 = "_blurSwapIn_14xdk_1";
var blurSwapOut$1 = "_blurSwapOut_14xdk_1";
var pulseGlow$1 = "_pulseGlow_14xdk_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_14xdk_1";
var fade$1 = "_fade_14xdk_1";
var fadeInUp$1 = "_fadeInUp_14xdk_1";
var fadeInDown$1 = "_fadeInDown_14xdk_1";
var fadeInLeft$1 = "_fadeInLeft_14xdk_1";
var fadeInRight$1 = "_fadeInRight_14xdk_1";
var fadeOut$1 = "_fadeOut_14xdk_1";
var fadeOutDown$1 = "_fadeOutDown_14xdk_1";
var fadeOutUp$1 = "_fadeOutUp_14xdk_1";
var fadeOutLeft$1 = "_fadeOutLeft_14xdk_1";
var fadeOutRight$1 = "_fadeOutRight_14xdk_1";
var ping$1 = "_ping_14xdk_1";
var blinkBackground$1 = "_blinkBackground_14xdk_1";
var typingBlink$1 = "_typingBlink_14xdk_1";
var MCPAgentsSelect_vue_vue_type_style_index_0_lang_module_default = {
	"mcp-agents-select-loading": "_mcp-agents-select-loading_14xdk_388",
	"mcp-agents-select-empty": "_mcp-agents-select-empty_14xdk_389",
	"empty-option": "_empty-option_14xdk_396",
	option,
	separator,
	truncate,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_14xdk_1",
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
var MCPAgentsSelect_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPAgentsSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPAgentsSelect_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/modals/MCPConnectAgentsModal.vue?vue&type=script&setup=true&lang.ts
var MCPConnectAgentsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPConnectAgentsModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const isSaving = ref(false);
		const selectedAgentIds = ref([]);
		const selectRef = ref(null);
		const modalBus = createEventBus();
		const closedByAction = ref(false);
		const canSave = computed(() => selectedAgentIds.value.length > 0);
		const cancel = (close) => {
			closedByAction.value = true;
			telemetry.track(TELEMETRY_EVENT.AGENTS.USER_DISMISSED_MCP_AGENTS_DIALOG, {});
			close();
		};
		async function save(close) {
			if (selectedAgentIds.value.length === 0) return;
			isSaving.value = true;
			try {
				await props.data.onEnableMcpAccess(selectedAgentIds.value);
				closedByAction.value = true;
				telemetry.track(TELEMETRY_EVENT.AGENTS.USER_SELECTED_AGENTS_FOR_MCP, {
					agentIds: selectedAgentIds.value,
					count: selectedAgentIds.value.length
				});
				close();
			} finally {
				isSaving.value = false;
			}
		}
		function onModalClosed() {
			if (!closedByAction.value) telemetry.track(TELEMETRY_EVENT.AGENTS.USER_DISMISSED_MCP_AGENTS_DIALOG, {});
		}
		function onSelectReady() {
			selectRef.value?.focusOnInput();
		}
		function onConfirm() {
			if (!isSaving.value) save(() => modalBus.emit("close"));
		}
		onMounted(() => {
			modalBus.on("closed", onModalClosed);
		});
		onBeforeUnmount(() => {
			modalBus.off("closed", onModalClosed);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(MCP_CONNECT_AGENTS_MODAL_KEY),
				title: unref(i18n).baseText("settings.mcp.connectAgents.modalTitle"),
				width: "600px",
				class: normalizeClass(_ctx.$style.container),
				"event-bus": unref(modalBus),
				"close-on-click-modal": false
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nNotice_default), {
					"data-test-id": "mcp-connect-agents-info-notice",
					theme: "info",
					content: unref(i18n).baseText("settings.mcp.connectAgents.notice"),
					class: normalizeClass(_ctx.$style.notice)
				}, null, 8, ["content", "class"]), createVNode(MCPAgentsSelect_default, {
					ref_key: "selectRef",
					ref: selectRef,
					modelValue: selectedAgentIds.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedAgentIds.value = $event),
					placeholder: unref(i18n).baseText("settings.mcp.connectAgents.input.placeholder"),
					disabled: isSaving.value,
					onReady: onSelectReady,
					onConfirm
				}, null, 8, [
					"modelValue",
					"placeholder",
					"disabled"
				])], 2)]),
				footer: withCtx(({ close }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					label: unref(i18n).baseText("generic.cancel"),
					disabled: isSaving.value,
					"data-test-id": "mcp-connect-agents-cancel-button",
					onClick: ($event) => cancel(close)
				}, null, 8, [
					"label",
					"disabled",
					"onClick"
				]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					label: unref(i18n).baseText("settings.mcp.connectAgents.confirm.label"),
					loading: isSaving.value,
					disabled: !canSave.value || isSaving.value,
					"data-test-id": "mcp-connect-agents-save-button",
					onClick: ($event) => save(close)
				}, null, 8, [
					"label",
					"loading",
					"disabled",
					"onClick"
				])], 2)]),
				_: 1
			}, 8, [
				"name",
				"title",
				"class",
				"event-bus"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/modals/MCPConnectAgentsModal.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_3y91i_388";
var content = "_content_3y91i_393";
var notice = "_notice_3y91i_398";
var footer = "_footer_3y91i_402";
var shimmer = "_shimmer_3y91i_1";
var spin = "_spin_3y91i_1";
var opacityPulse = "_opacityPulse_3y91i_1";
var popoverIn = "_popoverIn_3y91i_1";
var fadeIn = "_fadeIn_3y91i_1";
var collapsibleSlideDown = "_collapsibleSlideDown_3y91i_1";
var collapsibleSlideUp = "_collapsibleSlideUp_3y91i_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_3y91i_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_3y91i_1";
var blurSwapIn = "_blurSwapIn_3y91i_1";
var blurSwapOut = "_blurSwapOut_3y91i_1";
var pulseGlow = "_pulseGlow_3y91i_1";
var pulseGlowDelayed = "_pulseGlowDelayed_3y91i_1";
var fade = "_fade_3y91i_1";
var fadeInUp = "_fadeInUp_3y91i_1";
var fadeInDown = "_fadeInDown_3y91i_1";
var fadeInLeft = "_fadeInLeft_3y91i_1";
var fadeInRight = "_fadeInRight_3y91i_1";
var fadeOut = "_fadeOut_3y91i_1";
var fadeOutDown = "_fadeOutDown_3y91i_1";
var fadeOutUp = "_fadeOutUp_3y91i_1";
var fadeOutLeft = "_fadeOutLeft_3y91i_1";
var fadeOutRight = "_fadeOutRight_3y91i_1";
var ping = "_ping_3y91i_1";
var blinkBackground = "_blinkBackground_3y91i_1";
var typingBlink = "_typingBlink_3y91i_1";
var MCPConnectAgentsModal_vue_vue_type_style_index_0_lang_module_default = {
	container,
	content,
	notice,
	footer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_3y91i_1",
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
var MCPConnectAgentsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPConnectAgentsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPConnectAgentsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { MCPConnectAgentsModal_default as default };
