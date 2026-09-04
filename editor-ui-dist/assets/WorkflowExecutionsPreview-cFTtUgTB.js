import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, Ut as toValue, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, at as resolveComponent, bt as withCtx, gt as watch, j as createVNode, ot as resolveDirective, rt as renderList, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { c as useWorkflowHistoryStore } from "./builder.store-DisrfU0l.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { n as ElDropdownItem, r as ElDropdownMenu, t as ElDropdown } from "./dropdown-D0HKKN-a.js";
import { t as ElTag } from "./tag-BtOB2CGC.js";
import { n as useEvaluationsWizardSidepanelStore, t as NodeView_default } from "./NodeView-CXQ8Aey3.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { C as createExecutionPreviewDocumentId, E as disposeWorkflowDocumentStore, T as createWorkflowDocumentId, _ as disposeWorkflowExecutionStateStore, bi as hasExecutionDataStore, k as useWorkflowDocumentStore, sn as disposeNDVStore, t as useWorkflowsStore, u as getExecutionErrorToastConfiguration, un as useNDVStore, vi as createExecutionDataId, w as createExecutionPreviewDocumentVersion, xi as useExecutionDataStore, y as useWorkflowExecutionStateStore, yi as disposeExecutionDataStore } from "./workflows.store-qP-dtzSs.js";
import { t as N8nSpinner_default } from "./N8nSpinner-Bv5yOPi4.js";
import { Ea as getResourcePermissions, Ei as deepCopy, Fn as isTerminalExecutionStatus } from "./src-B255AdRt.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { Vr as ADD_EXECUTION_TO_DATASET_MODAL_KEY, ca as EditorEnabledFeaturesKey, ga as WorkflowIdKey, ha as WorkflowDocumentStoreKey, no as EnterpriseEditionFeature } from "./constants-CMdL1Kzl.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-y-0nsqzo.js";
import { n as useUIStore } from "./ui.store-xzfQIfPK.js";
import { t as useEvaluationStore } from "./evaluation.store-TsSui26m.js";
import { t as useExternalHooks } from "./useExternalHooks-DrK-vwAp.js";
import { t as useExecutionsStore } from "./executions.store-C_bv7G2S.js";
import { F as useWorkflowNormalization, p as useLogsStore } from "./useCanvasOperations-LJDHn9ZZ.js";
import { t as canvasEventBus } from "./canvas.eventBus-BsKubWWE.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-DSOde93b.js";
import { t as convertToDisplayDate } from "./dateFormatter-CW32wdc_.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-DfCMMI3B.js";
import { n as LogsPanel_default, t as useExecutionDebugging } from "./useExecutionDebugging-CmIpJyK7.js";
import { n as useEvaluationsWizardSidepanelExperiment } from "./EvaluationsPaywall-o77G_tMA.js";
import { t as formatBytes } from "./bytes-CpzkhzUN.js";
import { t as AnnotationTagsDropdown_ee_default } from "./AnnotationTagsDropdown.ee-C-TNM_DM.js";
//#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationPanel.ee.vue?vue&type=script&setup=true&lang.ts
var WorkflowExecutionAnnotationPanel_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionAnnotationPanel.ee",
	props: { execution: {} },
	setup(__props) {
		const props = __props;
		const workflowsListStore = useWorkflowsListStore();
		const i18n = useI18n();
		const annotationDropdownRef = ref(null);
		const isDropdownVisible = ref(false);
		const workflowId = useInjectWorkflowId();
		const workflowPermissions = computed(() => getResourcePermissions(workflowsListStore.getWorkflowById(workflowId.value)?.scopes).workflow);
		const customDataLength = computed(() => {
			return props.execution?.customData ? Object.keys(props.execution?.customData).length : 0;
		});
		function onEllipsisButtonBlur(event) {
			if (annotationDropdownRef.value && event.relatedTarget === null) annotationDropdownRef.value.handleClose();
		}
		function onDropdownVisibleChange(visible) {
			isDropdownVisible.value = visible;
		}
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return __props.execution ? (openBlock(), createBlock(unref(ElDropdown), {
				key: 0,
				ref_key: "annotationDropdownRef",
				ref: annotationDropdownRef,
				trigger: "click",
				onVisibleChange: onDropdownVisibleChange
			}, {
				dropdown: withCtx(() => [createBaseVNode("div", {
					ref: "container",
					class: normalizeClass(["execution-annotation-panel", _ctx.$style.container]),
					"data-test-id": "execution-annotation-panel"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.annotationData")), 1)]),
					_: 1
				})], 2), __props.execution?.customData && Object.keys(__props.execution?.customData).length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.metadata)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(__props.execution?.customData), (attr) => {
					return openBlock(), createElementBlock("div", {
						key: attr,
						class: normalizeClass(_ctx.$style.customDataEntry)
					}, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.key),
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(attr), 1)]),
						_: 2
					}, 1032, ["class"]), createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.value),
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.execution?.customData[attr]), 1)]),
						_: 2
					}, 1032, ["class"])], 2);
				}), 128))], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.noResultsContainer),
					"data-test-id": "execution-annotation-data-empty"
				}, [createVNode(unref(N8nText_default), {
					color: "text-base",
					size: "small",
					align: "center"
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("executionAnnotationView.data.notFound")]])]),
					_: 1
				})], 2))], 2)], 2)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					title: unref(i18n).baseText("executionDetails.additionalActions"),
					disabled: !workflowPermissions.value.update,
					icon: "list-checks",
					class: normalizeClass({
						[_ctx.$style.highlightDataButton]: true,
						[_ctx.$style.highlightDataButtonActive]: customDataLength.value > 0,
						[_ctx.$style.highlightDataButtonOpen]: isDropdownVisible.value
					}),
					size: "small",
					"data-test-id": "execution-preview-ellipsis-button",
					onBlur: onEllipsisButtonBlur
				}, {
					default: withCtx(() => [customDataLength.value > 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.badge),
						theme: "primary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(customDataLength.value.toString()), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"title",
					"disabled",
					"class"
				])]),
				_: 1
			}, 512)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationPanel.ee.vue?vue&type=style&index=0&lang.module.scss
