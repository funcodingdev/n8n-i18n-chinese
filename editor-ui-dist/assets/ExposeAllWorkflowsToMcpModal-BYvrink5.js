import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, S as computed, X as onMounted, bt as withCtx, j as createVNode, q as onBeforeUnmount, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-D_HoWCyo.js";
import { fo as N8nButton_default, oo as N8nText_default } from "./src-DmjM-ErL.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as createEventBus } from "./event-bus-DAq0yaAJ.js";
import { t as useSettingsStore } from "./settings.store-C7bZgKnf.js";
import { n as useToast } from "./useToast-DLNv8iBz.js";
import { t as Modal_default } from "./Modal-BWX0JvjG.js";
import { t as EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY } from "./constants-B7b2dGnk.js";
import { t as useMCPStore } from "./mcp.store-C1pcZ7Rl.js";
import { t as useExposeAllWorkflowsToMcpStore } from "./exposeAllWorkflowsToMcp.store-PVPQMOLN.js";
//#region src/experiments/exposeAllWorkflowsToMcp/components/ExposeAllWorkflowsToMcpModal.vue?vue&type=script&setup=true&lang.ts
var ExposeAllWorkflowsToMcpModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ExposeAllWorkflowsToMcpModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const toast = useToast();
		const mcpStore = useMCPStore();
		const settingsStore = useSettingsStore();
		const experimentStore = useExposeAllWorkflowsToMcpStore();
		const modalBus = createEventBus();
		const isSaving = ref(false);
		const closedByAction = ref(false);
		const includesAgents = computed(() => settingsStore.isModuleActive("agents"));
		const modalCopy = computed(() => includesAgents.value ? {
			title: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.withAgents.title"),
			description: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.withAgents.description"),
			confirm: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.withAgents.confirm")
		} : {
			title: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.title"),
			description: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.description"),
			confirm: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.confirm")
		});
		function successToast(workflowCount, agentCount) {
			if (!includesAgents.value) return {
				title: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.success.title"),
				message: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.success.message", {
					adjustToNumber: workflowCount,
					interpolate: { count: String(workflowCount) }
				})
			};
			return {
				title: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.withAgents.success.title"),
				message: i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.withAgents.success.message", { interpolate: {
					workflows: i18n.baseText("settings.mcp.workflowsExposed.count", {
						adjustToNumber: workflowCount,
						interpolate: { count: String(workflowCount) }
					}),
					agents: i18n.baseText("settings.mcp.agentsExposed.count", {
						adjustToNumber: agentCount,
						interpolate: { count: String(agentCount) }
					})
				} })
			};
		}
		async function onExposeAll(close) {
			isSaving.value = true;
			try {
				const [workflowsResponse, agentsResponse] = await Promise.all([mcpStore.toggleWorkflowsMcpAccess({ allWorkflows: true }, true), includesAgents.value ? mcpStore.toggleAgentsMcpAccess({ allAgents: true }, true) : Promise.resolve(void 0)]);
				closedByAction.value = true;
				experimentStore.trackConfirmed();
				toast.showMessage({
					type: "success",
					...successToast(workflowsResponse.updatedCount, agentsResponse?.updatedCount ?? 0)
				});
				await props.data.onExposed?.();
				close();
			} catch (error) {
				toast.showError(error, i18n.baseText("experiments.exposeAllWorkflowsToMcp.modal.error.title"));
			} finally {
				isSaving.value = false;
			}
		}
		function onNotNow(close) {
			closedByAction.value = true;
			experimentStore.trackDeclined();
			close();
		}
		function onModalClosed() {
			if (!closedByAction.value) experimentStore.trackDismissed();
		}
		onMounted(() => {
			modalBus.on("closed", onModalClosed);
		});
		onBeforeUnmount(() => {
			modalBus.off("closed", onModalClosed);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY),
				title: modalCopy.value.title,
				width: "480px",
				"event-bus": unref(modalBus),
				closeOnClickModal: false
			}, {
				content: withCtx(() => [createVNode(unref(N8nText_default), {
					color: "text-base",
					"data-test-id": "expose-all-workflows-mcp-description"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(modalCopy.value.description), 1)]),
					_: 1
				})]),
				footer: withCtx(({ close }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					label: unref(i18n).baseText("experiments.exposeAllWorkflowsToMcp.modal.notNow"),
					disabled: isSaving.value,
					"data-test-id": "expose-all-workflows-mcp-not-now-button",
					onClick: ($event) => onNotNow(close)
				}, null, 8, [
					"label",
					"disabled",
					"onClick"
				]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					label: modalCopy.value.confirm,
					loading: isSaving.value,
					"data-test-id": "expose-all-workflows-mcp-confirm-button",
					onClick: ($event) => onExposeAll(close)
				}, null, 8, [
					"label",
					"loading",
					"onClick"
				])], 2)]),
				_: 1
			}, 8, [
				"name",
				"title",
				"event-bus"
			]);
		};
	}
});
var ExposeAllWorkflowsToMcpModal_vue_vue_type_style_index_0_lang_module_default = { footer: "_footer_7lneu_125" };
var ExposeAllWorkflowsToMcpModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ExposeAllWorkflowsToMcpModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ExposeAllWorkflowsToMcpModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ExposeAllWorkflowsToMcpModal_default as default };
