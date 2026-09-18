const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RunDataJsonActions-D4XFS9Ht.js","assets/_plugin-vue_export-helper-D-F0WtqU.js","assets/chunk-CC9Q-vWm.js","assets/src-CqXhVy6k.js","assets/preload-helper-CMc80dNB.js","assets/lib-DWs31ikH.js","assets/merge-I1kuvuLK.js","assets/isObject-CUkREaNL.js","assets/isSymbol-DAI9oII0.js","assets/expression-runtime-stub-B8fKlhyS.js","assets/__vite-browser-external-CTj19RIp.js","assets/src-BSOIQONc.js","assets/vue.runtime.esm-bundler-DYHsQBZB.js","assets/workflows.store-DqeAPDIr.js","assets/dist-CYNfKCbA.js","assets/useRootStore-ihWy5bPy.js","assets/lib-CcMDH-kD.js","assets/assert-DvRJqrbC.js","assets/settings.store-Ds4oveT4.js","assets/dist--LvkdHNZ.js","assets/evaluation.store-B4MsITv-.js","assets/useDebounce-BRzd7gd1.js","assets/sortBy-CdFiyONg.js","assets/_baseOrderBy-BbLvNaXj.js","assets/vue-router-D2dKRIiV.js","assets/truncate-B0m9bkui.js","assets/posthog.store-CqxSAr1G.js","assets/src-CIGnD49r.js","assets/useTelemetry-CgKpOMtU.js","assets/constants-fjCaLPtD.js","assets/views-BVx7SJLW.js","assets/durations-D9OTn4t5.js","assets/users.store-Dg4HfgY2.js","assets/users-utZBYbh9.js","assets/ui.store-Bnmdd9D-.js","assets/htmlUtils-BGBfSAfh.js","assets/workflowsList.store-BnjzjfM4.js","assets/typesUtils-BIeV3hiZ.js","assets/dateformat-Di6G733k.js","assets/useDocumentTitle-3b5wPWpR.js","assets/useDocumentTitle-JfR80C3Y.js","assets/permissions-BYaDhPLM.js","assets/rbac.store-BMmzDYLo.js","assets/dropdown-CuDjLXLw.js","assets/button-DA012DVl.js","assets/plugin-vue_export-helper-AbXb0iQc.js","assets/use-global-config-COlgh4Bl.js","assets/style-DPKc01iw.js","assets/use-namespace-xWWi2xIE.js","assets/use-size-8oGTaPnQ.js","assets/use-z-index-DYH4GP29.js","assets/use-form-item-BfAQgNNk.js","assets/icon-nxrhBTbT.js","assets/tooltip-BqeSI6xn.js","assets/focus-trap-C4pcSyNO.js","assets/isUndefined-CTsagQCT.js","assets/scrollbar-ddZR8nXY.js","assets/refs-k1RcPJAc.js","assets/injectionKeys-CTlTiOot.js","assets/useClipboard-DwVAOfeD.js","assets/useToast-UkKTWN-J.js","assets/useExternalHooks-B0jxM-DN.js","assets/z-indexes-BH8tWiBt.js","assets/N8nIconButton-BE5Ejgfh.js","assets/N8nButton-DG2qVkaw.js","assets/N8nIcon-6YtyWN3Q.js","assets/Icon-CHBcnsfW.js","assets/Icon-BEE-aWKa.css","assets/N8nButton-eAEmv00f.css","assets/useInjectWorkflowId-CYI56GTr.js","assets/useNodeHelpers-B2C2l-Xw.js","assets/useLoadingService-fD3-myok.js","assets/event-bus-RxIHoNRV.js","assets/usePrivateCredentials-Bxs2oAlV.js","assets/usePinnedData-CZRwRzGF.js","assets/useExternalHooks-BuijCj3z.js","assets/RunDataJsonActions-CBGHqJ85.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, E as createElementBlock, Gt as unref, It as ref, M as defineAsyncComponent, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, v as Suspense, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as __vitePreload } from "./preload-helper-CMc80dNB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { h as useElementSize } from "./dist-CYNfKCbA.js";
import { Bi as isString, O as injectWorkflowDocumentStore, Vn as executionDataToJson, un as injectNDVStore, zt as getMappedExpression } from "./workflows.store-DqeAPDIr.js";
import { t as useTelemetry } from "./useTelemetry-CgKpOMtU.js";
import { z as nonExistingJsonPath } from "./constants-fjCaLPtD.js";
import { m as shorten } from "./typesUtils-BIeV3hiZ.js";
import { t as useExternalHooks } from "./useExternalHooks-BuijCj3z.js";
import { t as Draggable_default } from "./Draggable-YVvG1pBi.js";
import { t as TextWithHighlights_default } from "./TextWithHighlights-CtXxpGZI.js";
import { n as MappingPill_default, t as useTelemetryContext } from "./useTelemetryContext-CIJrmPXy.js";
import { t as P } from "./vue-json-pretty-CzGGaxWm.js";
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
		const LazyRunDataJsonActions = defineAsyncComponent(async () => await __vitePreload(() => import("./RunDataJsonActions-D4XFS9Ht.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76])));
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
//#endregion
//#region src/features/ndv/runData/components/RunDataJson.vue?vue&type=style&index=0&lang.module.scss
var jsonDisplay = "_jsonDisplay_1e6uu_388";
var mappable = "_mappable_1e6uu_405";
var highlight = "_highlight_1e6uu_411";
var dragged = "_dragged_1e6uu_412";
var compact = "_compact_1e6uu_417";
var shimmer = "_shimmer_1e6uu_1";
var spin = "_spin_1e6uu_1";
var opacityPulse = "_opacityPulse_1e6uu_1";
var popoverIn = "_popoverIn_1e6uu_1";
var fadeIn = "_fadeIn_1e6uu_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1e6uu_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1e6uu_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1e6uu_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1e6uu_1";
var blurSwapIn = "_blurSwapIn_1e6uu_1";
var blurSwapOut = "_blurSwapOut_1e6uu_1";
var pulseGlow = "_pulseGlow_1e6uu_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1e6uu_1";
var fade = "_fade_1e6uu_1";
var fadeInUp = "_fadeInUp_1e6uu_1";
var fadeInDown = "_fadeInDown_1e6uu_1";
var fadeInLeft = "_fadeInLeft_1e6uu_1";
var fadeInRight = "_fadeInRight_1e6uu_1";
var fadeOut = "_fadeOut_1e6uu_1";
var fadeOutDown = "_fadeOutDown_1e6uu_1";
var fadeOutUp = "_fadeOutUp_1e6uu_1";
var fadeOutLeft = "_fadeOutLeft_1e6uu_1";
var fadeOutRight = "_fadeOutRight_1e6uu_1";
var ping = "_ping_1e6uu_1";
var blinkBackground = "_blinkBackground_1e6uu_1";
var typingBlink = "_typingBlink_1e6uu_1";
var RunDataJson_vue_vue_type_style_index_0_lang_module_default = {
	jsonDisplay,
	mappable,
	highlight,
	dragged,
	compact,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1e6uu_1",
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
var RunDataJson_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunDataJson_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataJson_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RunDataJson_default as default };