var highlightDataButton$1 = "_highlightDataButton_jhncz_388";
var highlightDataButtonActive$1 = "_highlightDataButtonActive_jhncz_393";
var highlightDataButtonOpen$1 = "_highlightDataButtonOpen_jhncz_397";
var badge$1 = "_badge_jhncz_403";
var container = "_container_jhncz_407";
var section = "_section_jhncz_419";
var metadata = "_metadata_jhncz_428";
var heading = "_heading_jhncz_432";
var controls = "_controls_jhncz_439";
var customDataEntry = "_customDataEntry_jhncz_451";
var key = "_key_jhncz_458";
var noResultsContainer = "_noResultsContainer_jhncz_462";
var shimmer$4 = "_shimmer_jhncz_1";
var spin$4 = "_spin_jhncz_1";
var opacityPulse$4 = "_opacityPulse_jhncz_1";
var popoverIn$4 = "_popoverIn_jhncz_1";
var fadeIn$4 = "_fadeIn_jhncz_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_jhncz_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_jhncz_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_jhncz_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_jhncz_1";
var blurSwapIn$4 = "_blurSwapIn_jhncz_1";
var blurSwapOut$4 = "_blurSwapOut_jhncz_1";
var pulseGlow$4 = "_pulseGlow_jhncz_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_jhncz_1";
var fade$4 = "_fade_jhncz_1";
var fadeInUp$4 = "_fadeInUp_jhncz_1";
var fadeInDown$4 = "_fadeInDown_jhncz_1";
var fadeInLeft$4 = "_fadeInLeft_jhncz_1";
var fadeInRight$4 = "_fadeInRight_jhncz_1";
var fadeOut$4 = "_fadeOut_jhncz_1";
var fadeOutDown$4 = "_fadeOutDown_jhncz_1";
var fadeOutUp$4 = "_fadeOutUp_jhncz_1";
var fadeOutLeft$4 = "_fadeOutLeft_jhncz_1";
var fadeOutRight$4 = "_fadeOutRight_jhncz_1";
var ping$4 = "_ping_jhncz_1";
var blinkBackground$4 = "_blinkBackground_jhncz_1";
var typingBlink$4 = "_typingBlink_jhncz_1";
var WorkflowExecutionAnnotationPanel_ee_vue_vue_type_style_index_0_lang_module_default = {
	highlightDataButton: highlightDataButton$1,
	highlightDataButtonActive: highlightDataButtonActive$1,
	highlightDataButtonOpen: highlightDataButtonOpen$1,
	badge: badge$1,
	container,
	section,
	metadata,
	heading,
	controls,
	customDataEntry,
	key,
	noResultsContainer,
	"execution-annotation-panel": "_execution-annotation-panel_jhncz_467",
	"el-skeleton__item": "_el-skeleton__item_jhncz_467",
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_jhncz_1",
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
var WorkflowExecutionAnnotationPanel_ee_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionAnnotationPanel_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionAnnotationPanel_ee_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationTags.ee.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 1 };
var WorkflowExecutionAnnotationTags_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionAnnotationTags.ee",
	props: { execution: {} },
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const telemetry = useTelemetry();
		const { showError } = useToast();
		const executionsStore = useExecutionsStore();
		const tagIds = computed(() => props.execution.annotation?.tags.map((tag) => tag.id) ?? []);
		const tags = computed(() => props.execution.annotation?.tags);
		const tagsEventBus = createEventBus();
		const isTagsEditEnabled = ref(false);
		const appliedTagIds = ref([]);
		const tagsSaving = ref(false);
		const tagsHasChanged = (prev, curr) => {
			if (prev.length !== curr.length) return true;
			const set = new Set(prev);
			return curr.reduce((acc, val) => acc || !set.has(val), false);
		};
		const onTagsEditEnable = () => {
			appliedTagIds.value = tagIds.value;
			isTagsEditEnabled.value = true;
			tagsEventBus.emit("focus");
		};
		const onTagsBlur = async () => {
			if (!props.execution) return;
			const currentTagIds = tagIds.value ?? [];
			const newTagIds = appliedTagIds.value;
			if (!tagsHasChanged(currentTagIds, newTagIds)) {
				isTagsEditEnabled.value = false;
				return;
			}
			if (tagsSaving.value) return;
			tagsSaving.value = true;
			try {
				await executionsStore.annotateExecution(props.execution.id, { tags: newTagIds });
				if (newTagIds.length > 0) telemetry.track("User added execution annotation tag", {
					tag_ids: newTagIds,
					execution_id: props.execution.id
				});
			} catch (e) {
				showError(e, "executionAnnotationView.tag.error");
			}
			tagsSaving.value = false;
			isTagsEditEnabled.value = false;
		};
		const onTagsEditEsc = () => {
			isTagsEditEnabled.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.executionDetailsTags) }, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.tags),
				"data-test-id": "annotation-tags-container"
			}, [isTagsEditEnabled.value ? (openBlock(), createBlock(AnnotationTagsDropdown_ee_default, {
				key: 0,
				ref: "dropdown",
				modelValue: appliedTagIds.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appliedTagIds.value = $event),
				"create-enabled": true,
				"event-bus": unref(tagsEventBus),
				placeholder: unref(locale).baseText("executionAnnotationView.chooseOrCreateATag"),
				class: "tags-edit",
				"data-test-id": "workflow-tags-dropdown",
				onBlur: onTagsBlur,
				onEsc: onTagsEditEsc
			}, null, 8, [
				"modelValue",
				"event-bus",
				"placeholder"
			])) : tagIds.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nButton_default), {
				variant: "ghost",
				class: normalizeClass([_ctx.$style.addTagButton, "clickable"]),
				label: unref(locale).baseText("executionAnnotationView.addTag"),
				size: "xsmall",
				outline: false,
				"data-test-id": "new-tag-link",
				icon: "plus",
				onClick: onTagsEditEnable
			}, null, 8, ["class", "label"])])) : (openBlock(), createElementBlock("span", {
				key: 2,
				class: normalizeClass(["tags-container", _ctx.$style.tagsContainer]),
				"data-test-id": "execution-annotation-tags",
				onClick: onTagsEditEnable
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag) => {
				return openBlock(), createElementBlock("span", {
					key: tag.id,
					class: "clickable"
				}, [createVNode(unref(ElTag), {
					title: tag.name,
					type: "info",
					size: "small",
					"disable-transitions": true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(tag.name), 1)]),
					_: 2
				}, 1032, ["title"])]);
			}), 128)), createBaseVNode("span", { class: normalizeClass(_ctx.$style.addTagWrapper) }, [createVNode(unref(N8nButton_default), {
				variant: "ghost",
				class: normalizeClass([
					_ctx.$style.addTagButton,
					_ctx.$style.addTagButtonIconOnly,
					"clickable"
				]),
				size: "xsmall",
				outline: false,
				"data-test-id": "new-tag-link",
				icon: "plus",
				onClick: onTagsEditEnable
			}, null, 8, ["class"])], 2)], 2))], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionAnnotationTags.ee.vue?vue&type=style&index=0&lang.module.scss
