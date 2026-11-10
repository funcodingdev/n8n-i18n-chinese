import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, bp as toDisplayString, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, ns as useRouter, pf as renderList, zd as createBaseVNode } from "./vendor-AGzaQJYe.js";
import { BO as _plugin_vue_export_helper_default, GO as useI18n, IO as N8nButton_default, LO as N8nIcon_default, OO as N8nText_default, Yb as VIEWS, s_ as useUIStore } from "./app-DGoK9ugD.js";
import { t as AgentModal_default } from "./AgentModal-D0qALa2v.js";
//#region src/features/agents/components/AgentUnpublishedWorkflowsModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = ["href"];
var AgentUnpublishedWorkflowsModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentUnpublishedWorkflowsModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const router = useRouter();
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		function workflowHref(workflow) {
			const { href } = router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: workflow.workflowId ?? "" }
			});
			return href;
		}
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModal_default, {
				open: modalOpen.value,
				title: unref(i18n).baseText("agents.publish.modal.unpublishedWorkflows.title"),
				"show-cancel": false,
				size: "large",
				"data-testid": "agent-unpublished-workflows-modal",
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => !$event && closeModal())
			}, {
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "solid",
					"data-testid": "agent-unpublished-workflows-got-it",
					onClick: closeModal
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.gotIt")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.icon),
					icon: "triangle-alert",
					color: "warning",
					size: "xlarge"
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.publish.modal.unpublishedWorkflows.description")), 1)]),
					_: 1
				})], 2), createBaseVNode("ul", {
					class: normalizeClass(_ctx.$style.list),
					"data-testid": "agent-unpublished-workflows-list"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.data.workflows, (workflow) => {
					return openBlock(), createElementBlock("li", { key: workflow.workflowId ?? workflow.name }, [workflow.workflowId ? (openBlock(), createElementBlock("a", {
						key: 0,
						class: normalizeClass(_ctx.$style.link),
						href: workflowHref(workflow),
						target: "_blank",
						rel: "noopener",
						"data-testid": "agent-unpublished-workflow-link"
					}, toDisplayString(workflow.name), 11, _hoisted_1)) : (openBlock(), createBlock(unref(N8nText_default), { key: 1 }, {
						default: withCtx(() => [createTextVNode(toDisplayString(workflow.name), 1)]),
						_: 2
					}, 1024))]);
				}), 128))], 2)], 2)]),
				_: 1
			}, 8, ["open", "title"]);
		};
	}
}), [["__cssModules", { "$style": {
	content: "_content_ngao9_1",
	header: "_header_ngao9_7",
	icon: "_icon_ngao9_14",
	list: "_list_ngao9_18",
	link: "_link_ngao9_26"
} }]]);
//#endregion
export { AgentUnpublishedWorkflowsModal_default as default };
