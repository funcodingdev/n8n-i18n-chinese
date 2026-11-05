import { Af as init_reactivity_esm_bundler, Bf as shallowRef, Cf as watch, Gd as createVNode, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, Vd as createElementBlock, af as onBeforeUnmount, df as provide, ep as init_shared_esm_bundler, pp as normalizeClass, qd as defineComponent, rf as nextTick, uf as openBlock, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { FD as N8nIcon_default, Qf as disposeWorkflowExecutionStateStore, RD as _plugin_vue_export_helper_default, _m as useNDVStore, cp as disposeWorkflowDocumentStore, ep as useWorkflowExecutionStateStore, fp as useWorkflowDocumentStore, mm as disposeNDVStore, ny as WorkflowDocumentStoreKey, pp as assignNodeId, qv as EditorEnabledFeaturesKey, ry as WorkflowIdKey, vf as canvasEventBus, yd as useWorkflowNormalization } from "./app-CfhiRDif.js";
import { t as NodeView_default } from "./NodeView--CR00CVi.js";
//#region src/app/components/WorkflowPreviewHost.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var WorkflowPreviewHost_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "WorkflowPreviewHost",
	props: {
		documentId: {},
		workflow: {}
	},
	setup(__props) {
		const props = __props;
		const { normalizeWorkflowData } = useWorkflowNormalization();
		const documentStore = shallowRef(null);
		const workflowId = computed(() => documentStore.value?.workflowId ?? "");
		provide(WorkflowIdKey, workflowId);
		provide(WorkflowDocumentStoreKey, documentStore);
		provide(EditorEnabledFeaturesKey, computed(() => ({
			readOnly: true,
			expandGroups: "all",
			aiAssistant: false,
			aiBuilder: false,
			askAi: false,
			executionSuccessToasts: false,
			executionErrorToasts: false
		})));
		function disposePreviewStores() {
			const scopedDocumentStore = documentStore.value;
			if (!scopedDocumentStore) return;
			const documentId = scopedDocumentStore.documentId;
			documentStore.value = null;
			disposeNDVStore(useNDVStore(documentId));
			disposeWorkflowExecutionStateStore(useWorkflowExecutionStateStore(documentId));
			disposeWorkflowDocumentStore(scopedDocumentStore);
		}
		async function hydratePreview() {
			if (documentStore.value) disposePreviewStores();
			const [workflowIdFromDocumentId, version] = props.documentId.split("@");
			const scopedDocumentStore = useWorkflowDocumentStore(props.documentId);
			const previewNodes = (props.workflow.nodes ?? []).map((node) => {
				const previewNode = { ...node };
				if (!previewNode.id) assignNodeId(previewNode);
				return previewNode;
			});
			const { nodes, connections } = normalizeWorkflowData({
				nodes: previewNodes,
				connections: props.workflow.connections ?? {}
			});
			scopedDocumentStore.hydrate({
				name: "",
				active: false,
				isArchived: false,
				createdAt: "",
				updatedAt: "",
				...props.workflow,
				id: workflowIdFromDocumentId,
				versionId: version,
				nodes,
				connections
			});
			documentStore.value = scopedDocumentStore;
			await nextTick();
			canvasEventBus.emit("fitView");
		}
		watch(() => [props.documentId, props.workflow], hydratePreview, { immediate: true });
		onBeforeUnmount(() => {
			disposePreviewStores();
		});
		const isReady = computed(() => documentStore.value !== null);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.host),
				"data-test-id": "workflow-preview-host"
			}, [isReady.value ? (openBlock(), createBlock(NodeView_default, { key: 0 })) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.centerState)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "loader-circle",
				size: 80,
				spin: ""
			})], 2))], 2);
		};
	}
}), [["__cssModules", { "$style": {
	host: "_host_1m0j7_1",
	centerState: "_centerState_1m0j7_9"
} }]]);
//#endregion
export { WorkflowPreviewHost_default as t };
