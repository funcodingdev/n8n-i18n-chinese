import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, P as getCurrentInstance, S as computed, T as createCommentVNode, U as mergeProps, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, c as useCssModule, gt as watch, it as renderSlot, j as createVNode, p as vShow, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nInfoTip_default } from "./N8nInfoTip-BB_z6D-l.js";
import { Ci as getPairedItemId, D as injectWorkflowDocumentStore, Lt as getMappedExpression, cn as injectNDVStore, t as useWorkflowsStore, ta as isBinary, v as injectWorkflowExecutionStateStore } from "./workflows.store-QD0eo9S6.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { Wr as BINARY_DATA_VIEW_MODAL_KEY } from "./constants-DxozP3cY.js";
import { m as shorten } from "./typesUtils-CoY0pEfP.js";
import { n as useUIStore } from "./ui.store-Bnte4owf.js";
import { t as require_FileSaver_min } from "./FileSaver.min-EXdbaoeR.js";
import { t as useExternalHooks } from "./useExternalHooks-BlrUXQBD.js";
import { t as Draggable_default } from "./Draggable-BxbG0kKx.js";
import { t as TextWithHighlights_default } from "./TextWithHighlights-ChHTPNl7.js";
import { n as getBinaryDataFileName } from "./fileUtils-BG5X-YG2.js";
import { n as MappingPill_default, t as useTelemetryContext } from "./useTelemetryContext-0oKzMEhK.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-9ITdYi2_.js";
//#region ../@n8n/design-system/src/components/N8nTree/Tree.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = {
	key: 0,
	class: "n8n-tree"
};
var _hoisted_2$1 = { key: 0 };
var _hoisted_3$1 = { key: 1 };
var _hoisted_4$1 = { key: 3 };
var _hoisted_5$1 = { key: 1 };
var _hoisted_6$1 = { key: 1 };
var Tree_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nTree",
	__name: "Tree",
	props: {
		value: { default: () => ({}) },
		path: { default: () => [] },
		depth: { default: 0 },
		nodeClass: { default: "" }
	},
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => {
			return {
				[props.nodeClass]: !!props.nodeClass,
				[$style.indent]: props.depth > 0
			};
		});
		const isObject = (data) => {
			return typeof data === "object" && data !== null;
		};
		const isSimple = (data) => {
			if (data === null || data === void 0) return true;
			if (typeof data === "object" && Object.keys(data).length === 0) return true;
			if (Array.isArray(data) && data.length === 0) return true;
			return typeof data !== "object";
		};
		const getPath = (key) => {
			if (Array.isArray(props.value)) return [...props.path, parseInt(key, 10)];
			return [...props.path, key];
		};
		const N8nTree = getCurrentInstance()?.type;
		return (_ctx, _cache) => {
			return isObject(__props.value) ? (openBlock(), createElementBlock("div", _hoisted_1$2, [unref(isBinary)(__props.value) ? (openBlock(), createElementBlock("div", _hoisted_2$1, [renderSlot(_ctx.$slots, "binary", {
				value: __props.value,
				path: __props.path
			})])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(Object.keys(__props.value), (label, i) => {
				return openBlock(), createElementBlock("div", {
					key: i,
					class: normalizeClass(classes.value)
				}, [isSimple(__props.value[label]) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref($style).simple)
				}, [
					!!_ctx.$slots.label ? renderSlot(_ctx.$slots, "label", {
						key: 0,
						label,
						path: getPath(label)
					}) : (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(label), 1)),
					_cache[0] || (_cache[0] = createBaseVNode("span", null, ":", -1)),
					!!_ctx.$slots.value ? renderSlot(_ctx.$slots, "value", {
						key: 2,
						value: __props.value[label]
					}) : (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString(__props.value[label]), 1))
				], 2)) : (openBlock(), createElementBlock("div", _hoisted_5$1, [!!_ctx.$slots.label ? renderSlot(_ctx.$slots, "label", {
					key: 0,
					label,
					path: getPath(label)
				}) : (openBlock(), createElementBlock("span", _hoisted_6$1, toDisplayString(label), 1)), isObject(__props.value[label]) ? (openBlock(), createBlock(unref(N8nTree), {
					key: 2,
					path: getPath(label),
					depth: __props.depth + 1,
					value: __props.value[label],
					"node-class": __props.nodeClass
				}, createSlots({ _: 2 }, [
					!!_ctx.$slots.label ? {
						name: "label",
						fn: withCtx((data) => [renderSlot(_ctx.$slots, "label", mergeProps({ ref_for: true }, data))]),
						key: "0"
					} : void 0,
					!!_ctx.$slots.binary ? {
						name: "binary",
						fn: withCtx((data) => [renderSlot(_ctx.$slots, "binary", mergeProps({ ref_for: true }, data, { depth: __props.depth + 1 }))]),
						key: "1"
					} : void 0,
					!!_ctx.$slots.value ? {
						name: "value",
						fn: withCtx((data) => [renderSlot(_ctx.$slots, "value", mergeProps({ ref_for: true }, data))]),
						key: "2"
					} : void 0
				]), 1032, [
					"path",
					"depth",
					"value",
					"node-class"
				])) : createCommentVNode("", true)]))], 2);
			}), 128))])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nTree/Tree.vue?vue&type=style&index=0&lang.module.scss
