import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, dt as useModel, j as createVNode, m as withKeys, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-aHDyP5Mf.js";
import { It as N8nOption_default, Pt as N8nSelect_default, lo as N8nButton_default, ro as N8nText_default, st as N8nNotice_default } from "./src-BPgPnOl4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as createEventBus } from "./event-bus-DAq0yaAJ.js";
import { ki as sleep } from "./src-CBdY4Anf.js";
import { t as useTelemetry } from "./useTelemetry-RqJ9XXte.js";
import { n as useToast } from "./useToast-BoVkvj1B.js";
import { n as TELEMETRY_EVENT } from "./src-CmpCgwHw.js";
import { t as Modal_default } from "./Modal-DcdET6EX.js";
import { i as MCP_CONNECT_AGENTS_MODAL_KEY } from "./mcp.constants-Dn1qcOpP.js";
import { t as useMCPStore } from "./mcp.store-B7e2eN_p.js";
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
				"popper-class": {
					[_ctx.$style["mcp-agents-select-loading"]]: isLoading.value,
					[_ctx.$style["mcp-agents-select-empty"]]: showEmptyState.value
				},
				onVisibleChange
			}, {
				default: withCtx(() => [showEmptyState.value ? (openBlock(), createBlock(unref(N8nOption_default), {
					key: 0,
					value: "",
					disabled: "",
					class: normalizeClass(_ctx.$style["empty-option"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.connectAgents.emptyState")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(agentOptions.value, (agent) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: agent.id,
						value: agent.id,
						label: agent.name
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.option) }, [
							createVNode(unref(N8nText_default), { class: normalizeClass(_ctx.$style.truncate) }, {
								default: withCtx(() => [createTextVNode(toDisplayString(projectName(agent)), 1)]),
								_: 2
							}, 1032, ["class"]),
							createBaseVNode("span", { class: normalizeClass(_ctx.$style.separator) }, "/", 2),
							createVNode(unref(N8nText_default), {
								class: normalizeClass(_ctx.$style.truncate),
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
var option = "_option_q2qni_138";
var separator = "_separator_q2qni_146";
var truncate = "_truncate_q2qni_151";
var MCPAgentsSelect_vue_vue_type_style_index_0_lang_module_default = {
	"mcp-agents-select-loading": "_mcp-agents-select-loading_q2qni_125",
	"mcp-agents-select-empty": "_mcp-agents-select-empty_q2qni_126",
	"empty-option": "_empty-option_q2qni_133",
	option,
	separator,
	truncate
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
var MCPConnectAgentsModal_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1wyss_125",
	content: "_content_1wyss_130",
	notice: "_notice_1wyss_135",
	footer: "_footer_1wyss_139"
};
var MCPConnectAgentsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MCPConnectAgentsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MCPConnectAgentsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { MCPConnectAgentsModal_default as default };
