import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, c as useCssModule, dt as useModel, j as createVNode, m as withKeys, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { t as N8nNotice_default } from "./N8nNotice-7yTs7YRW.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { t as Modal_default } from "./Modal-DYw1gJ5H.js";
import { a as MCP_CONNECT_WORKFLOWS_MODAL_KEY, o as MCP_DOCS_PAGE_URL, t as ELIGIBLE_WORKFLOWS_DOCS_SECTION } from "./mcp.constants-DyvBgGQm.js";
import { t as useMCPStore } from "./mcp.store-DcDC1-y0.js";
import { t as WorkflowLocation_default } from "./WorkflowLocation-B5HXGdDm.js";
//#region src/features/ai/mcpAccess/components/MCPWorkflowsSelect.vue?vue&type=script&setup=true&lang.ts
var MCPWorkflowsSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPWorkflowsSelect",
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
		const workflowOptions = ref([]);
		let loadingTimeoutId = null;
		const showEmptyState = computed(() => {
			return !isLoading.value && hasFetched.value && workflowOptions.value.length === 0;
		});
		const $style = useCssModule();
		const popperClass = computed(() => [isLoading.value ? $style["mcp-workflows-select-loading"] : "", showEmptyState.value ? $style["mcp-workflows-select-empty"] : ""].filter(Boolean).join(" "));
		async function searchWorkflows(query) {
			if (loadingTimeoutId) {
				clearTimeout(loadingTimeoutId);
				loadingTimeoutId = null;
			}
			isLoading.value = true;
			hasFetched.value = false;
			try {
				workflowOptions.value = (await mcpStore.getMcpEligibleWorkflows({
					take: 10,
					query: query ?? void 0
				}))?.data ?? [];
			} catch (e) {
				toast.showError(e, i18n.baseText("settings.mcp.connectWorkflows.error"));
			} finally {
				await waitFor(200);
				isLoading.value = false;
				hasFetched.value = true;
			}
		}
		async function waitFor(timeout) {
			await new Promise((resolve) => {
				setTimeout(() => {
					resolve();
				}, timeout);
			});
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
			await searchWorkflows();
			emit("ready");
		});
		__expose({ focusOnInput });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { onKeydownCapture: withKeys(onKeydownCapture, ["enter"]) }, [createVNode(unref(N8nSelect_default), {
				ref_key: "selectRef",
				ref: selectRef,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				"data-test-id": "mcp-workflows-select",
				placeholder: __props.placeholder,
				disabled: __props.disabled,
				loading: isLoading.value,
				multiple: true,
				filterable: true,
				remote: true,
				"remote-method": searchWorkflows,
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
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.connectWorkflows.emptyState")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(workflowOptions.value, (workflow) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: workflow.id,
						value: workflow.id,
						label: workflow.name
					}, {
						default: withCtx(() => [createVNode(WorkflowLocation_default, {
							"workflow-id": workflow.id,
							"workflow-name": workflow.name,
							"home-project": workflow.homeProject,
							"parent-folder": workflow.parentFolder
						}, null, 8, [
							"workflow-id",
							"workflow-name",
							"home-project",
							"parent-folder"
						])]),
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
//#region src/features/ai/mcpAccess/components/MCPWorkflowsSelect.vue?vue&type=style&index=0&lang.module.scss
var shimmer$1 = "_shimmer_1ptd9_1";
var spin$1 = "_spin_1ptd9_1";
var opacityPulse$1 = "_opacityPulse_1ptd9_1";
var popoverIn$1 = "_popoverIn_1ptd9_1";
var fadeIn$1 = "_fadeIn_1ptd9_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1ptd9_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1ptd9_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1ptd9_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1ptd9_1";
var blurSwapIn$1 = "_blurSwapIn_1ptd9_1";
var blurSwapOut$1 = "_blurSwapOut_1ptd9_1";
var pulseGlow$1 = "_pulseGlow_1ptd9_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1ptd9_1";
var fade$1 = "_fade_1ptd9_1";
var fadeInUp$1 = "_fadeInUp_1ptd9_1";
var fadeInDown$1 = "_fadeInDown_1ptd9_1";
var fadeInLeft$1 = "_fadeInLeft_1ptd9_1";
var fadeInRight$1 = "_fadeInRight_1ptd9_1";
var fadeOut$1 = "_fadeOut_1ptd9_1";
var fadeOutDown$1 = "_fadeOutDown_1ptd9_1";
var fadeOutUp$1 = "_fadeOutUp_1ptd9_1";
var fadeOutLeft$1 = "_fadeOutLeft_1ptd9_1";
var fadeOutRight$1 = "_fadeOutRight_1ptd9_1";
var ping$1 = "_ping_1ptd9_1";
var blinkBackground$1 = "_blinkBackground_1ptd9_1";
var typingBlink$1 = "_typingBlink_1ptd9_1";
var MCPWorkflowsSelect_vue_vue_type_style_index_0_lang_module_default = {
	"mcp-workflows-select-loading": "_mcp-workflows-select-loading_1ptd9_388",
	"mcp-workflows-select-empty": "_mcp-workflows-select-empty_1ptd9_389",
	"empty-option": "_empty-option_1ptd9_396",
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1ptd9_1",
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
var MCPWorkflowsSelect_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPWorkflowsSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPWorkflowsSelect_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/modals/MCPConnectWorkflowsModal.vue?vue&type=script&setup=true&lang.ts
var MCPConnectWorkflowsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MCPConnectWorkflowsModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const isSaving = ref(false);
		const selectedWorkflowIds = ref([]);
		const selectRef = ref(null);
		const modalBus = createEventBus();
		const closedByAction = ref(false);
		const docsLink = `${MCP_DOCS_PAGE_URL}#${ELIGIBLE_WORKFLOWS_DOCS_SECTION}`;
		const canSave = computed(() => selectedWorkflowIds.value.length > 0);
		const cancel = (close) => {
			closedByAction.value = true;
			telemetry.track("User dismissed mcp workflows dialog");
			close();
		};
		async function save(close) {
			if (selectedWorkflowIds.value.length === 0) return;
			isSaving.value = true;
			try {
				await props.data.onEnableMcpAccess(selectedWorkflowIds.value);
				closedByAction.value = true;
				telemetry.track("User selected workflow from list", {
					workflowIds: selectedWorkflowIds.value,
					count: selectedWorkflowIds.value.length
				});
				close();
			} finally {
				isSaving.value = false;
			}
		}
		function onModalClosed() {
			if (!closedByAction.value) telemetry.track("User dismissed mcp workflows dialog");
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
				name: unref(MCP_CONNECT_WORKFLOWS_MODAL_KEY),
				title: unref(i18n).baseText("settings.mcp.connectWorkflows.modalTitle"),
				width: "600px",
				class: normalizeClass(_ctx.$style.container),
				"event-bus": unref(modalBus),
				"close-on-click-modal": false
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nNotice_default), {
					"data-test-id": "mcp-connect-workflows-info-notice",
					theme: "info",
					content: unref(i18n).baseText("settings.mcp.connectWorkflows.notice", { interpolate: { docsLink } }),
					class: normalizeClass(_ctx.$style.notice)
				}, null, 8, ["content", "class"]), createVNode(MCPWorkflowsSelect_default, {
					ref_key: "selectRef",
					ref: selectRef,
					modelValue: selectedWorkflowIds.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedWorkflowIds.value = $event),
					placeholder: unref(i18n).baseText("settings.mcp.connectWorkflows.input.placeholder"),
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
					"data-test-id": "mcp-connect-workflows-cancel-button",
					onClick: ($event) => cancel(close)
				}, null, 8, [
					"label",
					"disabled",
					"onClick"
				]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					label: unref(i18n).baseText("settings.mcp.connectWorkflows.confirm.label"),
					loading: isSaving.value,
					disabled: !canSave.value || isSaving.value,
					"data-test-id": "mcp-connect-workflows-save-button",
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
//#region src/features/ai/mcpAccess/modals/MCPConnectWorkflowsModal.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1duey_388";
var content = "_content_1duey_393";
var notice = "_notice_1duey_398";
var footer = "_footer_1duey_405";
var shimmer = "_shimmer_1duey_1";
var spin = "_spin_1duey_1";
var opacityPulse = "_opacityPulse_1duey_1";
var popoverIn = "_popoverIn_1duey_1";
var fadeIn = "_fadeIn_1duey_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1duey_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1duey_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1duey_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1duey_1";
var blurSwapIn = "_blurSwapIn_1duey_1";
var blurSwapOut = "_blurSwapOut_1duey_1";
var pulseGlow = "_pulseGlow_1duey_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1duey_1";
var fade = "_fade_1duey_1";
var fadeInUp = "_fadeInUp_1duey_1";
var fadeInDown = "_fadeInDown_1duey_1";
var fadeInLeft = "_fadeInLeft_1duey_1";
var fadeInRight = "_fadeInRight_1duey_1";
var fadeOut = "_fadeOut_1duey_1";
var fadeOutDown = "_fadeOutDown_1duey_1";
var fadeOutUp = "_fadeOutUp_1duey_1";
var fadeOutLeft = "_fadeOutLeft_1duey_1";
var fadeOutRight = "_fadeOutRight_1duey_1";
var ping = "_ping_1duey_1";
var blinkBackground = "_blinkBackground_1duey_1";
var typingBlink = "_typingBlink_1duey_1";
var MCPConnectWorkflowsModal_vue_vue_type_style_index_0_lang_module_default = {
	container,
	content,
	notice,
	footer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1duey_1",
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
var MCPConnectWorkflowsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPConnectWorkflowsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPConnectWorkflowsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { MCPConnectWorkflowsModal_default as default };