var tags = "_tags_1obqo_388";
var addTagButton = "_addTagButton_1obqo_393";
var addTagButtonIconOnly = "_addTagButtonIconOnly_1obqo_414";
var tagsContainer = "_tagsContainer_1obqo_419";
var shimmer$3 = "_shimmer_1obqo_1";
var spin$3 = "_spin_1obqo_1";
var opacityPulse$3 = "_opacityPulse_1obqo_1";
var popoverIn$3 = "_popoverIn_1obqo_1";
var fadeIn$3 = "_fadeIn_1obqo_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_1obqo_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_1obqo_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_1obqo_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_1obqo_1";
var blurSwapIn$3 = "_blurSwapIn_1obqo_1";
var blurSwapOut$3 = "_blurSwapOut_1obqo_1";
var pulseGlow$3 = "_pulseGlow_1obqo_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_1obqo_1";
var fade$3 = "_fade_1obqo_1";
var fadeInUp$3 = "_fadeInUp_1obqo_1";
var fadeInDown$3 = "_fadeInDown_1obqo_1";
var fadeInLeft$3 = "_fadeInLeft_1obqo_1";
var fadeInRight$3 = "_fadeInRight_1obqo_1";
var fadeOut$3 = "_fadeOut_1obqo_1";
var fadeOutDown$3 = "_fadeOutDown_1obqo_1";
var fadeOutUp$3 = "_fadeOutUp_1obqo_1";
var fadeOutLeft$3 = "_fadeOutLeft_1obqo_1";
var fadeOutRight$3 = "_fadeOutRight_1obqo_1";
var ping$3 = "_ping_1obqo_1";
var blinkBackground$3 = "_blinkBackground_1obqo_1";
var typingBlink$3 = "_typingBlink_1obqo_1";
var WorkflowExecutionAnnotationTags_ee_vue_vue_type_style_index_0_lang_module_default = {
	tags,
	addTagButton,
	addTagButtonIconOnly,
	tagsContainer,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_1obqo_1",
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
var WorkflowExecutionAnnotationTags_ee_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionAnnotationTags_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionAnnotationTags_ee_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/composables/useExecutionPreviewDocument.ts
/**
* Loads an execution for read-only preview into a fully isolated set of
* stores, keyed by the synthetic `{workflowId}@execution-preview` document id.
*
* This is the side-effect-free counterpart of
* `useCanvasOperations.openExecution()` (which serves "Debug in editor" and
* deliberately writes the editor's `{workflowId}@latest` stores): it performs
* NO `resetWorkspace`, NO `initState`, NO `workflowsStore.setWorkflowId`, and
* NO `uiStore.markStateClean` — loading a preview must never affect the
* editor's (possibly dirty) state, which stays alive across the
* editor/executions tab switch (`keepWorkflowAlive`).
*/
function useExecutionPreviewDocument(options) {
	const i18n = useI18n();
	const toast = useToast();
	const telemetry = useTelemetry();
	const externalHooks = useExternalHooks();
	const workflowsStore = useWorkflowsStore();
	const logsStore = useLogsStore();
	const { normalizeWorkflowData } = useWorkflowNormalization();
	/** Provide this under `WorkflowDocumentStoreKey`; null until the first load completes. */
	const documentStore = shallowRef(null);
	const execution = shallowRef(null);
	const isLoading = ref(false);
	const loadError = ref(null);
	/**
	* Every execution id this preview session has loaded. Per-execution data
	* stores are keyed app-wide by bare execution id, so previously viewed
	* executions render instantly when re-selected — they are released in
	* `dispose()`, except ids the editor's own state store still references.
	*/
	const loadedExecutionIds = /* @__PURE__ */ new Set();
	/**
	* Every preview document id this session has hydrated — one per distinct
	* executed workflow version (executions of the same version share a store).
	* All are released in `dispose()`.
	*/
	const loadedDocumentIds = /* @__PURE__ */ new Set();
	let latestLoadRequestId = 0;
	/**
	* The workflow id shared by every execution this session previews (all
	* documents/executions belong to the executions-tab workflow). Captured on
	* each successful load so `dispose()` can still resolve the editor-referenced
	* ids to protect even after a failed load nulled `documentStore`.
	*/
	let previewWorkflowId;
	/**
	* Marks an execution as most-recently-used. `Set` preserves insertion order
	* but `add()` is a no-op for an existing key, so re-add it to move it to the
	* tail (the front is then the least-recently-used eviction candidate).
	*/
	function touchLoadedExecution(executionId) {
		loadedExecutionIds.delete(executionId);
		loadedExecutionIds.add(executionId);
	}
	/**
	* Caps retained per-execution data stores at `MAX_PREVIEW_EXECUTIONS_IN_MEMORY`
	* by disposing the least-recently-used ones. Never evicts the execution just
	* loaded, nor any the editor's `{workflowId}@latest` session still references
	* (disposing those would blank the editor's run data) — when all retained ids
	* are protected the count simply stays above the cap.
	*/
	function evictLeastRecentlyUsedExecutions(currentExecutionId, workflowId) {
		const protectedExecutionIds = getEditorReferencedExecutionIds(workflowId);
		protectedExecutionIds.add(currentExecutionId);
		let retainedCount = loadedExecutionIds.size;
		for (const candidateExecutionId of [...loadedExecutionIds]) {
			if (retainedCount <= 10) break;
			if (protectedExecutionIds.has(candidateExecutionId)) continue;
			disposeExecutionDataStore(useExecutionDataStore(createExecutionDataId(candidateExecutionId)));
			loadedExecutionIds.delete(candidateExecutionId);
			retainedCount -= 1;
		}
	}
	/**
	* Production executions hide pin data and render production-only UI.
	* Derived from the execution itself (the per-instance
	* `useNodeHelpers().isProductionExecutionPreview` ref never reliably
	* crossed composable instances).
	*/
	const isProductionExecutionPreview = computed(() => execution.value !== null && !["manual", "evaluation"].includes(execution.value.mode));
	function getReusableExecution(executionId) {
		if (!loadedExecutionIds.has(executionId)) return null;
		const executionDataId = createExecutionDataId(executionId);
		if (!hasExecutionDataStore(executionDataId)) return null;
		const snapshot = useExecutionDataStore(executionDataId).getExecutionSnapshot();
		return snapshot && isTerminalExecutionStatus(snapshot.status) ? snapshot : null;
	}
	async function load() {
		const executionId = toValue(options.executionId);
		const requestId = ++latestLoadRequestId;
		isLoading.value = true;
		loadError.value = null;
		try {
			const data = getReusableExecution(executionId) ?? await workflowsStore.getExecution(executionId);
			if (requestId !== latestLoadRequestId) return;
			if (data === void 0) throw new Error(`Execution with id "${executionId}" could not be found!`);
			const resultData = data.data?.resultData;
			if (data.status === "error" && resultData?.error) {
				const { title, message } = getExecutionErrorToastConfiguration({
					error: resultData.error,
					lastNodeExecuted: resultData.lastNodeExecuted
				});
				toast.showMessage({
					title,
					message,
					type: "error",
					duration: 0
				});
			} else if (!data.finished && resultData?.error) {
				if (!Object.values(resultData.runData ?? {}).some((tasks) => tasks.some((task) => task.error))) toast.showMessage({
					title: i18n.baseText("nodeView.showError.workflowError"),
					message: resultData.error.message,
					type: "error",
					duration: 0
				});
			}
			const workflowId = data.workflowData.id;
			previewWorkflowId = workflowId;
			const documentVersion = createExecutionPreviewDocumentVersion(data.workflowData.versionId);
			const documentId = createExecutionPreviewDocumentId(workflowId, data.workflowData.versionId);
			const scopedDocumentStore = useWorkflowDocumentStore(documentId);
			const { nodes, connections } = normalizeWorkflowData(data.workflowData);
			scopedDocumentStore.hydrate({
				...data.workflowData,
				nodes,
				connections,
				versionId: documentVersion
			});
			useWorkflowExecutionStateStore(documentId).setWorkflowExecutionData(data);
			touchLoadedExecution(executionId);
			evictLeastRecentlyUsedExecutions(executionId, workflowId);
			loadedDocumentIds.add(documentId);
			if (!["manual", "evaluation"].includes(data.mode)) scopedDocumentStore.setPinData({});
			execution.value = data;
			documentStore.value = scopedDocumentStore;
			if (data.dataTooLargeToDisplay) logsStore.toggleOpen(true);
			externalHooks.run("execution.open", {
				workflowId: data.workflowData.id,
				workflowName: data.workflowData.name,
				executionId
			});
			telemetry.track("User opened read-only execution", {
				workflow_id: data.workflowData.id,
				execution_mode: data.mode,
				execution_finished: data.finished
			});
		} catch (error) {
			if (requestId === latestLoadRequestId) {
				loadError.value = error instanceof Error ? error : new Error(String(error));
				documentStore.value = null;
				execution.value = null;
			}
		} finally {
			if (requestId === latestLoadRequestId) isLoading.value = false;
		}
	}
	/**
	* Execution ids the editor's `{workflowId}@latest` session still references
	* — e.g. the user ran the workflow manually and then previewed that same
	* execution. Releasing those would blank the editor's displayed run data.
	*/
	function getEditorReferencedExecutionIds(workflowId) {
		const editorStateStore = useWorkflowExecutionStateStore(createWorkflowDocumentId(workflowId));
		const ids = /* @__PURE__ */ new Set();
		for (const id of [
			editorStateStore.activeExecutionId,
			editorStateStore.displayedExecutionId,
			editorStateStore.previousExecutionId,
			editorStateStore.lastSuccessfulExecutionId
		]) if (typeof id === "string") ids.add(id);
		return ids;
	}
	function dispose() {
		latestLoadRequestId += 1;
		if (previewWorkflowId !== void 0) {
			const editorReferencedIds = getEditorReferencedExecutionIds(previewWorkflowId);
			for (const executionId of loadedExecutionIds) {
				if (editorReferencedIds.has(executionId)) continue;
				disposeExecutionDataStore(useExecutionDataStore(createExecutionDataId(executionId)));
			}
		}
		for (const documentId of loadedDocumentIds) {
			disposeNDVStore(useNDVStore(documentId));
			disposeWorkflowExecutionStateStore(useWorkflowExecutionStateStore(documentId));
			disposeWorkflowDocumentStore(useWorkflowDocumentStore(documentId));
		}
		loadedDocumentIds.clear();
		loadedExecutionIds.clear();
		previewWorkflowId = void 0;
		documentStore.value = null;
		execution.value = null;
		loadError.value = null;
		isLoading.value = false;
	}
	return {
		documentStore,
		execution,
		isLoading,
		loadError,
		isProductionExecutionPreview,
		load,
		dispose
	};
}
//#endregion
//#region src/features/execution/executions/components/workflow/ExecutionPreviewHost.vue?vue&type=script&setup=true&lang.ts
var ExecutionPreviewHost_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ExecutionPreviewHost",
	props: {
		workflowId: {},
		executionId: {},
		nodeId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		provide(WorkflowIdKey, computed(() => props.workflowId));
		const preview = useExecutionPreviewDocument({ executionId: () => props.executionId });
		provide(WorkflowDocumentStoreKey, preview.documentStore);
		provide(EditorEnabledFeaturesKey, computed(() => ({
			readOnly: true,
			aiAssistant: false,
			aiBuilder: false,
			askAi: false,
			executionSuccessToasts: false,
			executionErrorToasts: false,
			expandGroups: "errored"
		})));
		const isReady = computed(() => preview.documentStore.value !== null);
		const hasExecutionData = computed(() => preview.execution.value !== null);
		const hasLoadError = computed(() => preview.loadError.value !== null && !preview.isLoading.value);
		function openDeepLinkedNode() {
			const documentStore = preview.documentStore.value;
			if (!documentStore || !props.nodeId) return;
			const node = documentStore.getNodeById(props.nodeId);
			if (node) useNDVStore(documentStore.documentId).setActiveNodeName(node.name, "other");
		}
		async function loadExecution() {
			const previousDocumentId = preview.documentStore.value?.documentId;
			if (previousDocumentId) useNDVStore(previousDocumentId).unsetActiveNodeName();
			await preview.load();
			const documentStore = preview.documentStore.value;
			if (!documentStore) return;
			openDeepLinkedNode();
			if (previousDocumentId !== void 0 && previousDocumentId !== documentStore.documentId) {
				const connections = deepCopy(documentStore.connectionsBySourceNode);
				documentStore.setConnections({});
				canvasEventBus.emit("setConnections:onNodesInit", connections);
				canvasEventBus.emit("fitView:onNodesInit");
			} else {
				await nextTick();
				canvasEventBus.emit("fitView");
			}
		}
		onMounted(loadExecution);
		watch(() => props.executionId, loadExecution);
		watch(() => props.nodeId, openDeepLinkedNode);
		onUnmounted(() => {
			preview.dispose();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.host),
				"data-test-id": "execution-preview-host"
			}, [isReady.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.canvas) }, [createVNode(NodeView_default), unref(preview).isLoading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.loadingOverlay)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "loader-circle",
				size: 48,
				spin: ""
			})], 2)) : createCommentVNode("", true)], 2), hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				class: normalizeClass(_ctx.$style.logs),
				"is-read-only": true
			}, null, 8, ["class"])) : createCommentVNode("", true)], 64)) : hasLoadError.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.centerState),
				"data-test-id": "execution-preview-error"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "triangle-alert",
				color: "danger",
				size: 48
			}), createVNode(unref(N8nText_default), {
				color: "text-dark",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeView.showError.openExecution.title")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createElementBlock("div", {
				key: 2,
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
//#region src/features/execution/executions/components/workflow/ExecutionPreviewHost.vue?vue&type=style&index=0&lang.module.scss
var host = "_host_1blz5_388";
var canvas = "_canvas_1blz5_398";
var loadingOverlay = "_loadingOverlay_1blz5_405";
var logs = "_logs_1blz5_415";
var centerState = "_centerState_1blz5_419";
var shimmer$2 = "_shimmer_1blz5_1";
var spin$2 = "_spin_1blz5_1";
var opacityPulse$2 = "_opacityPulse_1blz5_1";
var popoverIn$2 = "_popoverIn_1blz5_1";
var fadeIn$2 = "_fadeIn_1blz5_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1blz5_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1blz5_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1blz5_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1blz5_1";
var blurSwapIn$2 = "_blurSwapIn_1blz5_1";
var blurSwapOut$2 = "_blurSwapOut_1blz5_1";
var pulseGlow$2 = "_pulseGlow_1blz5_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1blz5_1";
var fade$2 = "_fade_1blz5_1";
var fadeInUp$2 = "_fadeInUp_1blz5_1";
var fadeInDown$2 = "_fadeInDown_1blz5_1";
var fadeInLeft$2 = "_fadeInLeft_1blz5_1";
var fadeInRight$2 = "_fadeInRight_1blz5_1";
var fadeOut$2 = "_fadeOut_1blz5_1";
var fadeOutDown$2 = "_fadeOutDown_1blz5_1";
var fadeOutUp$2 = "_fadeOutUp_1blz5_1";
var fadeOutLeft$2 = "_fadeOutLeft_1blz5_1";
var fadeOutRight$2 = "_fadeOutRight_1blz5_1";
var ping$2 = "_ping_1blz5_1";
var blinkBackground$2 = "_blinkBackground_1blz5_1";
var typingBlink$2 = "_typingBlink_1blz5_1";
var ExecutionPreviewHost_vue_vue_type_style_index_0_lang_module_default = {
	host,
	canvas,
	loadingOverlay,
	logs,
	centerState,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1blz5_1",
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
var ExecutionPreviewHost_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ExecutionPreviewHost_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ExecutionPreviewHost_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/composables/useAddExecutionToDataset.ts
/**
* Gating + open logic for adding a successful execution to an evaluation
* dataset. The action is only available when the config-evals experiment is on,
* and is only enabled once the workflow has at least one data-table-backed
* evaluation config.
*/
function useAddExecutionToDataset(workflowId) {
	const evaluationStore = useEvaluationStore();
	const uiStore = useUIStore();
	const { isFeatureEnabled } = useEvaluationsWizardSidepanelExperiment();
	const dataTableConfigs = ref([]);
	const hasDataTableConfig = computed(() => dataTableConfigs.value.length > 0);
	async function fetchDataTableConfigs() {
		if (!isFeatureEnabled.value) return;
		try {
			dataTableConfigs.value = (await evaluationStore.fetchEvaluationConfigs(toValue(workflowId))).filter((config) => config.datasetSource === "data_table");
		} catch {
			dataTableConfigs.value = [];
		}
	}
	function openModal(executionId) {
		uiStore.openModalWithData({
			name: ADD_EXECUTION_TO_DATASET_MODAL_KEY,
			data: {
				workflowId: toValue(workflowId),
				executionId,
				configs: dataTableConfigs.value
			}
		});
	}
	return {
		isFeatureEnabled,
		hasDataTableConfig,
		fetchDataTableConfigs,
		openModal
	};
}
//#endregion
//#region src/features/execution/executions/components/workflow/VoteButtons.vue?vue&type=script&setup=true&lang.ts
var VoteButtons_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VoteButtons",
	props: { vote: {} },
	emits: ["vote-click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const onVoteClick = (vote) => {
			emit("vote-click", vote);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.ratingIcon) }, [createVNode(unref(N8nIconButton_default), {
				variant: "ghost",
				class: normalizeClass([_ctx.$style.icon, __props.vote === "up" && _ctx.$style.up]),
				size: "small",
				icon: "thumbs-up",
				onClick: _cache[0] || (_cache[0] = ($event) => onVoteClick("up"))
			}, null, 8, ["class"]), createVNode(unref(N8nIconButton_default), {
				variant: "ghost",
				class: normalizeClass([_ctx.$style.icon, __props.vote === "down" && _ctx.$style.down]),
				size: "small",
				icon: "thumbs-down",
				onClick: _cache[1] || (_cache[1] = ($event) => onVoteClick("down"))
			}, null, 8, ["class"])], 2);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/workflow/VoteButtons.vue?vue&type=style&index=0&lang.module.scss
var ratingIcon = "_ratingIcon_14qv9_388";
var icon = "_icon_14qv9_392";
var up = "_up_14qv9_395";
var down = "_down_14qv9_395";
var shimmer$1 = "_shimmer_14qv9_1";
var spin$1 = "_spin_14qv9_1";
var opacityPulse$1 = "_opacityPulse_14qv9_1";
var popoverIn$1 = "_popoverIn_14qv9_1";
var fadeIn$1 = "_fadeIn_14qv9_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_14qv9_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_14qv9_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_14qv9_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_14qv9_1";
var blurSwapIn$1 = "_blurSwapIn_14qv9_1";
var blurSwapOut$1 = "_blurSwapOut_14qv9_1";
var pulseGlow$1 = "_pulseGlow_14qv9_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_14qv9_1";
var fade$1 = "_fade_14qv9_1";
var fadeInUp$1 = "_fadeInUp_14qv9_1";
var fadeInDown$1 = "_fadeInDown_14qv9_1";
var fadeInLeft$1 = "_fadeInLeft_14qv9_1";
var fadeInRight$1 = "_fadeInRight_14qv9_1";
var fadeOut$1 = "_fadeOut_14qv9_1";
var fadeOutDown$1 = "_fadeOutDown_14qv9_1";
var fadeOutUp$1 = "_fadeOutUp_14qv9_1";
var fadeOutLeft$1 = "_fadeOutLeft_14qv9_1";
var fadeOutRight$1 = "_fadeOutRight_14qv9_1";
var ping$1 = "_ping_14qv9_1";
var blinkBackground$1 = "_blinkBackground_14qv9_1";
var typingBlink$1 = "_typingBlink_14qv9_1";
var VoteButtons_vue_vue_type_style_index_0_lang_module_default = {
	ratingIcon,
	icon,
	up,
	down,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_14qv9_1",
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
var VoteButtons_default = /* @__PURE__ */ _plugin_vue_export_helper_default(VoteButtons_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": VoteButtons_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsPreview.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var _hoisted_2 = { class: "retry-button" };
var WorkflowExecutionsPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsPreview",
	props: { execution: {} },
	emits: [
		"deleteCurrentExecution",
		"retryExecution",
		"stopExecution"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const route = useRoute();
		const locale = useI18n();
		const { showError } = useToast();
		const executionHelpers = useExecutionHelpers();
		const message = useMessage();
		const executionDebugging = useExecutionDebugging();
		const workflowsListStore = useWorkflowsListStore();
		const settingsStore = useSettingsStore();
		const retryDropdownRef = ref(null);
		const workflowId = useInjectWorkflowId();
		const workflowPermissions = computed(() => getResourcePermissions(workflowsListStore.getWorkflowById(workflowId.value)?.scopes).workflow);
		const executionId = computed(() => route.params.executionId);
		const nodeId = computed(() => route.params.nodeId);
		const executionUIDetails = computed(() => props.execution ? executionHelpers.getUIDetails(props.execution) : null);
		const debugButtonData = computed(() => props.execution?.status === "success" ? {
			text: locale.baseText("executionsList.debug.button.copyToEditor"),
			type: "secondary"
		} : {
			text: locale.baseText("executionsList.debug.button.debugInEditor"),
			type: "primary"
		});
		const isRetriable = computed(() => !!props.execution && executionHelpers.isExecutionRetriable(props.execution));
		const { isFeatureEnabled: isAddToDatasetFeatureEnabled } = useAddExecutionToDataset(workflowId);
		const router = useRouter();
		const evaluationsWizardStore = useEvaluationsWizardSidepanelStore();
		const showAddToDataset = computed(() => isAddToDatasetFeatureEnabled.value && props.execution?.status === "success" && props.execution?.mode !== "evaluation");
		async function onAddToDatasetClick() {
			if (!props.execution) return;
			try {
				const full = await executionsStore.fetchExecution(props.execution.id);
				if (!full) return;
				evaluationsWizardStore.setPendingSeedExecution(full);
				await router.push({
					name: VIEWS.WORKFLOW,
					params: { workflowId: workflowId.value }
				});
			} catch (error) {
				showError(error, locale.baseText("evaluations.tests.seedFromExecution.error"));
			}
		}
		const isAnnotationEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
		const hasAnnotation = computed(() => !!props.execution?.annotation && (props.execution?.annotation.vote || props.execution?.annotation.tags.length > 0));
		const executionsStore = useExecutionsStore();
		const workflowHistoryStore = useWorkflowHistoryStore();
		const workflowVersion = ref(null);
		const workflowVersionLabel = computed(() => {
			if (!workflowVersion.value) return void 0;
			return workflowVersion.value.name ?? locale.baseText("executionDetails.versionAutosave");
		});
		const workflowVersionTooltip = computed(() => {
			if (!workflowVersion.value) return void 0;
			const { date, time } = convertToDisplayDate(workflowVersion.value.createdAt);
			return locale.baseText("executionDetails.versionTooltip", { interpolate: { date: `${date} ${time}` } });
		});
		const workflowVersionRoute = computed(() => {
			if (!workflowVersion.value) return null;
			return {
				name: VIEWS.WORKFLOW_HISTORY,
				params: {
					workflowId: workflowVersion.value.workflowId,
					versionId: workflowVersion.value.versionId
				}
			};
		});
		const executionMetaText = computed(() => {
			if (!executionUIDetails.value) return null;
			if (executionUIDetails.value.showTimestamp === false) return null;
			if (executionUIDetails.value.name === "running") return locale.baseText("executionDetails.runningTimeRunning", { interpolate: { time: executionUIDetails.value.runningTime } });
			if (executionUIDetails.value.name !== "waiting") return locale.baseText("executionDetails.runningTimeFinished", { interpolate: { time: executionUIDetails.value.runningTime ?? "unknown" } });
			return null;
		});
		const executionDataSize = computed(() => {
			if (!props.execution) return null;
			const total = (props.execution.jsonSizeBytes ?? 0) + (props.execution.binaryDataSizeBytes ?? 0);
			return total > 0 ? formatBytes(total) : null;
		});
		watch(() => props.execution?.workflowVersionId, async (versionId) => {
			workflowVersion.value = null;
			if (!versionId || !props.execution?.workflowId) return;
			try {
				const version = await workflowHistoryStore.getWorkflowVersion(props.execution.workflowId, versionId);
				if (props.execution?.workflowVersionId === versionId) workflowVersion.value = version;
			} catch {}
		}, { immediate: true });
		const activeExecution = computed(() => {
			return executionsStore.activeExecution;
		});
		const vote = computed(() => activeExecution.value?.annotation?.vote || null);
		async function onDeleteExecution() {
			const confirmationText = [hasAnnotation.value && locale.baseText("executionDetails.confirmMessage.annotationsNote"), locale.baseText("executionDetails.confirmMessage.message")].filter(Boolean).join(" ");
			if (await message.confirm(confirmationText, locale.baseText("executionDetails.confirmMessage.headline"), {
				type: "warning",
				confirmButtonText: locale.baseText("executionDetails.confirmMessage.confirmButtonText"),
				cancelButtonText: ""
			}) !== "confirm") return;
			emit("deleteCurrentExecution");
		}
		function handleRetryClick(command) {
			if (props.execution) emit("retryExecution", {
				execution: props.execution,
				command
			});
		}
		function handleStopClick() {
			emit("stopExecution");
		}
		function onRetryButtonBlur(event) {
			if (retryDropdownRef.value && event.relatedTarget === null) retryDropdownRef.value.handleClose();
		}
		const onVoteClick = async (voteValue) => {
			if (!activeExecution.value) return;
			const voteToSet = voteValue === vote.value ? null : voteValue;
			try {
				await executionsStore.annotateExecution(activeExecution.value.id, { vote: voteToSet });
			} catch (e) {
				showError(e, "executionAnnotationView.vote.error");
			}
		};
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return executionUIDetails.value?.name === "new" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.newInfo)
			}, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.newMessage),
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.newMessage")), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nButton_default), {
				variant: "subtle",
				class: "mt-l",
				onClick: handleStopClick
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stopExecution")), 1)]),
				_: 1
			})], 2)) : executionUIDetails.value?.name === "running" ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.runningInfo)
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.spinner) }, [createVNode(unref(N8nSpinner_default), { type: "ring" })], 2),
				createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.runningMessage),
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningMessage")), 1)]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "stop-execution",
					class: "mt-l",
					disabled: !workflowPermissions.value.execute,
					onClick: handleStopClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stopExecution")), 1)]),
					_: 1
				}, 8, ["disabled"])
			], 2)) : executionUIDetails.value ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.previewContainer)
			}, [__props.execution ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.executionDetails),
				"data-test-id": `execution-preview-details-${executionId.value}`
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.executionDetailsLeft) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.executionTitle) }, [createVNode(unref(N8nText_default), {
					size: "large",
					color: "text-dark",
					bold: true,
					"data-test-id": "execution-time"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value?.startTime), 1)]),
					_: 1
				}), isAnnotationEnabled.value && __props.execution ? (openBlock(), createBlock(VoteButtons_default, {
					key: 0,
					"data-test-id": "execution-preview-vote-buttons",
					vote: vote.value,
					class: normalizeClass(_ctx.$style.voteButtons),
					onVoteClick
				}, null, 8, ["vote", "class"])) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.executionDetailsInfo) }, [
					executionUIDetails.value?.name === "running" ? (openBlock(), createBlock(unref(N8nSpinner_default), {
						key: 0,
						size: "small",
						class: normalizeClass([_ctx.$style.spinner, "mr-4xs"])
					}, null, 8, ["class"])) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						size: "medium",
						class: normalizeClass([_ctx.$style.status, _ctx.$style[executionUIDetails.value.name]]),
						"data-test-id": "execution-preview-label"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value.label), 1)]),
						_: 1
					}, 8, ["class"]),
					_cache[3] || (_cache[3] = createTextVNode(" " + toDisplayString(" ") + " ", -1)),
					executionUIDetails.value?.showTimestamp === false ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-base",
						size: "medium"
					}, {
						default: withCtx(() => [
							executionDataSize.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode("| " + toDisplayString(executionDataSize.value), 1)], 64)) : createCommentVNode("", true),
							createTextVNode(" | ID#" + toDisplayString(__props.execution.id) + " ", 1),
							workflowVersionLabel.value && workflowVersionRoute.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [_cache[1] || (_cache[1] = createTextVNode(" | ", -1)), createVNode(unref(N8nText_default), { color: "text-light" }, {
								default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
									content: workflowVersionTooltip.value,
									placement: "bottom"
								}, {
									default: withCtx(() => [createVNode(_component_RouterLink, {
										class: normalizeClass(_ctx.$style.versionLink),
										"data-test-id": "execution-preview-version-link",
										to: workflowVersionRoute.value
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(workflowVersionLabel.value), 1)]),
										_: 1
									}, 8, ["class", "to"])]),
									_: 1
								}, 8, ["content"])]),
								_: 1
							})], 64)) : createCommentVNode("", true)
						]),
						_: 1
					})) : executionMetaText.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						color: "text-base",
						size: "medium",
						"data-test-id": "execution-preview-id"
					}, {
						default: withCtx(() => [
							createTextVNode(toDisplayString(executionMetaText.value) + " ", 1),
							executionDataSize.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode("| " + toDisplayString(executionDataSize.value), 1)], 64)) : createCommentVNode("", true),
							createTextVNode(" | ID#" + toDisplayString(__props.execution.id) + " ", 1),
							workflowVersionLabel.value && workflowVersionRoute.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [_cache[2] || (_cache[2] = createTextVNode(" | ", -1)), createVNode(unref(N8nText_default), { color: "text-light" }, {
								default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
									content: workflowVersionTooltip.value,
									placement: "bottom"
								}, {
									default: withCtx(() => [createVNode(_component_RouterLink, {
										class: normalizeClass(_ctx.$style.versionLink),
										"data-test-id": "execution-preview-version-link",
										to: workflowVersionRoute.value
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(workflowVersionLabel.value), 1)]),
										_: 1
									}, 8, ["class", "to"])]),
									_: 1
								}, 8, ["content"])]),
								_: 1
							})], 64)) : createCommentVNode("", true)
						]),
						_: 1
					})) : createCommentVNode("", true)
				], 2),
				__props.execution.mode === "retry" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.executionDetailsRetry)
				}, [createVNode(unref(N8nText_default), {
					color: "text-base",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.retry")) + " ", 1), createVNode(_component_RouterLink, {
						class: normalizeClass(_ctx.$style.executionLink),
						to: {
							name: unref(VIEWS).EXECUTION_PREVIEW,
							params: {
								workflowId: __props.execution.workflowId,
								executionId: __props.execution.retryOf
							}
						}
					}, {
						default: withCtx(() => [createTextVNode(" #" + toDisplayString(__props.execution.retryOf), 1)]),
						_: 1
					}, 8, ["class", "to"])]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				isAnnotationEnabled.value && __props.execution ? (openBlock(), createBlock(WorkflowExecutionAnnotationTags_ee_default, {
					key: 1,
					execution: __props.execution
				}, null, 8, ["execution"])) : createCommentVNode("", true)
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
				createVNode(_component_RouterLink, { to: {
					name: unref(VIEWS).EXECUTION_DEBUG,
					params: {
						workflowId: __props.execution.workflowId,
						executionId: __props.execution.id
					}
				} }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "medium",
						variant: "subtle",
						class: normalizeClass(_ctx.$style.debugLink),
						disabled: !workflowPermissions.value.update
					}, {
						default: withCtx(() => [createBaseVNode("span", {
							"data-test-id": "execution-debug-button",
							onClick: _cache[0] || (_cache[0] = (...args) => unref(executionDebugging).handleDebugLinkClick && unref(executionDebugging).handleDebugLinkClick(...args))
						}, toDisplayString(debugButtonData.value.text), 1)]),
						_: 1
					}, 8, ["class", "disabled"])]),
					_: 1
				}, 8, ["to"]),
				isRetriable.value ? (openBlock(), createBlock(unref(ElDropdown), {
					key: 0,
					ref: "retryDropdown",
					trigger: "click",
					onCommand: handleRetryClick
				}, {
					dropdown: withCtx(() => [createVNode(unref(ElDropdownMenu), null, {
						default: withCtx(() => [createVNode(unref(ElDropdownItem), { command: "current-workflow" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithCurrentlySavedWorkflow")), 1)]),
							_: 1
						}), createVNode(unref(ElDropdownItem), { command: "original-workflow" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithOriginalWorkflow")), 1)]),
							_: 1
						})]),
						_: 1
					})]),
					default: withCtx(() => [createBaseVNode("span", _hoisted_2, [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "medium",
						title: unref(locale).baseText("executionsList.retryExecution"),
						disabled: !workflowPermissions.value.update,
						icon: "redo-2",
						"data-test-id": "execution-preview-retry-button",
						onBlur: onRetryButtonBlur
					}, null, 8, ["title", "disabled"])])]),
					_: 1
				}, 512)) : createCommentVNode("", true),
				showAddToDataset.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "subtle",
					size: "medium",
					icon: "list-plus",
					disabled: !workflowPermissions.value.update,
					"data-test-id": "execution-preview-add-to-dataset-button",
					onClick: onAddToDatasetClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.addToDataset.button.label")), 1)]),
					_: 1
				}, 8, ["disabled"])) : createCommentVNode("", true),
				isAnnotationEnabled.value && activeExecution.value ? (openBlock(), createBlock(WorkflowExecutionAnnotationPanel_ee_default, {
					key: 2,
					execution: activeExecution.value
				}, null, 8, ["execution"])) : createCommentVNode("", true),
				createVNode(unref(N8nIconButton_default), {
					variant: "subtle",
					title: unref(locale).baseText("executionDetails.deleteExecution"),
					disabled: !workflowPermissions.value.update,
					icon: "trash-2",
					size: "medium",
					"data-test-id": "execution-preview-delete-button",
					onClick: onDeleteExecution
				}, null, 8, ["title", "disabled"])
			], 2)], 10, _hoisted_1)) : createCommentVNode("", true), createVNode(ExecutionPreviewHost_default, {
				"workflow-id": unref(workflowId),
				"execution-id": executionId.value,
				"node-id": nodeId.value
			}, null, 8, [
				"workflow-id",
				"execution-id",
				"node-id"
			])], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsPreview.vue?vue&type=style&index=0&lang.module.scss
