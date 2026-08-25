const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RunDataJsonActions-d_h1Ji99.js","assets/_plugin-vue_export-helper-D-F0WtqU.js","assets/chunk-CC9Q-vWm.js","assets/src-a4RL4cTS.js","assets/vue.runtime.esm-bundler-DYHsQBZB.js","assets/workflows.store-DHQ2sN1t.js","assets/preload-helper-CMc80dNB.js","assets/dist-BKkqSB6h.js","assets/src-JwBmTNgK.js","assets/lib-vJcwukKE.js","assets/merge-I1kuvuLK.js","assets/isObject-CUkREaNL.js","assets/isSymbol-DAI9oII0.js","assets/expression-runtime-stub-BpyU35mw.js","assets/__vite-browser-external-CTj19RIp.js","assets/useRootStore-BxA0rNgc.js","assets/lib-BNZ9usf7.js","assets/assert-0w9Y4iRZ.js","assets/settings.store-BA62mVzQ.js","assets/dist-v_zj-Ul9.js","assets/evaluation.store-CzclugQV.js","assets/useDebounce-Bcd_ZnT1.js","assets/sortBy-DnOfhIxL.js","assets/_baseOrderBy-C3AUBugk.js","assets/vue-router-Dl3cOHxO.js","assets/truncate-B0m9bkui.js","assets/useDocumentTitle-BpL3Z-FC.js","assets/posthog.store-HPHUvaF3.js","assets/src-WHIExFVW.js","assets/useTelemetry-CyENOfVO.js","assets/constants-BP1FOJvU.js","assets/views-o5a97N_l.js","assets/durations-nXrTS7zD.js","assets/users.store-ghXvoEgb.js","assets/users-DaIUJMwM.js","assets/ui.store-C5cG2quo.js","assets/htmlUtils-Dazt0V2g.js","assets/workflowsList.store-6Bsu-Vve.js","assets/typesUtils-DlQYqvHF.js","assets/dateformat-C4T67FBC.js","assets/permissions-yXuqbrrp.js","assets/rbac.store-DuIB9b1a.js","assets/dropdown-CEDWiLB8.js","assets/button-RT_9pd39.js","assets/plugin-vue_export-helper-BwbYAlq0.js","assets/use-global-config-H0dsywia.js","assets/style-D4NTVD8o.js","assets/use-namespace-BOyjzxct.js","assets/use-size-DQ4TyUL1.js","assets/use-z-index-CSLBKraN.js","assets/use-form-item-BbslK5UJ.js","assets/icon-a_YnoStc.js","assets/tooltip-ajJuL6NM.js","assets/focus-trap-B9RNkCJO.js","assets/isUndefined-CCVluCw5.js","assets/scrollbar-m20tTWlJ.js","assets/refs-CZ9VrH4A.js","assets/injectionKeys-BIfD6bgo.js","assets/useClipboard-1pSyfErQ.js","assets/useToast-BdIkYyHv.js","assets/useExternalHooks-C7evY7zM.js","assets/z-indexes-D-00RDH8.js","assets/N8nIconButton-CMP0ih80.js","assets/N8nButton-BNSG8N0P.js","assets/N8nIcon-CGSLc2wv.js","assets/Icon-D-jZgYpP.js","assets/Icon-CJDRELSZ.css","assets/N8nButton-BINXWRgH.css","assets/useInjectWorkflowId-CIdUrq0C.js","assets/useNodeHelpers-Yd_8PFOn.js","assets/useLoadingService-DoxSaFsr.js","assets/event-bus-CWhIcyjm.js","assets/usePrivateCredentials-TuSbPlBu.js","assets/usePinnedData-DENihcog.js","assets/useExternalHooks-CphyvLDK.js","assets/RunDataJsonActions-m_br2IQe.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, E as createElementBlock, Gt as unref, It as ref, M as defineAsyncComponent, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, v as Suspense, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as __vitePreload } from "./preload-helper-CMc80dNB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { m as useElementSize } from "./dist-BKkqSB6h.js";
import { In as executionDataToJson, Pi as isString, Pt as getMappedExpression, an as injectNDVStore, w as injectWorkflowDocumentStore } from "./workflows.store-DHQ2sN1t.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { R as nonExistingJsonPath } from "./constants-BP1FOJvU.js";
import { h as shorten } from "./typesUtils-DlQYqvHF.js";
import { t as useExternalHooks } from "./useExternalHooks-CphyvLDK.js";
import { t as Draggable_default } from "./Draggable-DE6nG-dg.js";
import { t as TextWithHighlights_default } from "./TextWithHighlights-CfuDy0aT.js";
import { n as MappingPill_default, t as useTelemetryContext } from "./useTelemetryContext-DwyUIx0W.js";
import { t as P } from "./vue-json-pretty-CrQbpRAm.js";
//#region src/features/ndv/runData/components/RunDataJson.vue?vue&type=script&setup=true&lang.ts
var RunDataJson_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunDataJson",
	props: {
		editMode: { default: () => ({}) },
		pushRef: {},
		paneType: {},
		node: {},
		inputData: {},
		mappingEnabled: { type: Boolean },
		distanceFromActive: {},
		outputIndex: {},
		runIndex: {},
		totalRuns: {},
		search: {},
		compact: { type: Boolean },
		execution: {}
	},
	setup(__props) {
		const LazyRunDataJsonActions = defineAsyncComponent(async () => await __vitePreload(() => import("./RunDataJsonActions-d_h1Ji99.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75])));
		const props = __props;
		const ndvStore = injectNDVStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const externalHooks = useExternalHooks();
		const telemetry = useTelemetry();
		const telemetryContext = useTelemetryContext();
		const selectedJsonPath = ref(nonExistingJsonPath);
		const draggingPath = ref(null);
		const jsonDataContainer = ref(null);
		const { height } = useElementSize(jsonDataContainer);
		const jsonData = computed(() => executionDataToJson(props.inputData));
		const highlight = computed(() => ndvStore.value.highlightDraggables);
		const getShortKey = (el) => {
			if (!el) return "";
			return shorten(el.dataset.name ?? "", 16, 2);
		};
		const getJsonParameterPath = (path) => {
			const subPath = path.replace(/^(\["?\d"?])/, "");
			return getMappedExpression({
				nodeName: props.node.name,
				distanceFromActive: props.distanceFromActive,
				path: subPath,
				binaryMode: workflowDocumentStore?.value?.settings?.binaryMode
			});
		};
		const canDraggableDrop = computed(() => ndvStore.value.canDraggableDrop);
		const draggableStickyPosition = computed(() => ndvStore.value.draggableStickyPos);
		const onDragStart = (el, data) => {
			if (el?.dataset.path) draggingPath.value = el.dataset.path;
			ndvStore.value.draggableStartDragging({
				type: "mapping",
				data: data ?? "",
				dimensions: el?.getBoundingClientRect() ?? null
			});
			ndvStore.value.resetMappingTelemetry();
		};
		const onDragEnd = (el) => {
			ndvStore.value.draggableStopDragging();
			draggingPath.value = null;
			const mappingTelemetry = ndvStore.value.mappingTelemetry;
			const telemetryPayload = {
				src_node_type: props.node.type,
				src_field_name: el.dataset.name ?? "",
				src_nodes_back: props.distanceFromActive,
				src_run_index: props.runIndex,
				src_runs_total: props.totalRuns,
				src_field_nest_level: el.dataset.depth ?? 0,
				src_view: "json",
				src_element: el,
				success: false,
				view_shown: telemetryContext.view_shown,
				...mappingTelemetry
			};
			setTimeout(() => {
				externalHooks.run("runDataJson.onDragEnd", telemetryPayload);
				telemetry.track("User dragged data for mapping", telemetryPayload);
			}, 1e3);
		};
		const formatKey = (value) => {
			return isString(value) ? `"${value}"` : JSON.stringify(value);
		};
		const formatValue = (value) => {
			return JSON.stringify(value);
		};
		const getListItemName = (path) => {
			return path.replace(/^(\["?\d"?]\.?)/g, "");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "jsonDataContainer",
				ref: jsonDataContainer,
				class: normalizeClass([_ctx.$style.jsonDisplay, {
					[_ctx.$style.highlight]: highlight.value,
					[_ctx.$style.compact]: props.compact
				}])
			}, [(openBlock(), createBlock(Suspense, null, {
				default: withCtx(() => [!__props.editMode.enabled ? (openBlock(), createBlock(unref(LazyRunDataJsonActions), {
					key: 0,
					node: __props.node,
					"pane-type": __props.paneType,
					"push-ref": __props.pushRef,
					"distance-from-active": __props.distanceFromActive,
					"selected-json-path": selectedJsonPath.value,
					"json-data": jsonData.value,
					"output-index": __props.outputIndex,
					"run-index": __props.runIndex,
					execution: __props.execution
				}, null, 8, [
					"node",
					"pane-type",
					"push-ref",
					"distance-from-active",
					"selected-json-path",
					"json-data",
					"output-index",
					"run-index",
					"execution"
				])) : createCommentVNode("", true)]),
				_: 1
			})), createVNode(Draggable_default, {
				type: "mapping",
				"target-data-key": "mappable",
				disabled: !__props.mappingEnabled,
				"can-drop": canDraggableDrop.value,
				"sticky-position": draggableStickyPosition.value,
				onDragstart: onDragStart,
				onDragend: onDragEnd
			}, {
				preview: withCtx(({ canDrop, el }) => [el ? (openBlock(), createBlock(MappingPill_default, {
					key: 0,
					html: getShortKey(el),
					"can-drop": canDrop
				}, null, 8, ["html", "can-drop"])) : createCommentVNode("", true)]),
				default: withCtx(() => [createVNode(unref(P), {
					data: jsonData.value,
					deep: 10,
					"show-length": true,
					"selected-value": selectedJsonPath.value,
					"root-path": "",
					"selectable-type": "single",
					class: "json-data",
					virtual: true,
					height: unref(height),
					"onUpdate:selectedValue": _cache[0] || (_cache[0] = ($event) => selectedJsonPath.value = $event)
				}, {
					renderNodeKey: withCtx(({ node }) => [createVNode(TextWithHighlights_default, {
						content: formatKey(node.key),
						search: __props.search,
						"data-target": "mappable",
						"data-value": getJsonParameterPath(node.path),
						"data-name": node.key,
						"data-path": node.path,
						"data-depth": node.level,
						class: normalizeClass({
							[_ctx.$style.mappable]: __props.mappingEnabled,
							[_ctx.$style.dragged]: draggingPath.value === node.path
						})
					}, null, 8, [
						"content",
						"search",
						"data-value",
						"data-name",
						"data-path",
						"data-depth",
						"class"
					])]),
					renderNodeValue: withCtx(({ node }) => [createVNode(TextWithHighlights_default, {
						content: formatValue(node.content),
						search: __props.search,
						"data-target": "mappable",
						"data-value": getJsonParameterPath(node.path),
						"data-name": getListItemName(node.path),
						"data-path": node.path,
						"data-depth": node.level,
						class: normalizeClass([{
							[_ctx.$style.mappable]: __props.mappingEnabled,
							[_ctx.$style.dragged]: draggingPath.value === node.path
						}, "ph-no-capture"])
					}, null, 8, [
						"content",
						"search",
						"data-value",
						"data-name",
						"data-path",
						"data-depth",
						"class"
					])]),
					_: 1
				}, 8, [
					"data",
					"selected-value",
					"height"
				])]),
				_: 1
			}, 8, [
				"disabled",
				"can-drop",
				"sticky-position"
			])], 2);
		};
	}
});
var RunDataJson_vue_vue_type_style_index_0_lang_module_default = {
	jsonDisplay: "_jsonDisplay_twg9l_125",
	mappable: "_mappable_twg9l_142",
	highlight: "_highlight_twg9l_148",
	dragged: "_dragged_twg9l_149",
	compact: "_compact_twg9l_154"
};
var RunDataJson_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunDataJson_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataJson_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RunDataJson_default as default };
