import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nSpinner_default } from "./N8nSpinner-Bv5yOPi4.js";
import { t as useRootStore } from "./useRootStore-CLEJA2KF.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjOArG71.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { n as useDocumentTitle } from "./useDocumentTitle-C48umTvY.js";
import { t as useClipboard } from "./useClipboard-FfSvbxpY.js";
import { t as usePushConnectionStore } from "./pushConnection.store-C5GWoa5X.js";
import { t as sortByProperty } from "./sort-by-property-3fE3q7OE.js";
import { n as useOrchestrationStore, t as usePushConnection } from "./usePushConnection-BgUtiE3d.js";
import { t as ConnectionTracker_default } from "./ConnectionTracker-Ay2_ocst.js";
import "./usePushConnection-hH160YLT.js";
import { n as Chart } from "./dist-DwqNjCZ-.js";
//#region src/features/settings/orchestration.ee/orchestration.utils.ts
function averageWorkerLoadFromLoads(loads) {
	return loads.reduce((prev, curr) => prev + curr, 0) / loads.length;
}
function averageWorkerLoadFromLoadsAsString(loads) {
	return averageWorkerLoadFromLoads(loads).toFixed(2);
}
function memAsGb(mem, decimalPlaces = 2) {
	return Number((mem / 1024 / 1024 / 1024).toFixed(decimalPlaces));
}
function memAsMb(mem, decimalPlaces = 2) {
	return Number((mem / 1024 / 1024).toFixed(decimalPlaces));
}
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerAccordion.vue?vue&type=script&setup=true&lang.ts
var WorkerAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerAccordion",
	props: {
		icon: { default: "list-checks" },
		iconColor: { default: "text-dark" },
		initialExpanded: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const expanded = ref(__props.initialExpanded);
		function toggle() {
			expanded.value = !expanded.value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["accordion", _ctx.$style.container]) }, [createBaseVNode("div", {
				class: normalizeClass({
					[_ctx.$style.header]: true,
					[_ctx.$style.expanded]: expanded.value
				}),
				onClick: toggle
			}, [
				createVNode(unref(N8nIcon_default), {
					icon: __props.icon,
					color: __props.iconColor,
					size: "small",
					class: "mr-2xs"
				}, null, 8, ["icon", "color"]),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.headerText),
					color: "text-base",
					size: "small",
					align: "left",
					bold: ""
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "title")]),
					_: 3
				}, 8, ["class"]),
				createVNode(unref(N8nIcon_default), {
					icon: expanded.value ? "chevron-up" : "chevron-down",
					bold: ""
				}, null, 8, ["icon"])
			], 2), expanded.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass({
					[_ctx.$style.description]: true,
					[_ctx.$style.collapsed]: !expanded.value
				})
			}, [renderSlot(_ctx.$slots, "content")], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerAccordion.vue?vue&type=style&index=0&lang.module.scss