var indent = "_indent_d34si_388";
var simple = "_simple_d34si_392";
var shimmer$2 = "_shimmer_d34si_1";
var spin$2 = "_spin_d34si_1";
var opacityPulse$2 = "_opacityPulse_d34si_1";
var popoverIn$2 = "_popoverIn_d34si_1";
var fadeIn$2 = "_fadeIn_d34si_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_d34si_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_d34si_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_d34si_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_d34si_1";
var blurSwapIn$2 = "_blurSwapIn_d34si_1";
var blurSwapOut$2 = "_blurSwapOut_d34si_1";
var pulseGlow$2 = "_pulseGlow_d34si_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_d34si_1";
var fade$2 = "_fade_d34si_1";
var fadeInUp$2 = "_fadeInUp_d34si_1";
var fadeInDown$2 = "_fadeInDown_d34si_1";
var fadeInLeft$2 = "_fadeInLeft_d34si_1";
var fadeInRight$2 = "_fadeInRight_d34si_1";
var fadeOut$2 = "_fadeOut_d34si_1";
var fadeOutDown$2 = "_fadeOutDown_d34si_1";
var fadeOutUp$2 = "_fadeOutUp_d34si_1";
var fadeOutLeft$2 = "_fadeOutLeft_d34si_1";
var fadeOutRight$2 = "_fadeOutRight_d34si_1";
var ping$2 = "_ping_d34si_1";
var blinkBackground$2 = "_blinkBackground_d34si_1";
var typingBlink$2 = "_typingBlink_d34si_1";
var Tree_vue_vue_type_style_index_0_lang_module_default = {
	indent,
	simple,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_d34si_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nTree/index.ts
var N8nTree_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Tree_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Tree_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ndv/runData/components/BinaryEntryDataTable.vue?vue&type=script&setup=true&lang.ts
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min(), 1);
var _hoisted_1$1 = ["src", "alt"];
var BYTES_THRESHOLD = 1048576;
var BinaryEntryDataTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BinaryEntryDataTable",
	props: {
		value: {},
		depth: {}
	},
	setup(__props) {
		const props = __props;
		const workflowsStore = useWorkflowsStore();
		const uiStore = useUIStore();
		const i18n = useI18n();
		const tablePreview = computed(() => {
			if (!fileUrl.value) return false;
			const mimeType = props.value.mimeType;
			const bytes = Number(props.value.bytes);
			return (mimeType?.startsWith("image/") ?? false) && (bytes === void 0 ? false : bytes < BYTES_THRESHOLD);
		});
		const fileName = computed(() => getBinaryDataFileName(props.value));
		const fileUrl = computed(() => {
			const { id, mimeType } = props.value;
			return workflowsStore.getBinaryUrl(id, "download", fileName.value, mimeType ?? "");
		});
		const fileMeta = computed(() => {
			const { mimeType, fileSize } = props.value;
			return mimeType + (fileSize ? `, ${fileSize}` : "");
		});
		const downloadBinaryData = async () => {
			try {
				const response = await fetch(fileUrl.value);
				if (!response.ok) throw new Error("Error downloading file");
				(0, import_FileSaver_min.saveAs)(await response.blob(), fileName.value);
			} catch (error) {
				useToast().showMessage({
					title: i18n.baseText("runData.downloadBinaryData.error.title"),
					message: i18n.baseText("runData.downloadBinaryData.error.message"),
					type: "error"
				});
			}
		};
		const viewBinaryData = () => {
			uiStore.openModalWithData({
				name: BINARY_DATA_VIEW_MODAL_KEY,
				data: { binaryData: props.value }
			});
		};
		const containerStyle = computed(() => ({ marginLeft: props.depth ? `${props.depth * 15}px` : "0" }));
		const fileIcon = computed(() => {
			return props.value.mimeType?.startsWith("text/") ?? false ? "file-text" : "file";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				style: normalizeStyle(containerStyle.value)
			}, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.wrapper),
					onClick: viewBinaryData
				}, [tablePreview.value ? (openBlock(), createElementBlock("img", {
					key: 0,
					src: fileUrl.value,
					class: normalizeClass(_ctx.$style.imagePreview),
					alt: fileName.value || "Image preview"
				}, null, 10, _hoisted_1$1)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.iconWrapper)
				}, [createVNode(unref(N8nIcon_default), {
					icon: fileIcon.value,
					size: "xlarge"
				}, null, 8, ["icon"])], 2))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.filename),
					onClick: viewBinaryData
				}, toDisplayString(fileName.value), 3), fileMeta.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.meta)
				}, toDisplayString(fileMeta.value), 3)) : createCommentVNode("", true)], 2),
				createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.download),
					onClick: downloadBinaryData
				}, [createVNode(unref(N8nIcon_default), {
					icon: "download",
					size: "large"
				})], 2)
			], 6);
		};
	}
});
//#endregion
//#region src/features/ndv/runData/components/BinaryEntryDataTable.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_7qmuw_388";
var download = "_download_7qmuw_402";
var wrapper = "_wrapper_7qmuw_406";
var iconWrapper = "_iconWrapper_7qmuw_418";
var imagePreview = "_imagePreview_7qmuw_428";
var info = "_info_7qmuw_435";
var filename = "_filename_7qmuw_445";
var meta = "_meta_7qmuw_456";
var shimmer$1 = "_shimmer_7qmuw_1";
var spin$1 = "_spin_7qmuw_1";
var opacityPulse$1 = "_opacityPulse_7qmuw_1";
var popoverIn$1 = "_popoverIn_7qmuw_1";
var fadeIn$1 = "_fadeIn_7qmuw_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_7qmuw_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_7qmuw_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_7qmuw_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_7qmuw_1";
var blurSwapIn$1 = "_blurSwapIn_7qmuw_1";
var blurSwapOut$1 = "_blurSwapOut_7qmuw_1";
var pulseGlow$1 = "_pulseGlow_7qmuw_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_7qmuw_1";
var fade$1 = "_fade_7qmuw_1";
var fadeInUp$1 = "_fadeInUp_7qmuw_1";
var fadeInDown$1 = "_fadeInDown_7qmuw_1";
var fadeInLeft$1 = "_fadeInLeft_7qmuw_1";
var fadeInRight$1 = "_fadeInRight_7qmuw_1";
var fadeOut$1 = "_fadeOut_7qmuw_1";
var fadeOutDown$1 = "_fadeOutDown_7qmuw_1";
var fadeOutUp$1 = "_fadeOutUp_7qmuw_1";
var fadeOutLeft$1 = "_fadeOutLeft_7qmuw_1";
var fadeOutRight$1 = "_fadeOutRight_7qmuw_1";
var ping$1 = "_ping_7qmuw_1";
var blinkBackground$1 = "_blinkBackground_7qmuw_1";
var typingBlink$1 = "_typingBlink_7qmuw_1";
var BinaryEntryDataTable_vue_vue_type_style_index_0_lang_module_default = {
	container,
	download,
	wrapper,
	iconWrapper,
	imagePreview,
	info,
	filename,
	meta,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_7qmuw_1",
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
var BinaryEntryDataTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BinaryEntryDataTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BinaryEntryDataTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ndv/runData/components/RunDataTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-row"];
var _hoisted_2 = ["data-row"];
var _hoisted_3 = { key: 0 };
var _hoisted_4 = ["width"];
var _hoisted_5 = ["data-test-id"];
var _hoisted_6 = ["data-row"];
var _hoisted_7 = ["data-row", "data-col"];
var _hoisted_8 = { key: 1 };
var MAX_COLUMNS_LIMIT = 40;
var RunDataTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunDataTable",
	props: {
		node: {},
		inputData: {},
		distanceFromActive: {},
		pageOffset: {},
		runIndex: { default: 0 },
		outputIndex: { default: 0 },
		totalRuns: { default: 0 },
		mappingEnabled: {
			type: Boolean,
			default: false
		},
		hasDefaultHoverState: {
			type: Boolean,
			default: false
		},
		search: { default: "" },
		headerBgColor: { default: "base" },
		compact: {
			type: Boolean,
			default: false
		},
		disableHoverHighlight: {
			type: Boolean,
			default: false
		},
		collapsingColumnName: {}
	},
	emits: [
		"activeRowChanged",
		"displayModeChange",
		"mounted",
		"collapsingColumnChanged"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const externalHooks = useExternalHooks();
		const tableRef = useTemplateRef("tableRef");
		const activeColumn = ref(-1);
		const forceShowGrip = ref(false);
		const draggedColumn = ref(false);
		const draggingPath = ref(null);
		const hoveringPath = ref(null);
		const hoveringColumnIndex = ref(-1);
		const activeRow = ref(null);
		const columnLimit = ref(MAX_COLUMNS_LIMIT);
		const columnLimitExceeded = ref(false);
		const draggableRef = ref();
		const fixedColumnWidths = ref();
		const ndvStore = injectNDVStore();
		const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const telemetryContext = useTelemetryContext();
		const { trackOpeningRelatedExecution, resolveRelatedExecutionUrl } = useExecutionHelpers();
		const hoveringItem = computed(() => ndvStore.value.hoveringItem);
		const focusedMappableInput = computed(() => ndvStore.value.focusedMappableInput);
		const highlight = computed(() => ndvStore.value.highlightDraggables);
		const canDraggableDrop = computed(() => ndvStore.value.canDraggableDrop);
		const draggableStickyPosition = computed(() => ndvStore.value.draggableStickyPos);
		const pairedItemMappings = computed(() => workflowExecutionStateStore.value.activeExecutionPairedItemMappings);
		const tableData = computed(() => convertToTable(props.inputData));
		const collapsingColumnIndex = computed(() => {
			if (!props.collapsingColumnName) return -1;
			return tableData.value.columns.indexOf(props.collapsingColumnName);
		});
		onMounted(() => {
			if (tableData.value?.columns && draggableRef.value) {
				const tbody = draggableRef.value.$refs.wrapper;
				if (tbody) emit("mounted", { avgRowHeight: tbody.offsetHeight / tableData.value.data.length });
			}
		});
		function isHoveringRow(row) {
			if (props.disableHoverHighlight) return false;
			if (row === activeRow.value) return true;
			const itemIndex = props.pageOffset + row;
			if (itemIndex === 0 && !hoveringItem.value && props.hasDefaultHoverState && props.distanceFromActive === 1) return true;
			const itemNodeId = getPairedItemId(props.node?.name ?? "", props.runIndex || 0, props.outputIndex || 0, itemIndex);
			if (!hoveringItem.value || !pairedItemMappings.value[itemNodeId]) return false;
			const hoveringItemId = getPairedItemId(hoveringItem.value.nodeName, hoveringItem.value.runIndex, hoveringItem.value.outputIndex, hoveringItem.value.itemIndex);
			return pairedItemMappings.value[itemNodeId].has(hoveringItemId);
		}
		function showExecutionLink(index) {
			if (index === activeRow.value) return true;
			if (activeRow.value === null) return index === 0;
			return false;
		}
		function onMouseEnterCell(e) {
			const target = e.target;
			const col = target.dataset.col;
			const parsedCol = col ? parseInt(col, 10) : NaN;
			if (!isNaN(parsedCol)) {
				hoveringColumnIndex.value = parsedCol;
				if (target && props.mappingEnabled) activeColumn.value = parsedCol;
			}
			if (target) {
				const row = target.dataset.row;
				if (row && !isNaN(parseInt(row, 10))) {
					activeRow.value = parseInt(row, 10);
					emit("activeRowChanged", props.pageOffset + activeRow.value);
				}
			}
		}
		function onMouseLeaveCell() {
			activeColumn.value = -1;
			activeRow.value = null;
			emit("activeRowChanged", null);
			hoveringColumnIndex.value = -1;
		}
		function onMouseEnterKey(path, colIndex) {
			hoveringPath.value = getCellExpression(path, colIndex);
		}
		function onMouseLeaveKey() {
			hoveringPath.value = null;
		}
		function isHovering(path, colIndex) {
			const expr = getCellExpression(path, colIndex);
			return hoveringPath.value === expr;
		}
		function getExpression(column) {
			if (!props.node) return "";
			return getMappedExpression({
				nodeName: props.node.name,
				distanceFromActive: props.distanceFromActive,
				path: [column],
				binaryMode: workflowDocumentStore?.value?.settings?.binaryMode
			});
		}
		function getPathNameFromTarget(el) {
			if (!el) return "";
			return el.dataset.name;
		}
		function getCellPathName(path, colIndex) {
			const lastKey = path[path.length - 1];
			if (typeof lastKey === "string") return lastKey;
			if (path.length > 1) return `${path[path.length - 2]}[${lastKey}]`;
			return `${tableData.value.columns[colIndex]}[${lastKey}]`;
		}
		function getCellExpression(path, colIndex) {
			if (!props.node) return "";
			const column = tableData.value.columns[colIndex];
			return getMappedExpression({
				nodeName: props.node.name,
				distanceFromActive: props.distanceFromActive,
				path: [column, ...path],
				binaryMode: workflowDocumentStore?.value?.settings?.binaryMode
			});
		}
		function isEmpty(value) {
			return value === "" || Array.isArray(value) && value.length === 0 || typeof value === "object" && value !== null && Object.keys(value).length === 0 || value === null || value === void 0;
		}
		function getValueToRender(value) {
			if (value === "") return i18n.baseText("runData.emptyString");
			if (typeof value === "string") return value;
			if (Array.isArray(value) && value.length === 0) return i18n.baseText("runData.emptyArray");
			if (typeof value === "object" && value !== null && Object.keys(value).length === 0) return i18n.baseText("runData.emptyObject");
			if (value === null || value === void 0) return `${value}`;
			if (value === true || value === false || typeof value === "number") return value.toString();
			return JSON.stringify(value);
		}
		function onDragStart(el, data) {
			draggedColumn.value = true;
			ndvStore.value.draggableStartDragging({
				type: "mapping",
				data: data ?? "",
				dimensions: el?.getBoundingClientRect() ?? null
			});
			ndvStore.value.resetMappingTelemetry();
		}
		function onCellDragStart(el, data) {
			if (el?.dataset.value) draggingPath.value = el.dataset.value;
			onDragStart(el, data);
		}
		function onCellDragEnd(el) {
			draggingPath.value = null;
			onDragEnd(el.dataset.name ?? "", "tree", el.dataset.depth ?? "0");
		}
		function isDraggingKey(path, colIndex) {
			if (!draggingPath.value) return;
			return draggingPath.value === getCellExpression(path, colIndex);
		}
		function onDragEnd(column, src, depth = "0") {
			ndvStore.value.draggableStopDragging();
			setTimeout(() => {
				const mappingTelemetry = ndvStore.value.mappingTelemetry;
				const telemetryPayload = {
					src_node_type: props.node.type,
					src_field_name: column,
					src_nodes_back: props.distanceFromActive,
					src_run_index: props.runIndex,
					src_runs_total: props.totalRuns,
					src_field_nest_level: parseInt(depth, 10),
					src_view: "table",
					src_element: src,
					success: false,
					view_shown: telemetryContext.view_shown,
					...mappingTelemetry
				};
				externalHooks.run("runDataTable.onDragEnd", telemetryPayload);
				telemetry.track("User dragged data for mapping", telemetryPayload);
			}, 1e3);
		}
		function isSimple(data) {
			return typeof data !== "object" || data === null || Array.isArray(data) && data.length === 0 || typeof data === "object" && Object.keys(data).length === 0;
		}
		function isObject(data) {
			return !isSimple(data);
		}
		function hasJsonInColumn(colIndex) {
			return tableData.value.hasJson[tableData.value.columns[colIndex]];
		}
		function convertToTable(inputData) {
			const resultTableData = [];
			const tableColumns = [];
			let leftEntryColumns, entryRows;
			let entry;
			const metadata = {
				hasExecutionIds: false,
				data: []
			};
			const hasJson = {};
			inputData.forEach((data) => {
				if (!data.hasOwnProperty("json")) return;
				entry = data.json;
				entryRows = [];
				const entryColumns = Object.keys(entry || {});
				if (entryColumns.length > MAX_COLUMNS_LIMIT) {
					columnLimitExceeded.value = true;
					leftEntryColumns = entryColumns.slice(0, MAX_COLUMNS_LIMIT);
				} else leftEntryColumns = entryColumns;
				if (data.metadata?.subExecution) {
					metadata.data.push(data.metadata);
					metadata.hasExecutionIds = true;
				} else metadata.data.push(void 0);
				tableColumns.forEach((key) => {
					if (entry.hasOwnProperty(key)) {
						entryRows.push(entry[key]);
						leftEntryColumns.splice(leftEntryColumns.indexOf(key), 1);
						hasJson[key] = hasJson[key] || typeof entry[key] === "object" && Object.keys(entry[key] ?? {}).length > 0 || false;
					} else entryRows.push(void 0);
				});
				leftEntryColumns.forEach((key) => {
					tableColumns.push(key);
					entryRows.push(entry[key]);
					hasJson[key] = hasJson[key] || typeof entry[key] === "object" && Object.keys(entry[key] ?? {}).length > 0 || false;
				});
				resultTableData.push(entryRows);
			});
			resultTableData.forEach((rows) => {
				if (tableColumns.length > rows.length) rows.push(...new Array(tableColumns.length - rows.length));
			});
			return {
				hasJson,
				columns: tableColumns,
				data: resultTableData,
				metadata
			};
		}
		function switchToJsonView() {
			emit("displayModeChange", "json");
		}
		function handleSetCollapsingColumn(columnIndex) {
			emit("collapsingColumnChanged", collapsingColumnIndex.value === columnIndex ? null : tableData.value.columns[columnIndex] ?? null);
		}
		watch(focusedMappableInput, (curr) => {
			setTimeout(() => {
				forceShowGrip.value = !!focusedMappableInput.value;
			}, curr ? 300 : 150);
		});
		watch([collapsingColumnIndex, tableRef], ([index, table]) => {
			if (index === -1) {
				fixedColumnWidths.value = void 0;
				return;
			}
			if (table === null) return;
			fixedColumnWidths.value = [...table.querySelectorAll("thead tr th")].map((el) => el instanceof HTMLElement ? el.getBoundingClientRect().width : 0);
		}, {
			immediate: true,
			flush: "post"
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.dataDisplay, {
				[_ctx.$style.highlight]: highlight.value,
				[_ctx.$style.lightHeader]: __props.headerBgColor === "light",
				[_ctx.$style.compact]: props.compact,
				[_ctx.$style.hasCollapsingColumn]: fixedColumnWidths.value !== void 0
			}]) }, [tableData.value.columns && tableData.value.columns.length === 0 ? (openBlock(), createElementBlock("table", {
				key: 0,
				class: normalizeClass(_ctx.$style.table)
			}, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [
				tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("th", {
					key: 0,
					class: normalizeClass(_ctx.$style.executionLinkRowHeader)
				}, null, 2)) : createCommentVNode("", true),
				createBaseVNode("th", { class: normalizeClass(_ctx.$style.emptyCell) }, null, 2),
				createBaseVNode("th", { class: normalizeClass(_ctx.$style.tableRightMargin) }, null, 2)
			])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.data, (_, index1) => {
				return openBlock(), createElementBlock("tr", {
					key: index1,
					class: normalizeClass({ [_ctx.$style.hoveringRow]: isHoveringRow(index1) })
				}, [
					tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("td", {
						key: 0,
						"data-row": index1,
						class: normalizeClass(_ctx.$style.executionLinkCell),
						onMouseenter: onMouseEnterCell,
						onMouseleave: onMouseLeaveCell
					}, [tableData.value.metadata.data[index1] ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("runData.table.viewSubExecution", { interpolate: { id: `${tableData.value.metadata.data[index1]?.subExecution.executionId}` } }),
						placement: "left",
						"hide-after": 0
					}, {
						default: withCtx(() => [withDirectives(createVNode(unref(N8nIconButton_default), {
							variant: "subtle",
							icon: "external-link",
							"data-test-id": "debug-sub-execution",
							size: "xsmall",
							target: "_blank",
							href: unref(resolveRelatedExecutionUrl)(tableData.value.metadata.data[index1]),
							onClick: ($event) => unref(trackOpeningRelatedExecution)(tableData.value.metadata.data[index1], "table")
						}, null, 8, ["href", "onClick"]), [[vShow, showExecutionLink(index1)]])]),
						_: 2
					}, 1032, ["content"])) : createCommentVNode("", true)], 42, _hoisted_1)) : createCommentVNode("", true),
					createBaseVNode("td", {
						"data-row": index1,
						"data-col": 0,
						onMouseenter: onMouseEnterCell,
						onMouseleave: onMouseLeaveCell
					}, [createVNode(unref(N8nInfoTip_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.emptyItemHint")), 1)]),
						_: 1
					})], 40, _hoisted_2),
					createBaseVNode("td", { class: normalizeClass(_ctx.$style.tableRightMargin) }, null, 2)
				], 2);
			}), 128))])], 2)) : (openBlock(), createElementBlock("table", {
				key: 1,
				ref_key: "tableRef",
				ref: tableRef,
				class: normalizeClass(_ctx.$style.table)
			}, [
				fixedColumnWidths.value ? (openBlock(), createElementBlock("colgroup", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(fixedColumnWidths.value, (width, i) => {
					return openBlock(), createElementBlock("col", {
						key: i,
						width
					}, null, 8, _hoisted_4);
				}), 128))])) : createCommentVNode("", true),
				createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("th", {
						key: 0,
						class: normalizeClass(_ctx.$style.executionLinkRowHeader)
					}, null, 2)) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.columns || [], (column, i) => {
						return openBlock(), createElementBlock("th", {
							key: column,
							class: normalizeClass({
								[_ctx.$style.isCollapsingColumn]: collapsingColumnIndex.value === i,
								[_ctx.$style.isHoveredColumn]: hoveringColumnIndex.value === i
							})
						}, [createVNode(unref(N8nTooltip_default), {
							placement: "bottom-start",
							disabled: !__props.mappingEnabled,
							"show-after": 1e3
						}, {
							content: withCtx(() => [createBaseVNode("div", null, [_cache[0] || (_cache[0] = createBaseVNode("img", { src: "/%7B%7BBASE_PATH%7D%7D/static/data-mapping-gif.gif" }, null, -1)), createTextVNode(" " + toDisplayString(unref(i18n).baseText("dataMapping.dragColumnToFieldHint")), 1)])]),
							default: withCtx(() => [createVNode(Draggable_default, {
								type: "mapping",
								data: getExpression(column),
								disabled: !__props.mappingEnabled,
								"can-drop": canDraggableDrop.value,
								"sticky-position": draggableStickyPosition.value,
								onDragstart: onDragStart,
								onDragend: (column) => onDragEnd(column?.textContent ?? "", "column")
							}, {
								preview: withCtx(({ canDrop }) => [createVNode(MappingPill_default, {
									html: unref(shorten)(column, 16, 2),
									"can-drop": canDrop
								}, null, 8, ["html", "can-drop"])]),
								default: withCtx(({ isDragging }) => [createBaseVNode("div", { class: normalizeClass({
									[_ctx.$style.header]: true,
									[_ctx.$style.draggableHeader]: __props.mappingEnabled,
									[_ctx.$style.activeHeader]: (i === activeColumn.value || forceShowGrip.value) && __props.mappingEnabled,
									[_ctx.$style.draggingHeader]: isDragging
								}) }, [
									createVNode(TextWithHighlights_default, {
										content: getValueToRender(column || ""),
										search: __props.search
									}, null, 8, ["content", "search"]),
									createVNode(unref(N8nTooltip_default), {
										content: unref(i18n).baseText("dataMapping.tableView.columnCollapsing.tooltip"),
										disabled: __props.mappingEnabled || collapsingColumnIndex.value === i
									}, {
										default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
											variant: "ghost",
											class: normalizeClass(_ctx.$style.collapseColumnButton),
											size: "xsmall",
											icon: collapsingColumnIndex.value === i ? "chevrons-up-down" : "chevrons-down-up",
											"aria-label": unref(i18n).baseText("dataMapping.tableView.columnCollapsing"),
											onClick: ($event) => handleSetCollapsingColumn(i)
										}, null, 8, [
											"class",
											"icon",
											"aria-label",
											"onClick"
										])]),
										_: 2
									}, 1032, ["content", "disabled"]),
									__props.mappingEnabled ? (openBlock(), createElementBlock("div", {
										key: 0,
										class: normalizeClass(_ctx.$style.dragButton)
									}, [createVNode(unref(N8nIcon_default), { icon: "grip-vertical" })], 2)) : createCommentVNode("", true)
								], 2)]),
								_: 2
							}, 1032, [
								"data",
								"disabled",
								"can-drop",
								"sticky-position",
								"onDragend"
							])]),
							_: 2
						}, 1032, ["disabled"])], 2);
					}), 128)),
					columnLimitExceeded.value ? (openBlock(), createElementBlock("th", {
						key: 1,
						class: normalizeClass(_ctx.$style.header)
					}, [createVNode(unref(N8nTooltip_default), { placement: "bottom-end" }, {
						content: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(I18nT), {
							tag: "span",
							keypath: "dataMapping.tableView.tableColumnsExceeded.tooltip",
							scope: "global"
						}, {
							columnLimit: withCtx(() => [createTextVNode(toDisplayString(columnLimit.value), 1)]),
							link: withCtx(() => [createBaseVNode("a", { onClick: switchToJsonView }, toDisplayString(unref(i18n).baseText("dataMapping.tableView.tableColumnsExceeded.tooltip.link")), 1)]),
							_: 1
						})])]),
						default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style["warningTooltip"]),
							icon: "triangle-alert"
						}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText("dataMapping.tableView.tableColumnsExceeded")), 1)])]),
						_: 1
					})], 2)) : createCommentVNode("", true),
					createBaseVNode("th", { class: normalizeClass(_ctx.$style.tableRightMargin) }, null, 2)
				])]),
				createVNode(Draggable_default, {
					ref_key: "draggableRef",
					ref: draggableRef,
					tag: "tbody",
					type: "mapping",
					"target-data-key": "mappable",
					disabled: !__props.mappingEnabled,
					onDragstart: onCellDragStart,
					onDragend: onCellDragEnd
				}, {
					preview: withCtx(({ canDrop, el }) => [createVNode(MappingPill_default, {
						html: unref(shorten)(getPathNameFromTarget(el) || "", 16, 2),
						"can-drop": canDrop
					}, null, 8, ["html", "can-drop"])]),
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(tableData.value.data, (row, index1) => {
						return openBlock(), createElementBlock("tr", {
							key: index1,
							class: normalizeClass({ [_ctx.$style.hoveringRow]: isHoveringRow(index1) }),
							"data-test-id": isHoveringRow(index1) ? "hovering-item" : void 0
						}, [
							tableData.value.metadata.hasExecutionIds ? (openBlock(), createElementBlock("td", {
								key: 0,
								"data-row": index1,
								class: normalizeClass(_ctx.$style.executionLinkCell),
								onMouseenter: onMouseEnterCell,
								onMouseleave: onMouseLeaveCell
							}, [tableData.value.metadata.data[index1] ? (openBlock(), createBlock(unref(N8nTooltip_default), {
								key: 0,
								content: unref(i18n).baseText("runData.table.viewSubExecution", { interpolate: { id: `${tableData.value.metadata.data[index1]?.subExecution.executionId}` } }),
								placement: "left",
								"hide-after": 0
							}, {
								default: withCtx(() => [withDirectives(createVNode(unref(N8nIconButton_default), {
									variant: "subtle",
									icon: "external-link",
									"data-test-id": "debug-sub-execution",
									size: "xsmall",
									target: "_blank",
									href: unref(resolveRelatedExecutionUrl)(tableData.value.metadata.data[index1]),
									onClick: ($event) => unref(trackOpeningRelatedExecution)(tableData.value.metadata.data[index1], "table")
								}, null, 8, ["href", "onClick"]), [[vShow, showExecutionLink(index1)]])]),
								_: 2
							}, 1032, ["content"])) : createCommentVNode("", true)], 42, _hoisted_6)) : createCommentVNode("", true),
							(openBlock(true), createElementBlock(Fragment, null, renderList(row, (data, index2) => {
								return openBlock(), createElementBlock("td", {
									key: index2,
									"data-row": index1,
									"data-col": index2,
									class: normalizeClass([hasJsonInColumn(index2) ? _ctx.$style.minColWidth : _ctx.$style.limitColWidth, collapsingColumnIndex.value === index2 ? _ctx.$style.isCollapsingColumn : ""]),
									onMouseenter: onMouseEnterCell,
									onMouseleave: onMouseLeaveCell
								}, [isSimple(data) ? (openBlock(), createBlock(TextWithHighlights_default, {
									key: 0,
									content: getValueToRender(data),
									search: __props.search,
									class: normalizeClass({
										[_ctx.$style.value]: true,
										[_ctx.$style.empty]: isEmpty(data)
									})
								}, null, 8, [
									"content",
									"search",
									"class"
								])) : isObject(data) ? (openBlock(), createBlock(unref(N8nTree_default), {
									key: 1,
									"node-class": _ctx.$style.nodeClass,
									value: data
								}, {
									label: withCtx(({ label, path }) => [createVNode(TextWithHighlights_default, {
										"data-target": "mappable",
										class: normalizeClass({
											[_ctx.$style.hoveringKey]: __props.mappingEnabled && isHovering(path, index2),
											[_ctx.$style.draggingKey]: isDraggingKey(path, index2),
											[_ctx.$style.dataKey]: true,
											[_ctx.$style.mappable]: __props.mappingEnabled
										}),
										content: label || unref(i18n).baseText("runData.unnamedField"),
										search: __props.search,
										"data-name": getCellPathName(path, index2),
										"data-value": getCellExpression(path, index2),
										"data-depth": path.length,
										onMouseenter: () => onMouseEnterKey(path, index2),
										onMouseleave: onMouseLeaveKey
									}, null, 8, [
										"class",
										"content",
										"search",
										"data-name",
										"data-value",
										"data-depth",
										"onMouseenter"
									])]),
									binary: withCtx(({ value }) => [createVNode(BinaryEntryDataTable_default, { value }, null, 8, ["value"])]),
									value: withCtx(({ value }) => [createVNode(TextWithHighlights_default, {
										content: getValueToRender(value),
										search: __props.search,
										class: normalizeClass({
											[_ctx.$style.nestedValue]: true,
											[_ctx.$style.empty]: isEmpty(value)
										})
									}, null, 8, [
										"content",
										"search",
										"class"
									])]),
									_: 2
								}, 1032, ["node-class", "value"])) : createCommentVNode("", true)], 42, _hoisted_7);
							}), 128)),
							columnLimitExceeded.value ? (openBlock(), createElementBlock("td", _hoisted_8)) : createCommentVNode("", true),
							createBaseVNode("td", { class: normalizeClass(_ctx.$style.tableRightMargin) }, null, 2)
						], 10, _hoisted_5);
					}), 128))]),
					_: 1
				}, 8, ["disabled"])
			], 2))], 2);
		};
	}
});
//#endregion
//#region src/features/ndv/runData/components/RunDataTable.vue?vue&type=style&index=0&lang.module.scss
var dataDisplay = "_dataDisplay_d1fa2_388";
var compact = "_compact_d1fa2_400";
var table = "_table_d1fa2_404";
var lightHeader = "_lightHeader_d1fa2_421";
var tableRightMargin = "_tableRightMargin_d1fa2_424";
var hasCollapsingColumn = "_hasCollapsingColumn_d1fa2_459";
var isCollapsingColumn = "_isCollapsingColumn_d1fa2_462";
var nodeClass = "_nodeClass_d1fa2_491";
var emptyCell = "_emptyCell_d1fa2_495";
var header = "_header_d1fa2_499";
var draggableHeader = "_draggableHeader_d1fa2_511";
var dragButton = "_dragButton_d1fa2_515";
var highlight = "_highlight_d1fa2_519";
var draggingHeader = "_draggingHeader_d1fa2_523";
var activeHeader = "_activeHeader_d1fa2_528";
var dataKey = "_dataKey_d1fa2_539";
var value = "_value_d1fa2_548";
var nestedValue = "_nestedValue_d1fa2_552 _value_d1fa2_548";
var mappable = "_mappable_d1fa2_557";
var empty = "_empty_d1fa2_495";
var limitColWidth = "_limitColWidth_d1fa2_566";
var minColWidth = "_minColWidth_d1fa2_570";
var hoveringKey = "_hoveringKey_d1fa2_574";
var draggingKey = "_draggingKey_d1fa2_578";
var hoveringRow = "_hoveringRow_d1fa2_594";
var warningTooltip = "_warningTooltip_d1fa2_599";
var executionLinkCell = "_executionLinkCell_d1fa2_603";
var executionLinkRowHeader = "_executionLinkRowHeader_d1fa2_607";
var collapseColumnButton = "_collapseColumnButton_d1fa2_611";
var isHoveredColumn = "_isHoveredColumn_d1fa2_617";
var shimmer = "_shimmer_d1fa2_1";
var spin = "_spin_d1fa2_1";
var opacityPulse = "_opacityPulse_d1fa2_1";
var popoverIn = "_popoverIn_d1fa2_1";
var fadeIn = "_fadeIn_d1fa2_1";
var collapsibleSlideDown = "_collapsibleSlideDown_d1fa2_1";
var collapsibleSlideUp = "_collapsibleSlideUp_d1fa2_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_d1fa2_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_d1fa2_1";
var blurSwapIn = "_blurSwapIn_d1fa2_1";
var blurSwapOut = "_blurSwapOut_d1fa2_1";
var pulseGlow = "_pulseGlow_d1fa2_1";
var pulseGlowDelayed = "_pulseGlowDelayed_d1fa2_1";
var fade = "_fade_d1fa2_1";
var fadeInUp = "_fadeInUp_d1fa2_1";
var fadeInDown = "_fadeInDown_d1fa2_1";
var fadeInLeft = "_fadeInLeft_d1fa2_1";
var fadeInRight = "_fadeInRight_d1fa2_1";
var fadeOut = "_fadeOut_d1fa2_1";
var fadeOutDown = "_fadeOutDown_d1fa2_1";
var fadeOutUp = "_fadeOutUp_d1fa2_1";
var fadeOutLeft = "_fadeOutLeft_d1fa2_1";
var fadeOutRight = "_fadeOutRight_d1fa2_1";
var ping = "_ping_d1fa2_1";
var blinkBackground = "_blinkBackground_d1fa2_1";
var typingBlink = "_typingBlink_d1fa2_1";
var RunDataTable_vue_vue_type_style_index_0_lang_module_default = {
	dataDisplay,
	compact,
	table,
	lightHeader,
	tableRightMargin,
	hasCollapsingColumn,
	isCollapsingColumn,
	nodeClass,
	emptyCell,
	header,
	draggableHeader,
	dragButton,
	highlight,
	draggingHeader,
	activeHeader,
	dataKey,
	value,
	nestedValue,
	mappable,
	empty,
	limitColWidth,
	minColWidth,
	hoveringKey,
	draggingKey,
	hoveringRow,
	warningTooltip,
	executionLinkCell,
	executionLinkRowHeader,
	collapseColumnButton,
	isHoveredColumn,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_d1fa2_1",
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
var RunDataTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunDataTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RunDataTable_default as default };