var previewContainer = "_previewContainer_1udbv_388";
var executionDetails = "_executionDetails_1udbv_394";
var executionDetailsLeft = "_executionDetailsLeft_1udbv_413";
var executionTitle = "_executionTitle_1udbv_419";
var voteButtons = "_voteButtons_1udbv_425";
var spinner = "_spinner_1udbv_429";
var running = "_running_1udbv_435";
var waiting = "_waiting_1udbv_440";
var success = "_success_1udbv_444";
var error = "_error_1udbv_448";
var newInfo = "_newInfo_1udbv_452";
var runningInfo = "_runningInfo_1udbv_453";
var newMessage = "_newMessage_1udbv_460";
var runningMessage = "_runningMessage_1udbv_461";
var debugLink = "_debugLink_1udbv_467";
var actions = "_actions_1udbv_472";
var highlightDataButton = "_highlightDataButton_1udbv_477";
var highlightDataButtonActive = "_highlightDataButtonActive_1udbv_482";
var highlightDataButtonOpen = "_highlightDataButtonOpen_1udbv_486";
var versionLink = "_versionLink_1udbv_492";
var badge = "_badge_1udbv_500";
var shimmer = "_shimmer_1udbv_1";
var spin = "_spin_1udbv_429";
var opacityPulse = "_opacityPulse_1udbv_1";
var popoverIn = "_popoverIn_1udbv_1";
var fadeIn = "_fadeIn_1udbv_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1udbv_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1udbv_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1udbv_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1udbv_1";
var blurSwapIn = "_blurSwapIn_1udbv_1";
var blurSwapOut = "_blurSwapOut_1udbv_1";
var pulseGlow = "_pulseGlow_1udbv_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1udbv_1";
var fade = "_fade_1udbv_1";
var fadeInUp = "_fadeInUp_1udbv_1";
var fadeInDown = "_fadeInDown_1udbv_1";
var fadeInLeft = "_fadeInLeft_1udbv_1";
var fadeInRight = "_fadeInRight_1udbv_1";
var fadeOut = "_fadeOut_1udbv_1";
var fadeOutDown = "_fadeOutDown_1udbv_1";
var fadeOutUp = "_fadeOutUp_1udbv_1";
var fadeOutLeft = "_fadeOutLeft_1udbv_1";
var fadeOutRight = "_fadeOutRight_1udbv_1";
var ping = "_ping_1udbv_1";
var blinkBackground = "_blinkBackground_1udbv_1";
var typingBlink = "_typingBlink_1udbv_1";
var WorkflowExecutionsPreview_vue_vue_type_style_index_0_lang_module_default = {
	previewContainer,
	executionDetails,
	executionDetailsLeft,
	executionTitle,
	voteButtons,
	spinner,
	running,
	waiting,
	success,
	error,
	newInfo,
	runningInfo,
	newMessage,
	runningMessage,
	debugLink,
	actions,
	highlightDataButton,
	highlightDataButtonActive,
	highlightDataButtonOpen,
	versionLink,
	badge,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1udbv_1",
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
var WorkflowExecutionsPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionsPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowExecutionsPreview_default as default };