var container$1 = "_container_zffip_388";
var header = "_header_zffip_392";
var headerText = "_headerText_zffip_398";
var expanded = "_expanded_zffip_402";
var description = "_description_zffip_406";
var shimmer$7 = "_shimmer_zffip_1";
var spin$7 = "_spin_zffip_1";
var opacityPulse$7 = "_opacityPulse_zffip_1";
var popoverIn$7 = "_popoverIn_zffip_1";
var fadeIn$7 = "_fadeIn_zffip_1";
var collapsibleSlideDown$7 = "_collapsibleSlideDown_zffip_1";
var collapsibleSlideUp$7 = "_collapsibleSlideUp_zffip_1";
var collapsibleSlideDownBlurred$7 = "_collapsibleSlideDownBlurred_zffip_1";
var collapsibleSlideUpBlurred$7 = "_collapsibleSlideUpBlurred_zffip_1";
var blurSwapIn$7 = "_blurSwapIn_zffip_1";
var blurSwapOut$7 = "_blurSwapOut_zffip_1";
var pulseGlow$7 = "_pulseGlow_zffip_1";
var pulseGlowDelayed$7 = "_pulseGlowDelayed_zffip_1";
var fade$7 = "_fade_zffip_1";
var fadeInUp$7 = "_fadeInUp_zffip_1";
var fadeInDown$7 = "_fadeInDown_zffip_1";
var fadeInLeft$7 = "_fadeInLeft_zffip_1";
var fadeInRight$7 = "_fadeInRight_zffip_1";
var fadeOut$7 = "_fadeOut_zffip_1";
var fadeOutDown$7 = "_fadeOutDown_zffip_1";
var fadeOutUp$7 = "_fadeOutUp_zffip_1";
var fadeOutLeft$7 = "_fadeOutLeft_zffip_1";
var fadeOutRight$7 = "_fadeOutRight_zffip_1";
var ping$7 = "_ping_zffip_1";
var blinkBackground$7 = "_blinkBackground_zffip_1";
var typingBlink$7 = "_typingBlink_zffip_1";
var WorkerAccordion_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	header,
	headerText,
	expanded,
	description,
	shimmer: shimmer$7,
	spin: spin$7,
	"skeleton-pulse": "_skeleton-pulse_zffip_1",
	opacityPulse: opacityPulse$7,
	popoverIn: popoverIn$7,
	fadeIn: fadeIn$7,
	collapsibleSlideDown: collapsibleSlideDown$7,
	collapsibleSlideUp: collapsibleSlideUp$7,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$7,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$7,
	blurSwapIn: blurSwapIn$7,
	blurSwapOut: blurSwapOut$7,
	pulseGlow: pulseGlow$7,
	pulseGlowDelayed: pulseGlowDelayed$7,
	fade: fade$7,
	fadeInUp: fadeInUp$7,
	fadeInDown: fadeInDown$7,
	fadeInLeft: fadeInLeft$7,
	fadeInRight: fadeInRight$7,
	fadeOut: fadeOut$7,
	fadeOutDown: fadeOutDown$7,
	fadeOutUp: fadeOutUp$7,
	fadeOutLeft: fadeOutLeft$7,
	fadeOutRight: fadeOutRight$7,
	ping: ping$7,
	blinkBackground: blinkBackground$7,
	typingBlink: typingBlink$7
};
var WorkerAccordion_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkerAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerJobAccordion.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["href"];
var _hoisted_2$1 = ["href"];
var WorkerJobAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerJobAccordion",
	props: { items: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		function runningSince(started) {
			let seconds = Math.floor(((/* @__PURE__ */ new Date()).getTime() - started.getTime()) / 1e3);
			const hrs = Math.floor(seconds / 3600);
			seconds -= hrs * 3600;
			const mnts = Math.floor(seconds / 60);
			seconds -= mnts * 60;
			return `${hrs}h ${mnts}m ${Math.floor(seconds)}s`;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkerAccordion_default, {
				icon: "list-checks",
				"icon-color": "text-dark",
				"initial-expanded": true
			}, {
				title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.jobListTitle")) + " (" + toDisplayString(__props.items.length) + ") ", 1)]),
				content: withCtx(() => [props.items.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.accordionItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item) => {
					return openBlock(), createElementBlock("div", {
						key: item.executionId,
						class: normalizeClass(_ctx.$style.accordionItem)
					}, [
						createBaseVNode("a", { href: "/workflow/" + item.workflowId + "/executions/" + item.executionId }, " Execution " + toDisplayString(item.executionId) + " - " + toDisplayString(item.workflowName), 9, _hoisted_1$4),
						createVNode(unref(N8nText_default), {
							color: "text-base",
							size: "small",
							align: "left"
						}, {
							default: withCtx(() => [createTextVNode(" | Started at: " + toDisplayString(new Date(item.startedAt)?.toLocaleTimeString()) + " | Running for " + toDisplayString(runningSince(new Date(item.startedAt))) + " " + toDisplayString(item.retryOf ? `| Retry of: ${item.retryOf}` : "") + " | ", 1)]),
							_: 2
						}, 1024),
						createBaseVNode("a", {
							target: "_blank",
							href: "/workflow/" + item.workflowId
						}, " (Open workflow)", 8, _hoisted_2$1)
					], 2);
				}), 128))], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.accordionItems)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.empty) }, toDisplayString(unref(i18n).baseText("workerList.item.jobList.empty")), 3)], 2))]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerJobAccordion.vue?vue&type=style&index=0&lang.module.scss
