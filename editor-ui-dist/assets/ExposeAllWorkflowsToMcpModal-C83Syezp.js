import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Gd as createTextVNode, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, bp as toDisplayString, cf as onMounted, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, of as onBeforeUnmount, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { AO as N8nText_default, HO as _plugin_vue_export_helper_default, Nf as Modal_default, Oa as useMcp, RO as N8nButton_default, W as EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY, Yb as useToast, ka as useMCPStore, nO as createEventBus, nx as useSettingsStore, qO as useI18n, t as useExposeAllWorkflowsToMcpStore } from "./app-MbtXRI_F.js";
//#region src/experiments/exposeAllWorkflowsToMcp/components/ExposeAllWorkflowsToMcpModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var ExposeAllWorkflowsToMcpModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ExposeAllWorkflowsToMcpModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const toast = useToast();
		const mcp = useMcp();
		const mcpStore = useMCPStore();
		const settingsStore = useSettingsStore();
		const experimentStore = useExposeAllWorkflowsToMcpStore();
		const modalBus = createEventBus();
		const isSaving = ref(false);
		const closedByAction = ref(false);
		const includesAgents = computed(() => settingsStore.isAgentsEnabled);
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
				await mcpStore.setAutoExposeNewWorkflows(true);
				mcp.trackAutoExposeToggled({
					enabled: true,
					source: "expose_all"
				});
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
					variant: "outline",
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
}), [["__cssModules", { "$style": { footer: "_footer_1ybrg_1" } }]]);
//#endregion
export { ExposeAllWorkflowsToMcpModal_default as default };
