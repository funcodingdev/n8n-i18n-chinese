const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RunDataJsonActions-CuQcqkAk.js","assets/_plugin-vue_export-helper-D-F0WtqU.js","assets/chunk-CC9Q-vWm.js","assets/src-B2jBAc9z.js","assets/preload-helper-CMc80dNB.js","assets/lib-vJcwukKE.js","assets/merge-DTabss4r.js","assets/isObject-CrVycH1n.js","assets/isSymbol-CYg_e8X3.js","assets/expression-runtime-stub-Bdm2Sgds.js","assets/__vite-browser-external-CTj19RIp.js","assets/src-BjbSP7dI.js","assets/vue.runtime.esm-bundler-DYHsQBZB.js","assets/workflows.store-BO9owX3m.js","assets/dist-CYNfKCbA.js","assets/useRootStore-B4L7-X8D.js","assets/lib-CcMDH-kD.js","assets/assert-BgZvUjbv.js","assets/settings.store-CT5GOXKB.js","assets/dist-dUcNVZjh.js","assets/evaluation.store-CDDLv7e9.js","assets/useDebounce-C8k0g3s4.js","assets/sortBy-DipEZO3r.js","assets/_baseOrderBy-BwGdV6g3.js","assets/vue-router-CMlLwP0b.js","assets/truncate-B0m9bkui.js","assets/posthog.store-DzZE_FmJ.js","assets/src-BfDzHX9f.js","assets/useTelemetry-2P8aHE7m.js","assets/constants-DOw6b_w2.js","assets/views-Bvvv9vv2.js","assets/durations-xVQWCRRO.js","assets/users.store-bpdqayvC.js","assets/users-CZp_IfxF.js","assets/ui.store-DmJK9WGf.js","assets/htmlUtils-B4dfkzSm.js","assets/workflowsList.store-5H3D_H0z.js","assets/typesUtils-erN5xbTj.js","assets/dateformat-DxkxG_VE.js","assets/useDocumentTitle-zNE0FpVb.js","assets/useDocumentTitle-j8cYdDIp.js","assets/permissions-C3S7Ad5M.js","assets/rbac.store-BtX6lf2A.js","assets/dropdown-D0HKKN-a.js","assets/button-CsoT5HJl.js","assets/plugin-vue_export-helper-AbXb0iQc.js","assets/use-global-config-C4SRRir5.js","assets/style-aw1HwLDr.js","assets/use-namespace-xWWi2xIE.js","assets/use-size-8oGTaPnQ.js","assets/use-z-index-DYH4GP29.js","assets/use-form-item-CV4_f5CE.js","assets/icon-DEwwsnFu.js","assets/tooltip-oYsvce70.js","assets/focus-trap-CIpXr-Z6.js","assets/isUndefined-CTsagQCT.js","assets/scrollbar-XVVlQ2p1.js","assets/refs-k1RcPJAc.js","assets/injectionKeys-BTHCZPPc.js","assets/useClipboard-Bsxouor_.js","assets/useToast-DD-gkdwx.js","assets/useExternalHooks-ItRXpQL3.js","assets/z-indexes-6L1EZzrF.js","assets/N8nIconButton-WmwX0N4c.js","assets/N8nButton-CK49ozr4.js","assets/N8nIcon-Cb6ivP-y.js","assets/Icon-820OBjWt.js","assets/Icon-BEE-aWKa.css","assets/N8nButton-eAEmv00f.css","assets/useInjectWorkflowId-BV8XtIYV.js","assets/useNodeHelpers-D0-kkWqG.js","assets/useLoadingService-tB2SpWoS.js","assets/event-bus-CWhIcyjm.js","assets/usePrivateCredentials-DidP1Qot.js","assets/usePinnedData-BZJQWXey.js","assets/useExternalHooks-Bqgi4PzB.js","assets/RunDataJsonActions-CBGHqJ85.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, E as createElementBlock, Gt as unref, It as ref, M as defineAsyncComponent, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, v as Suspense, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as __vitePreload } from "./preload-helper-CMc80dNB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { h as useElementSize } from "./dist-CYNfKCbA.js";
import { Bi as isString, O as injectWorkflowDocumentStore, Vn as executionDataToJson, un as injectNDVStore, zt as getMappedExpression } from "./workflows.store-BO9owX3m.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { z as nonExistingJsonPath } from "./constants-DOw6b_w2.js";
import { m as shorten } from "./typesUtils-erN5xbTj.js";
import { t as useExternalHooks } from "./useExternalHooks-Bqgi4PzB.js";
import { t as Draggable_default } from "./Draggable-3pjJMekr.js";
import { t as TextWithHighlights_default } from "./TextWithHighlights-CMbOwplg.js";
import { n as MappingPill_default, t as useTelemetryContext } from "./useTelemetryContext-BXQFV3oj.js";
import { t as P } from "./vue-json-pretty-kmt5dvYg.js";
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
		const LazyRunDataJsonActions = defineAsyncComponent(async () => await __vitePreload(() => import("./RunDataJsonActions-CuQcqkAk.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76])));
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