var accordionItems$2 = "_accordionItems_1lfy4_388";
var accordionItem$2 = "_accordionItem_1lfy4_388";
var empty = "_empty_1lfy4_401";
var shimmer$6 = "_shimmer_1lfy4_1";
var spin$6 = "_spin_1lfy4_1";
var opacityPulse$6 = "_opacityPulse_1lfy4_1";
var popoverIn$6 = "_popoverIn_1lfy4_1";
var fadeIn$6 = "_fadeIn_1lfy4_1";
var collapsibleSlideDown$6 = "_collapsibleSlideDown_1lfy4_1";
var collapsibleSlideUp$6 = "_collapsibleSlideUp_1lfy4_1";
var collapsibleSlideDownBlurred$6 = "_collapsibleSlideDownBlurred_1lfy4_1";
var collapsibleSlideUpBlurred$6 = "_collapsibleSlideUpBlurred_1lfy4_1";
var blurSwapIn$6 = "_blurSwapIn_1lfy4_1";
var blurSwapOut$6 = "_blurSwapOut_1lfy4_1";
var pulseGlow$6 = "_pulseGlow_1lfy4_1";
var pulseGlowDelayed$6 = "_pulseGlowDelayed_1lfy4_1";
var fade$6 = "_fade_1lfy4_1";
var fadeInUp$6 = "_fadeInUp_1lfy4_1";
var fadeInDown$6 = "_fadeInDown_1lfy4_1";
var fadeInLeft$6 = "_fadeInLeft_1lfy4_1";
var fadeInRight$6 = "_fadeInRight_1lfy4_1";
var fadeOut$6 = "_fadeOut_1lfy4_1";
var fadeOutDown$6 = "_fadeOutDown_1lfy4_1";
var fadeOutUp$6 = "_fadeOutUp_1lfy4_1";
var fadeOutLeft$6 = "_fadeOutLeft_1lfy4_1";
var fadeOutRight$6 = "_fadeOutRight_1lfy4_1";
var ping$6 = "_ping_1lfy4_1";
var blinkBackground$6 = "_blinkBackground_1lfy4_1";
var typingBlink$6 = "_typingBlink_1lfy4_1";
var WorkerJobAccordion_vue_vue_type_style_index_0_lang_module_default = {
	accordionItems: accordionItems$2,
	accordionItem: accordionItem$2,
	empty,
	shimmer: shimmer$6,
	spin: spin$6,
	"skeleton-pulse": "_skeleton-pulse_1lfy4_1",
	opacityPulse: opacityPulse$6,
	popoverIn: popoverIn$6,
	fadeIn: fadeIn$6,
	collapsibleSlideDown: collapsibleSlideDown$6,
	collapsibleSlideUp: collapsibleSlideUp$6,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$6,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$6,
	blurSwapIn: blurSwapIn$6,
	blurSwapOut: blurSwapOut$6,
	pulseGlow: pulseGlow$6,
	pulseGlowDelayed: pulseGlowDelayed$6,
	fade: fade$6,
	fadeInUp: fadeInUp$6,
	fadeInDown: fadeInDown$6,
	fadeInLeft: fadeInLeft$6,
	fadeInRight: fadeInRight$6,
	fadeOut: fadeOut$6,
	fadeOutDown: fadeOutDown$6,
	fadeOutUp: fadeOutUp$6,
	fadeOutLeft: fadeOutLeft$6,
	fadeOutRight: fadeOutRight$6,
	ping: ping$6,
	blinkBackground: blinkBackground$6,
	typingBlink: typingBlink$6
};
var WorkerJobAccordion_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkerJobAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerJobAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerNetAccordion.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["onClick"];
var WorkerNetAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerNetAccordion",
	props: { items: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const clipboard = useClipboard();
		const { showMessage } = useToast();
		function onCopyToClipboard(content) {
			try {
				clipboard.copy(content);
				showMessage({
					title: i18n.baseText("workerList.item.copyAddressToClipboard"),
					type: "success"
				});
			} catch {}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkerAccordion_default, {
				icon: "list-checks",
				"icon-color": "text-dark",
				"initial-expanded": false
			}, {
				title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.netListTitle")) + " (" + toDisplayString(__props.items.length) + ") ", 1)]),
				content: withCtx(() => [props.items.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.accordionItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item) => {
					return openBlock(), createElementBlock("div", {
						key: item.address,
						class: normalizeClass(_ctx.$style.accordionItem),
						onClick: ($event) => onCopyToClipboard(item.address)
					}, [
						createTextVNode(toDisplayString(item.family) + ": ", 1),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.clickable) }, toDisplayString(item.address), 3),
						createTextVNode(" " + toDisplayString(item.internal ? "(internal)" : ""), 1)
					], 10, _hoisted_1$3);
				}), 128))], 2)) : createCommentVNode("", true)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerNetAccordion.vue?vue&type=style&index=0&lang.module.scss
