import { $ as openBlock, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, W as nextTick, gt as watch, j as createVNode, q as onBeforeUnmount, tt as provide, vn as normalizeClass, w as createBlock, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as NodeView_default } from "./NodeView-CXQ8Aey3.js";
import { E as disposeWorkflowDocumentStore, _ as disposeWorkflowExecutionStateStore, j as assignNodeId, k as useWorkflowDocumentStore, sn as disposeNDVStore, un as useNDVStore, y as useWorkflowExecutionStateStore } from "./workflows.store-qP-dtzSs.js";
import { ca as EditorEnabledFeaturesKey, ga as WorkflowIdKey, ha as WorkflowDocumentStoreKey } from "./constants-CMdL1Kzl.js";
import { F as useWorkflowNormalization } from "./useCanvasOperations-LJDHn9ZZ.js";
import { t as canvasEventBus } from "./canvas.eventBus-BsKubWWE.js";
//#region src/app/components/WorkflowPreviewHost.vue?vue&type=script&setup=true&lang.ts
var WorkflowPreviewHost_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowPreviewHost",
	props: {
		documentId: {},
		workflow: {}
	},
	setup(__props) {
		const props = __props;
		const { normalizeWorkflowData } = useWorkflowNormalization();
		const documentStore = shallowRef(null);
		provide(WorkflowIdKey, computed(() => documentStore.value?.workflowId ?? ""));
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
			const { nodes, connections } = normalizeWorkflowData({
				nodes: (props.workflow.nodes ?? []).map((node) => {
					const previewNode = { ...node };
					if (!previewNode.id) assignNodeId(previewNode);
					return previewNode;
				}),
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
});
//#endregion
//#region src/app/components/WorkflowPreviewHost.vue?vue&type=style&index=0&lang.module.scss
var host = "_host_e0w1y_388";
var centerState = "_centerState_e0w1y_396";
var shimmer = "_shimmer_e0w1y_1";
var spin = "_spin_e0w1y_1";
var opacityPulse = "_opacityPulse_e0w1y_1";
var popoverIn = "_popoverIn_e0w1y_1";
var fadeIn = "_fadeIn_e0w1y_1";
var collapsibleSlideDown = "_collapsibleSlideDown_e0w1y_1";
var collapsibleSlideUp = "_collapsibleSlideUp_e0w1y_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_e0w1y_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_e0w1y_1";
var blurSwapIn = "_blurSwapIn_e0w1y_1";
var blurSwapOut = "_blurSwapOut_e0w1y_1";
var pulseGlow = "_pulseGlow_e0w1y_1";
var pulseGlowDelayed = "_pulseGlowDelayed_e0w1y_1";
var fade = "_fade_e0w1y_1";
var fadeInUp = "_fadeInUp_e0w1y_1";
var fadeInDown = "_fadeInDown_e0w1y_1";
var fadeInLeft = "_fadeInLeft_e0w1y_1";
var fadeInRight = "_fadeInRight_e0w1y_1";
var fadeOut = "_fadeOut_e0w1y_1";
var fadeOutDown = "_fadeOutDown_e0w1y_1";
var fadeOutUp = "_fadeOutUp_e0w1y_1";
var fadeOutLeft = "_fadeOutLeft_e0w1y_1";
var fadeOutRight = "_fadeOutRight_e0w1y_1";
var ping = "_ping_e0w1y_1";
var blinkBackground = "_blinkBackground_e0w1y_1";
var typingBlink = "_typingBlink_e0w1y_1";
var WorkflowPreviewHost_vue_vue_type_style_index_0_lang_module_default = {
	host,
	centerState,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_e0w1y_1",
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
var WorkflowPreviewHost_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowPreviewHost_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowPreviewHost_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowPreviewHost_default as t };
