import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Gd as createVNode, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Vd as createElementBlock, as as useRoute, ep as init_shared_esm_bundler, mf as resolveComponent, os as useRouter, pp as normalizeClass, qd as defineComponent, rs as onBeforeRouteLeave, sf as onMounted, uf as openBlock, vp as toDisplayString, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { FD as N8nIcon_default, RD as _plugin_vue_export_helper_default, UD as useI18n, Ur as useAgentReturnContextStore, Uy as VIEWS, np as useDocumentTitle } from "./app-DbOOaPK6.js";
//#region src/features/agents/components/BackToWorkflowBanner.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var BackToWorkflowBanner_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "BackToWorkflowBanner",
	emits: ["back"],
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.banner),
				"data-test-id": "agent-back-to-workflow",
				onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("back"))
			}, [createVNode(unref(N8nIcon_default), {
				icon: "arrow-left",
				size: "large"
			}), createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agents.backToWorkflow")), 3)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	banner: "_banner_1rzmt_2",
	label: "_label_1rzmt_32"
} }]]);
//#endregion
//#region src/features/agents/views/AgentView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
var AgentView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentView",
	setup(__props) {
		const documentTitle = useDocumentTitle();
		const locale = useI18n();
		const route = useRoute();
		const router = useRouter();
		const returnContext = useAgentReturnContextStore();
		const routeAgentId = computed(() => {
			const id = route.params.agentId;
			return Array.isArray(id) ? id[0] : id;
		});
		const showBackBanner = computed(() => !!returnContext.context && returnContext.context.agentId === routeAgentId.value);
		onMounted(async () => {
			documentTitle.set(locale.baseText("agents.heading"));
		});
		onBeforeRouteLeave(() => {
			returnContext.clear();
		});
		async function onBackToWorkflow() {
			const ctx = returnContext.context;
			if (!ctx) return;
			returnContext.clear();
			if (ctx.returnPath) {
				returnContext.setPendingArtifactReturn({
					workflowId: ctx.workflowId,
					...ctx.nodeId ? { nodeId: ctx.nodeId } : {}
				});
				try {
					if (await router.push({ path: ctx.returnPath })) returnContext.consumePendingArtifactReturn();
				} catch (error) {
					returnContext.consumePendingArtifactReturn();
					throw error;
				}
				return;
			}
			await router.push({
				name: VIEWS.WORKFLOW,
				params: {
					workflowId: ctx.workflowId,
					...ctx.nodeId ? { nodeId: ctx.nodeId } : {}
				}
			});
		}
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.agentView) }, [showBackBanner.value ? (openBlock(), createBlock(BackToWorkflowBanner_default, {
				key: 0,
				onBack: onBackToWorkflow
			})) : createCommentVNode("", true), createVNode(_component_RouterView)], 2);
		};
	}
}), [["__cssModules", { "$style": { agentView: "_agentView_1rlmu_2" } }]]);
//#endregion
export { AgentView_default as default };