var accordionItems$1 = "_accordionItems_117bv_388";
var accordionItem$1 = "_accordionItem_117bv_388";
var clickable = "_clickable_117bv_402";
var shimmer$5 = "_shimmer_117bv_1";
var spin$5 = "_spin_117bv_1";
var opacityPulse$5 = "_opacityPulse_117bv_1";
var popoverIn$5 = "_popoverIn_117bv_1";
var fadeIn$5 = "_fadeIn_117bv_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_117bv_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_117bv_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_117bv_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_117bv_1";
var blurSwapIn$5 = "_blurSwapIn_117bv_1";
var blurSwapOut$5 = "_blurSwapOut_117bv_1";
var pulseGlow$5 = "_pulseGlow_117bv_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_117bv_1";
var fade$5 = "_fade_117bv_1";
var fadeInUp$5 = "_fadeInUp_117bv_1";
var fadeInDown$5 = "_fadeInDown_117bv_1";
var fadeInLeft$5 = "_fadeInLeft_117bv_1";
var fadeInRight$5 = "_fadeInRight_117bv_1";
var fadeOut$5 = "_fadeOut_117bv_1";
var fadeOutDown$5 = "_fadeOutDown_117bv_1";
var fadeOutUp$5 = "_fadeOutUp_117bv_1";
var fadeOutLeft$5 = "_fadeOutLeft_117bv_1";
var fadeOutRight$5 = "_fadeOutRight_117bv_1";
var ping$5 = "_ping_117bv_1";
var blinkBackground$5 = "_blinkBackground_117bv_1";
var typingBlink$5 = "_typingBlink_117bv_1";
var WorkerNetAccordion_vue_vue_type_style_index_0_lang_module_default = {
	accordionItems: accordionItems$1,
	accordionItem: accordionItem$1,
	clickable,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_117bv_1",
	opacityPulse: opacityPulse$5,
	popoverIn: popoverIn$5,
	fadeIn: fadeIn$5,
	collapsibleSlideDown: collapsibleSlideDown$5,
	collapsibleSlideUp: collapsibleSlideUp$5,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$5,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$5,
	blurSwapIn: blurSwapIn$5,
	blurSwapOut: blurSwapOut$5,
	pulseGlow: pulseGlow$5,
	pulseGlowDelayed: pulseGlowDelayed$5,
	fade: fade$5,
	fadeInUp: fadeInUp$5,
	fadeInDown: fadeInDown$5,
	fadeInLeft: fadeInLeft$5,
	fadeInRight: fadeInRight$5,
	fadeOut: fadeOut$5,
	fadeOutDown: fadeOutDown$5,
	fadeOutUp: fadeOutUp$5,
	fadeOutLeft: fadeOutLeft$5,
	fadeOutRight: fadeOutRight$5,
	ping: ping$5,
	blinkBackground: blinkBackground$5,
	typingBlink: typingBlink$5
};
var WorkerNetAccordion_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkerNetAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerNetAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerChartsAccordion.vue?vue&type=script&setup=true&lang.ts
var WorkerChartsAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerChartsAccordion",
	props: { workerId: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const blankDataSet = (label, color, prefill = 0) => ({
			datasets: [{
				label,
				backgroundColor: color,
				data: prefill ? Array(Math.min(100, prefill)).fill(0) : []
			}],
			labels: Array(Math.min(100, prefill)).fill("")
		});
		const orchestrationStore = useOrchestrationStore();
		const chartRefJobs = ref(void 0);
		const chartRefCPU = ref(void 0);
		const chartRefMemoryUsage = ref(void 0);
		const optionsBase = () => ({
			responsive: true,
			maintainAspectRatio: true,
			scales: { y: {
				type: "linear",
				display: true,
				position: "left",
				min: 0,
				suggestedMax: 5
			} }
		});
		const optionsJobs = optionsBase();
		const optionsCPU = optionsBase();
		if (optionsCPU.scales?.y) optionsCPU.scales.y.suggestedMax = 100;
		const optionsMemory = optionsBase();
		if (optionsMemory.scales?.y) optionsMemory.scales.y.suggestedMax = 100;
		const dataJobs = ref(blankDataSet("Job Count", "rgb(255, 111, 92)", 100));
		const dataCPU = ref(blankDataSet("Processor Usage", "rgb(19, 205, 103)", 100));
		const dataMemoryUsage = ref(blankDataSet("Memory Usage (%)", "rgb(244, 216, 174)", 100));
		orchestrationStore.$onAction(({ name, store }) => {
			if (name === "updateWorkerStatus") {
				const prefillCount = 100 - (store.workersHistory[props.workerId]?.length ?? 0);
				const newDataJobs = blankDataSet("Job Count", "rgb(255, 111, 92)", prefillCount);
				const newDataCPU = blankDataSet("Processor Usage", "rgb(19, 205, 103)", prefillCount);
				const newDataMemoryUsage = blankDataSet("Memory Usage (%)", "rgb(244, 216, 174)", prefillCount);
				store.workersHistory[props.workerId]?.forEach((item) => {
					newDataJobs.datasets[0].data.push(item.data.runningJobsSummary.length);
					newDataJobs.labels?.push(new Date(item.timestamp).toLocaleTimeString());
					newDataCPU.datasets[0].data.push(averageWorkerLoadFromLoads(item.data.loadAvg));
					newDataCPU.labels = newDataJobs.labels;
					newDataMemoryUsage.labels = newDataJobs.labels;
					const totalMem = item.data.isInContainer ? item.data.process.memory.constraint : item.data.host.memory.total;
					const usage = (totalMem - item.data.process.memory.available) / totalMem * 100;
					newDataMemoryUsage.datasets[0].data.push(usage);
				});
				dataJobs.value = newDataJobs;
				dataCPU.value = newDataCPU;
				dataMemoryUsage.value = newDataMemoryUsage;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkerAccordion_default, {
				icon: "list-checks",
				"icon-color": "text-dark",
				"initial-expanded": false
			}, {
				title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.chartsTitle")), 1)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.charts) }, [
					createVNode(unref(Chart), {
						ref_key: "chartRefJobs",
						ref: chartRefJobs,
						type: "line",
						data: dataJobs.value,
						options: unref(optionsJobs),
						class: normalizeClass(_ctx.$style.chart)
					}, null, 8, [
						"data",
						"options",
						"class"
					]),
					createVNode(unref(Chart), {
						ref_key: "chartRefCPU",
						ref: chartRefCPU,
						type: "line",
						data: dataCPU.value,
						options: unref(optionsCPU),
						class: normalizeClass(_ctx.$style.chart)
					}, null, 8, [
						"data",
						"options",
						"class"
					]),
					createVNode(unref(Chart), {
						ref_key: "chartRefMemoryUsage",
						ref: chartRefMemoryUsage,
						type: "line",
						data: dataMemoryUsage.value,
						options: unref(optionsMemory),
						class: normalizeClass(_ctx.$style.chart)
					}, null, 8, [
						"data",
						"options",
						"class"
					])
				], 2)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerChartsAccordion.vue?vue&type=style&index=0&lang.module.scss
var accordionItems = "_accordionItems_1y8q7_388";
var accordionItem = "_accordionItem_1y8q7_388";
var charts = "_charts_1y8q7_401";
var chart = "_chart_1y8q7_401";
var shimmer$4 = "_shimmer_1y8q7_1";
var spin$4 = "_spin_1y8q7_1";
var opacityPulse$4 = "_opacityPulse_1y8q7_1";
var popoverIn$4 = "_popoverIn_1y8q7_1";
var fadeIn$4 = "_fadeIn_1y8q7_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_1y8q7_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_1y8q7_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_1y8q7_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_1y8q7_1";
var blurSwapIn$4 = "_blurSwapIn_1y8q7_1";
var blurSwapOut$4 = "_blurSwapOut_1y8q7_1";
var pulseGlow$4 = "_pulseGlow_1y8q7_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_1y8q7_1";
var fade$4 = "_fade_1y8q7_1";
var fadeInUp$4 = "_fadeInUp_1y8q7_1";
var fadeInDown$4 = "_fadeInDown_1y8q7_1";
var fadeInLeft$4 = "_fadeInLeft_1y8q7_1";
var fadeInRight$4 = "_fadeInRight_1y8q7_1";
var fadeOut$4 = "_fadeOut_1y8q7_1";
var fadeOutDown$4 = "_fadeOutDown_1y8q7_1";
var fadeOutUp$4 = "_fadeOutUp_1y8q7_1";
var fadeOutLeft$4 = "_fadeOutLeft_1y8q7_1";
var fadeOutRight$4 = "_fadeOutRight_1y8q7_1";
var ping$4 = "_ping_1y8q7_1";
var blinkBackground$4 = "_blinkBackground_1y8q7_1";
var typingBlink$4 = "_typingBlink_1y8q7_1";
var WorkerChartsAccordion_vue_vue_type_style_index_0_lang_module_default = {
	accordionItems,
	accordionItem,
	charts,
	chart,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_1y8q7_1",
	opacityPulse: opacityPulse$4,
	popoverIn: popoverIn$4,
	fadeIn: fadeIn$4,
	collapsibleSlideDown: collapsibleSlideDown$4,
	collapsibleSlideUp: collapsibleSlideUp$4,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$4,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$4,
	blurSwapIn: blurSwapIn$4,
	blurSwapOut: blurSwapOut$4,
	pulseGlow: pulseGlow$4,
	pulseGlowDelayed: pulseGlowDelayed$4,
	fade: fade$4,
	fadeInUp: fadeInUp$4,
	fadeInDown: fadeInDown$4,
	fadeInLeft: fadeInLeft$4,
	fadeInRight: fadeInRight$4,
	fadeOut: fadeOut$4,
	fadeOutDown: fadeOutDown$4,
	fadeOutUp: fadeOutUp$4,
	fadeOutLeft: fadeOutLeft$4,
	fadeOutRight: fadeOutRight$4,
	ping: ping$4,
	blinkBackground: blinkBackground$4,
	typingBlink: typingBlink$4
};
var WorkerChartsAccordion_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkerChartsAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerChartsAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerMemoryMonitorAccordion.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { key: 0 };
var WorkerMemoryMonitorAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerMemoryMonitorAccordion",
	props: { worker: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkerAccordion_default, {
				icon: "list-checks",
				"icon-color": "text-dark",
				"initial-expanded": false
			}, {
				title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.memoryMonitorTitle")), 1)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["accordion-content"]) }, [
					_cache[7] || (_cache[7] = createBaseVNode("strong", null, "Host/OS Memory:", -1)),
					createBaseVNode("table", null, [createBaseVNode("tbody", null, [createBaseVNode("tr", null, [_cache[0] || (_cache[0] = createBaseVNode("th", null, "Total (os.totalmem)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsGb)(props.worker.host.memory.total)) + "GB", 1)]), createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("th", null, "Free (os.freemem)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsGb)(props.worker.host.memory.free)) + "GB", 1)])])]),
					_cache[8] || (_cache[8] = createBaseVNode("br", null, null, -1)),
					_cache[9] || (_cache[9] = createBaseVNode("strong", null, "Process Memory:", -1)),
					_cache[10] || (_cache[10] = createBaseVNode("br", null, null, -1)),
					createBaseVNode("table", null, [createBaseVNode("tbody", null, [
						__props.worker.isInContainer ? (openBlock(), createElementBlock("tr", _hoisted_1$2, [_cache[2] || (_cache[2] = createBaseVNode("th", null, "Constraint: (process.constrainedMemory)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsMb)(props.worker.process.memory.constraint)) + "MB", 1)])) : createCommentVNode("", true),
						createBaseVNode("tr", null, [_cache[3] || (_cache[3] = createBaseVNode("th", null, "Available: (process.availableMemory)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsMb)(props.worker.process.memory.available)) + "MB", 1)]),
						createBaseVNode("tr", null, [_cache[4] || (_cache[4] = createBaseVNode("th", null, "RSS: (process.memoryUsage().rss)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsMb)(props.worker.process.memory.rss)) + "MB", 1)]),
						createBaseVNode("tr", null, [_cache[5] || (_cache[5] = createBaseVNode("th", null, "Heap total: (process.memoryUsage().heapTotal)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsMb)(props.worker.process.memory.heapTotal)) + "MB", 1)]),
						createBaseVNode("tr", null, [_cache[6] || (_cache[6] = createBaseVNode("th", null, "Heap used: (process.memoryUsage().heapUsed)", -1)), createBaseVNode("td", null, toDisplayString(unref(memAsMb)(props.worker.process.memory.heapUsed)) + "MB", 1)])
					])])
				], 2)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerMemoryMonitorAccordion.vue?vue&type=style&index=0&lang.module.scss
var shimmer$3 = "_shimmer_1ajfq_1";
var spin$3 = "_spin_1ajfq_1";
var opacityPulse$3 = "_opacityPulse_1ajfq_1";
var popoverIn$3 = "_popoverIn_1ajfq_1";
var fadeIn$3 = "_fadeIn_1ajfq_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_1ajfq_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_1ajfq_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_1ajfq_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_1ajfq_1";
var blurSwapIn$3 = "_blurSwapIn_1ajfq_1";
var blurSwapOut$3 = "_blurSwapOut_1ajfq_1";
var pulseGlow$3 = "_pulseGlow_1ajfq_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_1ajfq_1";
var fade$3 = "_fade_1ajfq_1";
var fadeInUp$3 = "_fadeInUp_1ajfq_1";
var fadeInDown$3 = "_fadeInDown_1ajfq_1";
var fadeInLeft$3 = "_fadeInLeft_1ajfq_1";
var fadeInRight$3 = "_fadeInRight_1ajfq_1";
var fadeOut$3 = "_fadeOut_1ajfq_1";
var fadeOutDown$3 = "_fadeOutDown_1ajfq_1";
var fadeOutUp$3 = "_fadeOutUp_1ajfq_1";
var fadeOutLeft$3 = "_fadeOutLeft_1ajfq_1";
var fadeOutRight$3 = "_fadeOutRight_1ajfq_1";
var ping$3 = "_ping_1ajfq_1";
var blinkBackground$3 = "_blinkBackground_1ajfq_1";
var typingBlink$3 = "_typingBlink_1ajfq_1";
var WorkerMemoryMonitorAccordion_vue_vue_type_style_index_0_lang_module_default = {
	"accordion-content": "_accordion-content_1ajfq_398",
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_1ajfq_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$3,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$3,
	blurSwapIn: blurSwapIn$3,
	blurSwapOut: blurSwapOut$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInUp: fadeInUp$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
};
var WorkerMemoryMonitorAccordion_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkerMemoryMonitorAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerMemoryMonitorAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerCard.vue?vue&type=script&setup=true&lang.ts
var WorkerCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerCard",
	props: { workerId: {} },
	setup(__props) {
		let interval;
		const orchestrationStore = useOrchestrationStore();
		const i18n = useI18n();
		const props = __props;
		const secondsSinceLastUpdateString = ref("0");
		const stale = ref(false);
		const worker = computed(() => {
			return orchestrationStore.getWorkerStatus(props.workerId);
		});
		const sortedWorkerInterfaces = computed(() => sortByProperty("family", worker.value?.interfaces.slice() ?? []));
		function upTime(seconds) {
			const days = Math.floor(seconds / (3600 * 24));
			seconds -= days * 3600 * 24;
			const hrs = Math.floor(seconds / 3600);
			seconds -= hrs * 3600;
			const mnts = Math.floor(seconds / 60);
			seconds -= mnts * 60;
			return `${days}d ${hrs}h ${mnts}m ${Math.floor(seconds)}s`;
		}
		onMounted(() => {
			interval = setInterval(() => {
				const lastUpdated = orchestrationStore.getWorkerLastUpdated(props.workerId);
				if (!lastUpdated) return;
				const secondsSinceLastUpdate = Math.ceil((Date.now() - lastUpdated) / 1e3);
				stale.value = secondsSinceLastUpdate > 10;
				secondsSinceLastUpdateString.value = secondsSinceLastUpdate.toFixed(0);
			}, 500);
		});
		onBeforeUnmount(() => {
			clearInterval(interval);
		});
		return (_ctx, _cache) => {
			return worker.value ? (openBlock(), createBlock(unref(N8nCard_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.cardLink)
			}, {
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					bold: "",
					class: normalizeClass(stale.value ? [_ctx.$style.cardHeading, _ctx.$style.stale] : [_ctx.$style.cardHeading]),
					"data-test-id": "worker-card-name"
				}, {
					default: withCtx(() => [
						createTextVNode(" Name: " + toDisplayString(worker.value.senderId) + " (" + toDisplayString(worker.value.hostname) + ") ", 1),
						_cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
						createTextVNode(" Average Load: " + toDisplayString(unref(averageWorkerLoadFromLoadsAsString)(worker.value.loadAvg ?? [0])) + " | Free memory: " + toDisplayString(unref(memAsGb)(worker.value.process.memory.available)) + "GB / " + toDisplayString(unref(memAsGb)(worker.value.isInContainer ? worker.value.process.memory.constraint : worker.value.host.memory.total)) + "GB " + toDisplayString(stale.value ? " (stale)" : ""), 1)
					]),
					_: 1
				}, 8, ["class"])]),
				append: withCtx(() => [createBaseVNode("div", {
					ref: "cardActions",
					class: normalizeClass(_ctx.$style.cardActions)
				}, null, 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "small",
					class: normalizeClass(_ctx.$style.container)
				}, {
					default: withCtx(() => [
						createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " " + toDisplayString(secondsSinceLastUpdateString.value) + "s ago | n8n-Version: " + toDisplayString(worker.value.version) + " | Architecture: " + toDisplayString(worker.value.arch) + " ( " + toDisplayString(worker.value.platform) + ") | Uptime: " + toDisplayString(upTime(worker.value.uptime)), 1),
						_cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
						createVNode(WorkerJobAccordion_default, { items: worker.value.runningJobsSummary }, null, 8, ["items"]),
						createVNode(WorkerNetAccordion_default, { items: sortedWorkerInterfaces.value }, null, 8, ["items"]),
						createVNode(WorkerChartsAccordion_default, { "worker-id": worker.value.senderId }, null, 8, ["worker-id"]),
						createVNode(WorkerMemoryMonitorAccordion_default, { worker: worker.value }, null, 8, ["worker"])
					]),
					_: 1
				}, 8, ["class"])], 2)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerCard.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_365im_388";
var cardLink = "_cardLink_365im_392";
var cardHeading = "_cardHeading_365im_402";
var stale = "_stale_365im_408";
var cardDescription = "_cardDescription_365im_412";
var cardActions = "_cardActions_365im_419";
var shimmer$2 = "_shimmer_365im_1";
var spin$2 = "_spin_365im_1";
var opacityPulse$2 = "_opacityPulse_365im_1";
var popoverIn$2 = "_popoverIn_365im_1";
var fadeIn$2 = "_fadeIn_365im_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_365im_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_365im_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_365im_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_365im_1";
var blurSwapIn$2 = "_blurSwapIn_365im_1";
var blurSwapOut$2 = "_blurSwapOut_365im_1";
var pulseGlow$2 = "_pulseGlow_365im_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_365im_1";
var fade$2 = "_fade_365im_1";
var fadeInUp$2 = "_fadeInUp_365im_1";
var fadeInDown$2 = "_fadeInDown_365im_1";
var fadeInLeft$2 = "_fadeInLeft_365im_1";
var fadeInRight$2 = "_fadeInRight_365im_1";
var fadeOut$2 = "_fadeOut_365im_1";
var fadeOutDown$2 = "_fadeOutDown_365im_1";
var fadeOutUp$2 = "_fadeOutUp_365im_1";
var fadeOutLeft$2 = "_fadeOutLeft_365im_1";
var fadeOutRight$2 = "_fadeOutRight_365im_1";
var ping$2 = "_ping_365im_1";
var blinkBackground$2 = "_blinkBackground_365im_1";
var typingBlink$2 = "_typingBlink_365im_1";
var WorkerCard_vue_vue_type_style_index_0_lang_module_default = {
	container,
	cardLink,
	cardHeading,
	stale,
	cardDescription,
	cardActions,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_365im_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
var WorkerCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkerCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 0 };
var _hoisted_2 = { key: 1 };
var _hoisted_3 = { key: 0 };
var _hoisted_4 = { key: 1 };
var WorkerList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerList",
	props: { autoRefreshEnabled: {
		type: Boolean,
		default: true
	} },
	setup(__props) {
		const router = useRouter();
		const i18n = useI18n();
		const pushConnection = usePushConnection({ router });
		const documentTitle = useDocumentTitle();
		const telemetry = useTelemetry();
		const orchestrationManagerStore = useOrchestrationStore();
		const rootStore = useRootStore();
		const pushStore = usePushConnectionStore();
		const initialStatusReceived = computed(() => orchestrationManagerStore.initialStatusReceived);
		const workerIds = computed(() => Object.keys(orchestrationManagerStore.workers));
		const pageTitle = computed(() => i18n.baseText("workerList.pageTitle"));
		onMounted(() => {
			documentTitle.set(pageTitle.value);
			telemetry.track("User viewed worker view", { instance_id: rootStore.instanceId });
		});
		onBeforeMount(() => {
			pushConnection.initialize();
			pushStore.pushConnect();
			orchestrationManagerStore.startWorkerStatusPolling();
		});
		onBeforeUnmount(() => {
			orchestrationManagerStore.stopWorkerStatusPolling();
			pushStore.pushDisconnect();
			pushConnection.terminate();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createVNode(ConnectionTracker_default, { class: "actions" }),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.workerListHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(pageTitle.value), 1)]),
					_: 1
				})], 2),
				!initialStatusReceived.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nSpinner_default))])) : (openBlock(), createElementBlock("div", _hoisted_2, [workerIds.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(unref(i18n).baseText("workerList.empty")), 1)) : (openBlock(), createElementBlock("div", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(workerIds.value, (workerId) => {
					return openBlock(), createElementBlock("div", {
						key: workerId,
						class: normalizeClass(_ctx.$style.card)
					}, [createVNode(WorkerCard_default, {
						"worker-id": workerId,
						"data-test-id": "worker-card"
					}, null, 8, ["worker-id"])], 2);
				}), 128))]))]))
			]);
		};
	}
});
//#endregion
//#region src/features/settings/orchestration.ee/components/WorkerList.vue?vue&type=style&index=0&lang.module.scss
var workerListHeader = "_workerListHeader_1i4ms_388";
var card = "_card_1i4ms_395";
var tableLoader = "_tableLoader_1i4ms_399";
var shimmer$1 = "_shimmer_1i4ms_1";
var spin$1 = "_spin_1i4ms_1";
var opacityPulse$1 = "_opacityPulse_1i4ms_1";
var popoverIn$1 = "_popoverIn_1i4ms_1";
var fadeIn$1 = "_fadeIn_1i4ms_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1i4ms_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1i4ms_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1i4ms_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1i4ms_1";
var blurSwapIn$1 = "_blurSwapIn_1i4ms_1";
var blurSwapOut$1 = "_blurSwapOut_1i4ms_1";
var pulseGlow$1 = "_pulseGlow_1i4ms_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1i4ms_1";
var fade$1 = "_fade_1i4ms_1";
var fadeInUp$1 = "_fadeInUp_1i4ms_1";
var fadeInDown$1 = "_fadeInDown_1i4ms_1";
var fadeInLeft$1 = "_fadeInLeft_1i4ms_1";
var fadeInRight$1 = "_fadeInRight_1i4ms_1";
var fadeOut$1 = "_fadeOut_1i4ms_1";
var fadeOutDown$1 = "_fadeOutDown_1i4ms_1";
var fadeOutUp$1 = "_fadeOutUp_1i4ms_1";
var fadeOutLeft$1 = "_fadeOutLeft_1i4ms_1";
var fadeOutRight$1 = "_fadeOutRight_1i4ms_1";
var ping$1 = "_ping_1i4ms_1";
var blinkBackground$1 = "_blinkBackground_1i4ms_1";
var typingBlink$1 = "_typingBlink_1i4ms_1";
var WorkerList_vue_vue_type_style_index_0_lang_module_default = {
	workerListHeader,
	card,
	tableLoader,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1i4ms_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var WorkerList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkerList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/orchestration.ee/views/WorkerView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["href"];
var WorkerView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkerView",
	setup(__props) {
		const settingsStore = useSettingsStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const i18n = useI18n();
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("worker-view", "upgrade-worker-view");
		};
		return (_ctx, _cache) => {
			return unref(settingsStore).isQueueModeEnabled && unref(settingsStore).isWorkerViewAvailable ? (openBlock(), createBlock(WorkerList_default, {
				key: 0,
				"data-test-id": "worker-view-licensed"
			})) : (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 1,
				"data-test-id": "worker-view-unlicensed",
				class: normalizeClass(_ctx.$style.actionBox),
				description: unref(i18n).baseText("workerList.actionBox.description"),
				"button-text": unref(i18n).baseText("workerList.actionBox.buttonText"),
				"onClick:button": goToUpgrade
			}, {
				heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workerList.actionBox.title")), 1)]),
				description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.actionBox.description")) + " ", 1), createBaseVNode("a", {
					href: unref(i18n).baseText("workerList.docs.url"),
					target: "_blank"
				}, toDisplayString(unref(i18n).baseText("workerList.actionBox.description.link")), 9, _hoisted_1)]),
				_: 1
			}, 8, [
				"class",
				"description",
				"button-text"
			]));
		};
	}
});
//#endregion
//#region src/features/settings/orchestration.ee/views/WorkerView.vue?vue&type=style&index=0&lang.module.scss
var actionBox = "_actionBox_sc74e_388";
var shimmer = "_shimmer_sc74e_1";
var spin = "_spin_sc74e_1";
var opacityPulse = "_opacityPulse_sc74e_1";
var popoverIn = "_popoverIn_sc74e_1";
var fadeIn = "_fadeIn_sc74e_1";
var collapsibleSlideDown = "_collapsibleSlideDown_sc74e_1";
var collapsibleSlideUp = "_collapsibleSlideUp_sc74e_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_sc74e_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_sc74e_1";
var blurSwapIn = "_blurSwapIn_sc74e_1";
var blurSwapOut = "_blurSwapOut_sc74e_1";
var pulseGlow = "_pulseGlow_sc74e_1";
var pulseGlowDelayed = "_pulseGlowDelayed_sc74e_1";
var fade = "_fade_sc74e_1";
var fadeInUp = "_fadeInUp_sc74e_1";
var fadeInDown = "_fadeInDown_sc74e_1";
var fadeInLeft = "_fadeInLeft_sc74e_1";
var fadeInRight = "_fadeInRight_sc74e_1";
var fadeOut = "_fadeOut_sc74e_1";
var fadeOutDown = "_fadeOutDown_sc74e_1";
var fadeOutUp = "_fadeOutUp_sc74e_1";
var fadeOutLeft = "_fadeOutLeft_sc74e_1";
var fadeOutRight = "_fadeOutRight_sc74e_1";
var ping = "_ping_sc74e_1";
var blinkBackground = "_blinkBackground_sc74e_1";
var typingBlink = "_typingBlink_sc74e_1";
var WorkerView_vue_vue_type_style_index_0_lang_module_default = {
	actionBox,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_sc74e_1",
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
var WorkerView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkerView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkerView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkerView_default as default };
